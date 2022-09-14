

let input = document.getElementById("input")
let city = document.getElementById("city")

let cityName = document.getElementById("cityName")
let Temp = document.getElementById("temp")
let main = document.getElementById("main")
let discription = document.getElementById("discription")
let image = document.getElementById("image")

input.onsubmit = (e) => {
  e.preventDefault()
  weatherUpdate(city.value)
  city.value = ""
}

function  weatherUpdate(city) {
  const xhr = new XMLHttpRequest()
  xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7ab08175a72dd10545617f80415fd5ca`)

  xhr.send()
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found")
    } else {
      let data = JSON.parse(xhr.response)
      cityName.innerHTML = data.name
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`
      main.innerHTML = data.weather[0].main
      discription.innerHTML = data.weather[0].description
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
  }
 }
