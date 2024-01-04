/* eslint-disable no-undef */
import React, { useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
const News = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(response.data?.hits || []);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`Đã xảy ra lỗi ${error}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  React.useEffect(() => {
    handleFetchData.current();
  }, [query]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 p-5 block w-full rounded-md"
        defaultValue={query}
        onChange={handleUpdateQuery}
      />
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default News;
