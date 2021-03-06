/*
 * JS for StartPage generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '3bab650c-a876-4c3f-9524-52c6000f9975';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "FullMap",
    "location": "FullMap.html"
}, {
    "name": "Hajj1",
    "location": "Hajj1.html"
}, {
    "name": "Tracking2Page",
    "location": "Tracking2Page.html"
}, {
    "name": "StartPage",
    "location": "StartPage.html"
}, {
    "name": "FollowPage",
    "location": "FollowPage.html"
}, {
    "name": "TrackingPage",
    "location": "TrackingPage.html"
}, {
    "name": "Follow2Page",
    "location": "Follow2Page.html"
}];

function StartPage_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_35': 'StartPage_mobilebutton_35',
        'mobilegrid_29': 'StartPage_mobilegrid_29',
        'mobilegridcell_30': 'StartPage_mobilegridcell_30',
        'mobilegridcell_31': 'StartPage_mobilegridcell_31',
        'mobilegrid_24': 'StartPage_mobilegrid_24',
        'mobilegridcell_25': 'StartPage_mobilegridcell_25',
        'mtbtn': 'StartPage_mtbtn',
        'mobilegridcell_26': 'StartPage_mobilegridcell_26',
        'sfbtn': 'StartPage_sfbtn',
        'mobilegridcell_34': 'StartPage_mobilegridcell_34',
        'mtgrid': 'StartPage_mtgrid',
        'ccmtgrid': 'StartPage_ccmtgrid',
        'mtmsg': 'StartPage_mtmsg',
        'spacer_22': 'StartPage_spacer_22',
        'mobilegrid_2': 'StartPage_mobilegrid_2',
        'mobilegridcell_3': 'StartPage_mobilegridcell_3',
        'mobilegrid_9': 'StartPage_mobilegrid_9',
        'mobilegridcell_10': 'StartPage_mobilegridcell_10',
        'mobilegridcell_11': 'StartPage_mobilegridcell_11',
        'mobilebutton_7': 'StartPage_mobilebutton_7',
        'mobilegridcell_14': 'StartPage_mobilegridcell_14',
        'mobilegridcell_5': 'StartPage_mobilegridcell_5',
        'mobilegrid_15': 'StartPage_mobilegrid_15',
        'mobilegridcell_16': 'StartPage_mobilegridcell_16',
        'mobilegridcell_17': 'StartPage_mobilegridcell_17',
        'mobilebutton_8': 'StartPage_mobilebutton_8',
        'mobilegridcell_20': 'StartPage_mobilegridcell_20',
        'gridinfo_65': 'StartPage_gridinfo_65',
        'gridinfo_65_grid_info': 'StartPage_gridinfo_65_grid_info',
        'gridinfo_65_mobilegridcell_61': 'StartPage_gridinfo_65_mobilegridcell_61',
        'gridinfo_65_mobileimage_58': 'StartPage_gridinfo_65_mobileimage_58',
        'gridinfo_65_hnote': 'StartPage_gridinfo_65_hnote',
        'gridinfo_65_mobilegrid_38': 'StartPage_gridinfo_65_mobilegrid_38',
        'gridinfo_65_mobilegridcell_39': 'StartPage_gridinfo_65_mobilegridcell_39',
        'gridinfo_65_mobilegrid_48': 'StartPage_gridinfo_65_mobilegrid_48',
        'gridinfo_65_mobilegridcell_49': 'StartPage_gridinfo_65_mobilegridcell_49',
        'gridinfo_65_email2': 'StartPage_gridinfo_65_email2',
        'gridinfo_65_hemail': 'StartPage_gridinfo_65_hemail',
        'gridinfo_65_mobilegridcell_50': 'StartPage_gridinfo_65_mobilegridcell_50',
        'gridinfo_65_mobilebutton_56': 'StartPage_gridinfo_65_mobilebutton_56',
        'gridinfo_65_mobilebutton_55': 'StartPage_gridinfo_65_mobilebutton_55',
        'gridinfo_65_youtube_57': 'StartPage_gridinfo_65_youtube_57',
        'grid_info_68': 'StartPage_grid_info_68',
        'mobilegridcell_61_69': 'StartPage_mobilegridcell_61_69',
        'mobilegrid_82': 'StartPage_mobilegrid_82',
        'mobilegridcell_83': 'StartPage_mobilegridcell_83',
        'mobilegridcell_87': 'StartPage_mobilegridcell_87',
        'mobileimage_58_70': 'StartPage_mobileimage_58_70',
        'mobilegridcell_88': 'StartPage_mobilegridcell_88',
        'hnote_71': 'StartPage_hnote_71',
        'mobilegrid_38_72': 'StartPage_mobilegrid_38_72',
        'mobilegridcell_39_73': 'StartPage_mobilegridcell_39_73',
        'mobilegrid_48_74': 'StartPage_mobilegrid_48_74',
        'mobilegridcell_49_75': 'StartPage_mobilegridcell_49_75',
        'email2_76': 'StartPage_email2_76',
        'mobilegridcell_50_78': 'StartPage_mobilegridcell_50_78',
        'mobilebutton_56_79': 'StartPage_mobilebutton_56_79',
        'hemail_77': 'StartPage_hemail_77',
        'mobilebutton_55_80': 'StartPage_mobilebutton_55_80',
        'youtube_57_81': 'StartPage_youtube_57_81'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["StartPage_help_onsuccess_mapping_0"] = {
        "homeScreen": "StartPage",
        "directions": [

        {
            "from_name": "help",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "hlink",
            "to_type": "LOCAL_STORAGE",

            "mappings": [

            {

                "source": "$['body'][0]['link']",
                "target": "$"

            }

            ]
        },

        {
            "from_name": "help",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "StartPage",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['body'][0]['note']",
                "target": "$['hnote_71:text']"

            },

            {

                "source": "$['body'][0]['email']",
                "target": "$['email2_76:text']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["StartPage_help_onbeforesend_mapping_0"] = {
        "homeScreen": "StartPage",
        "directions": []
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.help = Apperyio.datasources.help = new Apperyio.DataSource(helpinfo, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["StartPage_help_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["StartPage_help_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'StartPage';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var StartPage_onLoad = function() {
            StartPage_elementsExtraJS();

            try {
                $a.storage["followactive"].update("$", "")
            } catch (e) {
                console.error(e)
            };

            StartPage_deviceEvents();
            StartPage_windowEvents();
            StartPage_elementsEvents();
        };

    // screen window events


    function StartPage_windowEvents() {

        $('#StartPage').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        $('#StartPage').on({
            pageshow: function(event) { //Helper.initMap();
                ;
            },
        });

    };

    // device events


    function StartPage_deviceEvents() {
        document.addEventListener("deviceready", function() {

            //window.plugins.insomnia.keepAwake();

        });
    };

    // screen elements extra js


    function StartPage_elementsExtraJS() {
        // screen (StartPage) extra code

        Apperyio.registerYoutubeComponent("StartPage_gridinfo_65_youtube_57");

        Apperyio.registerYoutubeComponent("StartPage_youtube_57_81");

    };

    // screen elements handler


    function StartPage_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#StartPage_mobileheader [name="mobilebutton_35"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="StartPage_panel_info"]').panel("open");
                    try {
                        help.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#StartPage_mobileheader [name="mobilebutton_35"]');

        $(document).off("click", '#StartPage_mobilecontainer [name="mtbtn"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var stopi = 1;

                    localStorage.setItem("stopi", stopi);

                    Apperyio('mtbtn').hide();

                    ;

                }
            },
        }, '#StartPage_mobilecontainer [name="mtbtn"]');

        $(document).off("click", '#StartPage_mobilecontainer [name="sfbtn"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    reload();

                }
            },
        }, '#StartPage_mobilecontainer [name="sfbtn"]');

        $(document).off("click", '#StartPage_mobilecontainer [name="mobilebutton_7"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        $a.storage["onetimex"].update("$", "2")
                    } catch (e) {
                        console.error(e)
                    };

                    var stoplist = Apperyio.storage.stoplist.get();

                    if (stoplist == 1)

                    {

                        Appery.navigateTo('Follow2Page');

                        // Apperyio('mtgrid').show();
                        //    Apperyio('mtbtn').show();

                    } else

                    {

                        Appery.navigateTo('FollowPage');

                    };

                }
            },
        }, '#StartPage_mobilecontainer [name="mobilebutton_7"]');

        $(document).off("click", '#StartPage_mobilecontainer [name="mobilebutton_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        $a.storage["onetime"].update("$", "2")
                    } catch (e) {
                        console.error(e)
                    };

                    var stopi = Apperyio.storage.stopi.get();

                    if (stopi == 0)

                    {

                        // Apperyio('mtgrid').show();
                        //     Apperyio('mtbtn').show();

                        Appery.navigateTo('Tracking2Page');

                    } else

                    {

                        Appery.navigateTo('TrackingPage');

                    }

                    ;

                }
            },
        }, '#StartPage_mobilecontainer [name="mobilebutton_8"]');

        $('#StartPage_panel_36').off("panelopen").on("panelopen", function(event) {
            try {
                help.execute({});
            } catch (e) {
                console.error(e);
                hideSpinner();
            };
        });

        $(document).off("click", '#StartPage_panel_36 [name="gridinfo_65_mobilebutton_56"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.location.assign("mailto:" + Appery('hemail').text() + "?subject= تابع بلس تواصل ");;

                }
            },
        }, '#StartPage_panel_36 [name="gridinfo_65_mobilebutton_56"]');
        $(document).off("click", '#StartPage_panel_36 [name="gridinfo_65_mobilebutton_55"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var hlink = Apperyio.storage.hlink.get();

                    //window.open(hlink);
                    window.open(hlink, '_system');

                    //window.open('https://www.mohe.gov.sa/ar/default.aspx', '_system');

                    //window.open('http://www.youtube.com/watch?v=3ZtvmxJZCo4', '_system');
                    ;

                }
            },
        }, '#StartPage_panel_36 [name="gridinfo_65_mobilebutton_55"]');

        $(document).off("click", '#StartPage_panel_info [name="mobilebutton_56_79"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    window.location.assign("mailto:" + Appery('email2_76').text() + "?subject= تابع بلس تواصل ");;

                }
            },
        }, '#StartPage_panel_info [name="mobilebutton_56_79"]');

        $(document).off("click", '#StartPage_panel_info [name="mobilebutton_55_80"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    var hlink = Apperyio.storage.hlink.get();

                    //window.open(hlink);
                    window.open(hlink, '_system');

                    //window.open('https://www.mohe.gov.sa/ar/default.aspx', '_system');

                    //window.open('http://www.youtube.com/watch?v=3ZtvmxJZCo4', '_system');
                    ;

                }
            },
        }, '#StartPage_panel_info [name="mobilebutton_55_80"]');

    };

    $(document).off("pagebeforeshow", "#StartPage").on("pagebeforeshow", "#StartPage", function(event, ui) {
        Apperyio.CurrentScreen = "StartPage";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    StartPage_onLoad();
};

$(document).off("pagecreate", "#StartPage").on("pagecreate", "#StartPage", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    StartPage_js();
});