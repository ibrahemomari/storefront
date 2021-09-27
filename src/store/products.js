import mansaf from "../Images/jordanian-mansaf.jpg";
import iphone13 from "../Images/Iphone13.jpg";
import pizza from "../Images/pizza.jpg";
let initailState = {
  products: [
    {
      category: "FOOD",
      name: "Mansaf",
      description: "Traditional Jordanian recipe",
      ingredients: "meat/rice/laban rayeb/nuts/jameed",
      price: 8.99,
      inventory: 5,
      img: mansaf,
    },
    {
      category: "FOOD",
      name: "Pizza",
      description: "Pepperoni Pizza",
      ingredients: "cured pork and beef seasoned with paprika or other chili pepper",
      price: 10.99,
      inventory: 5,
      img: pizza,
    },
    {
      category: "ELECTRONICS",
      name: "Iphone 13 pro max",
      description: "Apple's newest flagship iPhones",
      ingredients:
        "6.7” / Sierra Blue, Silver, Gold, and Graphite / water resistance2",
      price: 1500,
      inventory: 10,
      img: iphone13,
    },
  ],
};

const productsReducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ACTIVE":
      let prodect = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { ...state, prodect: prodect };

    case "ADDPRODUCT":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          if (product.inventory > 0) {
            product.inventory = product.inventory - 1;
          }
          return product;
        }
        return product;
      });
      return { ...state };

    case "DELETE":
      state.products = state.products.map((product) => {
        if (product.name === payload.name) {
          product.inventory = product.inventory + 1;

          return product;
        }
        return product;
      });
      return { ...state };
    default:
      return state;
  }
};

export default productsReducer;
