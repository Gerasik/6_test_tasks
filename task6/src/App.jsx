import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import styled from "styled-components";

const Container = styled.section`
  width: 1250px;
  margin: 0 auto;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.ul`
  padding: 10px 20px;
`;

export default function BasicExample() {
  return (
    <Router>
      <Container>
        <Navigation>
          <NavigationItem>
            <Link to="/">Главная</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/employees">Сотрудники</Link>
          </NavigationItem>
        </Navigation>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
