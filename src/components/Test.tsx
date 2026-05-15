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
      <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-blue-400 via-indigo-50 to-purple-600">
        <div className="flex flex-col gap-6 backdrop:blur-md bg-white/20 border border-white/30 rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-center items-center gap-2">
            <input
              type="text"
              value={city}
              placeholder="Write city..."
              onChange={(e) => setCity(e.target.value)}
              className=" bg-white/20 text-black placeholder:text-black/70 border border-white/30 rounded-2xl px-4 py-3 outline-none
              focus:ring-white/50 transition-all"
            />
            <button
              className="bg-white rounded-2xl px-5 py-3 text-black hover:scale-105 transition:all duration-300 shadow-lg ease-in-out"
              onClick={() => setTrigger((prev) => prev + 1)}
            >
              Search
            </button>
          </div>
          <div>
            {weather && (
              <div className="border p-4 rounded-xl">
                <h1 className="text-2xl font-bold">
                  Temperature: {weather.temperature}
                </h1>
                <p className="text-xl">Wind: {weather.wind}</p>
                <p className="text-xl">Description: {weather.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
