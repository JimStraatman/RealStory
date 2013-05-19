
angular.module('homeMediaFilters', []).
  filter('image', function() {
    return function(input) {
      var str = "<img src="+input+" class='post-img' alt='awesome house'/>";
      return input ? str : "";
    };
  }).
  filter('video', function() {
    return function(input) {
    var str = "<iframe width='635' height='357' "+
	      "src='http://www.youtube.com/embed/" + input +
	      "' frameborder='0' allowfullscreen></iframe>";
      return input ? str : ""; 
    };
  }).
  filter('link', function() {
    return function(input) {
      var str = "<a href='"+ input +"'>"+input+"</a>";
      return input ? str : "";
    };
  });

