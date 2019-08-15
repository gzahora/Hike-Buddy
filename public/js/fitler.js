$(function() {
  // $("#park").on("click", function(event) {
  //   event.preventDefault();

  //   var parkSearched = $("#searchbox")
  //     .val()
  //     .trim();

  //   $.get("/api/parks/:parkName" + parkSearched, function(data) {
  //     renderParks(data);
  //   });
  // });

  $("#sign-in").on("click", function(event) {
    event.preventDefault();
    var login = $("")
  })
  $("#state").on("click", function(event) {
    event.preventDefault();

    var stateSearched = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/:state" + stateSearched, function(data) {
      renderParks(data);
    });
  });

  $("#alpha").on("click", function(event) {
    event.preventDefault();

    var AlphaSearched = $("#searchbox")
      .val()
      .trim();

    $.get("/api/parks/alpha" + AlphaSearched, function(data) {
      renderParks(data);
    });
  });

  $("#ranked").on("click", function(event) {
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
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
        var div = $("<div>");
        div.addClass("col-3 col-3 col-3 col-3");
        div.append(
          "<img src= '" + data[i].image + "' height='250' width='auto'>"
        );
        div.append("<h4>" + data[i].park_name + "</h4>");
        div.append("<h6>" + data[i].state + "</h6>");
        div.append("<h6>" + data[i].ranking + "</h6>");

        $("#search-results").append(div);
      }
    } else {
      $("#search-results").append("No results found");
    }
  }
});
