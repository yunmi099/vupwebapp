import {useMemo, useState} from "react";
import RefContext from "./refContext.js";

const LoginProvider = ({children})=>{
    const [inputRef, setInputRef] = useState([]);
    const value = useMemo(()=>(
        {inputRef, setInputRef}),[inputRef, setInputRef]
    );

    return <RefContext.Provider value={value}>{children}</RefContext.Provider>
}
export default LoginProvider;