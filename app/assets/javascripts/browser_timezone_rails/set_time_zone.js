(function() {
  $.cookie("browser.timezone", jstz.determine().name(), { expires: 365, path: '/' });
})();

