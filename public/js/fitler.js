$(function() {
  $("#searchpark").on("click", function(event) {
    event.preventDefault();

    var parkSearched = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/:parkName" + parkSearched, function(data) {
      renderParks(data);
    });
  });

  $("#searchState").on("click", function(event) {
    event.preventDefault();

    var stateSearched = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/:state" + stateSearched, function(data) {
      renderParks(data);
    });
  });

  $("#searchAlpha").on("click", function(event) {
    event.preventDefault();

    var AlphaSearched = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/alpha" + AlphaSearched, function(data) {
      renderParks(data);
    });
  });

  $("#searchRank").on("click", function(event) {
    event.preventDefault();

    var rankSearch = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/rank" + rankSearch, function(data) {
      renderParks(data);
    });
  });

  function renderParks(data) {
      $("#search-results").empty();
      $("#search-results").show();
    if (data.length >= 0 ) {
        for (var i=0; i < data.length; i++) {
            var div = $("<div");
            div.addCard("_________");
            div.append("");
            div.append(""+data[i].parkName);
        }
        $("#search-results").append(div);
            }
        }
    else {
            $("#search-results").append("No results found");
        }
    }
});