// 101-hbnb.js
let checkedStates = {};
let checkedCities = {};

$('input:checkbox').change(function () {
    if ($(this).is(":checked")) {
        if ($(this).data('name') == 'state') {
            checkedStates[$(this).data('id')] = $(this).data('name');
        } else {
            checkedCities[$(this).data('id')] = $(this).data('name');
        }
    } else {
        if ($(this).data('name') == 'state') {
            delete checkedStates[$(this).data('id')];
        } else {
            delete checkedCities[$(this).data('id')];
        }
    }
    $('div h4').text(Object.values(checkedStates).concat(Object.values(checkedCities)).join(', '));
});

$('button').click(function () {
    $.post('places_search', { states: Object.keys(checkedStates), cities: Object.keys(checkedCities) }, function (data) {
        console.log(data);
    });
});

$('#toggle-reviews').click(function () {
    if ($(this).text() == 'show') {
        $.get('reviews', function (data) {
            data.forEach(function (review) {
                $('#reviews').append('<p>' + review + '</p>');
            });
            $('#toggle-reviews').text('hide');
        });
    } else {
        $('#reviews').empty();
        $('#toggle-reviews').text('show');
    }
});