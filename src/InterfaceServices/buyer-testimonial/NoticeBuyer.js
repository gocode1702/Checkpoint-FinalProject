import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products2 } from "../../data/Data-Articls";
import Testimonial from "./Testimonial";






export default function NoticeBuyer() {
  return (
    <div className="container-fluid">
      <Testimonial Data2={Products2} />
    </div>
  );
}
