//
// __2
const OpenWeatherClient = require("./weather-client");
//
//----------------------------------
//
// __1
const myKey = require("../../config");
// this corresponds to the data inside the config.js which is the api key
// you can write js or let it at config, is also fine.
const API_KEY = myKey;
// the API_KEY  is now myKey and what it contains.
//
function formatData(data) {
  const result = `It is now ${data.main.temp}\u00B0C in ${data.name}, ${
    data.sys.country
  } 
  Today's weather ${data.weather
    .map((condition) => condition.description)
    .join(", ")} `;
  return result;
}

//----------------------------------
// pass the key here once you are done with the functions inside the weather-client.js
// and that is of course imported on top in line 1
//
//
// __3 this fucntion weather is connected to the weather inside the index.js ...   weather(args[0], args[1]);
// and this weather function is receiving city  args[0] and country args[1])
module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  //   console.log(client);
  const currentData = await client.getWeather(city, country);
  console.log(currentData);
  //
  return formatData(currentData);
};
