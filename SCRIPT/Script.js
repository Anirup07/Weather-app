


const apikey = 'e7d936e95800405d94c164448241003';
const apiurl = 'https://api.weatherapi.com/v1/forecast.json?days=5&aqi=yes&alerts=no&q=';

let search = document.querySelector('#search-bar');
let searchval = search.value;
let weathertype = document.querySelector('.weather-type');



// function weathercheck(city) {

//     document.querySelector('.current-temp').innerHTML = 'Loading...';

//     return new Promise((resolve, reject) => {

//         fetch(apiurl + city + '&key=' + apikey)

//             .then(response => {

//                 if (!response.ok) {
//                     throw new Error('Invalid city name or other error.');
//                 }

//                 return response.json();

//             })

//             .then(data => {

//                 console.log(data);

//                 let temp = data.current.temp_c;
//                 let maxtemp = data.forecast.forecastday[0].day.maxtemp_c;
//                 let mintemp = data.forecast.forecastday[0].day.mintemp_c;
//                 let type = data.current.condition.text;

//                 document.querySelector('.city-name').innerHTML = data.location.name;
//                 document.querySelector('.country-name').innerHTML = data.location.country;
//                 document.querySelector('.current-temp').innerHTML = Math.round(temp) + '°c';
//                 document.querySelector('.max-temp').innerHTML = 'Max : ' + Math.round(maxtemp) + '°c';
//                 document.querySelector('.min-temp').innerHTML = 'Min : ' + Math.round(mintemp) + '°c';
//                 document.querySelector('.weather-type').innerHTML = type;

//                 resolve(data);

//                 if (data.current.condition.text === `Sunny`) {
//                     document.querySelector('.sunny').src = '../Video/sunny.mp4';
//                 }

//                 else if (data.current.condition.text === `Overcast`) {
//                     document.querySelector('.sunny').src = '../Video/cloud.mp4';
//                 }

//                 else if (data.current.condition.text === `Mist`) {
//                     document.querySelector('.sunny').src = '../Video/mist.mp4';
//                 }

//                 else if (data.current.condition.text === `Clear`) {
//                     document.querySelector('.sunny').src = '../Video/clear.mp4';
//                 }

//                 else if (data.current.condition.text === `Rain`) {
//                     document.querySelector('.sunny').src = '../Video/cloudy.mp4';
//                 }

//                 else if (data.current.condition.text === `Partly Cloudy`) {
//                     document.querySelector('.sunny').src = '../Video/cloud.mp4';
//                 }

//                 else if (data.current.condition.text === `Light rain`) {
//                     document.querySelector('.sunny').src = '../Video/prain.mp4';
//                 }

//                 else if (data.current.condition.text === `Patchy rain nearby`) {
//                     document.querySelector('.sunny').src = '../Video/prain.mp4';
//                 }

//                 document.getElementById('bgv').playbackRate = 0.6;
//                 resolve(data);

//             })

//             .catch(error => {

//                 console.error('There has been a problem with your fetch operation:', error);
//                 document.querySelector('.error').innerHTML = 'Error: ' + error.message;

//                 document.querySelector('.error').style.display = `block`;
//                 reject(error);

//             });
//     });
// }

// function weathercheck(city) {

//     document.querySelector('.current-temp').innerHTML = 'Loading...';

//     return new Promise((resolve, reject) => {
//         fetch(apiurl + city + '&key=' + apikey)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Invalid city name');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);

//                 let temp = data.current.temp_c;
//                 let maxtemp = data.forecast.forecastday[0].day.maxtemp_c;
//                 let mintemp = data.forecast.forecastday[0].day.mintemp_c;
//                 let type = data.current.condition.text;

//                 document.querySelector('.city-name').innerHTML = data.location.name;
//                 document.querySelector('.country-name').innerHTML = data.location.country;
//                 document.querySelector('.current-temp').innerHTML = Math.round(temp) + '°c';
//                 document.querySelector('.max-temp').innerHTML = 'Max: ' + Math.round(maxtemp) + '°c';
//                 document.querySelector('.min-temp').innerHTML = 'Min: ' + Math.round(mintemp) + '°c';
//                 document.querySelector('.weather-type').innerHTML = type;

//                 let videoSrc;
//                 switch (type) {

//                     case 'Sunny':
//                         videoSrc = '../Video/sunny.mp4';

//                         break;

//                     case 'Overcast':
//                     case 'Partly Cloudy':

//                         videoSrc = '../Video/cloud.mp4';

//                         break;

//                     case 'Mist':
//                         videoSrc = '../Video/mist.mp4';

