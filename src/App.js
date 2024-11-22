import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom https://www.npmjs.com/package/react-router-dom
import Home from "./elements/Home";
import ViewPage from "./elements/ViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
