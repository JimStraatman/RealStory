angular.module('homeMediaFilters', []).
  filter('image', function() {
    return function(input) {
      var str = "<img src="+input+" class='post-img' alt='awesome house'/>";
      return input ? str : "";
    };
  }).
  filter('video', function() {
    return function(input) {
      var str = "VIDEO GO HERE";
      return input ? str : ""; 
    };
  }).
  filter('link', function() {
    return function(input) {
      var str = "LINK HERE";
      return input ? str : "";
    };
  });
