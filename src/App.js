import React from "react";
import { useState, setState } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";

// Usage of mondaySDK example, for more information visit here: https://developer.monday.com/apps/docs/introduction-to-the-sdk/
const monday = mondaySdk();

monday.setToken('eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE3OTIzNzc0MCwidWlkIjozMzY5MzY2MiwiaWFkIjoiMjAyMi0wOS0wNVQyMjoxMToyOS4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTMyMzk5NjgsInJnbiI6InVzZTEifQ.gp5apVxi1EXSC2Uh6pIVCaRGoeLx6GIBWmoKOTdnHZQ')

const App = () => {
  const [users, setUsers] = useState([]);

  monday.api(`query { users { id, name } }`).then(res => {
    setState({ users: res.data.users });
  })

  console.log(users);

  return (
    <div className="App">

    </div>
  );
};

export default App;
