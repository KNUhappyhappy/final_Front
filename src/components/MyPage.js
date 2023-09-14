import "../css/Mypage.css";

function MyPage() {
    return (
        <div className="MyPage_main">
            <div className="MyPageBox_div">
                <div className="Profile_div">
                    <img className="Profile_div-img" src="Images/ProfileImage.png" />
                    <p><span>홍길동</span> 님</p>
                </div>
                <div className="Detail_div">
                    <div>
                    <p className="Detail_div-cardName">나의 활동</p>
                    <div className="Detail_div-card">
                        <div className="Detailcard_div">
                            <p>글 작성</p>
                            <p>0 건</p>
                        </div>
                        <div className="Detailcard_div">
                            <p>댓글</p>
                            <p>2 개</p>
                        </div>
                        <div className="Detailcard_div">
                            <p>좋아요</p>
                            <p>43 번</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="mypage_div-natioincard">
                        <p className="Detail_div-cardName">여행정보 즐겨찾기  <span>최대 6개까지 저장 가능</span></p>
                        <div className="mypage_nationcard_div">
                            나라카드
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;