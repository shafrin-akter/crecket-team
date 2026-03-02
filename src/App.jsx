import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AvailavelPlayers from "./components/AvailavelPlayers/AvailavelPlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelecterPlayers/SelectedPlayers";
const availabelPromise = async () => {
  const res = await fetch("./players.json");
  return res.json();
};
const availaverlPlayers = availabelPromise();

function App() {
  const [toggle, setToggle] = useState(true);
  const [balance, setBalance] = useState(60000000);
  const [countPlayer, setCountPlayer] = useState([]);

  const removePlayer = (couplayer) => {
    const reMove = countPlayer.filter(
      (removeMan) => removeMan.id !== couplayer.id,
    );
    setCountPlayer(reMove);
    setBalance(balance + couplayer.price);
    console.log(couplayer);
  };

  return (
    <>
      <Navbar balance={balance}></Navbar>
      <div className="md:w-[1200px]  px-5 mx-auto mb-5 mt-5 md:flex justify-between">
        <h2 className="font-bold text-[28px]">
          {toggle === true
            ? "Availavel Players"
            : `Players Selected Player (${countPlayer.length}/6)`}
        </h2>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-4 rounded-l-xl cursor-pointer border-r-0 ${toggle === true ? "bg-[#E7FE29] font-bold" : "bg-[##F3F3F3]"} border border-gray-300 rounded-r-0`}
          >
            Availavel
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-4 rounded-r-xl ${toggle === true ? "bg-[##F3F3F3]" : "bg-[#E7FE29] font-bold"} cursor-pointer border border-l-0 border-gray-300 rounded-r-0`}
          >
            Selected <span>{countPlayer.length}</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <span className="loading loading-spinner loading-xl"></span>
            </div>
          }
        >
          <AvailavelPlayers
            setBalance={setBalance}
            balance={balance}
            setCountPlayer={setCountPlayer}
            countPlayer={countPlayer}
            availaverlPlayers={availaverlPlayers}
          ></AvailavelPlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          countPlayer={countPlayer}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
