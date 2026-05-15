import { useEffect, useState } from "react";

type Weather = {
  temperature: string;
  wind: string;
  description: string;
};

export default function Test() {
  const [city, setCity] = useState<string>("");

  const [weather, setWeather] = useState<Weather | null>(null);
  const [triger, setTrigger] = useState<number>(0);

  console.log(triger);
  const url = "https://goweather.xyz/v2/weather/";

  useEffect(() => {
    if (!city) return;
    const fetchWeather = async () => {
      try {
        const response = await fetch(url + city);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchWeather();
  }, [triger]);

  console.log(city);
  console.log(url + city);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center">
            <input
              type="text"
              value={city}
              placeholder="Write city..."
              onChange={(e) => setCity(e.target.value)}
              className="border-2 border-gray-300 rounded-xl p-2 focus:outline-none"
            />
            <button
              className="border-2 border-amber-200 rounded-2xl p-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-amber-300 ml-2"
              onClick={() => setTrigger((prev) => prev + 1)}
            >
              Search
            </button>
          </div>
          <div>
            {weather && (
              <div className="border p-4 rounded-xl">
                <p>Temperature: {weather.temperature}</p>
                <p>Wind: {weather.wind}</p>
                <p>Description: {weather.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
