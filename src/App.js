import "./App.css";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { PETS, MEDICATIONS, LOGS } from "./routes/pageRoutes";
import Pets from "./pages/Pets/Pets";
import Medications from "./pages/Medications/Medications";
import Logs from "./pages/Logs/Logs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={PETS} element={<Pets />}></Route>
        <Route path={MEDICATIONS} element={<Medications />}></Route>
        <Route path={LOGS} element={<Logs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
