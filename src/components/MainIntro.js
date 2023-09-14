import "../css/MainPage.css";

function MainIntro() {
  return (
    <>
      <div className="MainIntro">
        <div className="MainIntroInner">
          <div className="MainIntroSpan">
            <h2>안전행 주요 서비스</h2>
            <h5>대표적인 서비스 3가지를 알려드리겠습니다 </h5>
          </div>
          <MainIntroBoxes />
        </div>
      </div>
    </>
  );
}

function MainIntroBoxes() {
  return (
    <div className="MainIntroBoxes">
      <div className="MainIntroBox Box1">
        <div className="MainIntroBoxInner">
          <div className="MainIntroTitle">
            <h3>여행 경보를 한눈에</h3>
            <span>여행 경보에 따라 주의해야 할 점에 대해 함께 살펴볼까요?</span>
          </div>
          <div className="MainIntroWarning">
            <div className="MainIntroWarningContents warning1">
              <div
                className="MainIntroWarningImg"
                style={{ background: "#F1DFDF" }}
              >
                <div className="warningImg">
                  <img src="images/MainPage/warning1.png" alt="warning1" />
                </div>
              </div>
              <div className="MainIntroWarningSpan">
                <h4>1단계 여행유의</h4>
                <span>여행가능</span>
              </div>
            </div>
            <div className="MainIntroWarningContents">
              <div
                className="MainIntroWarningImg"
                style={{ background: "#D4F5FF" }}
              >
                <div className="warningImg">
                  <img src="images/MainPage/warning2.png" alt="warning2" />
                </div>
              </div>
              <div className="MainIntroWarningSpan">
                <h4>3단계 출국권고</h4>
                <span>여행불가</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MainIntroBox">
        <div className="MainIntroBoxInner">
          <div className="MainIntroBoxTitle">
            <h3>여행 안전 문제없이</h3>
            <span>
              여행 안전부터 숙소, 항공권까지 안전행이 책임지고 알려드릴게요!
            </span>
          </div>
          <div className="AirplaneTicketImg">
            <div className="passportImg">
              <img src="images/MainPage/passport.png" alt="passport" />
            </div>
            <div className="ticketImg">
              <img src="images/MainPage/ticket.png" alt="ticket" />
            </div>
          </div>
        </div>
      </div>
      <div className="MainIntroBox">
        <div className="MainIntroBoxInner">
          <div className="MainIntroBoxTitle">
            <h3>같이 공유해요 커뮤니티</h3>
            <span>
              여행 중 시장에서 물건 구매하기 두려운가요? 커뮤니티를 통해 서로의
              여행 경험을 함께 공유해요!
            </span>
          </div>
          <div className="MainIntroCommunityBoxes">
            <div className="MainIntroCommunityBox">
              <div>
                <img src="images/MainPage/japan.png" alt="japan" />
              </div>
              <div className="MainIntroCommunityBoxIntro">
                <h6>일본</h6>
                <span>자연재해, 운전</span>
              </div>
            </div>
            <div className="MainIntroCommunityBox">
              <div>
                <img src="images/MainPage/singapore.png" alt="singapore" />
              </div>
              <div className="MainIntroCommunityBoxIntro">
                <h6>싱가포르</h6>
                <span>시장 분석, 여행 문화</span>
              </div>
            </div>
            <div className="MainIntroCommunityBox">
              <div>
                <img src="images/MainPage/Mongolia.png" alt="Mongolia" />
              </div>
              <div className="MainIntroCommunityBoxIntro">
                <h6>몽골</h6>
                <span>여행 꿀팁, 대중교통</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainIntro;
