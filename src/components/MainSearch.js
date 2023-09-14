import "../css/MainPage.css";

function MainSearch() {
  return (
    <>
      <div className="MainSearch">
        <div className="MainSearchInner">
          <div className="MainSearchH1">
            <h1>모든 세계의 안전정보</h1>
            <h1 className="PageSlogan">"함께하는 안전행"</h1>
          </div>
          <div className="MainSearchImg">
            <img
              className="airplaneImg"
              src="images/MainPage/airplane.png"
              alt="airplane"
            />
            <img
              className="peopleImg"
              src="images/MainPage/people.png"
              alt="people"
              style={{ position: "absolute", top: 368, right: 50 }}
            />
          </div>
          <div className="MainSearchBox">
            <input
              className="MainSearhCountry"
              placeholder="여행국가를 입력해주세요."
            />
            <button className="SearchBtn">
              <img
                className="SearchBtnImg"
                src="images/MainPage/search.png"
                alt="SearchBtn"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearch;
