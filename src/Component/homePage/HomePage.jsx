import React from "react";

import CourseStdInfo from "./CourseStdInfo";
import NoticeCard from "./NoticeCard";
import Quote from "./Quote";
import FacultyInfoCard from "./FacultyInfoCard";
import Footer from "./Footer";
import Announcement from "./Announcement";
import CourseInfocard from "./CourseInfocard";
import Carousel from "./Carousel";
import "./Carousel.css"

var HomePage = () => {
  return (
    <div>
      <div className="bgimage">
        <CourseStdInfo />
        <Announcement />
        <div className="row mt-4">
          <div className="col-md-3">
            <NoticeCard />
          </div>
          <div className="col-md-6 mt-4">
            <div>
              <Quote /></div>
            <div>
              <Carousel />
              </div>
          </div>
          <div className="col-md-3 mt-4">
          <CourseInfocard />
          </div>

        </div>

        
        <div className="row mt-4">
          <div className="col-md-12">
            <FacultyInfoCard />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>

      </div>
    </div>
  );
};
export default HomePage;
