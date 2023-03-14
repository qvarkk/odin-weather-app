let cityInput = document.querySelector("#searchBar");
let form = document.querySelector("#queryForm");

let cityPara = document.querySelector("#weatherCity");
let weatherIcon = document.querySelector("#weatherIcon");
let degreesPara = document.querySelector("#weatherDegrees");
let descriptionPara = document.querySelector("#weatherDescription");
let feelsLikePara = document.querySelector("#weatherFeelsLike");
let pressurePara = document.querySelector("#weatherPressure");
let humidityPara = document.querySelector("#weatherHumidity");
let windSpeedPara = document.querySelector("#windSpeed");

form.addEventListener("submit", async () => {
  let city = cityInput.value;
  let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=050883137b3d17b2c751ca0d86a096a2&units=metric`);
  let json = await responce.json();

  cityPara.innerHTML = json.name;
  degreesPara.innerHTML = `${Math.round(json.main.temp * 10) / 10} &#x2103;`;
  descriptionPara.innerHTML = json.weather[0].description;
  feelsLikePara.innerHTML = `${Math.round(json.main.feels_like * 10) / 10} &#x2103;`;
  pressurePara.innerHTML = `${json.main.pressure} hPa`;
  humidityPara.innerHTML = `${json.main.humidity}%`;
  windSpeedPara.innerHTML = `${json.wind.speed} m/s`;
});