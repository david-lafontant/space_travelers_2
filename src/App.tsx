import { Routes, Route } from "react-router-dom";
import Dragons from "./pages/dragons/Dragons";
import Missions from "./pages/missions/Missions";
import Rockets from "./pages/rockets/Rockets";
import Header from "./layout/Header";
import ErrorBoundary from "./utils/errors/ErrorBoundary";

function App() {

  return (
    <>
     <Header />

      <Routes>
       <Route path="/" element={<Rockets />} errorElement={<ErrorBoundary />} />
       <Route path="/dragons" element={<Dragons />} errorElement={<ErrorBoundary />} />
       <Route path="/missions" element={<Missions />} errorElement={<ErrorBoundary />} />

      </Routes>
     </>
  );
}

export default App;


