import React, { useEffect, useState } from "react";
import axios from "axios";

const AllText = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://indusosdata.herokuapp.com/text")
      .then((res) => res["data"])
      .then((res) => setArr([...res]));
    console.log(arr);
  }, []);

  return <div>{arr ? arr.map((el) => <p key={el._id}>{el.text}</p>) : ""}</div>;
};

export default AllText;
