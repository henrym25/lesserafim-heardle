import { Routes, Route, BrowserRouter } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
