import { Component } from "react";
import { Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Herbvores from "./components/Herbivores";
import Carnivores from "./components/Carnivores";
import Dinosaurs from "./components/Dinosaurs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      carnivoresShown: true,
      herbivoresShown: true,
    };
  }

  toggleHerbivores = () => {
    this.setState({
      herbivoresShown: !this.state.herbivoresShown,
    });
  };

  toggleCarnivores = () => {
    this.setState({
      carnivoresShown: !this.state.carnivoresShown,
    });
  };

  showALL = () => {
    this.setState({
      carnivoresShown: true,
      herbivoresShown: true,
    });
  };

  render() {
    const { herbivoresShown, carnivoresShown } = this.state;
    return (
      <div className="App">
        <h1>Dinosaurs! They're cool! I GUESS.</h1>
        <header>
          <ul>
            <li>
              <Link to="/herbivores">Herbivores</Link>
            </li>
            <li>
              <Link to="/carnivores">Carnivores</Link>
            </li>
            <li>
              <Link to="/">All</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route exaect path="/" element={<Dinosaurs />} />
          <Route path="/herbivores" element={<Herbvores />} />
          <Route path="/carnivores" element={<Carnivores />} />
        </Routes>
      </div>
    );
  }
}

export default App;
