import React from "react";
import SeminarCard from "./SeminarCard";

export default function SeminarList({ movies }) {
  return (
    <div className="row">
      {movies.map((e) => (
        <SeminarCard movieDetails={e} />
      ))}
    </div>
  );
}
