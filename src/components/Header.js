import "../css/Header.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="HeaderFix">
        <div className="HeaderMain">
          <div className="HeaderInner">
            <Link to="/" className="header_logo">
              <img
                className="header_logo-img"
                src="images/headerLogo.png"
                alt="header_logo"
              />
              <img src="images/headerLogo2.png" alt="headerLogo2" />
            </Link>
            <div className="headerCategories">
              <Link to="/">
                <span className="headerCategoriesList">소개</span>
              </Link>
              <Link to="NationalSecurity">
                <span className="headerCategoriesList">안전정보</span>
              </Link>
              <Link to="Community">
                <span className="headerCategoriesList">커뮤니티</span>
              </Link>
              <div className="headerCategorieBox">
                <Link to="/MyPage">
                  <button>마이페이지</button>
                </Link>
              </div>
              <Link to="/login">
                <div className="headerCategorieBox">
                  <button>로그인</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
