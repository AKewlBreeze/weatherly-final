import React from "react";
import {shallow, mount, render} from "enzyme";
import WeatherAPI from "./WeatherAPI";
import Main from "../lib/components/Main";
import Current from "../lib/components/Current";
import SevenHour from "../lib/components/SevenHour";
import TenDay from "../lib/components/TenDay";
import Input from "../lib/components/Input";
import Greeting from "../lib/components/Greeting";


describe("main", () => {
it("should have the right child components", () => {
  let wrapper = render(<Main weather={[WeatherAPI]}/>);
  expect(wrapper.find(".current-weather").length).toEqual(1);
  expect(wrapper.find(".greeting").length).toEqual(2);
  expect(wrapper.find(".seven-hour").length).toEqual(1);
  expect(wrapper.find(".ten-day").length).toEqual(1);
});

it("should have a component for current weather forecast ", () => {
    let wrapper = shallow(<Current currentWeather={[WeatherAPI]}/>);
    let currentComponent = wrapper.find(".current-container");
  expect(currentComponent.length).toEqual(1);
  });

it('state.input should change when input is changed',()=>{
    let wrapper = shallow(<Input fetchWeather={()=>{}}/>);
    let button = wrapper.find('.submit-button');
    let input = wrapper.find('.location-input');
    input.simulate("change", {target: {value: "Denver, CO"}});
    expect(wrapper.state("userInput")).toEqual("Denver, CO");
    button.simulate("click");
    expect(wrapper.state("userInput")).toEqual("");
});

});
