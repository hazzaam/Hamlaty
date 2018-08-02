/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"

#import "NSObject+Utils.h"
#import "WebProjectSetupHelper.h"
#import "WebProjectSetupHelperDelegate.h"
#import "LoadingView.h"

#import "Alert.h"

#import "SetupViewController.h"

@interface AppDelegate () <WebProjectSetupHelperDelegate>

@property (nonatomic, strong) WebProjectSetupHelper *helper;
@property (nonatomic, strong) LoadingView *loadingView;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    NSString *docs = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)[0];
    NSError *error = nil;
    NSNumber *val = nil;
    
    [[NSURL fileURLWithPath:[docs stringByAppendingPathComponent:@"WebApplication"]] getResourceValue:&val forKey:NSURLIsExcludedFromBackupKey error:&error];
    [[NSURL fileURLWithPath:[docs stringByAppendingPathComponent:@"WebApplication"]] setResourceValue:@(YES) forKey:NSURLIsExcludedFromBackupKey error:&error];

    MainViewController *mvc = [[MainViewController alloc] initWithNibName:nil bundle:nil];
    self.viewController = mvc;
    
    self.helper = [[WebProjectSetupHelper alloc] initWithProjectInfo:mvc.projectInfo delegate:self];

    CGRect screenBounds = [[UIScreen mainScreen] bounds];
    self.window = [[UIWindow alloc] initWithFrame:screenBounds];
    self.window.autoresizesSubviews = YES;

    SetupViewController *svc = [[SetupViewController alloc] initWithNibName:nil bundle:nil];
    self.window.rootViewController = svc;
    [self.window makeKeyAndVisible];

    return YES;
}

#pragma mark - UIApplicationDelegate implementation

- (void)applicationDidBecomeActive:(UIApplication *)application
{
    if (![self.helper.processing boolValue])
    {
        [self.helper performSetup];
    }
}

#pragma mark - WebProjectSetupHelperDelegate

- (void)willStartCostlyAction
{
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *updateMessage = @"Checking and loading new updates. This might take a few minutes.";
        self.loadingView = [[LoadingView alloc] initWithView:self.window.rootViewController.view text:NSLocalizedString(updateMessage, updateMessage)];
        [self.loadingView start];
    });
}

- (void)willFinishCostlyAction
{
    dispatch_async(dispatch_get_main_queue(), ^{
        [self.loadingView stopAndDismiss];
        self.loadingView = nil;
    });
}

- (void)didUpdateAssets
{
    // Reload main webView with new assets.
    dispatch_async(dispatch_get_main_queue(), ^{
        MainViewController *mvc = [[MainViewController alloc] initWithNibName:nil bundle:nil];
        self.viewController = mvc;
    });
}

- (void)didFinishSetupProjectWithError:(NSError *)error
{
    if (error != nil)
    {
        Alert *alert = [Alert alertWithTitle:[error localizedDescription] message:nil];
        [alert addButtonWithTitle:NSLocalizedString(@"Ok", @"Ok") handler:nil];
        [alert show];
    }
    
    dispatch_async(dispatch_get_main_queue(), ^{
        self.window.rootViewController = self.viewController;
    });
}


@end
