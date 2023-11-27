import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/App.css"
import { routes } from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <>
    <Header />
      <main>
        <BrowserRouter>
          <Routes>
            {routes.map(({path, Component}) => 
              <Route key={path} path={path} Component={Component} />
            )}
          </Routes>
        </BrowserRouter>
        </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
