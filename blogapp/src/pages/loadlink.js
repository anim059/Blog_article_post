import React from 'react';
import '../App.css';


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

export default function loadblog(method,endpoint,callback,data) {
     let jsonData;
     if (data){
       jsonData = JSON.stringify(data)
      }
    const xhr = new XMLHttpRequest()
    const url = `http://localhost:8000/api/blog${endpoint}`
    console.log(url)
    const responseType = "json"
    const csrftoken = getCookie('csrftoken');
    xhr.responseType = responseType
    console.log( xhr.responseType,method)
    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json")
    if (csrftoken){
    xhr.setRequestHeader("X-CSRFToken", csrftoken)
  }

    xhr.onload = function() {
      callback(xhr.response, xhr.status)
      console.log(xhr.response)
    }
    xhr.onerror = function (e) {
      
      callback({"message": "The request was an error"}, 400)
    }
    xhr.send(jsonData)
  }
