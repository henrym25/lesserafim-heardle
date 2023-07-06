import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageLayout from "./pages/PageLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
