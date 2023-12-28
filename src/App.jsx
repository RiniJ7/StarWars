import HomePage from "./HomePage.jsx";
import Films from "./Films.jsx";
import AllPeople from "./AllPeople.jsx";
import "./App.css";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import TallestCharacter from "./TallestCharacter.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/films" element={<Films />} />
        <Route path="/all-people" element={<AllPeople />} />
        {/* <Route path="/Species" element={<Species />} /> */}
        <Route path="/tallest" element={<TallestCharacter />} />
      </Routes>
    </>
  );
}

export default App;
