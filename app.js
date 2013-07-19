
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , queue_monitor = require('./routes/queue_monitor')
  , affiliate = require('./routes/affiliate')
  , alert = require('./routes/alert')
  , http = require('http')
  , path = require('path')
  , orm = require('orm')
  , expressValidator = require('express-validator')
  , QueueMonitor = null
  , Affiliate = null
  , Alert = null
  , Users = null;


var opts = {
    database : "mqmonitor",
    protocol : "postgres",//"[mysql|postgres|redshift|sqlite]",
    host     : "127.0.0.1",
    port     : 5432,         // optional, defaults to database default
    user     : "postgres",
    password : "sunday123",
    query    : {
        pool     : true,   // optional, false by default
        debug    : true    // optional, false by default
    }
};

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator);

//ORM section
//app.use(orm.express("postgres://postgres:sunday123@localhost/mqmonitor", {
//
//}));

var db  = orm.connect(opts);

db.on("connect", function (err, db) {
    console.log('Connected');
    db.load("./models/models", function (err) {
        // loaded!
        QueueMonitor = db.models.queuemonitor;
        Affiliate    = db.models.affiliate;
        Alert = db.models.alert;
        Users = db.models.user;

        db.sync();

        console.log('Db Synced');
    });





});





// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



app.get('/', function (req, res)
{
    res.render('index.html');
});

app.get('/queue_monitor', function (req, res)
{
    res.render('add-queue-mon.html');
});

app.get('/login', function (req, res)
{
    res.render('login.html');
});


app.get('/alert', function (req, res)
{
    res.render('alert.html');
});


app.get('/affiliate', function (req, res)
{
    res.render('affiliate.html');
});


app.post('/queue_monitor', queue_monitor.addQueueDetails);



app.post('/alert', alert.addAlert);



app.post('/affiliate',  affiliate.addAffDetails);

app.get('/affiliate/:code', affiliate.fetchAllAffiliateByCode);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
