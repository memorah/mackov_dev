<template>
  <div class="clock">
    <h1>{{ currentDateTime() }}</h1>
    <span>{{ currentDatum() }}</span>
  </div>
</template>
<script>
export default {
  methods: {
    currentDateTime() {
      const current = new Date();
      /**
        const date = 
        current.getFullYear() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getDate();
      */
      const time =
        current.getHours() + ":" + ("0" + current.getMinutes()).slice(-2);
      //const dateTime = date + " " + time;

      return time;
    },

    currentDatum() {
      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const d = new Date();
      const current = new Date();

      const date = current.getDate() + ". ";

      let dayname = weekday[d.getDay() + 1] + ", ";
      let monthname = month[d.getMonth()];

      let datum = dayname + date + monthname;

      return datum;
    },
  },
};
</script>
<style scoped>
.clock {
  margin-top: 8%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #fefeff;
}
.clock h1 {
  font-size: 4rem;
  font-weight: 300;
  margin: 0;
}
.clock span {
  font-size: 1.15rem;
}
</style>
