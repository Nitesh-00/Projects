const apiKey = "d49ce19cae0839c9ebc76581dd88209c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const img = document.querySelector(".weather-icon");

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let inp = document.querySelector("input");
  let city = inp.value;
  checkWeather(city);
});

async function checkWeather(city) {
  const res = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
  const data = await res.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  if (data.weather[0].main == "Clear") {
    img.src = "./images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    img.src = "./images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    img.src = "./images/drizzle.png";
  } else if (data.weather[0].main == "Humidity") {
    img.src = "./images/humidity.png";
  } else if (data.weather[0].main == "Rain") {
    img.src = "./images/rain.png";
  } else if (data.weather[0].main == "Mist") {
    img.src = "./images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}
  
