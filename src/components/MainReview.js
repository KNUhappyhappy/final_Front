import "../css/MainPage.css";
import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel"; // ItemsCarousel 라이브러리를 임포트해야 합니다.
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

function MainReview() {
  return (
    <>
      <div className="MainReview">
        <div className="MainReviewInner">
          <div className="MainReviewIntro">
            <h2>여행을 안전하게, 여행자들의 리뷰!</h2>
            <h5 className="MainReviewIntroSub">
              이미 여행을 다녀온 회원들의 리뷰와 조언을 통해 앞으로 방문할
              여행지를 미리 대비하세요!
            </h5>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

function Carousel() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  const ARRAY = [0, 1, 2, 3, 4];

  function Rating() {
    const getRandomBooleanArray = () => {
      const randomStars = Math.floor(Math.random() * 3) + 3; // 3부터 5까지 랜덤 별 수
      const stars = new Array(5).fill(false).fill(true, 0, randomStars);
      return stars.sort(() => Math.random() - 0.5);
    };

    const [clicked, setClicked] = useState(getRandomBooleanArray());

    const handleStarClick = (index) => {
      //별을 클릭 했을 시
      let clickStates = [...clicked];
      for (let i = 0; i < 5; i++) {
        clickStates[i] = i <= index ? true : false;
      }
      setClicked(clickStates);
    };

    const sendReview = () => {
      let score = clicked.filter(Boolean).length;
      // fetch('http://52.78.63.175:8000/movie', {
      //   method: 'POST',
      //   Headers: {
      //     Authorization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
      //   },
      //   body: JSON.stringify({
      //     movie_id: 1,
      //     star: score,
      //   }),
      // });
    };

    return (
      <Wrap>
        <Stars>
          {ARRAY.map((el, idx) => {
            return (
              <FaStar
                key={idx}
                size="50"
                onClick={() => handleStarClick(el)}
                className={clicked[el] ? "yellowStar" : ""}
              />
            );
          })}
        </Stars>
      </Wrap>
    );
  }

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={
          <button className="CarouselBtn">
            <BsChevronLeft />
          </button>
        }
        rightChevron={
          <button className="CarouselBtn">
            <BsChevronRight />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="CaroueslCard">
          <div className="CaroueslCardInner">
            <div className="profileImg">
              <img
                className="profileImg"
                src="images/MainPage/people1.jpg"
                alt="profileImg"
              />
            </div>
            <div className="CaroueslCardDetail">
              <div className="ReviewBox1">
                <span className="nickname">TravelLover101</span>
                <span className="Nation">프랑스</span>
              </div>
              <Rating />
              <span className="SafetyReview">
                생생한 문화와 역사를 체험할 수 있는 프랑스에서의 여행은 정말
                멋진 경험이었습니다.
                <br />
                그러나, 주요 관광지에서는 소매치기를 조심해야 하며,
                <br />
                밤늦은 시간에는 가능하면 관광지 주변을 피하는 것이 좋습니다.
                <br />
                전반적으로 안전하게 여행을 즐길 수 있었습니다.
              </span>
            </div>
          </div>
        </div>
        <div className="CaroueslCard">
          <div className="CaroueslCardInner">
            <div className="profileImg">
              <img
                className="profileImg"
                src="images/MainPage/people2.jpg"
                alt="profileImg"
              />
            </div>
            <div className="CaroueslCardDetail">
              <div className="ReviewBox1">
                <span className="nickname">SakuraFan88</span>
                <span className="Nation">일본</span>
              </div>
              <Rating />
              <span className="SafetyReview">
                일본은 깨끗하고 안전한 나라로 여행하기 좋습니다.
                <br />
                대중교통이 잘 발달해 있어 이동하기 편리하고, 많아 도움을
                <br />
                친절한 사람들이 필요로 할 때 언제든지 도움을 받을 수 있었습니다.
                <br />
                그러나, 일본은 지진이 잦은 국가이므로,
                <br />
                자연 재해에 대비한 안전 지침을 숙지하고, 항상 최신 정보를
                확인하는 것이 중요합니다.
              </span>
            </div>
          </div>
        </div>
        <div className="CaroueslCard">
          <div className="CaroueslCardInner">
            <div className="profileImg">
              <img
                className="profileImg"
                src="images/MainPage/people3.jpg"
                alt="profileImg"
              />
            </div>
            <div className="CaroueslCardDetail">
              <div className="ReviewBox1">
                <span className="nickname">SunSeeker77</span>
                <span className="Nation">멕시코</span>
              </div>
              <Rating />
              <span className="SafetyReview">
                멕시코는 맛있는 음식과 다양한 문화를 경험할 수 있는 훌륭한
                여행지입니다.
                <br />
                그러나, 일부 지역에서는 범죄율이 높아 주의가 필요합니다.
                <br />
                특히 밤에는 안전한 지역에서만 활동하는 것이 좋습니다.
              </span>
            </div>
          </div>
        </div>
        <div className="CaroueslCard">
          <div className="CaroueslCardInner">
            <div className="profileImg">
              <img
                className="profileImg"
                src="images/MainPage/people4.jpg"
                alt="profileImg"
              />
            </div>
            <div className="CaroueslCardDetail">
              <div className="ReviewBox1">
                <span className="nickname">AdventureEnthusiast56</span>
                <span className="Nation">호주</span>
              </div>
              <Rating />
              <span className="SafetyReview">
                호주는 다양한 야생 동물과 아름다운 자연을 체험할 수 있는 멋진
                여행지입니다.
                <br />
                대부분의 지역이 안전하나, 야생 동물을 만날 수 있는 지역에서는
                주의가 필요합니다.
                <br />그 외에는 호주에서의 여행은 매우 안전하고 즐거웠습니다.
              </span>
            </div>
          </div>
        </div>
      </ItemsCarousel>
    </div>
  );
}

export default MainReview;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

// :hover svg {
//   color: #fcc419;
// }

// & svg:hover ~ svg {
//   color: gray;
// }
