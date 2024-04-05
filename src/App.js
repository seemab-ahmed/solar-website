import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import TrailerSection from "./components/trailerSection/trailerSection";
import PlanetSection from "./components/planetSection/planetSection";
import SeenOnSection from "./components/SeenOnSection/SeenOnSection";
import GamePlaySection from "./components/GamePlaySection/GamePlaySection";
// import MarketPlaceSection from "./components/MarketPlaceSection/MarketPlaceSection";
// import MythologySection from "./components/MythologySection/MythologySection";
// import TokonomicSection from "./components/TokonomicSection/TokonomicSection";
// import JoinSection from "./components/JoinSection/JoinSection";
function App() {
  return (
    <div id="___gatsby">
      <div tabindex="-1" id="gatsby-focus-wrapper">
        <div class="pageHome__background">
          <div class="Toastify"></div>
          <div class="mainBackground font-montserrat">
            <div>
              <Navbar />
              <PlanetSection />
              <TrailerSection />
              <SeenOnSection />
              <GamePlaySection />
              {/* <MarketPlaceSection />
              <MythologySection />
              <TokonomicSection />
              <JoinSection /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
