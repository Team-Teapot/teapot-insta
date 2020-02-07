import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { InstaGallery } from "./components/InstaGallery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FansitePage from "./components/FansitePage";

import { Timer } from './components/Timer';

function App() {
  return (
    <Router>
      <div className="bg-blue-300 h-full min-h-screen">
        <Header />
        <div className="flex pt-16 pb-16 h-full min-h-screen">
          <Switch>
            <Route path="/" exact>
              <FansitePage />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/gallery">
              <InstaGallery />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
