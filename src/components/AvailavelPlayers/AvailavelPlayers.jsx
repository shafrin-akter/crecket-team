import { use, useEffect } from "react";
import Player from "../Player/Player";
import { getStorePlayer } from "../Utilitis/utitlis";

const AvailavelPlayers = ({
  availaverlPlayers,
  setBalance,
  balance,
  countPlayer,
  setCountPlayer,
}) => {
  const players = use(availaverlPlayers);

  useEffect(() => {
    const storePlayersId = getStorePlayer();
    const storedPlayer = [];

    for (const id of storePlayersId) {
      const cartPlayer = players.find((ply) => ply.id === id);
      if (cartPlayer) {
        storedPlayer.push(cartPlayer);
      }
    }

    setCountPlayer(storedPlayer); // 🔥 IMPORTANT

    console.log("stored cart", storedPlayer);
  }, [players]);

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
