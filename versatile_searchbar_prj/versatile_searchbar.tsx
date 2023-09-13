import React from "react";
import { useState } from "react";
import "./versatile_searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  const [optionState, setOptionState] = useState(0);
  const [[flag, selcStage], setSelcStage] = useState([0, "All Categories"]);

  const toggleMenu = () => {
    optionState === 1 ? setOptionState(0) : setOptionState(1);
  };
  const toggleSelection = (choose: number, selection: string) => {
    setSelcStage([choose, selection]);
  };

  return (
    <div className="search-bar">
      <div id="select" onClick={() => toggleMenu()}>
        <p id="selectText">{selcStage}</p>
        <FontAwesomeIcon icon={faChevronDown} />
        <ul id="list" className={optionState === 1 ? "open" : "not-open"}>
          <li className="options" onClick={() => toggleSelection(1, "STT")}>
            STT
          </li>
          <li className="options" onClick={() => toggleSelection(2, "Tên")}>
            Tên
          </li>
          <li
            className="options"
            onClick={() => toggleSelection(3, "Diện tích")}
          >
            Diện tích
          </li>
          <li className="options" onClick={() => toggleSelection(4, "Tỉ lệ")}>
            Tỉ lệ
          </li>
          <li
            className="options"
            onClick={() => toggleSelection(5, "Số lượng ĐHKH")}
          >
            Số lượng ĐHKH
          </li>
        </ul>
      </div>
      <input
        type="text"
        id="inputfield"
        placeholder={flag === 0 ? "Tìm kiếm" : "Tìm theo " + selcStage}
      />
    </div>
  );
}

export default SearchBar;
