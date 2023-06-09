import React, { useState } from "react";
import { Data }  from "../../data/Data-Books";
import Search from "./Search";
import MovieList from "./SeminarList";
import "./Seminar.css";


export default function Seminar() {
   const [movies, setMovies] = useState(Data);
  const [searchWord, setSearchWord] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div className="container-fluid">
      <div className="row">
        <Search
          setSearchWord={setSearchWord}
          searchRate={searchRate}
          setSearchRate={setSearchRate}
        />

        <MovieList
          movies={
            searchWord
              ? movies.filter((e) =>
                  e.title.toLowerCase().includes(searchWord.toLowerCase())
                )
              : searchRate
              ? movies.filter((e) => e.rate >= searchRate)
              : movies
          }
        />
        
      </div>
    </div>
  );
}



