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
				postBody: "The house in 1930. Lawn bowling in the park and a classic Buick 8 parked out front.", 
				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8752319668/",
				postLinkURL: "",
				date: new Date(Date.parse('1/12/13'))
			},
			{

				postBody: "Did you know Broadway Park is a historic district?",
				postVideoURL: "",
				postImageURl: "",
				postLinkURL: "http://www.dahp.wa.gov/blog/2012/07/recent-state-and-national-register-listings/small/",
				date: new Date(Date.parse('3/10/13'))
			},
			{
				postBody: "There are 47 different tree varieties in Broadway Park, right ouside my doorstep.",
				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8752387542/",
				postLinkURL: "",
				date: new Date(Date.parse('3/11/13'))
			},
			{
				postBody: "Scott Rorvig, the previous owner, did an amazing expansion, keeping the style of the house intact.",
				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8751275689/",
				postLinkURL: "",
				date: new Date(Date.parse('3/14/13'))
			},
			{

				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8752426306/",
				postLinkURL: "",
				date: new Date(Date.parse('4/12/13'))
			},
			{
				postBody: "The Broadway Park slide is epic!!!", 
				postVideoURL: "http://youtu.be/BfAxn5KSq_c",
				postImageURl: "",
				postLinkURL: "",
				date: new Date(Date.parse('4/12/13'))
			},
			{
				postBody: "Just refinished the hardware floors, they look awesome!", 
				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8752411274/",
				postLinkURL: "",
				date: new Date(Date.parse('5/1/13'))
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
				postBody: "Rebuilding the chimney, keeping the character and style of the period.",
				postVideoURL: "",
				postImageURl: "http://www.flickr.com/photos/88279756@N07/8750715483/",
				postLinkURL: "",
				date: new Date(Date.parse('1/12/13'))
			},
			{
				postBody: "I love being SO close to the waterfront redevelopment; they're taking down Georgia Pacific piece by piece!", 
				postVideoURL: "http://youtu.be/gXzNCosFVyk",
				postImageURl: "",
				postLinkURL: "",
				date: new Date(Date.parse('3/12/13'))
			},
			{
				postBody: "My neighbors rock, they're planting trees to beautify the Lettered Streets.",
				postVideoURL: "",
				postImageURl: "",
				postLinkURL: "https://www.facebook.com/LetteredStreets",
				date: new Date(Date.parse('4/12/13'))
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
