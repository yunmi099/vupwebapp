import axios from "axios";
import { datetimeToString } from "../js/dateToString";
export async function postSourceSink(source, device_id, value) {
  const date = datetimeToString(new Date());

  const params = {
    source: source === true ? "1" : "2",
    table: device_id,
    dt: date,
    value: value,
  };
  try {
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
