import "./App.css";
import { CardContainer } from "./components/CardContainer.tsx";
import { Header } from "./components/Header.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<CardContainer />} />
        <Route path={"/favourites"} element={<p>awawdawd</p>} />
      </Routes>
    </>
  );
}

export default App;
