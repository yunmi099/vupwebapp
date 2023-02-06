import { useContext } from "react";
import { deviceContext } from "./deviceContext";
export const useDeviceContext = () => useContext(deviceContext);
