/*
 * Security contexts
 */

/*
 * Service settings
 */

/*
 * Services
 */

var GeolocationService = new Apperyio.GeolocationService({
    'defaultRequest': {
        "data": {
            "options": {
                "maximumAge": 3000,
                "timeout": 5000,
                "enableHighAccuracy": true,
                "watchPosition": false
            }
        }
    }
});

var countmsgs = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/countmsg.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var list_tracking_details = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/list_data_one_by_one.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_tarck_delete = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/delete_track.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var usermsg = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/create_and_update_msg_trackerplus.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_msg_delete = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/delete_msg.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_List_msg = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/list_msg.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_create_track_leader_add = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/create_leader.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var list_msgs = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/list_msgs.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_create_msg = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/create_msg.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var helpinfo = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/helpi.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var Geocode = new Apperyio.RestService({
    'url': 'https://maps.googleapis.com/maps/api/geocode/json',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var list_msgs2 = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/list_msgs2.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var countmsgs2 = new Apperyio.RestService({
    'url': 'http://trackerplus.hazzaa.net/countmsg2.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});

var hajj_create_track_leader = new Apperyio.RestService({
    'url': 'http://hajj.hazzaa.net/create_leader.php',
    'dataType': 'json',
    'type': 'get',

    'defaultRequest': {
        "headers": {
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});