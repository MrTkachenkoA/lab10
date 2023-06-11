import { useState } from "react";
import { firebase } from "../FirebaseSettings";
import "../index.css";
import { getDatabase, ref, child, update, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

export const StartMenu = ({
  setNewGameKey,
  setMainPlayer1,
  setMainPlayer2,
}) => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const db = getDatabase();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGameKey = push(child(ref(db), "games")).key;

    const ticTacToe = {
      player1,
      player2,
      currentPlayer: player1,
      currentTurn: "X",
      board: ["", "", "", "", "", "", "", "", ""],
      winner: "",
    };

    const updates = {};
    updates["/games/" + newGameKey] = ticTacToe;

    update(ref(db), updates);

    setNewGameKey(newGameKey);
    setMainPlayer1(player1);
    setMainPlayer2(player2);

    navigate(`/${newGameKey}`);
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit} className="form">
        <h1>Tic-Tac-Toe</h1>

        <input
          name="player1"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          placeholder="Player1"
          required
        />
        <input
          name="player2"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          placeholder="Player2"
          required
        />

        <button type="submit">Let`s Play!</button>
      </form>
    </section>
  );
};
