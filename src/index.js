// import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { MainView } from './components/MainView/main-view';
import MyFlixApplication from "./MyFlixApplication";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss'
import { Container } from "react-bootstrap";
// const MyFlixApplication = () => {
//   return (
//     <div className="my-flix">
//       <div>Good Morning to you again </div>
//     </div>
//   );
// };

const App = () => {
  return (

    <Container >
      <MainView />
    </Container>
  )
}
const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <>
    <App />
  </>
);
