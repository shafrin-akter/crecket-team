import remove from "../../assets/remove.png";
const SelectedPlayer = ({ couplayer, removePlayer }) => {
  //   {
  //     "id": 1,
  //     "name": "Shakib Al Hasan",
  //     "country": "Bangladesh",
  //     "role": "All-Rounder",
  //     "battingStyle": "Left-Hand-Bat",
  //     "bowlingStyle": "Slow Left-Arm Orthodox",
  //     "price": 1500000,
  //     "rating": 4.9,
  //     "image": "https://i.ibb.co.com/Fbf3t160/cf-3d-Jq1-OHy.jpg"
  // }
  console.log(couplayer);

  return (
    <div className="flex justify-between border border-gray-300 p-5 rounded-2xl mb-3">
      <div className="flex gap-3 items-center">
        <img className="w-[80px] h-[80px] rounded-2xl" src={couplayer.image} />
        <div className="">
          <h2 className="text-[24px] font-semibold">{couplayer.name}</h2>
          <p className="text-[#898989]">{couplayer.battingStyle}</p>
        </div>
      </div>
      <button onClick={() => removePlayer(couplayer)}>
        <img src={remove} alt="" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
