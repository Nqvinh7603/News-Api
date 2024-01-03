import React, { useState } from "react";
import axios from "axios";
const News = () => {
  const [hits, setHits] = useState([]);
  const handleFetchData = async () => {
    const data = await axios.get("");
  };
  React.useEffect(() => {}, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default News;
