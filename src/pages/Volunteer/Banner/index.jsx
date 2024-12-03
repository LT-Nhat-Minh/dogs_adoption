import React from "react";
import "./style1.scss";
import { useNavigate } from "react-router-dom";

function VolunteerBanner(props) {
  const navigate = useNavigate();
  return (
    <div className="volunteer-banner">
      <div className="banner">
        <div className="container">
          <h1 className="title">Tình Nguyện Viên</h1>
          <p className="breadcrumbs">
            <span className="root" onClick={() => navigate("/")}>
              {" "}
              Trang Chủ{" "}
            </span>
            {">"}
            <span className="current"> Tình Nguyện Viên </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VolunteerBanner;
