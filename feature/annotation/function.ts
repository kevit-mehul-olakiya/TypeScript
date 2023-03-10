const add = (a: string, b: string): string => {
  return a + b;
};
add("5", "3");

const throwError = (message: string): string => {
  if (message) {
    throw new Error(message);
  }
  return "eedf";
};
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};
const logWeather = (todayWeather: { date: Date; weather: string }): void => {
  console.log(todayWeather.date);
};
logWeather(todayWeather);
