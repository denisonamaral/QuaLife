import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./OnePageCityDetail.css";
import CityImage from "./CityImage";
import ResumeScore from "./ResumeScore";

function OnePageCityDetail(props) {
  return (
    <>
      <CityImage city={props.match.params.id} />
      <ResumeScore className="summaryCity" city={props.match.params.id} />
    </>
  );
}

export default OnePageCityDetail;
