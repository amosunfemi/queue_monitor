/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 6/28/13
 * Time: 5:28 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 *
 *
 * @param db
 * @param cb
 */

module.exports = function (db, cb) {

    db.define('queuemonitor', {

            channelname : {type: 'text', 'required': true},
            createdby : String,
            datecreated : Date,
            hostnameorip : {type: 'text', 'required': true, 'defaultValue': 'localhost'},
            limitcount : {type: 'number', 'required': true, 'defaultValue': 5},
            port : {type: 'number', 'required': true},
            qmname : {type: 'text', 'required': true},
            queuename : {type: 'text', 'required': true},    //Time in seconds
            timeinterval : {type: 'number', 'defaultValue': 30000, 'required': true},    //Time in seconds
            affiliatecode : {type: 'text', 'required': true}

        });

    db.define('affiliate', {

            code : {type: 'text', 'required': true},
            description : {type: 'text', 'required': true},
            lang : {type: 'text', 'required': true, 'defaultValue': 'ENG'}
        });

    db.define('alert', {

            affiliatecode : {type: 'text', 'required': true},
            createdby : String,
            datecreated : Date,
            mailbody : {type: 'text', 'required': true},
            mailccids : {type: 'text', 'required': true},
            mailfromid : {type: 'text', 'required': true},
            mailsubject : {type: 'text', 'required': true},
            mailtoids : {type: 'text', 'required': true},
            qmname : {type: 'text', 'required': true}
        });

    db.define('user', {

            username : {type: 'text', 'required': true},
            affiliate : {type: 'text', 'required': true, 'defaultValue' : 'EPI'},
            mailid : String


        });


        return cb();

};
