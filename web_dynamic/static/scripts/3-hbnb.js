// 3-hbnb.js
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        $('.places').append('<article><h2>' + data[i].name + '</h2></article>');
      }
    }
  });