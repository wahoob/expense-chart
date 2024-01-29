import React from "react";
import ChartElement from "./ChartElement";
import DrawLine from "./DrawLine";


function App() {

  return (
    <div className="container">
      <div className="card">
        <header>
          <div className="header__balance-box">
            <p>My balance</p>
            <h2>$921.48</h2>
          </div>
          <div className="header__balance-circle" />
        </header>
        <main>
          <h1>Spending - Last 7 days</h1>
          <ChartElement />
          <DrawLine />
          <div className="main__details">
            <div className="main__details_total">
              <p>Total this month</p>
              <h1>$478.33</h1>
            </div>
            <div className="main__details_rate">
              <h3>+2.4%</h3>
              <p>from last month</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
