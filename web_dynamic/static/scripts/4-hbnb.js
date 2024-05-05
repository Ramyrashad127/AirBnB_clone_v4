// 4-hbnb.js
$('#filter').click(function() {
    let amenities = [];
    $('input:checked').each(function() {
        amenities.push($(this).attr('data-id'));
    });

    $.ajax({
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ amenities: amenities }),
        success: function (data) {
            $('.places').empty();
            for (let i = 0; i < data.length; i++) {
                $('.places').append('<article><h2>' + data[i].name + '</h2></article>');
            }
        }
    });
});