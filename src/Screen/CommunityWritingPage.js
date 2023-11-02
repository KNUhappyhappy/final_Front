// import "bootstrap/dist/css/bootstrap.min.css";

import "../css/CommunityWritingPage.css";
import React, {
  useState,
  useEffect,
  useRef,
  placeholder,
  getEditor,
  uploadImage,
  rest,
  value,
} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Quill } from "react-quill";

// import { FileUploader } from "react-drag-drop-files";
//npm install react-drag-drop-files //파일 업로드가 가능하도록하는 라이브러리

function CommunityWritingPage() {
  const [isBlurred, setIsBlurred] = useState(false);
  const quillRef = useRef(null); // quillRef 생성

  const handleRegisterButtonClick = () => {
    setIsBlurred(true); // 버튼 클릭 시 블런 효과 활성화
  };

  // 사용하고 싶은 옵션, 나열 되었으면 하는 순서대로 나열
  const toolbarOptions = [
    ["link", "image", "video"],
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
  ];

  const modules = {
    toolbar: {
      container: toolbarOptions,
    },
  };

  const handleImage = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input.files[0];

      // 현재 커서 위치 저장
      const range = getEditor().getSelection(true);

      // 서버에 올려질때까지 표시할 로딩 placeholder 삽입
      getEditor().insertEmbed(range.index, "image", `/images/loading.gif`);

      try {
        // 필자는 파이어 스토어에 저장하기 때문에 이런식으로 유틸함수를 따로 만들어줬다
        // 이런식으로 서버에 업로드 한뒤 이미지 태그에 삽입할 url을 반환받도록 구현하면 된다
        const filePath = `contents/temp/${Date.now()}`;
        const url = await uploadImage(file, filePath);

        // 정상적으로 업로드 됐다면 로딩 placeholder 삭제
        getEditor().deleteText(range.index, 1);
        // 받아온 url을 이미지 태그에 삽입
        getEditor().insertEmbed(range.index, "image", url);

        // 사용자 편의를 위해 커서 이미지 오른쪽으로 이동
        getEditor().setSelection(range.index + 1);
      } catch (e) {
        getEditor().deleteText(range.index, 1);
      }
    };
  };

  const Editor = ({ placeholder, value, ...rest }) => {
    return (
      // 테마 (bubble, snow, custom) https://quilljs.com/docs/themes/
      <ReactQuill
        {...rest}
        placeholder={placeholder}
        value={value || ""}
        theme="snow"
        modules={modules}
        formats={formats}
      ></ReactQuill>
    );
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
              <Editor className="CommunityWritingBoxContents" />

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

// 옵션에 상응하는 포맷, 추가해주지 않으면 text editor에 적용된 스타일을 볼수 없음
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];
