import React, { Component } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";


const dataProvider = jsonServerProvider("http://localhost:5000");

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    );
  }
}
export default App;
