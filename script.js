
    const apiKey = "5d717119f895e6e0ae609cfd761fd2c5"
    const apiCall = "https://api.openweathermap.org/data/2.5/weather?units=metric&"

    const inputValue = document.querySelector('.js-input');
    const buttonValue = document.getElementById('js-button');
    const imageWeather = document.querySelector('.weather-image')
   
    const weatherImages = {
        Clear: "assets/clear.png",
        Clouds: "assets/cloudy.png",
        Sunny: "assets/sunny.png",
        Rainy: "assets/rainy.png",
        Snow: "assets/snow.png",
        Fog: "assets/fog.png",
        Sunrise: "assets/sunrise.png",
        Sunset: "assets/sunset.png",
    };

    weather();

    
   async function weather(city) {
    
    const response = await fetch( `${apiCall}q=${city}&appid=${apiKey}`);
    var data = await response.json();

        console.log(data)

        if(data.cod === '404'){
            document.querySelector('.js-error').style.display = 'block'
            document.querySelector('.js-weather-data1').style.display = 'none'

        } else {
            document.querySelector('.js-temp').innerHTML = Math.round(data.main.temp) + `°C ` ;
        document.querySelector('.js-name').innerHTML = data.name;

        document.getElementById('humidity-info').innerHTML = data.main.humidity + `% <br>Humidity</br>`;
        document.getElementById('wind-info').innerHTML = data.wind.speed + ` km/h <br>Wind speed</br>` ;

         document.querySelector('.js-weather-data1').style.display = 'block'
         document.querySelector('.js-error').style.display = 'none'

        
            if (data.weather[0].main in weatherImages) {
                imageWeather.src = weatherImages[data.weather[0].main];
             } else {
                imageWeather.src = "assets/default.png";
          }

        }}

    buttonValue.addEventListener("click",()=>{
        weather(inputValue.value);
    })


    inputValue.addEventListener("keyup",(event)=>{
        event.preventDefault();

        if(event.keyCode === 13){
            buttonValue.click()
        }
    })

