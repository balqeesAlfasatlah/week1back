'use strict';
const express = require('express');
const server = express();
require('dotenv').config();
const PORT = process.env.PORT;
const weatherData = require('./data/weather.json') 

server.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`);
})


//localhost :3003/
server.get('/',(req,res)=>{
    res.send('helllo from home')
})

//localhost:3003/test
server.get('/test',(req,res)=>{
    res.send('hello balqees keep going you will finish everything easily trust your self ok ?');
})

//localhost:3003/shoppingList
let shopping =['shoes','dress','glasses'];
server.get('/shoppingList' , (req,res)=>{
    res.send(shopping);
})

//localhost:3003/weather?search=Amman
server.get('/weather',(req,res)=>{
    let cityWeather =weatherData.find(item=>{
        if(item.city_name === req.query.search){
            return item
        }
    })
    res.send(cityWeather)
})


//localhost:3003/anyrhing else
server.get('*',(req,res)=>{
    res.send('not found , please make sure if the path is right')
})