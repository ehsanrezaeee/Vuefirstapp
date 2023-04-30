<template>
  <div>
    <input type="text" v-model="search" @input="autocomplete" />
    <ul v-if="suggestions.length">
      <li
        v-for="suggestion in suggestions"
        :key="suggestion.city"
        @click="selectSuggestion(suggestion)"
      >
        {{ suggestion.city }}
      </li>
    </ul>
    <button @click="searchCity">{{ $t("buttons.search") }}</button>
    <div v-if="result">
      <h2>{{ result.city }}</h2>
      <p>Temperature: {{ temperature }} C</p>
      <p>Wind: {{ wind }} m/s</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      data: null, // this will hold the data received from API
      suggestions: [], // this will hold the list of autocomplete suggestions
      result: null, // this will hold the result of the search
      temperature: null, // this will hold the temperature of the city
      wind: null,
    };
  },
  mounted() {
    // load the data from ir2.json on mount
    axios
      .get("ir2.json")
      .then((response) => {
        this.data = response.data; // store the data in the component's data property
      })
      .catch((error) => console.error(error));
  },
  methods: {
    autocomplete() {
      // filter the list of cities based on the search term
      this.suggestions = this.data
        ? this.data.filter((city) =>
            city.city.toLowerCase().startsWith(this.search.toLowerCase())
          )
        : [];
    },
    selectSuggestion(suggestion) {
      // update the search term and clear the list of suggestions
      this.search = suggestion.city;
      this.suggestions = [];
    },
    searchCity() {
      if (!this.data) {
        // data not loaded yet, return without searching
        return;
      }
      this.result = this.data.find(
        (city) => city.city.toLowerCase() === this.search.toLowerCase()
      );
      if (this.result) {
        // make the API call to get the temperature of the city
        // replace WEATHER_API_ENDPOINT with the actual endpoint URL
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.result.lat}&longitude=${this.result.lng}&current_weather=true`;
        axios
          .get(url)
          .then((response) => {
            this.temperature = response.data.current_weather.temperature;
            this.wind = response.data.current_weather.windspeed;
          })
          .catch((error) => console.error(error));
      }
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
