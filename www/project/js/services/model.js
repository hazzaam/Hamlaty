/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "tdetails": {
        "type": "object",
        "properties": {
            "currentdate": {
                "type": "string"
            },
            "r_mobile": {
                "type": "string"
            },
            "l_lat": {
                "type": "string"
            },
            "l_mobile": {
                "type": "string"
            },
            "f_lat": {
                "type": "string"
            },
            "id": {
                "type": "string"
            },
            "l_long": {
                "type": "string"
            },
            "utctime": {
                "type": "string"
            },
            "leader": {
                "type": "string"
            },
            "f_mobile": {
                "type": "string"
            },
            "fixed": {
                "type": "string"
            },
            "p_name": {
                "type": "string"
            },
            "l_a": {
                "type": "string"
            },
            "f_long": {
                "type": "string"
            },
            "user_status": {
                "type": "string"
            }
        }
    },
    "String": {
        "type": "string"
    },
    "tdetailsArray": {
        "type": "array",
        "items": {
            "type": "tdetails"
        }
    },
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "i1": new $a.LocalStorage("i1", "String"),

    "i2": new $a.LocalStorage("i2", "String"),

    "i3": new $a.LocalStorage("i3", "String"),

    "i4": new $a.LocalStorage("i4", "String"),

    "i5": new $a.LocalStorage("i5", "String"),

    "i6": new $a.LocalStorage("i6", "String"),

    "i7": new $a.LocalStorage("i7", "String"),

    "i8": new $a.LocalStorage("i8", "String"),

    "i9": new $a.LocalStorage("i9", "String"),

    "i10": new $a.LocalStorage("i10", "String"),

    "i11": new $a.LocalStorage("i11", "String"),

    "i12": new $a.LocalStorage("i12", "String"),

    "i13": new $a.LocalStorage("i13", "String"),

    "i14": new $a.LocalStorage("i14", "String"),

    "i15": new $a.LocalStorage("i15", "String"),

    "i16": new $a.LocalStorage("i16", "String"),

    "i17": new $a.LocalStorage("i17", "String"),

    "i18": new $a.LocalStorage("i18", "String"),

    "i19": new $a.LocalStorage("i19", "String"),

    "i20": new $a.LocalStorage("i20", "String"),

    "i21": new $a.LocalStorage("i21", "String"),

    "i22": new $a.LocalStorage("i22", "String"),

    "i23": new $a.LocalStorage("i23", "String"),

    "i24": new $a.LocalStorage("i24", "String"),

    "i25": new $a.LocalStorage("i25", "String"),

    "i26": new $a.LocalStorage("i26", "String"),

    "i27": new $a.LocalStorage("i27", "String"),

    "i28": new $a.LocalStorage("i28", "String"),

    "i29": new $a.LocalStorage("i29", "String"),

    "i30": new $a.LocalStorage("i30", "String"),

    "i31": new $a.LocalStorage("i31", "String"),

    "i32": new $a.LocalStorage("i32", "String"),

    "i33": new $a.LocalStorage("i33", "String"),

    "i34": new $a.LocalStorage("i34", "String"),

    "i35": new $a.LocalStorage("i35", "String"),

    "i36": new $a.LocalStorage("i36", "String"),

    "i37": new $a.LocalStorage("i37", "String"),

    "i38": new $a.LocalStorage("i38", "String"),

    "i39": new $a.LocalStorage("i39", "String"),

    "i40": new $a.LocalStorage("i40", "String"),

    "i41": new $a.LocalStorage("i41", "String"),

    "i42": new $a.LocalStorage("i42", "String"),

    "i43": new $a.LocalStorage("i43", "String"),

    "i44": new $a.LocalStorage("i44", "String"),

    "i45": new $a.LocalStorage("i45", "String"),

    "i46": new $a.LocalStorage("i46", "String"),

    "i47": new $a.LocalStorage("i47", "String"),

    "i48": new $a.LocalStorage("i48", "String"),

    "i49": new $a.LocalStorage("i49", "String"),

    "i50": new $a.LocalStorage("i50", "String"),

    "trackingactive": new $a.LocalStorage("trackingactive", "String"),

    "followactive": new $a.LocalStorage("followactive", "String"),

    "tumobile": new $a.LocalStorage("tumobile", "String"),

    "tuname": new $a.LocalStorage("tuname", "String"),

    "tfmobile": new $a.LocalStorage("tfmobile", "String"),

    "glat": new $a.LocalStorage("glat", "String"),

    "glong": new $a.LocalStorage("glong", "String"),

    "gspeed": new $a.LocalStorage("gspeed", "String"),

    "gheading": new $a.LocalStorage("gheading", "String"),

    "gtime": new $a.LocalStorage("gtime", "String"),

    "marker": new $a.LocalStorage("marker", "String"),

    "onetime": new $a.LocalStorage("onetime", "String"),

    "langg": new $a.LocalStorage("langg", "String"),

    "markerLatLngx": new $a.LocalStorage("markerLatLngx", "String"),

    "stopi": new $a.LocalStorage("stopi", "String"),

    "currenttime": new $a.LocalStorage("currenttime", "String"),

    "currentdate": new $a.LocalStorage("currentdate", "String"),

    "calspeed": new $a.LocalStorage("calspeed", "String"),

    "sendText_152": new $a.LocalStorage("sendText_152", "String"),

    "trackermobile": new $a.LocalStorage("trackermobile", "String"),

    "nocars": new $a.LocalStorage("nocars", "String"),

    "tdetails": new $a.LocalStorage("tdetails", "tdetailsArray"),

    "onetimex": new $a.LocalStorage("onetimex", "String"),

    "markerLatLngx2": new $a.LocalStorage("markerLatLngx2", "String"),

    "langg2": new $a.LocalStorage("langg2", "String"),

    "geocoder": new $a.LocalStorage("geocoder", "String"),

    "id": new $a.LocalStorage("id", "String"),

    "speed_mapr": new $a.LocalStorage("speed_mapr", "String"),

    "exceed120r": new $a.LocalStorage("exceed120r", "String"),

    "zoomr": new $a.LocalStorage("zoomr", "String"),

    "markerLatLngr": new $a.LocalStorage("markerLatLngr", "String"),

    "longtr": new $a.LocalStorage("longtr", "String"),

    "latr": new $a.LocalStorage("latr", "String"),

    "user_statusr": new $a.LocalStorage("user_statusr", "String"),

    "mobile_numberr": new $a.LocalStorage("mobile_numberr", "String"),

    "usernamer": new $a.LocalStorage("usernamer", "String"),

    "stoplist": new $a.LocalStorage("stoplist", "String"),

    "sendText_153": new $a.LocalStorage("sendText_153", "String"),

    "currentdate2": new $a.LocalStorage("currentdate2", "String"),

    "currenttime2": new $a.LocalStorage("currenttime2", "String"),

    "follower_un": new $a.LocalStorage("follower_un", "String"),

    "mymobile2": new $a.LocalStorage("mymobile2", "String"),

    "fmobile2": new $a.LocalStorage("fmobile2", "String"),

    "countNo": new $a.LocalStorage("countNo", "String"),

    "settocenter": new $a.LocalStorage("settocenter", "String"),

    "msgid": new $a.LocalStorage("msgid", "String"),

    "msgid2": new $a.LocalStorage("msgid2", "String"),

    "hlink": new $a.LocalStorage("hlink", "String"),

    "refreshIntervalId": new $a.LocalStorage("refreshIntervalId", "String"),

    "lan": new $a.LocalStorage("lan", "String"),

    "leader": new $a.LocalStorage("leader", "String"),

    "fixed": new $a.LocalStorage("fixed", "String"),

    "l_a": new $a.LocalStorage("l_a", "String"),

    "f_mobile": new $a.LocalStorage("f_mobile", "String"),

    "leader_name_input": new $a.LocalStorage("leader_name_input", "String"),

    "p_name": new $a.LocalStorage("p_name", "String"),

    "l_mobile": new $a.LocalStorage("l_mobile", "String"),

    "r_mobile": new $a.LocalStorage("r_mobile", "String"),

    "oneref": new $a.LocalStorage("oneref", "String"),

    "h_msg": new $a.LocalStorage("h_msg", "String"),

    "id_delete": new $a.LocalStorage("id_delete", "String"),

    "onem": new $a.LocalStorage("onem", "String"),

    "mcnt": new $a.LocalStorage("mcnt", "String"),

    "idmsg": new $a.LocalStorage("idmsg", "String"),

    "marker_id": new $a.LocalStorage("marker_id", "String"),

    "af_mobile": new $a.LocalStorage("af_mobile", "String"),

    "ar_mobile": new $a.LocalStorage("ar_mobile", "String"),

    "aleader_name_input": new $a.LocalStorage("aleader_name_input", "String"),

    "aleader": new $a.LocalStorage("aleader", "String"),

    "afixed": new $a.LocalStorage("afixed", "String"),

    "ap_name": new $a.LocalStorage("ap_name", "String"),

    "c_dir": new $a.LocalStorage("c_dir", "String")
};