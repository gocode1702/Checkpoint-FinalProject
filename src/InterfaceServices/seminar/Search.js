
import React, { useState } from "react";
import Rate from "./Rate";
import AddMovie from "./Add";
import { Data } from "../../data/Data-Books";
import "./Search.css";
import Navbar from "./Navbar";
export default function Search({ setSearchWord, searchRate, setSearchRate }) {
  const [movies, setMovies] = useState(Data);
  
  return (
    <div className="main">
      <div className="area">
        <h3>
          Unlimited movies, TV <br />
          shows, and more.
        </h3>
        <h4>Watch anywhere. Cancel anytime.</h4>

        <div style={{ display: "flex" }} className="search">
          <div style={{ position: "relative", display: "inline-block" }}>
            <ul style={{ display: "flex", flexDirection: "row" }}>
              <li style={{ marginLeft: "1rem" }}>
                {" "}
                <Navbar />
              </li>
              <li style={{ marginLeft: "1rem" }}>
                {" "}
                <input
                  type={"text"}
                  placeholder="search movie"
                  onChange={(event) => setSearchWord(event.target.value)}
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "solid white",
                    outline: "none",
                    backgroundColor: "#292929",
                    color: "#fff",
                    fontSize: "1rem",
                    marginRight: "10px",
                    marginLeft: "210px",
                    marginTop: "20px",
                    width: "300px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    textAlign: "center",
                    marginTop: "20px",
                    right: "30px",
                    transform: "translateY(40%)",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Rate rate={searchRate} setSearchRate={setSearchRate} />
                </span>
              </li>
            </ul>
            <AddMovie setMovies={setMovies} />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
