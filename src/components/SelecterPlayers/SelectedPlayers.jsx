import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ countPlayer, removePlayer }) => {
  return (
    <div className="md:w-[1200px] mx-auto pt-4">
      {countPlayer.map((couplayer) => (
        <SelectedPlayer
          removePlayer={removePlayer}
          key={couplayer.id}
          couplayer={couplayer}
        ></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
