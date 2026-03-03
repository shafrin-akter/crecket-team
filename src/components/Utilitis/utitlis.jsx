const getPlayerFromLocalStorage = () => {
  const storedPlayerString = localStorage.getItem("cart");
  if (storedPlayerString) {
    return JSON.parse(storedPlayerString); // array of objects
  }
  return [];
};

const savedPlayers = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const addItemPlayer = (player) => {
  const cart = getPlayerFromLocalStorage();
  const newCart = [...cart, player]; // full object add
  savedPlayers(newCart);
};

const removeFromLocalStorage = (player) => {
  const storedCart = getPlayerFromLocalStorage();
  const remainingCart = storedCart.filter((p) => p.id !== player.id);
  savedPlayers(remainingCart);
};

export {
  addItemPlayer as addPlayer,
  getPlayerFromLocalStorage as getStorePlayer,
  removeFromLocalStorage as romove,
};
