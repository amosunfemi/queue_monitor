/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 6/28/13
 * Time: 5:36 PM
 * To change this template use File | Settings | File Templates.
 */

module.exports = function (db, cb) {
    db.define('pet', {
        name : String
    });

    return cb();
};