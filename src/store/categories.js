const initailState={
  categories:[
    { name: "FOOD", displayName:"Food",description: "“Life is uncertain. Eat dessert first.”" },
    {
      name: "ELECTRONICS",
      displayName:"Electronics",
      description: "“Electronics is clearly the winner of the day.”",
    },
  ],
  activeCategory: "",
}


const categoriesReducer=(state=initailState,action)=>{
  const {type,payload}=action;
  switch (type) {
    case "ACTIVE":
      let active=payload;
      let categories = state.categories.map((category) => {
                if (category.name === payload) {
                  return { name: category.name, description: category.description };
                }
                return category;
              });
      return {active,categories}

    case "RESET":
      return initailState;  
    default:
      return state;
  }
}


export const choosenCat=(name)=>{
    return {
    type: "ACTIVE",
    payload: name,
  };
}

export const reset=()=>{
  return{
    type:"RESET"
  }
}

export default categoriesReducer;

// let initailState = {
//   categories: [
    
//   ],
//   products: [
//     {
//       category: "FOOD",
//       name: "Mansaf",
//       description: "Traditional Jordanian recipe",
//       ingredients: "meat/rice/laban rayeb/nuts/jameed",
//       price: 8.99,
//       inventory: 5,
//     },
//     {
//       category: "ELECTRONICS",
//       name: "Iphone 13 pro max",
//       description: "Apple's newest flagship iPhones",
//       ingredients:
//         "6.7” / Sierra Blue, Silver, Gold, and Graphite / water resistance2",
//       price: 1500,
//       inventory: 10,
//     },
//   ],
//   activeCategory: "",
// };

// const changeCategory = (state = initailState, action) => {
//   let { type, payload } = action;
//   switch (type) {
//     case "FOOD":
//       let activeCategory = "FOOD";
//       let categories = state.categories.map((category) => {
//         if (category.name === payload) {
//           return { name: category.name, description: category.description };
//         }
//         return category;
//       });
//       let products = initailState.products.filter(
//         (product) => product.category === payload
//       );
//       return { activeCategory, categories, products };

//     case "ELECTRONICS":
//       let active = "ELECTRONICS";
//       let cats = state.categories.map((category) => {
//         if (category.name === payload) {
//           return { name: category.name, description: category.description };
//         }
//         return category;
//       });
//       let prods = initailState.products.filter(
//         (product) => product.category === payload
//       );
//       return { activeCategory: active, categories: cats, products: prods };

//     case "RESET":
//       return initailState;
//     default:
//       return state;
//   }
// };

// export const food = (name) => {
//   return {
//     type: "FOOD",
//     payload: name,
//   };
// };

// export const electronics = (name) => {
//   return {
//     type: "ELECTRONICS",
//     payload: name,
//   };
// };

// export const reset = () => {
//   return {
//     type: "RESET",
//   };
// };

// export default changeCategory;