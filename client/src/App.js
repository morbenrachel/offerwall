import React, { useState, useEffect } from "react";
import _ from "lodash";
import Ad from "./components/Ad";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [tokenImage, setTokenImage] = useState("");

  const getData = async () => {
    const response = await fetch("/api");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  useEffect(() => {
    getData().then(data => {
      setItems(data.items);
      setTokenImage(data.settings.tokenimage);
    });
  }, []);

  const getItems = () => {
    const rows = _.map(items, (item, index) => {
      return <Ad props={item} tokenImage={tokenImage} key={index} />;
    });
    return <div className="offerwall">{rows}</div>;
  };

  return <div className="App">{!_.isEmpty(items) ? getItems() : ""}</div>;
}

export default App;
