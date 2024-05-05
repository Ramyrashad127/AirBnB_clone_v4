// Request the API status
fetch('http://0.0.0.0:5001/api/v1/status/')
    .then(response => response.json())
    .then(data => {
        const apiStatusDiv = document.getElementById('api_status');
        if (data.status === 'OK') {
            apiStatusDiv.classList.add('available');
        } else {
            apiStatusDiv.classList.remove('available');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });