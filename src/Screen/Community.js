// import "bootstrap/dist/css/bootstrap.min.css";

import "../css/Community.css";
import CommunityBanner from "../components/CommunityBanner";
import CommunityExplore from "../components/CommunityExplore";

function Community() {
  return (
    <>
      <div className="Community">
        <div className="CommunityInner">
          <CommunityBanner />
          <CommunityExplore />
        </div>
      </div>
    </>
  );
}

export default Community;
