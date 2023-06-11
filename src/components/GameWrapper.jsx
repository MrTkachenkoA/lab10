import { useParams } from "react-router-dom";
import { Game } from "./Game";

export const GameWrapper = () => {
  const { newGameKey } = useParams();

  return <Game newGameKey={newGameKey} />;
};
