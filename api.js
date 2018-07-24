var app = require('express')();
var mongo = require('mongodb').MongoClient;

app.post('/userrgis', function(req, res) {
    var obj={FIRSTNAME:req.body.FIRSTNAME,
        LASTNAME:req.body.LASTNAME,
        MOBILENUMBER:req.body.MOBILENUMBER,
        EMAILID:req.body.EMAILID,
        DISEASE:req.body.DISEASE,
        APPOINTMENTDATE:req.body.DATE,
        AGE:req.body.AGE,GENDER:req.body.GENDER,
        USERNAME:req.body.USERNAME,
        PASSWORD:req.body.PASSWORD,
        CONFIRMPASSWORD:req.body.CONFIRMPASSWORD};
  mongo.connect("mongodb://localhost:27017/userdata",function(err,db){

    if(err) throw err;
    db.collection('userdata').insert(obj,function(err,result){
        if(err)
        console.log.apply(err);
        
        console.log("successfully inserted");
        res.send(result);
    })
    
    });
    });


    app.post('/userlogin', function(req, res) {
        var userName=req.body.USERNAME;
        var pw=req.body.PASSWORD;        
      mongo.connect("mongodb://localhost:27017/userdata",function(err,db){

                if(!err)
                {
    db.collection('userdata').find({USERNAME:userName,PASSWORD:pw}).toArray(function(err,result){
        
                        console.log(result);
                        if(err||result.length<=0)
                        {
                            res.status(400).json();
                            console.log('invalid user');
                        }    
                        else
                        res.send(result);
                        console.log("successful login");
                })
      }
    })})

    app.delete('/home/userlogin/usertable/:name',function(req,res) {

        console.log("name is"+req.params.name);
        var rname=req.params.name;
        console.log("param is"+rname)
        mongo.connect("mongodb://localhost:27017/userdata",function(err,db)
        {
        
        console.log("before");
        db.collection('userdata').deleteOne({FIRSTNAME:rname},function(err,result){
        
        if(err) throw err;
        
        console.log("result is"+result);
        
        db.collection('userdata').find({}).toArray(function(err, data) {
        if(err) throw err;
        console.log('mongo connected');
        console.log(data);
        res.send(data);
        });
        
        });
        
        })})
        
    
    app.get('/home/userlogin/usertable', function(req, res) {  
        console.log("comin");       
      mongo.connect("mongodb://localhost:27017/userdata",function(err,db){
        console.log("comin");                                  
                if(!err)
                {
                    db.collection('userdata').find({}).toArray(function(err,result){
                     
                        console.log(result);
                        if(err||result.length<=0)
                        {
                            //res.status(400).json();
                            console.log('data not found');
                        }
                        else
                        res.send(result);
                        console.log("data found");
                })
      }
    })})
    
    app.post('/doctorrgis', function(req, res) {
        var obj={FIRSTNAME:req.body.FIRSTNAME,
            LASTNAME:req.body.LASTNAME,
            MOBILENUMBER:req.body.MOBILENUMBER,
            EMAILID:req.body.EMAILID,
            SPECIALIZATION:req.body.SPECIALIZATION,
            APPOINTMENTTIME:req.body.TIME,
            AGE:req.body.AGE,GENDER:req.body.GENDER,
            USERNAME:req.body.USERNAME,
            PASSWORD:req.body.PASSWORD,
            CONFIRMPASSWORD:req.body.CONFIRMPASSWORD};
      mongo.connect("mongodb://localhost:27017/userdata",function(err,db){
    
        if(err) throw err;
        db.collection('userdata1').insert(obj,function(err,res){
            if(err)
            console.log.apply(err);
            console.log("successfully inserted");
        })
        res.send("inserted");
        });
        });

    app.post('/doctorlogin', function(req, res) {
        var USERNAME=req.body.USERNAME;
        var PASSWORD=req.body.PASSWORD;
      mongo.connect("mongodb://localhost:27017/userdata",function(err,db){

                if(!err)
                {
                    db.collection('userdata1').find({USERNAME:USERNAME,PASSWORD:PASSWORD}).toArray(function(err,result){
                     
                        console.log(result);
                        if(err||result.length<=0)
                        {
                           // res.status(400).json();
                            console.log('invalid user');
                        }
                        else
                        res.send(result);
                        console.log("successful login");
                })
      }
    })})
    


app.delete('/home/doctorlogin/doctortable/:name',function(req,res) {

    console.log("name is"+req.params.name);
    var rname=req.params.name;
    console.log("param is"+rname)
    mongo.connect("mongodb://localhost:27017/userdata",function(err,db)
    {
    
    console.log("before");
    db.collection('userdata1').deleteOne({FIRSTNAME:rname},function(err,result){
    
    if(err) throw err;
    
    console.log("result is"+result);
    
    db.collection('userdata1').find({}).toArray(function(err, data) {
    if(err) throw err;
    console.log('mongo connected');
    console.log(data);
    res.send(data);
    });
    
    });
    
    })})
    
        app.get('/home/doctorlogin/doctortable', function(req, res) {  
            console.log("comin");       
          mongo.connect("mongodb://localhost:27017/userdata",function(err,db){
            console.log("comin");                                  
                    if(!err)
                    {
                        db.collection('userdata1').find({}).toArray(function(err,result){
                         
                            console.log(result);
                            if(err||result.length<=0)
                            {
                                //res.status(400).json();
                                console.log('data not found');
                            }
                            else
                            res.send(result);
                            console.log("data found");
                    })
          }
        })})



module.exports = app;
