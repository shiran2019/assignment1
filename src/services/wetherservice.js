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


import axios from "axios";

const WeatherService = {
  getWeatherByCityCode: async (cityCode) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?id=${cityCode}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      );

      // Wrap each item in the 'list' array with a 'cnt' property set to 1
      const modifiedData = response.data.list.map((item) => ({
        cnt: 1,
        list: [item],
      }));

      return modifiedData;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  },
};

export default WeatherService;
