import { WrapDiv, StyledInput, SubmitInput } from "./style";
import react, {useState} from "react";
import { useRecoilState } from "recoil";
import success from "../../recoil/loginSuccess";
const Login = ()=>{
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useRecoilState(success);
    const onSubmitEvent = (event)=>{
        event.preventDefault();
        if (id === "admin" && password==="admin"){
            setLoginSuccess(true);
        } else {
            alert("로그인에 실패하였습니다.");
        }
    }

    return(
        <WrapDiv onSubmit={(e)=>onSubmitEvent(e)}>
            <div style={{color: 'black', fontSize:'0.8em'}}>아이디</div>
            <StyledInput type="text" value={id} onChange={(e)=> setId(e.target.value)}/>
            <div style={{color: 'black', fontSize:'0.8em'}}>비밀번호</div>
             <StyledInput type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <SubmitInput type="submit" value="로그인"/>
        </WrapDiv>
    )
}

export default Login;