document.getElementById("start").onclick = function () {
  var synth = window.speechSynthesis;
  var utterText =
    "Welcome to Hamilton! Please use commands from the command table to get the desired result";
  var utterThis = new SpeechSynthesisUtterance(utterText);
  utterThis.pitch = 1.0;
  utterThis.rate = 0.9;
  synth.speak(utterThis);
};

if (annyang) {
  var commands = {
    "information about *place": function (place) {
      if (place.includes("Hamilton")) {
        var synth = window.speechSynthesis;
        var utterText =
          "Hamilton is a Canadian port city on the western tip of Lake Ontario.";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
        document.getElementById("output").innerHTML =
          "<strong>Information:</strong> Hamilton is a Canadian port city on the western tip of Lake Ontario.";
      } else if (place.includes("University")) {
        var synth = window.speechSynthesis;
        var utterText =
          "McMaster University is a public research university in Hamilton.";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
        document.getElementById("output").innerHTML =
          "<strong>Information:</strong> McMaster University is a public research university in Hamilton.";
      }
    },

    "Show *type": function (type) {
      type = type.toLowerCase();
      console.log(type);
      if (type.includes("water") && type.includes("fall")) {
        for (i = 0; i < waterfalls.features.length; i++) {
          map.entities.push(
            new Microsoft.Maps.Pushpin(
              new Microsoft.Maps.Location(
                waterfalls.features[i].properties.LATITUDE,
                waterfalls.features[i].properties.LONGITUDE
              ),

              {
                title: waterfalls.features[i].properties.NAME,
                icon: "waterfall.png",
              }
            )
          );
        }
        var synth = window.speechSynthesis;
        var utterText =
          "Good Choice! Interesting fact: Hamilton has the  most number of waterfalls as compared to any city in the world";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
      } else if (type.includes("beach")) {
        for (i = 0; i < beaches.features.length; i++) {
          map.entities.push(
            new Microsoft.Maps.Pushpin(
              new Microsoft.Maps.Location(
                beaches.features[i].properties.LATITUDE,
                beaches.features[i].properties.LONGITUDE
              ),

              { title: beaches.features[i].properties.NAME, icon: "beach.png" }
            )
          );
        }
        var synth = window.speechSynthesis;
        var utterText = "Always a good choice for a hot day";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
      } else if (type.includes("parking")) {
        for (i = 0; i < parkings.features.length; i++) {
          map.entities.push(
            new Microsoft.Maps.Pushpin(
              new Microsoft.Maps.Location(
                parkings.features[i].geometry.coordinates[0][0][1],
                parkings.features[i].geometry.coordinates[0][0][0]
              ),

              {
                title: parkings.features[i].properties.LOCATION,
                icon: "parking.png",
              }
            )
          );
        }
        var synth = window.speechSynthesis;
        var utterText = "Here are some parking lots, don't forget to pay";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
      } else if (type.includes("golf")) {
        for (i = 0; i < golf.features.length; i++) {
          map.entities.push(
            new Microsoft.Maps.Pushpin(
              new Microsoft.Maps.Location(
                golf.features[i].geometry.coordinates[0][0][1],
                golf.features[i].geometry.coordinates[0][0][0]
              ),

              { title: golf.features[i].properties.NAME, icon: "golf.png" }
            )
          );
        }
        var synth = window.speechSynthesis;
        var utterText = "Here are 27 golf Clubs, Have fun golfing";
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
      } else {
        var synth = window.speechSynthesis;
        var utterText = "Sorry, Unable to find " + type;
        var utterThis = new SpeechSynthesisUtterance(utterText);
        utterThis.pitch = 1.0;
        utterThis.rate = 0.9;
        synth.speak(utterThis);
      }
    },

    "Where can I park": function () {
      for (i = 0; i < parkings.features.length; i++) {
        map.entities.push(
          new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(
              parkings.features[i].geometry.coordinates[0][0][1],
              parkings.features[i].geometry.coordinates[0][0][0]
            ),

            {
              title: parkings.features[i].properties.LOCATION,
              icon: "parking.png",
            }
          )
        );
      }
      var synth = window.speechSynthesis;
      var utterText = "Here are some parking lots where you can park";
      var utterThis = new SpeechSynthesisUtterance(utterText);
      utterThis.pitch = 1.0;
      utterThis.rate = 0.9;
      synth.speak(utterThis);
    },

    "Where can I play golf": function () {
      for (i = 0; i < golf.features.length; i++) {
        map.entities.push(
          new Microsoft.Maps.Pushpin(
            new Microsoft.Maps.Location(
              golf.features[i].geometry.coordinates[0][0][1],
              golf.features[i].geometry.coordinates[0][0][0]
            ),

            { title: golf.features[i].properties.NAME, icon: "golf.png" }
          )
        );
      }
      var synth = window.speechSynthesis;
      var utterText = "Here are some golf Clubs that you can go to";
      var utterThis = new SpeechSynthesisUtterance(utterText);
      utterThis.pitch = 1.0;
      utterThis.rate = 0.9;
      synth.speak(utterThis);
    },

    "clear map": function () {
      for (i = map.entities.getLength() - 1; i >= 0; i--) {
        var pushpin = map.entities.get(i);
        if (pushpin instanceof Microsoft.Maps.Pushpin) {
          map.entities.removeAt(i);
        }
      }
      var synth = window.speechSynthesis;
      var utterText = "Done";
      var utterThis = new SpeechSynthesisUtterance(utterText);
      utterThis.pitch = 1.0;
      utterThis.rate = 0.9;
      synth.speak(utterThis);
    },

    "*catchall": function (catchall) {
      var requestOptions = {
        bounds: map.getBounds(),
        where: catchall,
        callback: function (answer, userData) {
          map.setView({ bounds: answer.results[0].bestView });
          map.entities.push(
            new Microsoft.Maps.Pushpin(answer.results[0].location, {
              title: catchall,
            })
          );
        },
      };
      searchManager.geocode(requestOptions);
    },
  };
  annyang.addCommands(commands);
  annyang.start({ autoRestart: true, continuous: true });
}

