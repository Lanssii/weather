import { useState } from "react";

export default function Test() {
  const [city, setCity] = useState("");
  console.log(city);

  const url = "https://goweather.xyz/v2/weather/";

  console.log(url + city);
  return (
    <>
      <div className="pt-10 pl-10">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border-2 border-gray-300 rounded-xl p-2 focus:outline-none "
        />
        <button className="border-2 border-amber-200 rounded-2xl p-2">
          Search
        </button>
      </div>
    </>
  );
}
