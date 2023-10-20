// ************** THIS IS YOUR APP'S ENTRY POINT. CHANGE THIS FILE AS NEEDED. **************
// ************** DEFINE YOUR REACT COMPONENTS in ./components directory **************

import FakeStackOverflow from "./components/fakestackoverflow.js";
import SingleQuestion from "./components/SingleQuestion.js";
import { Route, Routes } from "react-router-dom";
import Tags from "./components/Tags.js";
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
