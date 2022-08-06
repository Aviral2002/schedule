import React from "react";
import './input.css';
const encodedParams = new URLSearchParams();
const axios = require("axios");
const button = document.getElementById('myButton');

function Input() {
    var text=document.getElementById("textarea")?.value || ''
    var date=document.getElementById("date");
    var time=document.getElementById("time")
    encodedParams.append("q",text);
encodedParams.append("target", "hi");
encodedParams.append("source", "en");
  const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'cc1d83240emsh0763a8c06cb4689p12393ajsncf4cdc5c6189',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
      },
      data: encodedParams
    };
    if (button){
    button.addEventListener('click', async _=>  {
     const add= await fetch('http://localhost:5000/record/add',{
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify( date, time),
   })})};
 

    
    // axios.request(options).then(function (response) {
    //   var resp= response.data;
    // }).catch(function (error) {
    //   console.error(error);
    // });
    
return (
      <div>
        <header>Add Text</header>
        <input type="textarea" id="textarea"
          name="textarea"
        />
        <label for="start">Date:</label>

        <input type="date" id="date" name="date"></input>
        <label for="start">Time</label>

       <input type="time" id="time" name="time"></input>
       <button id="myButton" onClick={() => {axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });}}>Done</button>

      </div>
    );
  }

export default Input