import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import LandingPage from "./containers/LandingPage";
import AboutPage from "./containers/About";
import ShowcasePage from "./containers/ProjectShowcase";
import CalendarPage from "./containers/Calendar";
import Home from "./containers/Home";
import PressRelease from "./containers/PressReleases";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/PressReleases">
        <PressRelease />
      </Route>
      <UnauthenticatedRoute exact path="/about">
        <AboutPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/showcase">
        <ShowcasePage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/calendar">
        <CalendarPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/new">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <Notes />
      </AuthenticatedRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}