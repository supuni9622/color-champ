import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import ColorContainer from "./Components/ColorContainer";
import Buttons from "./Components/Buttons";
import ResultNotification from "./Components/ResultNotification";
// import Footer from './Components/Footer';
import { ColorContextProvider } from "./Context/ColorContext";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("");
  return (
    <ColorContextProvider>
      <div className="App">
        <Navbar />
        <ColorContainer />
        <Buttons />
        <ResultNotification />
        {/* <Footer /> */}
      </div>
    </ColorContextProvider>
  );
}

export default App;
