import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-8 rounded-3xl mb-6">Tailwind Test</h1>
      <Card title = "Card 1" btnText = "Go to Profile ->"/>
      <Card title="Card 2"/>
    </>
  );
}

export default App;
