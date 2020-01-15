import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import "./Content.scss";
import { Pacients } from "../pacients/showList/Pacients";
import { CreatePacient } from "../pacients/create/CreatePacient";

export default props => (
  <Container
    fluid
    className={classNames("content", { "is-open": props.isOpen })}
  >
    <NavBar toggle={props.toggle} />
    <Switch>
      <Route exact path="/" component={() => "Hello"} />
      <Route exact path="/pacient" component={Pacients} />
      <Route exact path="/createpacient" component={CreatePacient} />

    </Switch>
  </Container>
);
