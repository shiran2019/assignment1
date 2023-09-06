// import axios from "axios";

// const WeatherService = {
//   getWeatherByCityCode: async (cityCode) => {
//     try {
//       console.log("hi");
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
//       );
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       throw error;
//     }
//   },
// };
// export default WeatherService;





// import axios from "axios";

// const WeatherService = {
//   getWeatherByCityCode: async (cityCode) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
//       );

//       // Wrap each item in the 'list' array with a 'cnt' property set to 1
//       const modifiedData = response.data.list.map((item) => ({
//         cnt: 1,
//         list: [item],
//       }));

//       return modifiedData;
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//       throw error;
//     }
//   },
// };

// export default WeatherService;




import axios from "axios";

const CACHE_EXPIRATION = 5 * 60 * 1000; // expire cache after 5 minutes

const WeatherService = {
  getWeatherByCityCode: async (cityCode) => {
    
    const cachedData = localStorage.getItem(process.env.REACT_APP_CACHE_KEY);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {


        console.log("Returning cached data");
    console.log(data);

        const eData = data.list.map((item) => ({
          cnt: 1,
          list: [item],
        }));

        console.log(eData);
        return eData;
      }

    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      );

      // Cache the fetched data
      const timestamp = Date.now();
      localStorage.setItem(
        process.env.REACT_APP_CACHE_KEY,
        JSON.stringify({ timestamp, data: response.data })
      );

      
      const modifiedData = response.data.list.map((item) => ({
        cnt: 1,
        list: [item],
      }));

      console.log("Returning fetched data");
      console.log(modifiedData);
      return modifiedData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

export default WeatherService;
