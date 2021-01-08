import "./App.css";
import axios from "axios";
import Card from "./Card";
import React, { useEffect, useState } from "react";

function App() {
  let [name, setName] = useState("");
  let [firm, setFirm] = useState("");
  let [flavor, setFlavor] = useState("");
  let [id, setId] = useState("");
  let [inputValue, setInputValue] = useState("");

  const getPokemon = (input) => {
    axios.get(`https://pokeapi.co/api/v2/berry/${input}`).then((response) => {
      setName(response.data.name);
    });
    axios.get(`https://pokeapi.co/api/v2/berry/${input}`).then((response) => {
      setFirm(response.data.firmness.name);
    });
    axios
      .get(`https://pokeapi.co/api/v2/berry-flavor/${input}`)
      .then((response) => {
        setFlavor(response.data.name);
      });
    axios.get(`https://pokeapi.co/api/v2/berry/${input}`).then((response) => {
      setId(response.data.id);
    });
  };

  useEffect(() => {
    getPokemon(1);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            value={inputValue}
            placeholder="Put in berry id"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button onClick={() => getPokemon(inputValue)}>Search Berry!</button>
        </div>
        <div className="berry">
          <Card title={name} cardName="Berry: " />
          <Card title={firm} cardName="Firmness: " />
          <Card title={flavor} cardName="Flavor: " />
          <Card title={id} cardName="ID: " />
        </div>
      </header>
    </div>
  );
}

export default App;
