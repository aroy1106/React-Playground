import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const changeColor = (newColor) => {
    setColor(newColor);
  };
  return (
    <>
      <div
        className="w-full h-screen duration-400"
        style={{ backgroundColor: color }}
      >
        <div className="text-end px-20 py-4">
          <button className="outline-dotted rounded-full py-2 px-2" onClick={() => changeColor("olive")}>Default</button>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-full">
            <button
              onClick={() => changeColor("red")}
              className="outline-none px-4 py-1 rounded-full text-xl text-white shadow-2xl"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => changeColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-xl text-black shadow-2xl"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => changeColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-xl text-white shadow-2xl"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => changeColor("green")}
              className="outline-none px-4 py-1 rounded-full text-xl text-white shadow-2xl"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            {/* <button
            onClick={() => changeColor("olive")}
              className="outline outline-black px-4 py-1 rounded-full text-xl text-black shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              Default
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