function loadmap() {
  map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
    center: new Microsoft.Maps.Location(43.2557, -79.8711),
  });

  Microsoft.Maps.loadModule("Microsoft.Maps.Search", function () {
    searchManager = new Microsoft.Maps.Search.SearchManager(map);
  });
}

//This part of jascript is used to show the current EST
//https://stackoverflow.com/questions/9070604/how-to-convert-datetime-from-the-users-timezone-to-est-in-javascript
//https://www.plus2net.com/javascript_tutorial/clock.php
function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}

function display_ct() {
  offset = -5;
  var clientDate = new Date();
  utc = clientDate.getTime() + clientDate.getTimezoneOffset() * 60000;
  var today_date = new Date(utc + 3600000 * offset); //Setting the variable today_date to current EST date object
  var month_arr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]; //list of all months
  var day_arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]; //list of all days
  var day = day_arr[today_date.getDay()]; //getting day from today_date object
  var month = month_arr[today_date.getMonth()];
  var date = today_date.getDate();
  var year = today_date.getFullYear();
  if (date < 10) {
    date = "0" + date;
  } //making sure date is in 2 digit format
  var final = day + "," + month + "-" + date + "-" + year; //string with day and date in it

  // time part //
  var hour = today_date.getHours(); //getting current hour from today_date object
  var minute = today_date.getMinutes();
  var second = today_date.getSeconds();
  var time_zone = "am"; //initializing time zone to am
  if (hour >= 13) {
    //making sure to convert it to pm if needed
    hour = hour - 12;
    time_zone = "pm";
  }
  if (hour == 12) {
    time_zone = "pm";
  }
  if (hour < 10) {
    hour = "0" + hour;
  } //making hour in 2 digit format aswell
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var final =
    final + "<br /> " + hour + ":" + minute + ":" + second + time_zone; //the final string

  document.getElementById("ct").innerHTML = final; //setting the id 'ct' from HTML to the time
  display_c();
}
