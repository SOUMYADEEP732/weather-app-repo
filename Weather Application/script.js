const inputBox = document.querySelector('.input-box')
const searchBtn = document.querySelector('.search-btn')
const weatherImg = document.querySelector('.weather-img')
const temp = document.querySelector('.temparature')
const descript = document.querySelector('.description')
const humidValue = document.querySelector('#humid-value')
const windValue = document.querySelector('#wind-value')
const cityNotFound = document.querySelector('.not-found')
const weatherBody = document.querySelector('.weather-body')


searchBtn.addEventListener('click', function(){
    // e.preventDefault()
    checkWeather(inputBox.value)
})

inputBox.addEventListener('checkBox', function(e){
    e.preventDefault()
})

 async function checkWeather(input){
    const api_key = '6aa2960991e61f55d6be61d8d80f58b4'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`
    // const result = await fetch(url)
    const response = await fetch(url)
    const data = await response.json()

    console.log(data);

    if(data.cod === `404`){
        cityNotFound.style.display = "flex"
        weatherBody.style.display = "none"
        return;
    }

    weatherBody.style.display = "flex"

    temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
    descript.innerHTML = `${data.weather[0].description}`
    humidValue.innerHTML = `${data.main.humidity}%`
    windValue.innerHTML = `${data.wind.speed} km/H`
    switch(data.weather[0].main){

        case 'Clear':
            weatherImg.src = "/images/clear.png"
            break;
        case 'Clouds':
            weatherImg.src = "/images/cloud.png"
            break;
        case 'Haze':
            weatherImg.src = "/images/mist.png"
            break;
        case 'Snow':
            weatherImg.src = "/images/snow.png"
            break;
        case 'Rain':
            weatherImg.src = "/images/rain.png"
            break;
        default:
            weatherImg.src = "/images/404.png"
            break;

    }
 }