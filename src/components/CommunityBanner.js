// import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import "../css/Community.css";

function CommunityBanner() {
  return (
    <>
      <div className="CommunityBanner">
        <div className="CommunityBannerInner">
          <div className="CommunityBannerBox">
            <div className="CommunityBannerBox1">
              <div className="CommunityBannerIntro">
                <h1>안전 커뮤니티</h1>
                <span>검증된 안전 리뷰들만 모아서 보여드릴게요</span>
                <span>다 같이 안전을 공유해볼까요?</span>
                <button className="postReviewBtn">
                  <Link
                    to="/CommunityWritingPage"
                    className="postReviewBtnLink"
                  >
                    글 작성하기
                  </Link>
                </button>
                {/* 글 작성하기 버튼 클릭 시 글 작성 페이지로 이동 */}
              </div>
              <div className="CommunityBannerImg">
                <img
                  src="Images/CommunityPage/people.png"
                  className="people-img"
                />
              </div>
            </div>
            <div className="CommunityBannerCountryBoxes">
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/japan.png" alt="japan" />
                <h3 className="CommunityBannerCountryName">일본</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/korea.png" alt="korea" />
                <h3 className="CommunityBannerCountryName">대한민국</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/Singapore.png" alt="Singapore" />
                <h3 className="CommunityBannerCountryName">싱가포르</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/China.png" alt="China" />
                <h3 className="CommunityBannerCountryName">중국</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/Mongolia.png" alt="Mongolia" />
                <h3 className="CommunityBannerCountryName">몽골</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/usa.png" alt="usa" />
                <h3 className="CommunityBannerCountryName">미국</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/Vietnam.png" alt="Vietnam" />
                <h3 className="CommunityBannerCountryName">베트남</h3>
              </div>
              <div className="CommunityBannerCountryBox">
                <img src="Images/CommunityPage/Australia.png" alt="Australia" />
                <h3 className="CommunityBannerCountryName">호주</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityBanner;
