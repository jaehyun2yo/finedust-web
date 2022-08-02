import React from 'react'

export const DustItems = ({ dustData}) => {
  return (
    <div>
      {dustData.map(
          (data) =>
          data && (
            <div key={data.stationName}>
              <p>동 이름 : {data.sidoName}</p>
              <p>동 이름 : {data.stationName}</p>

              <p>시간 :{data.dataTime}</p>
              <p>미세먼지 농도 10 :{data.pm10Value}</p>
              <p>미세먼지 1~5 :{data.pm10Grade}</p>
              <hr />
            </div>
          )
      )}
    </div>
  );
}
