import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
