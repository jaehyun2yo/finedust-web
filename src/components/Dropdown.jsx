import React from "react";
import { useState } from "react";

const sidoNameArr = [
  "경기",
  "인천",
  "세종",
  "강원",
  "충북",
  "전북",
  "충남",
  "경북",
  "대구",
  "대전",
  "경남",
  "울산",
  "광주",
  "전남",
  "제주",
  "부산",
  "서울",
].reverse();


const Dropdown = ({ dustData, setSido, sido }) => {
  // 시/도 이름

  const [station, setStation] = useState([1, 2, 3, 4, 5]);

  const stationNameArr = [];

  dustData.map((data) => {
    return stationNameArr.push(data.stationName);
  });

  const handleSidoChange = (e) => {
    setSido(e.target.value);
  };

  const handleStationChange = (e) => {
    setSido(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => handleSidoChange(e)}>
        {sidoNameArr.map((sidoName) => {
          return <option value={sidoName}>{sidoName}</option>;
        })}
      </select>
      <select onChange={(e) => handleStationChange(e)}>
        {stationNameArr.map((stationName) => {
          return <option>{stationName}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
