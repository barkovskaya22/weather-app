import React from 'react';
const api = {
  key: "202f7373c7a4dd632de52bc0c9cf00c2 ",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
