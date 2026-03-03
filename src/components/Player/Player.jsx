import { useState } from "react";
import { toast } from "react-toastify";
import report from "../../assets/report.png";
import user from "../../assets/user.png";
import { addPlayer } from "../Utilitis/utitlis";

// {
//     "id": 9,
//     "name": "Soumya Sarkar",
//     "country": "Bangladesh",
//     "role": "All-Rounder",
//     "battingStyle": "Left-Hand-Bat",
//     "bowlingStyle": "Medium Fast",
//     "price": 870000,
//     "rating": 4.2,
//     "image": "https://i.ibb.co.com/xqW68LvP/sommo.jpg"
// }

const Player = ({
  player,
  setBalance,
  balance,
  setCountPlayer,
  countPlayer,
}) => {
  const {
    name,
    country,
    role,
    battingStyle,
    bowlingStyle,
    price,
    rating,
    image,
  } = player;
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (player) => {
    setIsSelected(true);
    // setBalance(balance - price.split(",").join(""));
    if (balance < price) {
      toast("Not Availabel Coin");
      return;
    }
    if (countPlayer.length === 6) {
      toast("Alreday 6 Players Selected");
      return;
    }
    setCountPlayer([...countPlayer, player]);
    setBalance(balance - price);
    toast("Congras Your Players Is Selected");
    addPlayer(player.id);
  };

  return (
    <div>
      <div className="card bg-base-100 md:w-96 shadow-sm p-4 mb-3">
        <figure>
          <img
            className="rounded h-50 w-full object-cover"
            src={image}
            alt=""
          />
        </figure>
        <div className="mt-5">
          <h2 className="card-title">
            <img className="w-5" src={user} />
            {name}
          </h2>
          <div className="flex justify-between mt-4 border-b-2 border-[#F3F3F3] pb-3">
            <div className="flex items-center gap-2 ">
              <img src={report} alt="" />
              <p className="text-[#898989]">{country}</p>
            </div>
            <p className="bg-[#F3F3F3] px-4 py-1 rounded-lg">{role}</p>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex justify-between ">
              <p className="font-bold">Ratting</p>
              <p>{rating}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">{battingStyle}</p>
              <p>{bowlingStyle}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Price: ${price}</p>
              <button
                disabled={isSelected}
                onClick={() => handleSelected(player)}
                className={`btn`}
              >
                {isSelected === true ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
