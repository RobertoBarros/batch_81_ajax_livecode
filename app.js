// Last.fm Key: da56d0513f34a376aa6d2f9830c0405b
// Top Albums: (documentation: https://www.last.fm/api/show/artist.getTopAlbums)

$(document).ready( function(){
  $("#albums-btn").click(function(event){
    event.preventDefault();
    var artist = $("#artist").val();
    var url = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist  + "&api_key=da56d0513f34a376aa6d2f9830c0405b&format=json&limit=5";
    $.ajax({
      type: "GET",
      url: url,
      success: function(data) {
        $("#albums-container").empty();
        if (data.error != undefined) {
          $("#albums-container").html(data.message);
        }
        else {
          data.topalbums.album.forEach(function(album){
            var albumName = album.name;
            var artistName = album.artist.name;
            var image = album.image[2]["#text"];
            var inject = "<div class='row m-t-1'> <div class='col-xs-12'> <img src='"+ image + "' class='pull-left m-r-1'> <h2>" + albumName + "</h2> <p>" + artistName + "</p> </div></div>";
            $("#albums-container").append(inject);
          });
        }
      },
      error: function(jqXHR) {
        console.error(jqXHR.responseText);
      }
    });
  });
});



