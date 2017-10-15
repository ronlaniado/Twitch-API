var twitchUrl = "https://wind-bow.glitch.me/twitch-api/streams/";
var finalUrl;
var twitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "ESL_CSGO", "n0thing", "shroud", "s1mpleof"];
var status;
var currentStreamer;
var channelUrl = "https://go.twitch.tv/";
$(document).ready(function() {

  for (var i = 0; i < twitchStreamers.length; i++) {
    finalUrl = twitchUrl + twitchStreamers[i];
    console.log(finalUrl);
    currentStreamer = twitchStreamers[i];
    $.ajax({
      url: finalUrl,
      success: function(data) {
        console.log("API was successfully called.");
        status = data.stream;
        console.log(status);
        if (status == "null") {
          console.log(currentStreamer + " is offline");
          $(".title").html(currentStreamer);
          $(".status").html("<span style=color:red>Offline<span>");


        } else {
          console.log(currentStreamer + " is online");
          $(".description").html(currentStreamer + " is currently offline. Please try again later.");
          $(".mdl-button").attr("onClick", "window.open('" + channelUrl + currentStreamer + "');");
        }
      }
    });
  }
});