//                         break;

//                     case 'Clear':
//                         videoSrc = '../Video/clear.mp4';

//                         break;

//                     case 'Rain':
//                         videoSrc = '../Video/cloudy.mp4';

//                         break;

//                     case 'Light rain':
//                     case 'Patchy rain nearby':

//                         videoSrc = '../Video/prain.mp4';

//                         break;

//                     default:
//                         videoSrc = ''; // Default video or leave empty
//                 }

//                 if (videoSrc) {
//                     document.querySelector('.sunny').src = videoSrc;
//                     document.getElementById('bgv').playbackRate = 0.6;
//                 }

//                 resolve(data);
//             })
//             .catch(error => {

//                 console.error('There has been a problem with your fetch operation:', error);
//                 document.querySelector('.error').innerHTML = error.message;              
//                 document.querySelector('.error').style.display = `block`;
//                 reject(error);
//             });
//     });
// }

function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
  
    return hours + ":" + minutes;
  }
  
  var time = getTime();
  document.querySelector(`.current-temp2`).innerHTML = time;
  

  function updateTime() {
    var time = getTime();
    document.querySelector(`.current-temp2`).innerHTML = time;
  }
  
  setInterval(updateTime, 1000);

function weathercheck(city) {

    return new Promise(function stats(resolve, reject) {

        fetch(apiurl + city + '&key=' + apikey)

            .then(function res(response) {

                if (!response.ok) {

                    throw new Error('Invalid city name.');

                }

                document.querySelector('.mainc').style.display = `none`;
                document.querySelector('.loader').style.display = `block`;
                document.querySelector('.error').style.display = `none`;

                return response.json();

            })

            .then(function valid(data) {

                let temp = data.current.temp_c;
                let maxtemp = data.forecast.forecastday[0].day.maxtemp_c;
                let mintemp = data.forecast.forecastday[0].day.mintemp_c;
                let type = data.current.condition.text;

                document.querySelector('.city-name').innerHTML = data.location.name;
                document.querySelector('.place-name').style.opacity = `100`;
                document.querySelector('.country-name').innerHTML = data.location.country;
                document.querySelector('.current-temp').innerHTML = Math.round(temp) + '°c';
                document.querySelector('.max-temp').innerHTML = 'Max: ' + Math.round(maxtemp) + '°c';
                document.querySelector('.min-temp').innerHTML = 'Min: ' + Math.round(mintemp) + '°c';
                document.querySelector('.weather-type').innerHTML = type;
                document.querySelector('.loader').style.display = `none`;
                document.querySelector(`.separator`).style.display = `block`;
                document.querySelector('.mainc').style.display = `block`;
                document.querySelector(`.focus-in-expand`).style.display = `none`;
                document.querySelector(`.random`).style.opacity = `0`;
                document.querySelector(`.future-weather`).style.opacity = `100`;


                let videoSrc;

                switch (type) {

                    case 'Sunny':
                        videoSrc = 'Video/clear.mp4';

                        break;

                    case 'Overcast':
                    case 'Partly cloudy':

                        videoSrc = 'Video/cloud.mp4';

                        break;

                    case 'Mist':
                        videoSrc = 'Video/mist.mp4';

                        break;

                    case 'Clear':
                        videoSrc = 'Video/clear.mp4';

                        break;

                    case 'Rain':
                        videoSrc = 'Video/cloudy.mp4';

                        break;

                    case 'Light rain':
                    case 'Patchy rain nearby':

                        videoSrc = 'Video/prain.mp4';

                        break;

                    default:
                        videoSrc = 'Video/default.mp4';

                }

                if (videoSrc) {

                    document.querySelector('.sunny').src = videoSrc;
                    document.getElementById('bgv').playbackRate = 0.6;

                }

                resolve(data);

                document.querySelector(`.current-temp2`).style.display = `none`;
                document.querySelector(`.current-temp`).style.opacity = `100`;

            })

            .catch(function invalid(error) {

                console.error('There has been a problem with your fetch operation:', error);
                document.querySelector('.error').innerHTML = error.message;
                document.querySelector('.error').style.display = `block`;

                reject(error);
            });
    });
}



