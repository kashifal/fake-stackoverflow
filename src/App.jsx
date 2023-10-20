// ************** THIS IS YOUR APP'S ENTRY POINT. CHANGE THIS FILE AS NEEDED. **************
// ************** DEFINE YOUR REACT COMPONENTS in ./components directory **************

import FakeStackOverflow from "./components/fakestackoverflow";
import SingleQuestion from "./components/SingleQuestion";
import { Route, Routes } from "react-router-dom";
import Tags from "./components/Tags";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FakeStackOverflow />} />
      <Route path="/:id" element={<SingleQuestion />} />
      <Route path="/tags" element={<Tags />} />
    </Routes>
  );
}

export default App;
