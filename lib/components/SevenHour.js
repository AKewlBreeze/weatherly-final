import React from "react";

const SevenHour = ({ sevenHour }) => {
  if (!sevenHour.length) {
    return (
      <section className="seven-hour no-data">
        <p />
      </section>
    );
  }
  return (
    <section className="seven-hour">
      <div>
        <h1 className="hourly-header">7 Hour Forecast</h1>
      </div>
      {sevenHour[0].hourly_forecast.slice(0, 7).map((hour, index) => {
        return (
          <section className="hourly-weather" key={index}>
            <p>{hour.FCTTIME.civil}</p>
            <img src={hour.icon_url.toString()} alt="Weather" />
            <p>{hour.temp.english}</p>
            <p>{hour.condition}</p>
          </section>
        );
      })}
    </section>
  );
};

export default SevenHour;