async function weatherforcast1(city) {
    const response = await fetch(apiurl + city + `&key=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.date1').innerHTML = data.forecast.forecastday[1].date.slice(8, 10);
    document.querySelector('.month1').innerHTML = data.forecast.forecastday[1].date.slice(5, 7);
    document.querySelector('.formax1').innerHTML = `Max : ` + Math.round(data.forecast.forecastday[1].day.maxtemp_c) + `°c`;
    document.querySelector('.formin1').innerHTML = `Min : ` + Math.round(data.forecast.forecastday[1].day.mintemp_c) + `°c`;

}



async function weatherforcast2(city) {
    const response = await fetch(apiurl + city + `&key=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.date2').innerHTML = data.forecast.forecastday[2].date.slice(8, 10);
    document.querySelector('.month2').innerHTML = data.forecast.forecastday[2].date.slice(5, 7);
    document.querySelector('.formax2').innerHTML = `Max : ` + Math.round(data.forecast.forecastday[2].day.maxtemp_c) + `°c`;
    document.querySelector('.formin2').innerHTML = `Min : ` + Math.round(data.forecast.forecastday[2].day.mintemp_c) + `°c`;


}

async function weatherforcast3(city) {
    const response = await fetch(apiurl + city + `&key=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.date3').innerHTML = data.forecast.forecastday[3].date.slice(8, 10);
    document.querySelector('.month3').innerHTML = data.forecast.forecastday[3].date.slice(5, 7);
    document.querySelector('.formax3').innerHTML = `Max : ` + Math.round(data.forecast.forecastday[3].day.maxtemp_c) + `°c`;
    document.querySelector('.formin3').innerHTML = `Min : ` + Math.round(data.forecast.forecastday[3].day.mintemp_c) + `°c`;


}

async function weatherforcast4(city) {
    const response = await fetch(apiurl + city + `&key=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.date4').innerHTML = data.forecast.forecastday[4].date.slice(8, 10);
    document.querySelector('.month4').innerHTML = data.forecast.forecastday[4].date.slice(5, 7);
    document.querySelector('.formax4').innerHTML = `Max : ` + Math.round(data.forecast.forecastday[4].day.maxtemp_c) + `°c`;
    document.querySelector('.formin4').innerHTML = `Min : ` + Math.round(data.forecast.forecastday[4].day.mintemp_c) + `°c`;


}

async function weatherforcast5(city) {
    const response = await fetch(apiurl + city + `&key=${apikey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.date5').innerHTML = data.list[32].dt_txt.slice(8, 10);
    document.querySelector('.month5').innerHTML = data.list[32].dt_txt.slice(5, 7);
    document.querySelector('.formax5').innerHTML = `Max : ` + Math.round(data.list[32].main.temp_max) + `°c`;
    document.querySelector('.formin5').innerHTML = `Min : ` + Math.round(data.list[32].main.temp_min) + `°c`;

}

// async function geofinder(name) {
//     const response = await fetch(apiurl + name + `&key=${apikey}`);
//     let data = await response.json();

//     console.log(data);

//     let latdata = data[0].lat;
//     let londata = data[0].lon;


//     async function aqi() {
//         const res = await fetch(apiurl + `lat=${latdata}` + `&lon=${londata}` + `&appid=${apikey}`);
//         let info = await res.json();

//         console.log(info)
//     }


//     aqi()

// }

// geofinder()


search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchval = search.value;
        weathercheck(searchval);
        weatherforcast1(searchval);
        weatherforcast2(searchval);
        weatherforcast3(searchval);
        weatherforcast4(searchval);
        weatherforcast5(searchval);
        geofinder(searchval);
    }
});



weatherforcast1()


document.addEventListener('DOMContentLoaded', () => {
    let facts = {
        1: 'Crickets can tell the temperature: The frequency of a cricket’s chirps correlates with the temperature.',
        2: 'Sandstorms can engulf cities: These massive storms can swallow up entire cities in dust.',
        3: 'Black blizzards: Dust storms mixed with wind can create what’s known as black blizzards.',
        4: 'Mudslides: These can carry rocks, trees, vehicles, and even buildings.',
        5: 'The coldest temperature ever officially recorded was -89.2°C.',
        6: 'Autumn spiders: Mild autumn weather can lead to larger spiders in homes.',
        7: 'Heatwave rail bends: Extreme heat can cause train tracks to bend.',
        8: 'Thunderstorm frequency: Approximately 2,000 thunderstorms rain down on Earth every minute.',
        9: 'Volcanic lightning: Lightning often follows a volcanic eruption.',
        10: 'Raindrop size: They can be as large as houseflies and fall at over 30kmph.'
    };


    function getRandomFact() {
        let keys = Object.keys(facts);
        return facts[keys[Math.floor(Math.random() * keys.length)]];
    }

    document.querySelector('.random p').textContent = getRandomFact();
});


const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}-${month}-${year}`;
document.querySelector(`.random-fact p`).innerHTML = currentDate;

