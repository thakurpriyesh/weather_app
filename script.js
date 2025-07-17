const apikey = "d562c235f8369bca2407fb11f07b1ec6";
const card = document.querySelector(".card");
const search = document.querySelector(".search");
const input = document.getElementById("input");
const button = document.getElementById("button");

const colors = {
    clear: "rgba(0, 0, 0, 1)",
    clouds: "rgba(0, 0, 0, 1)",
    rain: "rgba(0, 0, 0, 1)",
    snow: "rgba(0, 0, 0, 1)",
    thunderstorm:"rgba(0, 0, 0, 1)",
    drizzle:" rgba(0, 0, 0, 1)"
};

button.addEventListener("click", () => {
    const city = input.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector(".welcome").classList.add("hidden");
            document.querySelector(".weather").classList.remove("hidden");
            document.querySelector(".temp").classList.remove("hidden");
            document.querySelector(".details").classList.remove("hidden");

            const condition = data.weather[0].main.toLowerCase();
            const bgcolor = colors[condition] || "rgba(0, 0, 0, 1)";
            
            card.style.backgroundColor = bgcolor;

            document.getElementById("temperature").innerHTML = `${data.main.temp}<sup>°C</sup>`;
            document.getElementById("humidity-value").textContent = `${data.main.humidity}%`;
            document.getElementById("wind-value").textContent = `${data.wind.speed}Km/H`;
            document.getElementById("description").textContent = `${data.weather[0].description}`;
        });
    
});
input.addEventListener("keydown",(e)=> {
    if(e.key==="Enter"){
        const city = input.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector(".welcome").classList.add("hidden");
            document.querySelector(".weather").classList.remove("hidden");
            document.querySelector(".temp").classList.remove("hidden");
            document.querySelector(".details").classList.remove("hidden");

            const condition = data.weather[0].main.toLowerCase();
            const bgcolor = colors[condition] || "rgba(0, 0, 0, 1)";
            
            card.style.backgroundColor = bgcolor;

            document.getElementById("temperature").innerHTML = `${data.main.temp}<sup>°C</sup>`;
            document.getElementById("humidity-value").textContent = `${data.main.humidity}%`;
            document.getElementById("wind-value").textContent = `${data.wind.speed}Km/H`;
            document.getElementById("description").textContent = `${data.weather[0].description}`;
        });
    
    }
})
