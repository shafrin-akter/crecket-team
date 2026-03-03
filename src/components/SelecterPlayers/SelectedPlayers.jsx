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
      <div className="border w-50 p-2 rounded-2xl mt-2">
        <a
          href="./"
          className="btn rounded-2xl flex justify-center bg-[#E7FE29] font-bold"
        >
          Add More Players
        </a>
      </div>
    </div>
  );
};

export default SelectedPlayers;
