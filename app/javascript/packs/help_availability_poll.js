function pollForHelp(){
  const requestId = $('#wait-notice').data('requestId');
  $.get('/help_requests/' + requestId + '/help_available', function(data) {
    if (data.help_available) {
      console.log("Found Help!");
      const url = "http://" + self.location.host + "/help_requests/" + requestId + "/connect";
      window.location.replace(url);
    } else {
      console.log("Nothing yet! Waiting...");
      setTimeout(pollForHelp,2000);
    }
  });
}

$(document).on("turbolinks:load", () => {
  pollForHelp();
});