import "../css/common.css"
import "../css/join.css"
import { Link } from "react-router-dom";
import React, {useState} from "react";
import { useDispatch } from "react-redux";


function join(){
    return(
        <div className="join_main">
            <div className="joinBox">
                <div>
                    <p className="join_text">회원가입하기</p>
                    <div className="join_login">
                        <p>계정이 있으신가요?</p>
                        <Link to={"/login"}><p className="join_login-button">로그인</p></Link>
                    </div>
                </div>
                
                <input placeholder="아이디"></input>
                <div className="join_name">
                    <input placeholder="성"></input>
                    <input placeholder="이름"></input>
                </div>
                <input placeholder="이메일"></input>
                <input placeholder="비밀번호"></input>
                <input placeholder="비밀번호 확인"></input>
                <button className="joinConfirm">안전과 함께 가입하기</button>
            </div>
        </div>
    )
}

export default join;