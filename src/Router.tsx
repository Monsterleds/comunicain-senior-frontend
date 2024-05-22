import { Routes, Route } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
}
