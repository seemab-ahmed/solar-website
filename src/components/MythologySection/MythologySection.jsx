import React from "react";
import section3Image from "../../static/section3-f776766ed1b096e14265b5f069866f1d.png";
import section3BgImage from "../../static/section3_background-c37d279287fe4e7deab2bce5b97ef3f5.png";
import section1BgImage from "../../static/section1_background-4a1e1d72ccc245a188c8e73f09e4450b.png";
import section2BgImage from "../../static/section2_background-6bce75db25ebaf3b37619bc217bb4651.png";
import section1Image from "../../static/section1-6203073058934433c02affc0fa6c49a8.png";
import section2Image from "../../static/section2-18e98331edef4ecdda28d47532466c1d.png";
import mythologyBackground from "../../static/2f34e16e48ed4c9b8b2a0b5cab2df5c1/e8e49/mythology_background.webp";
export default function MythologySection() {
  return (
    <div>
      <div className="mythologySection">
        <div className="mythologySection__background">
          <div
            data-gatsby-image-wrapper=""
            className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
          >
            <div style={{ maxWidth: "981px", display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src="data:image/svg+xml;charset=utf-8,%3Csvg height='491' width='981' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                style={{
                  maxWidth: "100%",
                  display: "block",
                  position: "static",
                }}
              />
            </div>
            <div
              aria-hidden="true"
              data-placeholder-image=""
              style={{
                opacity: 1,
                transition: "opacity 0.5s linear",
                backgroundColor: "#080808",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              }}
            ></div>

            <img
              data-gatsby-image-ssr=""
              data-main-image=""
              style={{ opacity: 1 }}
              sizes="(min-width: 981px) 981px, 100vw"
              decoding="async"
              loading="lazy"
              src={mythologyBackground}
              alt="mythology_background"
            />
          </div>
        </div>
        <div className="titleSection">
          <div className="outlined">MYTHOLOGY</div>
          <div className="regular">MYTHOLOGY</div>
        </div>
        <div className="parallelColumn">
          <div className="mythologyInfo">
            The ExoWorlds universe is a vast explorable space, with thousands of
            planets and a handful of sentient &amp; advanced civilizations.
            Discover the mythology behind the galaxy, planet types, factions and
            all the life within.
          </div>
          <div className="mythology_list">
            <div className="mythology_list_item item_1">
              <div className="itemBgContainer">
                <img alt="item" className="itemBg" src={section1BgImage} />
              </div>
              <div className="assetContainer">
                <div className="gradientBg"></div>
                <img alt="item" className="itemImage" src={section1Image} />
                <div className="list_item_inner">
                  <span className="list_item_text">FACTIONS</span>
                </div>
              </div>
            </div>
            <div className="mythology_list_item item_2">
              <div className="itemBgContainer">
                <img alt="item" className="itemBg" src={section2BgImage} />
              </div>
              <div className="assetContainer">
                <div className="gradientBg"></div>
                <img alt="item" className="itemImage" src={section2Image} />
                <div className="list_item_inner">
                  <span className="list_item_text">World</span>
                  <span className="list_item_text subtitle">Types</span>
                </div>
              </div>
            </div>
            <div className="mythology_list_item item_3">
              <div className="itemBgContainer">
                <img alt="item" className="itemBg" src={section3BgImage} />
              </div>
              <div className="assetContainer">
                <div className="gradientBg"></div>
                <img alt="item" className="itemImage" src={section3Image} />
                <div className="list_item_inner">
                  <span className="list_item_text">Evolution</span>
                  <span className="list_item_text subtitle">Types</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://exoworlds.gitbook.io/exoworlds-whitepaper/game/mythology"
          className="button__accent button__more"
        >
          <span>Learn more</span>
          <svg
            viewBox="0 0 11 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1099 10.5199L2.55988 0.56988C2.43978 0.416522 2.27499 0.304265 2.08831 0.248629C1.90163 0.192993 1.70228 0.196726 1.51782 0.259313C1.33335 0.321899 1.17288 0.440247 1.0586 0.597994C0.944322 0.755742 0.881871 0.945097 0.879883 1.13988V22.7099C0.883886 22.9038 0.947789 23.0918 1.06283 23.2479C1.17787 23.4041 1.33841 23.5209 1.52243 23.5822C1.70645 23.6436 1.90494 23.6465 2.09069 23.5906C2.27643 23.5346 2.44032 23.4226 2.55988 23.2699L10.1099 13.3299C10.4157 12.9253 10.5812 12.432 10.5812 11.9249C10.5812 11.4177 10.4157 10.9244 10.1099 10.5199Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
