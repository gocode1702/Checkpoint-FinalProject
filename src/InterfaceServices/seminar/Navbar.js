import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar">
      <ul style={{ display: "flex", flexDirection: "row" }}>
        <li style={{ marginLeft: "1rem" }}>
          <button
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "solid white",
              outline: "none",
              backgroundColor: "#292929",
              color: "#fff",
              fontSize: "1rem",
          
              width: "300px",
            }}
          >
            BEST OF THE BEST
          </button>
        </li>
      </ul>
    </div>
  );
}
