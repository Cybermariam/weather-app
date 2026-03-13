import React from "react";
import sunnyIcon from "../assets/images/icon-sunny.webp";
import bgMobileImage from "../assets/images/bg-today-small.svg";
import bgDesktopImage from "../assets/images/bg-today-large.svg";
import rainy from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import cloudy from "../assets/images/icon-partly-cloudy.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";
import partlyCloudy from "../assets/images/icon-partly-cloudy.webp";

const WeatherCard = () => {
  const feelSection = [
    {
      text: "Feels Like",
      value: "18°",
    },
    {
      text: "Humidity",
      value: "46%",
    },
    {
      text: "Wind",
      value: "14 km/h",
    },
    {
      text: "Precipitation",
      value: "0 mm",
    },
  ];
  const dailyForecast = [
    {
      day: "Tue",
      img: rainy,
      temp: "20°",
      temp2: "14°",
    },
    {
      day: "Wed",
      img: drizzle,
      temp: "21°",
      temp2: "15°",
    },
    {
      day: "Thu",
      img: sunnyIcon,
      temp: "24°",
      temp2: "14°",
    },
    {
      day: "Fri",
      img: cloudy,
      temp: "25°",
      temp2: "13°",
    },
    {
      day: "Sat",
      img: storm,
      temp: "21°",
      temp2: "15°",
    },
    {
      day: "Sun",
      img: snow,
      temp: "25°",
      temp2: "16°",
    },
    {
      day: "Mon",
      img: fog,
      temp: "24°",
      temp2: "15°",
    },
  ];

  const hourlyForecast = [
    {
      img: overcast,
      time: "3 PM",
      temp: "20°",
    },
    {
      img: partlyCloudy,
      time: "4 PM",
      temp: "20°",
    },
    {
      img: sunnyIcon,
      time: "5 PM",
      temp: "20°",
    },
    {
      img: overcast,
      time: "6 PM",
      temp: "19°",
    },
    {
      img: cloudy,
      time: "7 PM",
      temp: "18°",
    },
    {
      img: fog,
      time: "8 PM",
      temp: "18°",
    },
    {
      img: cloudy,
      time: "9 PM",
      temp: "17°",
    },
    {
      img: overcast,
      time: "10 PM",
      temp: "17°",
    },
  ];
  return (
    <div className="mt-10 md:grid md:grid-cols-[2fr_1fr] md:gap-6 ">
      <div>
        <section
          style={{
            "--bg-mobile": `url(${bgMobileImage})`,
            "--bg-desktop": `url(${bgDesktopImage})`,
          }}
          className="rounded-lg bg-no-repeat min-h-60 bg-cover bg-center flex items-center overflow-hidden rounded-b-3xl  md:flex-row flex-col  px-6 py-20 justify-between bg-(image:--bg-mobile) md:bg-(image:--bg-desktop)                         "
        >
          <div className="text-center">
            <p className="text-3xl md:text-2xl font-semibold">
              Berlin, Germany
            </p>
            <p className="md:text-left mt-2 text-gray-300">
              Tuesday, Aug 5, 2025
            </p>
          </div>
          <div className="flex items-center space-x-6 pt-5 md:pt-0">
            <img src={sunnyIcon} alt="Sunny Icon " className="w-25" />
            <p className="text-8xl md:text-6xl font-semibold italic">20°</p>
          </div>
        </section>

        {/* feel section */}
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 mt-5 ">
          {feelSection.map((feel, index) => (
            <div
              className="bg-(--neutral-700) shadow rounded-xl px-6 py-2 text-gray-300 border-gray-700 border"
              key={index}
            >
              <p className="py-3">{feel.text}</p>
              <p className="text-3xl py-4">{feel.value}</p>
            </div>
          ))}
        </div>
        {/* 
      daily forecast */}

        <div className="mt-8">
          <p>Daily forecast</p>
          <div className="grid gap-5 grid-cols-3 md:grid-cols-7 mt-5 ">
            {dailyForecast.map((daily, index) => (
              <div
                key={index}
                className="bg-(--neutral-700) shadow rounded-xl p-3 text-gray-300 border-gray-700 border "
              >
                <p className="text-center">{daily.day}</p>
                <img src={daily.img} alt={daily.day} />
                <div className="flex justify-between gap-4">
                  <p>{daily.temp}</p>
                  <p>{daily.temp2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* hourlyForecast */}
      <div>
        <div className="my-8 md:my-0 border bg-(--neutral-700) border-gray-700  px-3 py-3 rounded-xl">
          <div className="flex items-center justify-between mb-5">
            <h2 className="">Hourly forecast</h2>
            <select className="bg-(--neutral-600) text-gray-300 px-3 py-1 pl-2 rounded ">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          {hourlyForecast.map((hourly, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-(--neutral-700) shadow rounded-xl  text-gray-300 border-gray-700 border mb-2 px-2"
            >
              <div className="flex items-center ">
                <img src={hourly.img} alt="" className="w-15" />
                <p>{hourly.time}</p>
              </div>
              <p>{hourly.temp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
