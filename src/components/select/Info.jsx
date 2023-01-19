import React from "react";
import "./Info.css";
const Info = ()=>{
    return(
        <div className = "select">
    <form>
        <div className="titleFont">
            날짜
        </div>
        <input type="date" className = "input"/>
    </form>
    <form>
        <div className="titleFont">
            Device Id
        </div>
        <select className = "input">
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
            <option>1</option>
        </select>
    </form>
    </div>);
}
export default Info;