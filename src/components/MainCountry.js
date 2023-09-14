import "../css/MainPage.css";
import React, { useState, useEffect } from "react";

function MainCountry() {
  return (
    <>
      <div className="MainCountry">
        <div className="MainCountryInner">
          <div className="MainCountryIntro">
            <h2>많이 찾는 국가 TOP3</h2>
            <h5>많이 여행하는 국가인 만큼 안전도 같이 대비해요!</h5>
          </div>
          <MainCountryBoxes />
        </div>
      </div>
    </>
  );
}

function MainCountryBoxes() {
  const [JapanImgIndex, setJapanImgIndex] = useState(0);
  const [MongoliaImgIndex, setMongoliaImgIndex] = useState(0);
  const [SingaporeImgIndex, setSingaporeImgIndex] = useState(0);

  const JapanImages = [
    "Images/MainPage/japanBackground1.png",
    "Images/MainPage/japanBackground2.png",
    "Images/MainPage/japanBackground3.png",
  ];

  const MongoliaImages = [
    "Images/MainPage/mongoliaBackground1.png",
    "Images/MainPage/mongoliaBackground2.png",
    "Images/MainPage/mongoliaBackground3.png",
  ];

  const SingaporeImages = [
    "Images/MainPage/singaporeBackground1.png",
    "Images/MainPage/singaporeBackground2.png",
    "Images/MainPage/singaporeBackground3.png",
  ];

  useEffect(() => {
    // 각 이미지 박스별로 순환을 위한 인터벌 설정
    const japanInterval = setInterval(() => {
      setJapanImgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    const mongoliaInterval = setInterval(() => {
      setMongoliaImgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    const singaporeInterval = setInterval(() => {
      setSingaporeImgIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(japanInterval);
      clearInterval(mongoliaInterval);
      clearInterval(singaporeInterval);
    };
  }, []);

  return (
    <div className="MainCountryBoxes">
      <div className="MainCountryBox">
        <img
          src={JapanImages[JapanImgIndex]}
          alt={`CountryBackground${JapanImgIndex}`}
          className={`FadingImage ${JapanImgIndex !== 0 ? "fadeInOut" : ""}`}
        />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>일본 (Japan)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
      <div className="MainCountryBox">
        <img
          src={MongoliaImages[MongoliaImgIndex]}
          alt={`CountryBackground${MongoliaImgIndex}`}
          className={`FadingImage ${MongoliaImgIndex !== 0 ? "fadeInOut" : ""}`}
        />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>몽골 (Mongolia)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
      <div className="MainCountryBox">
        <img
          src={SingaporeImages[SingaporeImgIndex]}
          alt={`CountryBackground${SingaporeImgIndex}`}
          className={`FadingImage ${
            SingaporeImgIndex !== 0 ? "fadeInOut" : ""
          }`}
        />
        <div className="MainCountryBoxIntro">
          <div className="CountryName">
            <img
              src="images/MainPage/ping.png"
              alt="ping"
              style={{ width: 25, height: 25 }}
            />
            <span>싱가포르 (Singapore)</span>
          </div>
          <div className="CountryDetailMenu">
            <span>여행 가능</span>
            <span>자세히 보기 →</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCountry;
