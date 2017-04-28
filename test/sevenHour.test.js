import React from "react";
import { shallow, mount } from "enzyme";
import WeatherAPI from "./WeatherAPI.js";
import Main from "../lib/components/Main.js";
import SevenHour from "../lib/components/SevenHour.js";
import Input from "../lib/components/Input.js";

describe("sevenHour", () => {
  it("should change when input is changed", () => {
    let wrapper = shallow(<SevenHour sevenHour={[WeatherAPI]} />);
  });

  it("should display the forecast for the first hour of the sequence", () => {
    let wrapper = shallow(<SevenHour sevenHour={[WeatherAPI]} />);
    let firstHour = wrapper.find(".hourly-weather").at(0);
    let firstHourTimeStamp = firstHour.find("p").at(0).text();
    expect(firstHourTimeStamp).toEqual(
      WeatherAPI.hourly_forecast[0].FCTTIME.civil
    );
  });

  it("should display the temp for the first hour of the sequence", () => {
    let wrapper = shallow(<SevenHour sevenHour={[WeatherAPI]} />);
    let firstHour = wrapper.find(".hourly-weather").at(0);
    let tempAtFirstHour = firstHour.find("p").at(1).text();
    expect(tempAtFirstHour).toEqual(WeatherAPI.hourly_forecast[0].temp.english);
  });

  // expect(wrapper.find(Foo).get(0).props.foo).to.equal("bar");
});

// line 17, hourly foreast is an array of objects, we want to get the value on the civil property (b/c that's what was passed in) at the fist iteration of of 0. WeatherAPI is our mock data, to access.

// get returns the actual element,
// at returns an enzyme wrapper (.text, .props(), etc)
