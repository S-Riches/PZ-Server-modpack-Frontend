// main file
import React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import MainPageLayout from "./layouts/MainPageLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />} />
    </Routes>
  );
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement,
);
