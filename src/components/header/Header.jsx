import React from "react";
import "./Header.css";

export default function Header() {
  // const arr = ['a', 'b', 'c'];
  const arr = [];

  return (
    <div className="header">
      Header {arr.length ? arr.map((ch) => ch) : "No records"}
    </div>
  );
}
