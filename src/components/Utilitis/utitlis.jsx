const getPlayerFromLoacalStorage = () => {
  const storedPlayerString = localStorage.getItem("cart");
  if (storedPlayerString) {
    const storedPlayer = JSON.parse(storedPlayerString);
    return storedPlayer;
  }
  return [];
};

const savedPlayers = (cart) => {
  const playersStringified = JSON.stringify(cart);
  localStorage.setItem("cart", playersStringified);
};

const addItemPlayer = (id) => {
  const cart = getPlayerFromLoacalStorage();
  const newItemPlayer = [...cart, id];
  savedPlayers(newItemPlayer);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getPlayerFromLoacalStorage();
  const reminingCart = storedCart.filter((storeId) => storeId.id !== id);
  savedPlayers(reminingCart);
};

export {
  addItemPlayer as addPlayer,
  getPlayerFromLoacalStorage as getStroePlayer,
  removeFromLocalStorage as romove,
};
