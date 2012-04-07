/*! Grunt jQuery Example Plugin - v0.1.0 - 2012-04-07
* https://github.com/cowboy/grunt-jquery-example
* Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT, GPL */

(function($) {

  // Collection method.
  $.fn.awesome = function() {
    return this.each(function() {
      $(this).html('awesome');
    });
  };

  // Static method.
  $.awesome = function() {
    return 'awesome';
  };

  // Custom selector.
  $.expr[':'].awesome = function(elem) {
    return elem.textContent.indexOf('awesome') >= 0;
  };

}(jQuery));
