$(function() {
  $(".ranked").on("click", function(event) {
    event.preventDefault();

    $.get("/api/parks/rank", function(data) {
      renderParks(data);
    });
  });

  $(".alpha").on("click", function(event) {
    event.preventDefault();

    $.get("/api/parks/alpha", function(data) {
      renderParks(data);
    });
  });

  $(".state").on("click", function(event) {
    event.preventDefault();

    $.get("/api/parks/:state", function(data) {
      renderParks(data);
    });
  });
});
