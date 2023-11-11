// import "bootstrap/dist/css/bootstrap.min.css";

//커뮤니티에서 작성된 글을 클릭했을 때 나오는 페이지

import "../css/CommunityDetailPage.css";
import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  BsHandThumbsUp,
  BsHandThumbsUpF,
  BsHandThumbsD,
  BsHandThumbsDown,
} from "react-icons/bs";
import {
  AiOutlineShareAlt,
  AiOutlineMore,
  AiFillEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import CommentInput from "../components/CommentInput";
import Comment from "../components/Comment";

function CommunityDetailPage() {
  return (
    <>
      <div className="CommunityDetailPage">
        <div className="CommunityDetailPageInner">
          <CommunityDetailContents />
          <CommunityDetailComments />
        </div>
      </div>
    </>
  );
}

function CommunityDetailContents() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="CommunityDetailContents">
        <div className="CommunityDetailContentsInner">
          <div className="CommunityDetailContentsTop">
            <div className="CommunityDetailContentsReturn">
              <Link to="/Community" className="returnBtn">
                <span>← 돌아가기</span>
              </Link>
            </div>
            <div className="CommunityDetailContentsTitle">
              <div className="CommunityDetailContentsCategory category2">
                <span>운전</span>
              </div>
              <div>
                <h1>뭐 일본에서 아무 생각 없이 운전한다고?</h1>
              </div>
              <div className="CommunityDetailContentsTitleMenu">
                <div className="CommunityDetailContentsTitleMenuBarShare">
                  <AiOutlineShareAlt />
                  <span>공유하기</span>
                  <AiOutlineMore
                    className="AiOutlineMore"
                    onClick={handleDropdownClick}
                  />
                  {showDropdown && (
                    <div className="dropdownMenu">
                      <span className="CommunityPostModify">
                        수정
                        <AiFillEdit />
                      </span>
                      <span className="CommunityPostDelete">
                        삭제
                        <AiOutlineDelete />
                      </span>
                    </div>
                  )}
                </div>
                <div className="CommunityDetailContentsTitleMenuBar"></div>
              </div>
            </div>
            <div className="CommunityDetailContentsInfo">
              <div className="CommunityDetailContentsWriter">by 작성자</div>
              <div className="CommunityDetailContentsDate">2023 . 5 . 20</div>
            </div>
          </div>
          <div className="CommunityDetailContentsMain">
            <div className="CommunityDetailContentsMainImg1"></div>
            <div className="CommunityDetailContentsMainIntro1">
              <span>
                일본에서는 좌측 주행을 하며 핸들은 우측에 위치하고 있습니다
              </span>
              <span>
                오키나와에서 공항에 도착한 후 처음으로 이 점에 놀랐습니다
              </span>
              <span>
                우리나라와는 반대로 달리는 차량들을 보니 실감이 나지 않았습니다
              </span>
              <span>
                이번 여행에서 일본의 도로와 운전 법규에 대해 좀 더 알아보기 위해
              </span>
              <span>
                오키나와 남부에서 북부, 다시 중부 그리고 다시 남부 공항까지
                운전하면서
              </span>
              <span>
                다양한 도로 상황을 경험해보며 이를 통해 얻은 정보와 팁을
                영상으로 제작해보았습니다
              </span>
            </div>
            <div className="CommunityDetailContentsMainImg2"></div>
            <div className="CommunityDetailContentsMainIntro2">
              <span>
                영상을 참고하여 도로 주행 시에 헷갈리던 부분을 이해하고 안전
                주행하세요-!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CommunityDetailComments() {
  const [upCountNum, setupCountNum] = useState(0); //추천
  const [downCountNum, setDownCountNum] = useState(0); //비추천

  const handleUpClick = () => {
    // 추천 클릭 시 upCountNum 상태를 +1 업데이트
    setupCountNum(upCountNum + 1);
  };

  const handleDownClick = () => {
    // 비추천 클릭 시 downCountNum 상태를 +1 업데이트
    setDownCountNum(downCountNum + 1);
  };

  const [comments, setComments] = useState([
    //댓글창 세팅 초기화
    { id: 1, name: "Minjoo Park", content: "I like it!" },
  ]);

  const [like, setLike] = useState(0); //좋아요 버튼구현

  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content,
      };
      console.log(name);
      console.log(content);
      setComments((comments) => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments]
  );

  return (
    <>
      <div className="CommunityDetailComments">
        <div className="CommunityDetailCommentsInner">
          <div className="CommunityDetailCommentsRecommend">
            <span></span>
            <BsHandThumbsUp className="UpIcon" onClick={handleUpClick} />
            <span className="RecoommandNum">{upCountNum}</span>
            <BsHandThumbsDown className="DownIcon" onClick={handleDownClick} />
            <span className="RecoommandNum">{downCountNum}</span>
          </div>

          <CommentInput onInsert={onInsert} />
          <div style={{ marginBottom: "4rem" }}>
            {comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  content={comment.content}
                />
              );
            })}
          </div>

          <div className="CommunityDetailCommentsLists"></div>
        </div>
      </div>
    </>
  );
}

export default CommunityDetailPage;
