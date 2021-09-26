let initailState = {
  products: [
    {
      category: "FOOD",
      name: "Mansaf",
      description: "Traditional Jordanian recipe",
      ingredients: "meat/rice/laban rayeb/nuts/jameed",
      price: 8.99,
      inventory: 5,
    },
    {
      category: "ELECTRONICS",
      name: "Iphone 13 pro max",
      description: "Apple's newest flagship iPhones",
      ingredients:
        "6.7” / Sierra Blue, Silver, Gold, and Graphite / water resistance2",
      price: 1500,
      inventory: 10,
    },
  ],
};

const productsReducer=(state=initailState,action)=>{
    const {type,payload}=action;

    switch (type) {
        case "ACTIVE":
            let products=state.products.map((product)=>{
                return  product.name == payload ? {...product}: products
            })
            return products;
        default:
            return state;
    }
}

export default productsReducer;