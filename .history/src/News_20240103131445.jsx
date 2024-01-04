import React, { useState } from "react";
import axios from "axios";
const News = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchData = async () => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    setHits(response.data?.hits || []);
  };
  React.useEffect(() => {
    handleFetchData();
  }, []);
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default News;
