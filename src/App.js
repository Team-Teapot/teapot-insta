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

function App() {
  return (
    <Router>
      <div className="bg-blue-300 h-screen">
        <Header />
        <div className="flex pt-16">
          <Switch>
            <Route path="/" exact>
              <InstaGallery />
            </Route>
            <Route path="/ali">
              <div>Ali's site here</div>
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
