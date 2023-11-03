import "../css/MainPage.css";
import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel"; // ItemsCarousel 라이브러리를 임포트해야 합니다.

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

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="CaroueslCard">First card</div>
        <div className="CaroueslCard">Second card</div>
        <div className="CaroueslCard">Third card</div>
        <div className="CaroueslCard">Fourth card</div>
      </ItemsCarousel>
    </div>
  );
}

export default MainReview;
