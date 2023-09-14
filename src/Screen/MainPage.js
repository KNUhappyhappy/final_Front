// import "bootstrap/dist/css/bootstrap.min.css";

import "../css/MainPage.css";

import MainSearch from "../components/MainSearch";
import MainIntro from "../components/MainIntro";
import MainCountry from "../components/MainCountry";

function MainPage() {
  return (
    <>
      <div className="MainPage">
        <div className="MainPageInner">
          <MainSearch />
          <MainIntro />
          <MainCountry />
        </div>
      </div>
    </>
  );
}

export default MainPage;
