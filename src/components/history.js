import React from 'react';


const History = () => {
  const data = localStorage.getItem("city")
    return (
      <>
        <div> <p>{data}</p></div>
      </>
    )
}
export default History;
