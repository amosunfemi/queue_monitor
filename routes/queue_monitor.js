/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 7/2/13
 * Time: 9:16 AM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Queue Monitor Logic.
 */

exports.addQueueDetails = function(req, resp){
    console.log(req.body);
    
    req.queue_object.create([
        {
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
        },
        {
            name: "Liza",
            surname: "Kollan",
            age: 19,
            male: false
        }
    ], function (err, items) {
        // err - description of the error or null
        // items - array of inserted items
    });


};

queueValidate = function(req){
    req.assert('code', 'Affiliate Code e.g. EGH is required').notEmpty();           //Validate name
    req.assert('description', 'Affiliate name/description is required').notEmpty();  //Validate email
    req.assert('lang', 'Affiliate lang is required ENG or FRA').notEmpty();

    var errors = req.validationErrors();
    if( !errors){   //No errors were found.  Passed Validation!
        return true;

    }
    else {   //Display errors to user
        return false;
    }
};
