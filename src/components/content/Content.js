import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import "./Content.scss";
import { Pacient } from "../pacients/Pacient";

export default props => (
  <Container
    fluid
    className={classNames("content", { "is-open": props.isOpen })}
  >
    <NavBar toggle={props.toggle} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route exact path="/pacient" component={Pacient} />
      <Route exact path="/about" component={() => "About"} />
      <Route exact path="/contact" component={() => "Contact"} />
    </Switch>
  </Container>
);
