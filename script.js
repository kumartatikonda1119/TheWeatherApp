const ApiKey = "b5d4446e0932ee7ecbc53e6677f28a97";
const ApiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    document.querySelector(".error").style.display ="none";
  const response = await fetch(ApiUrl + city +`&appid=${ApiKey}`);
  if(response.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".weather").style.display = "none";
  }
  else {

      var data = await response.json();
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp, 2) + `&deg C`;
      document.querySelector(".feels-like").innerHTML =
        `feels like`+ Math.round(data.main.feels_like, 2) + `&deg C`;
      document.querySelector(".weather-description").innerHTML = data.weather[0].main;
      document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
      document.querySelector(".wind").innerHTML = data.wind.speed + ` KM/PH`;
      document.querySelector(".visibility").innerHTML = data.visibility /1000 + ` KM`;
      document.querySelector(".pressure").innerHTML = data.main.pressure  ;
      if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "assets/clouds.png" ;
      }
      if(data.weather[0].main == "Clear") {
            weatherIcon.src = "assets/clear.png" ;
      }
      if(data.weather[0].main == "Rain") {
            weatherIcon.src = "assets/rain.png" ;
      }
      if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "assets/drizzle.png" ;
      }
      if(data.weather[0].main == "Mist") {
            weatherIcon.src = "assets/mist.png" ;
      }
      if(data.weather[0].main == "Snow") {
            weatherIcon.src = "assets/snow.png" ;
      }
      
      document.querySelector(".weather").style.display ="block";
  }
  
}
searchbtn.addEventListener("click", () => {
  checkWeather(search.value);
});

search.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    
      checkWeather(search.value);
  
  }
});