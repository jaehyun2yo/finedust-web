import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import Loading from "../pages/Loading";
import Error from "../pages/Error";
import Category from "./Category";
import { DustItems } from "./DustItems";

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

export const DustList = () => {
  const [dustData, setDustData] = useState([]);
  const [sido, setSido] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);


  const fetchDust = async () => {
    try {
      const getParameters = {
        serviceKey:
          "l0nbWhpAc7sw9na%2FgOkvDeOrTARupcnTfitwtAWSw8KJmxr2ctqYlb4EMTWt5VH9iG4IoBG%2Fxm0gOFXLQKmCIg%3D%3D",
        returnType: "json",
        numOfRows: "1000",
        pageNo: "1",
        sidoName: {sido},
        ver: "1.0",
      };
      

      // const sidoN =
      //   getParameters["pageNo"] === "전국" ? "" : `${handleSidoName()}`;
      // 요청 시작할때 error와 dustData를 초기화
      setError(null);
      setDustData(null);

      setLoding(true);
      const response = await axios.get(
        `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=${getParameters["serviceKey"]}&returnType=${getParameters["returnType"]}&numOfRows=${getParameters["numOfRows"]}&pageNo=${getParameters["pageNo"]}&sidoName=${getParameters["sidoName"]}&ver=${getParameters["ver"]}`
      );
      setDustData(response.data["response"]["body"]["items"]);
      
    } catch (e) {
      setError(e);
    }
    setLoding(false);
  };

  useEffect(() => {
    fetchDust();
  }, []);

  console.log(dustData);
  // 대기중
  if (loading) return <Loading></Loading>;
  // 에러
  if (error) return <Error></Error>;
  // 데이터설정되지않았다면
  if (!dustData) return null;

  return (
    <div>
      <header>
        <Dropdown
          dustData={dustData}
          sido={sido}
          setSido={setSido}
        ></Dropdown>
      </header>
      <DustItems dustData={dustData}></DustItems>
      <Category dustData={dustData}></Category>
    </div>
  );
};

export default DustList;
