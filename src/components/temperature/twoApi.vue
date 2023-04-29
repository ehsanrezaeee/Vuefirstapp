<template>
  <div class="container">
    <input v-model="search" placeholder="Search for a city" />
    <button @click="searchCity">Search</button>
    <div v-if="result" class="city-details">
      <h2>{{ result.city }}</h2>
      <p>Latitude: {{ result.lat }}</p>
      <p>Longitude: {{ result.lng }}</p>
      <p v-if="temperature">Temperature: {{ temperature }}°C</p>
      <p v-if="wind">Wind Speed: {{ wind }} m/s</p>
    </div>
    <div v-else>
      <p>No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      data: [], // this will hold the data received from API
      result: null, // this will hold the result of the search
      temperature: null, // this will hold the temperature of the city
      wind: null,
    };
  },
  methods: {
    searchCity() {
      // make the first API call to get the latitude and longitude of the city
      // replace CITY_API_ENDPOINT with the actual endpoint URL
      fetch("ir2.json")
        .then((response) => response.json())
        .then((data) => {
          this.data = data; // store the data in the component's data property
          this.result = this.data.find(
            (city) => city.city.toLowerCase() === this.search.toLowerCase()
          );
          if (this.result) {
            // make the second API call to get the temperature of the city
            // replace WEATHER_API_ENDPOINT with the actual endpoint URL
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.result.lat}&longitude=${this.result.lng}&current_weather=true`;
            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                this.temperature = data.current_weather.temperature;
                this.wind = data.current_weather.windspeed;
              })
              .catch((error) => console.error(error));
          }
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

input {
  padding: 10px;
  margin-right: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

button {
  margin: 1rem;
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px #ccc;
}

.city-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  margin: 5px 0;
}
</style>
