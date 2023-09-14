import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../css/common.css"
import "../css/NationalSecurity.css"
import { Link } from "react-router-dom";
import { set } from "immutable";
import { NationContext } from "../api/NationProvider";

function NationalSecurity(){
//     let [nationData, setnationData] = useState([]);

// const getData = async () => {
//     const url = "http://110.165.16.225:8080/nation?idx=2";
//     axios
//         .get(url)
//         .then((res) => {
//             setnationData(res.data);
//             console.log("성공");
//             console.log(res.data);
//         })
//         .catch((Error) => {
//             console.log("실패");
//         })
// }
    // axios({
    //     method: "GET",
    //     url:"http://110.165.16.225:8080/nation?idx=2"
    // }).then(function(res){
    //     console.log(res.data);
    // }).catch(error => {
    //     console.log(error);
    // });
    // const [nations, setNations] = useState([]);
    // useEffect(() => {
    //     fetch('http://110.165.16.225:8080/nation?idx=2')
    //     .then(response => response.json())
    //     .then(data => setNations())
    //     .catch(err => console.error(err));
    // }, [])
 
    const [data, setData] = useState([])
    const context = useContext(NationContext);
    
    return (
        <div className="nationalsecurity_main">
            <div className="searchbar_div">
                <p>안전행을 위해 입력하세요!</p>
                <input className="searchbar_input" type="text" placeholder="일본"></input>
                <button className="searchbar_button">검색</button>
                <button className="searchbar_bookmark">즐겨찾기 저장</button>
            </div>
            <div className="nation_div-grid">
                <div className="nation_div-card">
                    <div className="nationcard_div nation_div-information">
                        <div className="nationcard_nation-div">
                            <div className="nationcard_div-img">국기</div>
                            <div>
                                <div className="nationcard_div-title" values="kor_name">
                                    <h1>{context.kor_name}</h1>
                                </div>
                                <p>nation name</p>
                            </div>
                        </div>
                        <div className="nationcard_detail">
                            <p>대사관 정보</p>
                            <p>대사관 주소 :</p>
                            <p>영사부 주소 : </p>
                            <p>대사관과 영사부 위치가 다르므로 주의 필요</p>
                            <p>대표번호(근무시간 중) :</p>
                            <p>긴급연락처(사건사고 등 긴급상황 발생 시_24시간) : </p>
                        </div>
                        <div className="nationcard_button">
                            <button>외교부 자세히 보기</button>
                            <button>대사관 홈페이지</button>
                        </div>
                    </div>
                </div>
                <div className="nation_div-card nation_div-map">
                    <div className="nationcard_div">
                    지도
                    </div>
                </div>
                <div className="nation_div-card nation_div-alarm">
                    <div className="nationcard_div">
                        <div className="nationcard_div-title">여행경보단계</div>
                        <p>한눈에 보는 여행경보</p>
                        <div className="alarmcard">
                            <div className="alarmcard_div alarmcard_div-black">
                                <img src="Images/NationalPage/alarm_black.png" />
                                <div>
                                    <p className="alarmcard_div-title">여행금지</p>
                                    <p>(여행예정자)여행 금지</p>
                                </div>
                            </div>
                            <div className="alarmcard_div alarmcard_div-red">
                                <img src="Images/NationalPage/alarm_red.png" />
                                <div>
                                    <p className="alarmcard_div-title">출국권고</p>
                                    <p>여행 취소, 연기</p>
                                </div>
                            </div>
                            <div className="alarmcard_div alarmcard_div-yellow">
                                <img src="Images/NationalPage/alarm_yellow.png" />
                                <div>
                                    <p className="alarmcard_div-title">여행자제</p>
                                    <p>불필요한 여행 자제</p>
                                </div>
                            </div>
                            <div className="alarmcard_div alarmcard_div-blue">
                                <img src="Images/NationalPage/alarm_blue.png" />
                                <div>
                                    <p className="alarmcard_div-title">여행유의</p>
                                    <p>신변안전 위험 요인 숙지, 대비</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                </div>
                </div>
                <div className="nation_div-grid2">
                <div className="nation_div-card nation_div-securityImfor">
                    <div className="nationcard_div">
                        <div className="nationcard_div-title">안전정보</div>
                        <p>외교부에서 알려주는 정확한 정보</p>
                    </div>
                </div>
                <div className="nation_div-card">
                    <div className="nationcard_div nation_div-community">
                        <div className="nationcard_div-commu">
                            <div>
                                <div className="nationcard_div-title">안전 커뮤니티</div>
                                <p>검증된 안전리뷰들만 모아서!</p>
                            </div>
                            <button><Link to="/Community" className="commucard_button">안전 커뮤니티 더보기</Link></button>
                        </div>
                    </div>
                </div>
                <div className="nation_div-card nation_div-Calendar">
                    <div className="nationcard_div">
                        <div className="nationcard_div-title">성수기 확인</div>
                        <p>여행하기 적합한지 알아봐요</p>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default NationalSecurity;