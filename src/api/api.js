import axios from "axios";
import { datetimeToString } from "../js/dateToString";
import { dateToString } from "../js/dateToString";
import { onlytimeToString } from "../js/dateToString";
export async function postSourceSink(day, source, device_id, value) {
  // const date = datetimeToString(new Date());
  let date;
  const tempDay = dateToString(new Date());
  if (tempDay === day) {
    date = datetimeToString(new Date());
  } else {
    date = day.concat(" ", onlytimeToString(new Date()));
  }
  const params = {
    source: source === true ? "1" : "2",
    table: device_id,
    dt: date,
    value: value,
  };
  try {
    console.log(params.dt);
    const response = await axios.post(
      `http://192.168.3.125:8080/api/vup/input
      `,
      params
    );
  } catch (e) {
    console.log(params);
    console.log(e);
  }
}
