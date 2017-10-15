var twitchUrl = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
var finalUrl;
var twitchStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "ESL_CSGO", "n0thing", "shroud"];
$(document).ready(function() {

  for (var i = 0; i < twitchStreamers.length; i++) {
    finalUrl = twitchUrl + twitchStreamers[i];
    console.log(finalUrl);
    $.ajax({
        url: finalUrl,
      })
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });
  }
});
