const API_KEY="b08efe011c3875e59ec60d2c50f03a25";


function onGeoOk(position){
 const lat = position.coords.latitude;
 const lon = position.coords.longitude;
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //  console.log(url);
 fetch(url).then(response => response.json()).then(data =>{
    // console.log(data.name, data.weather[0].main)
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main}/ ${data.main.temp}`;
 });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
// 모든게 잘 됐을 때 실행될 함수, 오류가 났을 떄 실행될 함수 