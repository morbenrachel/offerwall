import React, { useState, useEffect } from "react";
import _ from "lodash";
import Ad from "./components/Ad";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [tokenImage, setTokenImage] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("/api");
      if (!response.ok) {
        throw response;
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData().then(data => {
      setItems(data.items);
      setTokenImage(data.settings.tokenimage);
    });
  }, []);

  const getItems = () => {
    const rows = _.map(items, (item, index) => {
      return <Ad item={item} tokenImage={tokenImage} key={index} />;
    });
    return <div className="offerwall">{rows}</div>;
  };

  return <div className="App">{!_.isEmpty(items) ? getItems() : ""}</div>;
}

export default App;
