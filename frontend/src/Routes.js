import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import AboutPage from "./containers/About";
import ShowcasePage from "./containers/ProjectShowcase";
import CalendarPage from "./containers/Calendar";
import Home from "./containers/Home";
import PressRelease from "./containers/PressReleases";
import Curriculum from "./containers/Curriculum";
import APHuman from "./containers/APHuman";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/PressReleases">
        <PressRelease />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/Curriculum">
        <Curriculum />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/about">
        <AboutPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/showcase">
        <ShowcasePage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/calendar">
        <CalendarPage />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/notes">
        <Notes />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/ApHuman">
        <APHuman />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <Route exact path="/notes/new">
        <NewNote />
      </Route>
      <Route exact path="/notes/:id">
        <Notes />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}