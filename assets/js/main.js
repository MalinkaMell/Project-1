import lastFm from './lastfm.js';
import {searchBandsInTown, searchBandsInTownVenue} from './bandsintown.js';

$(document).ready(function () {

  //main search button, insert name, get all the info
  $("#main_search").on("click", function (event) {
    event.preventDefault();
    let artist = $("#artist_input").val().trim();
    let artistL = artist.split(" ").join("+");
    //let countryData = response[i].venue.country.split(" ").join("-");

    $("#intro").fadeOut("slow", function () {
      //starting both functions, starting simultaneasly both queries
      searchBandsInTown(artistL);
      searchBandsInTownVenue(artistL);
      lastFm(artistL);
    });
  });

  //click on any of Plan Your Trip buttons will show you the screen, with city and country we gotta go.
  //at that point hotel and plaint tickets apis are coming in
  $("body").on("click", ".go-trip", function (event) {
    event.preventDefault();
    //passing names of city and country to the next screen
    let country = $(this).attr("data-country");
    let city = $(this).attr("data-city");
    $("#city_name").text(city);
    $("#country_name").text(country);
    $("#query").fadeOut("slow");
    $("#trip").show();
  })


})