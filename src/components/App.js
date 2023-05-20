import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDark, setIsDark] = useState(false);
  const themeBtn=(isDark)?"Dark Mode":"Light Mode"
  const appClass = isDark ? "App dark" : "App light"
  function toggleTheme(){
   setIsDark(!isDark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>{themeBtn}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
