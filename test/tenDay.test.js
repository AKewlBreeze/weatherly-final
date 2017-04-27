import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.js";
import Main from "../lib/components/Main.js";
import TenDay from "../lib/components/TenDay.js";
import Input from "../lib/components/Input.js";

describe("tenDay", () => {
  let firstDay;
  beforeEach(() => {
    firstDay = shallow(<TenDay tenDay={[WeatherAPI]} />).find(".ten-day").at(0);
  });

  it("should display the first day at the first index", () => {
    let firstDayWeekDay = firstDay.find(".day-of-week").at(0).text();
    expect(firstDayWeekDay).toEqual(
      WeatherAPI.forecast.simpleforecast.forecastday[0].date.weekday
    );
  });

  it("should display an icon for the conditions for the weather at the first hour", () => {
    let firstDayIcon = firstDay.find("img").at(0).html();
    expect(firstDayIcon).toEqual(
      '<img src="http://icons.wxug.com/i/c/k/mostlycloudy.gif" alt="Weather"/>'
    );
    //proper way for testing attribute value?
  });
});
