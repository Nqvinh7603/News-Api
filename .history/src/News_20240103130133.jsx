import React, { useState } from "react";

const News = () => {
  const [hits, setHits] = useState([]);
  React.useEffect(() => )
  return (
    <div>
      {hits.length > 0 &&
        hits.map((item, index) => <h3 key={item.title}>{item.title}</h3>)}
    </div>
  );
};

export default News;
