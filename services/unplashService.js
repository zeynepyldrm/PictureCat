const axios = require('axios');
exports.getRandomPhoto = axios.get('https://api.unsplash.com/photos/random/?client_id=80XOeY0Ti8r2FLSnxPAc7qTbTjfDd0FCGclFdTd41Qc')
    .then(response => {
        //console.log(response.data.urls.raw);
        return response.data.urls.raw;

    })
    .catch(error => {
        console.log(error);
        throw error;
    });
