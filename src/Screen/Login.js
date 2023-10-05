import React, { useEffect, useState } from "react";
import "../css/Login.css"
import "../css/common.css"
import GoogleAuthLogin from "../components/GoogleAuthLogin"
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import styled from "styled-components";


//사용자 정보 관리 모듈
import { createAction, handleActions } from "redux-actions";
//불변성 관리 패키지
import { produce } from 'immer';
import axios from 'axios';

//id 기억하기
import { useCookies } from 'react-cookie';
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";

function Login(){
    //modal
    const [isOpen, setOpen] = useState(false);
    const onClick = () => {
        var id = document.getElementById('id');
        var pw = document.getElementById('pw');
        if(id.value === ""){
            id.style.border='1px solid red';
            console.log("아이디를 입력해주세요");
        }
        if(pw.value === ""){
            console.log("비밀번호를 입력해주세요");
            pw.style.border='1px solid red';
        }
        if(id.value !== "" && pw.value !== ""){
            setOpen(true);
        }
    };
    
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    //Id 기억하기
    const [isRemember, setIsRemember] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['rememberId']);
    const [Popup, setPopup] = useState(false);

    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const [isAuthenticated, setAuth] = useState(false);
    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value});
    }

    const changeId = (e) => {
        var id = document.getElementById('id');
        setId(e.target.value);
        id.style.border='';
    }

    const changePw = (e) =>{
        var pw = document.getElementById('pw');
        setPw(e.target.value);
        pw.style.border='';
    }
    // const changePw = (e) => {
    //     setIsRemember(e.target.check);
    //     if(e.target.check){
    //         setCookie('rememberId', id, {maxAge: 2000});
    //     }else{
    //         removeCookie('rememberId');
    //     }
    // }

    return(
        <div className="login_main">
            <div className="loginBox">
            <div className="login_intro">
                <p>환영합니다!</p>
                <p><span>안전한 여행준비, 안전행으로</span></p>
                
            </div>
            <div className="accountLogin_biv">
                    <GoogleAuthLogin />
            </div>
            <div>
                <p>OR</p>
            </div>
            <div className="loginbox_div">
                <input className="login_input" id="id" type="text" value={id} onChange={changeId} />
                {/* <label className="input_text">Email</label> */}
                <input className="login_input" id="pw" type="text" onChange={changePw} />
            </div>
            
            <div className="div_checkbox">
                <div><input  className="checkbox_id-remember" type="checkbox" onChange={handleChange} checked={isRemember}/><p>아이디 기억하기</p></div>
                <span>비밀번호를 잊으셨나요?</span>
            </div>
            <div className="login_div">
                <button type="button" onClick={onClick}>로그인</button>
                {isOpen && (<Modal open={isOpen} onClose={() => {setOpen(false);}}/>)}
            </div>
            <div className="login_div-newAccount">
                <p>계정이 없으신가요?</p>
                <Link to={"/join"}><span>&nbsp;&nbsp;&nbsp;회원가입하기</span></Link>
            </div>
            </div>
        </div>
    );
}

export default Login;