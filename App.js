
const express = require('express');
const https = require ('https');
const request = require ('request');
var paid = require('./dataModel');
 var resultArray = [];

const app = express();
const newreq = 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences';

app.use((req, res, next) => {
    request.get(newreq,(error,response,body)=>{
        var paid = [];
        var free = [];
        var results = [];
        var results1 = [];
        var l1 = [];
        var confName, confStartDate, city, state, country, entryType , confUrl ;
      var resp = JSON.parse(body);
        if(error){
             console.dir(error);
        }
         resultArray.push(resp);
         resultArray.forEach(x => {
            paid = x.paid;
            free = x.free;
         });

         //result for paid, if the conference name is not same
            for(var i=0; i<=paid.length; i++){
                for(var j = i+1; j <paid.length ; j++){
                    if(paid[i].confName != paid[j].confName) {
                       var result = (paid[j].confName + ', ' + paid[j].city  + ', ' + paid[j].state + ', ' + paid[j].country + ' ,' + paid[j].entryType[0]  + ' ,' + paid[j].confUrl + '\n');
                    results.push(result);
                    }
                }
            }
            //result for free, if the conference name is not same
            for(var i=0; i<=free.length; i++){
                for(var j = i+1; j <free.length ; j++){
                    if(free[i].confName != free[j].confName) {
                       var result1 = (free[j].confName + ', ' + free[j].city  + ', ' + free[j].state + ', ' + free[j].country + ' ,' + paid[j].entryType[0]  + ' ,' + free[j].confUrl + '\n');
                    results.push(result1);
                    }
                }
            }
         res.status(200).send(result.toString());
    });

   
});
module.exports = app;

