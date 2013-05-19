RealStory = {};
RealStory.homes = function() {
  var my = {};

  var hash = {'2111-G-Street': {
		    loc: {
		      address:"2111 G Street",
		      city:"Bellingham",
		      state:"WA",
		      zip:"98225",
		      lat: "48.760225",
		      lon: "-122.482055"},
		     info: {
		       bed:2,
		       bath:1,
		       sqft:1152,
		       lot:4750,
		       price:256608},

		     posts: [
			{
				postBody: "Rebuilding the chimney, keeping the character and style of the period.",
				postVideoURL: "",
				postImageURl: "http://farm8.staticflickr.com/7432/8750715483_ec6782b7ac_b.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('January 1st, 2013'))
			},
			{
				postBody: "My neighbors rock, they're planting trees to beautify the Lettered Streets.",
				postVideoURL: "",
				postImageURl: "",
				postLinkURL: "https://www.facebook.com/LetteredStreets",
				date: new Date(Date.parse('January 1st, 2013'))
			}
		       ]
	      },
	      '2654-S-Park-Dr': {
	       loc: {
		  address:"2654 S Park Dr",
		  city:"Bellingham",
		  state:"WA",
		  zip:"98225",
		  lat: "48.764606",
		  lon: "-122.476028"},
	       info: {
		 bed:4,
		 bath:3,
		 sqft:3149,
		 lot:5227,
		 price:590000},
	       posts: [
			{
				postBody: "The house in 1930. Lawn bowling in the park and a classic Buick 8 parked out front.", 
				postVideoURL: "",
				postImageURl: "http://farm3.staticflickr.com/2888/8752319668_702431b06c_b.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('January 1st, 2013'))
			},
			{
				postBody: "47 tree varieties in Broadway Park, right ouside my doorstep!",
				postVideoURL: "",
				postImageURl: "http://farm3.staticflickr.com/2825/8752387542_28eb0ed0fa_c.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('March 16th, 2013'))
			},
			{
				postBody: "Scott Rorvig, did an amazing expansion, keeping the style of the house intact.",
				postVideoURL: "",
				postImageURl: "http://farm8.staticflickr.com/7446/8751275689_17cd3acdf5_c.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('April 2nd, 2013'))
			},
			{
				postBody: "Everett C. Lyle, a civil engineer for the Bellingham Bay Improvement Company, was responsible for the Broadway Park plat‘s undulating design.", 
				postVideoURL: "",
				postImageURl: "http://farm4.staticflickr.com/3803/8752426306_06a3030e2c_b.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('April 3rd, 2013'))
			},
			{
				postBody: "The Broadway Park slide is epic!!!", 
				postVideoURL: "http://youtu.be/BfAxn5KSq_c",
				postImageURl: "",
				postLinkURL: "",
				date: new Date(Date.parse('May 4th, 2013'))
			},
			{
				postBody: "Robinson Hardwood refinished the floors, they look awesome!", 
				postVideoURL: "",
				postImageURl: "http://farm3.staticflickr.com/2811/8752411274_1d4ae9de11.jpg",
				postLinkURL: "",
				date: new Date(Date.parse('May 15th, 2013'))
			},
			{
				postBody: "Waterfront redevelopment, down come the walls of Georgia Pacific", 
				postVideoURL: "http://youtu.be/gXzNCosFVyk",
				postImageURl: "",
				postLinkURL: "",
				date: new Date(Date.parse('May 19th, 2013'))
			}
			]
	      }};
  my.list = function() {
    var list = [];
    $.each(hash, function(i,v) { $.merge(list, [i]); });
    return list;
  };
  my.getHomeByID = function(id) {
    return hash[id];
  };

  return my;
};
function HomeListCtrl($scope) {
  $scope.homes = RealStory.homes().list();
}

function HomeDetailCtrl($scope, $routeParams) {
  $scope.home = RealStory.homes().getHomeByID($routeParams.homeId);
}
