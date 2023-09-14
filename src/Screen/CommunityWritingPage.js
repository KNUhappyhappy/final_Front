// import "bootstrap/dist/css/bootstrap.min.css";

import "../css/CommunityWritingPage.css";
import React, { useState } from "react";

// import { FileUploader } from "react-drag-drop-files";
//npm install react-drag-drop-files //파일 업로드가 가능하도록하는 라이브러리

function CommunityWritingPage() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleRegisterButtonClick = () => {
    setIsBlurred(true); // 버튼 클릭 시 블런 효과 활성화
  };

  return (
    <>
      <div className={`CommunityWritingPage ${isBlurred ? "blurred" : ""}`}>
        <div className="CommunityWritingPageInner">
          <div className="CommunityWritingBanner">
            <div className="CommunityWritingBannerInner">
              <div className="CommunityWritingPrecautions">
                <span>안전정보 외 다른 게시글 작성 시 삭제될 수 있습니다.</span>
              </div>
              <div className="CommunityWritingBannerImgBox">
                <span>배너 이미지를 등록해주세요!</span>
                <div className="ImgAttachBtn">
                  <button>첨부하기</button>
                  {/* 첨부하기 버튼 클릭 시 내 컴퓨터 파일이 열림 */}
                </div>
              </div>
            </div>
          </div>
          <div className="CommunityWritingBox">
            <div className="CommunityWritingBoxInner">
              <div className="CommunityWritingBoxToolBar"></div>
              {/* 글꼴 수정 툴바 */}
              <div className="CommunityWritingBoxTitle">
                <input placeholder="제목을 입력해주세요"></input>
              </div>
              <div className="CommunityWritingBoxContents">
                <input placeholder="내용을 입력해주세요"></input>
              </div>
              <div className="CommunityWritingBoxCategory">
                <div className="CommunityWritingBoxCategorySelect">
                  <span>#카테고리를 선택하세요</span>
                  <CommunityCategoryBoxes />
                </div>
                <div className="CommunityWritingBtn">
                  <button onClick={handleRegisterButtonClick}>등록하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CommunityCategoryBoxes() {
  return (
    <div className="CommunityCategoryBoxes">
      <div className="CommunityCategoryBox category1">
        <span>자연재해</span>
      </div>
      <div className="CommunityCategoryBox category2">
        <span>운전</span>
      </div>
      <div className="CommunityCategoryBox category3">
        <span>문화</span>
      </div>
      <div className="CommunityCategoryBox category4">
        <span>대중교통</span>
      </div>
      <div className="CommunityCategoryBox category5">
        <span>시장</span>
      </div>
      <div className="CommunityCategoryBox category6">
        <span>여행 꿀팁</span>
      </div>
      <div className="CommunityCategoryBox category7">
        <span>의료</span>
      </div>
      <div className="CommunityCategoryBox category8">
        <span>식품</span>
      </div>
    </div>
  );
}

export default CommunityWritingPage;
