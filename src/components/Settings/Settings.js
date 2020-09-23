import React, { Component } from "react";
import "../../App.scss";
import Players from "../Players";
import Button from "../Button/Button";

//

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleAddName = this.handleAddName.bind(this);
  }

  // Watches value in form for player's input

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  };

  // Add new player to players array

  handleAddName = (e) => {
    e.preventDefault();
    this.setState({ playerName: this.state.playerName });
    this.props.handleAdd(this.state);
  };

  /* Shuffle function to randomise & create new pairings */

  //Take players array -
  //-shuffle them -
  //-divided them into pairs.

  //Go to next screen

  //display new pairs

  handleStart = () => {
    this.props.handleStart(this.state);
  };

  render() {
    const { playerName } = this.state;
    const { players, handleClear } = this.props;
    const disabled = players.length === 8 ? true : false;

    return (
      <div className="wrapper__container">
        <div className="container">
          <h1> PING PONG</h1>
          <h2> TOURNAMENT</h2>

          <form className="form grid-child1" onSubmit={this.handleAddName}>
            <input
              className="form-control"
              type="text"
              value={playerName}
              onChange={this.handleChange}
            />
            <Button
              buttonClass="button grid-child2"
              label="Add A Player"
              type="submit"
              disabled={disabled}
            />
          </form>

          <Button
            buttonClass="button grid-child3"
            label="Start"
            handleClick={this.handleStart}
          />

          <Button
            buttonClass="button grid-child4"
            label="Reset"
            handleClick={handleClear}
          />
          <article className="player-list">
            <Players />
          </article>
        </div>
      </div>
    );
  }
}

export default Settings;