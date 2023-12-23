import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import ErrorBoundary from "./utils/errors/ErrorBoundary";
import Rockets from "./pages/rockets/Rockets";
const Dragons = lazy(()=>import("./pages/dragons/Dragons"));
const Missions = lazy(() => import("./pages/missions/Missions"));

function App() {

  return (
    <>
     <Header />
     <Suspense fallback={<div>Loading..</div>}>
      <Routes>

       <Route path="/" element={<Rockets />} errorElement={<ErrorBoundary />} />
       <Route path="/dragons" element={<Dragons />} errorElement={<ErrorBoundary />} />
       <Route path="/missions" element={<Missions />} errorElement={<ErrorBoundary />} />
       <Route path="*" element={<Rockets />} errorElement={<ErrorBoundary />} />

      </Routes>
      </Suspense>
     </>
  );
}

export default App;


