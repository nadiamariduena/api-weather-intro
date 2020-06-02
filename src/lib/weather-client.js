// description on the bottom
//
//
const axios = require("axios");
const url = require("url");

//
// -------------1
class OpenWeatherClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://api.openweathermap.org/data/2.5/";
  }
  // -------------2
  get(endpoint) {
    const URL =
      url.resolve(this.baseUrl, endpoint) +
      `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response));
  }
  // -------------3
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`;
    if (country) {
      endpoint += `,${country}`;
    }
    return await this.get(endpoint);
  }
}
module.exports = OpenWeatherClient;
//
//
//
//
//
// ----------------------------------------------*********---------------------------------------
/*

// in this file you must to create the class template
// here we will use AXIOS
//
const axios = require("axios");
//
//
//
const url = require("url");
// remember fs file system
//
//

// URL only understand certains characters but the ones below are between the ones
// it donsnt care: 
// '' space
// < > " ` \r \n \t { } | \ ^ '

// Legacy API#
// Within the Legacy API, spaces (' ') and the following characters will be automatically escaped in the properties of URL objects:

// < > " ` \r \n \t { } | \ ^ '

// link: https://nodejs.org/api/url.html#url_url_resolve_from_to

// this folder should also go inside the .gitignore because is data sensitive
//
//
// -----------------------------------------------
//                                  *
// -----------------------------------------------
//
//
// class / constructor
// Remember classes always start with uppercase
//
class OpenWeatherClient {
  //_1 constructor will receive API key
  constructor(apiKey) {
    // _2 then it will assign to this.apiKey
    this.apiKey = apiKey;

    //____3
    // Go to this link : https://openweathermap.org/current
    // and grab the following from the first link: //api.openweathermap.org/data/2.5/  then type this:
    //   this.baseUrl = "http://api.openweathermap.org/data/2.5/";

    // By city name
    // Description:
    // You can call by city name or city name, state code and country code. API responds with a list of weather parameters that match a search request.
    // API call:
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

    this.baseUrl =
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c641412b61c71dc990c82502e16befa0";
  }
  //   NOW BUILD THE url
  //   if you forgot about getter and settle check that again
  get(endpoint) {
    //   i will use &units=metric ,because we are not in US to use the us stuff
    // i will add the units at the last part, after the city
    const URL = url.resolve(this.baseUrl, endpoint) +  `&units=metric&appid=${this.apiKey}`;
    //
    // Why i am returning AXIOS?, because i dont know when this url will be finish:
    //  const URL = url.resolve(this.baseUrl, endpoint) +  `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response));
  }
  // build asynchronous function
  // i want to receive country and city
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`;
    // if (country has a value) then add the endpoint which will inject more text to it
    if (country) {
      // so it will only add a country if there s a country typed
      endpoint += `,${country}`;
    }
    return await this.get(endpoint);
  }
}
//
//
// -----------------------------------------------
//                                  *
// -----------------------------------------------
//
//
module.exports = OpenWeatherClient;
// 
// 
*/
