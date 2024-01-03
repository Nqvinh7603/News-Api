import React, { useState } from "react";

const News = () => {
  const [hits, setHits] = useState([]);
  return (
    <div>
      {hits.length > 0 && hits.map((item, index) => <h3
      key={}>{item.title}</h3>)}
    </div>
  );
};

export default News;
