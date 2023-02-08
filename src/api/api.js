import axios from "axios";
import { dateToString } from "../js/dateToString";
export async function postSourceSink(source, device_id, value) {
  const date = dateToString(new Date());
  const params = {
    source: String(source),
    table: device_id,
    dt: date,
    value: value,
  };
  console.log(params);
  try {
    const response = await axios.post(
      `http://192.168.3.125:8080/api/vup/input
      `,
      params
    );
  } catch (e) {
    console.log(e);
  }
}
