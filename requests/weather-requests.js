const rp = require('request-promise');

module.exports = async function(city = '') {
    if (!city) {
        throw new Error('Упс!...Ошибочка!');
    }

    const KEY = 'bde2335fb2dafebc972a700f8be6ca81';
    const uri = 'http://api.openweathermap.org/data/2.5/weather';

    const options = {
        uri,
        qs: {
            appId: KEY,
            q: city,
            units: 'metric'
        },
        json: true
    };

    try {
        const data = await rp(options);

        return {
            weather: `${data.name}: ${data.main.temp.toFixed(0)}℃ ${data.weather[0].main}`,
            error: null
        }
    } catch (error) {
        return {
            weather: null,
            error: error.error.message
        };
    }
}