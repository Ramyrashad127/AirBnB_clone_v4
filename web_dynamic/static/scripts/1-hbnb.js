$(document).ready(function() {
    // Variable to store the selected amenities
    var selectedAmenities = [];

    // Function to update the h4 tag with the selected amenities
    function updateSelectedAmenities() {
        var amenitiesText = selectedAmenities.join(', ');
        $('div.Amenities h4').text(amenitiesText);
    }

    // Listen for changes on each input checkbox tag
    $('li input[type="checkbox"]').change(function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            // Add the Amenity ID to the selected amenities
            selectedAmenities.push(amenityId);
        } else {
            // Remove the Amenity ID from the selected amenities
            var index = selectedAmenities.indexOf(amenityId);
            if (index !== -1) {
                selectedAmenities.splice(index, 1);
            }
        }

        // Update the h4 tag with the selected amenities
        updateSelectedAmenities();
    });
});