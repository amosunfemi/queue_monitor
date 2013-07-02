/**
 * Created with JetBrains WebStorm.
 * User: sundayamosun
 * Date: 7/2/13
 * Time: 12:59 PM
 * To change this template use File | Settings | File Templates.
 */

var expressValidator = require('express-validator');


exports.addAffDetails = function(req, res){
  //post method for adding new Affiliate


};

exports.fetchAllAffiliate = function(req, res){
  //fetch all affiliates in the system


};

exports.fetchAllAffiliateByCode = function(req, res){


};

affValidate = function(req){
    req.assert('code', 'Affiliate Code e.g. EGH is required').notEmpty();           //Validate name
    req.assert('description', 'Affiliate name/description is required').notEmpty();  //Validate email
    req.assert('lang', 'Affiliate lang is required ENG or FRA').notEmpty();

    var errors = req.validationErrors();
    if( !errors){   //No errors were found.  Passed Validation!
        res.render('index', {
            title: 'Affiliate Validated',
            message: 'Passed Validation!',
            errors: {}
        });

    }
    else {   //Display errors to user
        res.render('index', {
            title: 'Form Validation Example',
            message: '',
            errors: errors
        });
    }
}