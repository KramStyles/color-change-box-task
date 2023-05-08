/*Template generated by WebStorm on Monday (5/8/23), 5:31 PM.
 * Author: kramstyles
 * Filename: ColorList.jsx
 */

import {useState} from "react";
import ColorItem from "./ColorItem";
import {colorArray} from "./data"; // Fixed list of colors from data.js

const ColorList = () => {
  const [colors, setColors] = useState(colorArray);

  const simpleShuffle = () => {
    // Create a new copy of the color array in order to trigger a re-render
    const newColor = [...colors].sort(() => Math.random() - 0.5);
    setColors(newColor);
  }

  return (
    <div className="grid-container">
        {colors.map((color, id) => (
            // loop through the colors and render ColorItem component with its specific properties
            <ColorItem color={color} id={id + 1} key={id} handleClick={simpleShuffle}/>
        ))}
    </div>
  );
};

export default ColorList;