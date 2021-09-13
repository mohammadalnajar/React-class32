export const get5Days = (array) => {
  const result = array.list.map((item) => {
    return {
      day: item.dt_txt,
      temp: (item.main.temp_max - 273.15).toFixed(2),
    };
  });

  return result;
};
