import axios from "axios";
import { dateToString } from "./js/dateToString";
export async function postSourceSink(source, device_id, value) {
  const date = dateToString(new Date());
  const jsonValue = JSON.stringify(value);
  try {
    const response = await axios.post(
      `http://192.168.3.125:8080/api/vup/input?source=${source}&table=${device_id}&dt=${date}&value=${value}
      )} `
    );
  } catch (e) {
    console.log(e);
  }
}
