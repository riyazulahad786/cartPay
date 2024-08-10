const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check if product already exists
      const exist = state.find((i) => i.id === product.id);
      if (exist) {
        // Update quantity if the product exists
        return state.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      } else {
        // Add new product to the cart
        return [...state, { ...product, qty: 1 }];
      }

    case "DELETEITEM":
      // Handle item deletion
      const existItem = state.find((i) => i.id === product.id);
      if (existItem.qty === 1) {
        // Remove the item if its quantity is 1
        return state.filter((i) => i.id !== product.id);
      } else {
        // Decrease the quantity if more than 1
        return state.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty - 1 } : i
        );
      }

    default:
      return state;
  }
};

export default handleCart;
