angular.module('homeMediaFilters', []).filter('image', function() {
  return function(input) {

    var str = "<img src="+input+" class='post-img' alt='awesome house'/>";

    return input ? str : "";
  };
});
