import React, { useEffect } from "react";
import axios from "axios";

function GetData() {
  async function getData() {
    try {
      const response = await axios.get(
        "http://192.168.3.125:8080/api/vup?date=2023-01-19&device_id=AS00010_E00002"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
export default GetData;
