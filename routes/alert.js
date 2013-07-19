/*

*/

exports.addAlert = function(req, resp){
    console.log(req.body);
    
    req.alert.create([
        {
            affiliatecode : "", //Affiliate Code
            createdby : "", //Username
            datecreated : Date,
            mailbody : "",
            mailccids : "",
            mailfromid : "",
            mailsubject : "",
            mailtoids : "",
            qmname : ""
        }
    ], function (err, items) {
        // err - description of the error or null
        // items - array of inserted items
    });


};