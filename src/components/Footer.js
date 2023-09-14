import "../css/Footer.css";

function Footer() {
  return (
    <>
      <div className="FooterMain">
        <div className="FooterInner">
          <div className="FooterContents">
            <div className="FooterInfo">
              <div className="FooterService">
                <div className="FooterLogo">
                  <img src="images/footerLogo.png" alt="footerLogo" />
                  <img src="images/footerLogo2.png" alt="footerLogo2" />
                </div>
                <div className="FooterServiceIntro FooterInfoGrid">
                  <h4>서비스 소개</h4>
                  <span>여행정보</span>
                  <span>여행안정정보</span>
                  <span>여행안전커뮤니티</span>
                </div>
                <div className="FooterServiceMainFunction FooterInfoGrid">
                  <h4>주요 기능</h4>
                  <span>안전행 소개</span>
                  <span>여행 안전 커뮤니티</span>
                  <span>마이페이지</span>
                </div>
                <div className="FooterServiceInqury FooterInfoGrid">
                  <h4>문의사항</h4>
                  <span>이메일 : v30319@naver.com</span>
                  <span>팀명 : KNU 햅삐햅삐</span>
                </div>
              </div>
              <div className="FooterInfoSNS">
                <img src="images/footerSNS.png" alt="footerSNS" />
                <img src="images/footerSNS2.png" alt="footerSNS2" />
                <img src="images/footerSNS3.png" alt="footerSNS3" />
                <img src="images/footerSNS4.png" alt="footerSNS4" />
              </div>
            </div>
            <div className="FooterCopyright">
              <span>© 2023 KNU HAPPY HAPPY | All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
