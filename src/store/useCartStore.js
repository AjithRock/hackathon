import { create } from 'zustand';

const useCounterStore = create((set) => ({
  cart: [], // Initial state
  product: [{
    "id": 1,
    "isAdded": false,
    "name": "Laptop Lenovo",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 2,
    "isAdded": false,
    "name": "Laptop HP",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 3,
    "isAdded": false,
    "name": "Laptop Azus",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 4,
    "isAdded": false,
    "name": "Laptop Dell",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  }],
  filteredProduct: [{
    "id": 1,
    "isAdded": false,
    "name": "Laptop Lenovo",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 2,
    "isAdded": false,
    "name": "Laptop HP",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 3,
    "isAdded": false,
    "name": "Laptop Azus",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  },
  {
    "id": 4,
    "isAdded": false,
    "name": "Laptop Dell",
    "description": "Powerful laptop with high-resolution display and fast processor.",
    "price": 1299.99,
    "category": "Electronics",
    "brand": "TechCo",
    "inStock": true,
    "rating": 4.5,
    "imageUrl": "https://p4-ofp.static.pub//fes/cms/2025/06/09/rzx1vjodhuhbacc1btsrj85uhocghm157825.png",
    "reviews": [
      {
        "id": 1,
        "name": "ajith",
        "review": "good product used for more than 1 year with out any issue"
      }

    ]
  }],
  add: (data) => set((state) => {
    let newData = state.product.map(item => {
      if (item.id === data.id) {
        item.isAdded = true;
      }
      return item
    })
    return {
      cart: [...state.cart, data],
      product: [...newData],
      filteredProduct: [...newData]
    }
  }),
  delete: (data) => set((state) => {
    let newData = state.product.map(item => {
      if (item.id === data.id) {
        item.isAdded = false;
      }
      return item
    })
    let filterData = state.cart.filter(item => item.id = !data.id)
    return {
      cart: [...filterData],
      product: [...newData],
      filteredProduct: [...newData]
    }
  }),
  search: (searchString) => set((state) => {
    let filteredData = state.product.filter(obj => {
      return obj.name.toLowerCase().includes(searchString.toLowerCase())
    });
    if (searchString.length == '0') {
      filteredData = state.product;
    }
    return {
      filteredProduct: [...filteredData]
    }
  })
}));

export default useCounterStore;