import React, { useRef, useState } from "react";
import axios from "axios";
const News = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    setHits(response.data?.hits || []);
  };
  React.useEffect(() => {
    handleFetchData.current();
  }, []);
  return (
    <div>
      <input type="text" className="border border-green-500" />
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default News;
