import { Routes, Route } from "react-router-dom";
import Dragons from "./pages/dragons/Dragons";
import Missions from "./pages/missions/Missions";
import Rockets from "./pages/rockets/Rockets";
import Header from "./layout/Header";

function App() {

  return (
    <>
     <Header />

      <Routes>
       <Route path="/" element={<Rockets />} />
       <Route path="/dragons" element={<Dragons />} />
       <Route path="/missions" element={<Missions />} />

      </Routes>
     </>
  );
}

export default App;


