import { use } from "react";
import Player from "../Player/Player";

const AvailavelPlayers = ({
  availaverlPlayers,
  setBalance,
  balance,
  countPlayer,
  setCountPlayer,
}) => {
  const players = use(availaverlPlayers);
  return (
    <div className="md:w-[1200px] mx-auto">
      <div className="grid grid-cols md:grid-cols-3 gap-2">
        {players.map((player) => (
          <Player
            setCountPlayer={setCountPlayer}
            countPlayer={countPlayer}
            key={player.id}
            player={player}
            balance={balance}
            setBalance={setBalance}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default AvailavelPlayers;
