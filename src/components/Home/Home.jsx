import React from "react";
import { Data } from "./Data";
import "./Home.css";
import { Social } from "./Social";

export const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <Social />
          <div className="home_img">
            <img src="" alt="" />
          </div>
          <Data />
        </div>
      </div>
    </section>
  );
};
