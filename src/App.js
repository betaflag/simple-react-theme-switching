import React, { useState } from "react";
import Content from "./Content";
import Button from "./Button";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(true);
  let appClass = "App";

  if (isDark) {
    appClass += " App--dark";
  }

  const switchStyle = () => setIsDark(!isDark);

  return (
    <div class={appClass}>
      <Content>
        Hello World
        <Button onClick={switchStyle}>Switch style</Button>
      </Content>
    </div>
  );
}

export default App;
