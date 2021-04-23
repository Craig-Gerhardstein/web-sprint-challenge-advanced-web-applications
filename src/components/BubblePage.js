import React, { useEffect, useState } from "react";


import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColors from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetchColors()
      .then(data => {
        setColorList(data)
        setIsLoading(false)
      })
      .catch(err => {
        console.log('fetchColorsError', err)
      })
  }, [])

  return (
      <>
          {isLoading ? <div>Loading...</div> : 
          <>
            <ColorList colors={colorList} updateColors={setColorList} />
            <Bubbles colors={colorList} />
          </>
          }
      </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
