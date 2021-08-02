import React, { useState } from 'react';
const api = {
  key: "202f7373c7a4dd632de52bc0c9cf00c2",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState(' ');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
      setWeather(result);
      setQuery('');
    });
  }

}

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
    
  let changes = "app";
  if (typeof weather.main != "undefined") {
    if (weather.main.temp > 24) {
       changes = "app warm";
    } else if (weather.main.temp < 15 ) {
      changes = "app cold";
    }
  }
  
  return (
    <div className={changes}>
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°c
          </div>
          <div className="weather">{weather.weather[0].main}</div>
        </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
