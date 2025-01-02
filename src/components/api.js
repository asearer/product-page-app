export const fetchProducts = async () => {
  return [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: parseFloat("$10.00".replace('$', '')),  // Remove the $ and convert to a number
      image: "https://tushbaby.com/cdn/shop/files/rKeAfN6W_160x.jpg?v=1695838449"
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: parseFloat("$15.00".replace('$', '')),  // Remove the $ and convert to a number
      image: "https://www.clement.ca/media/catalog/product/m/a/mak-echcot-mars_a.jpg?quality=80&fit=bounds&height=800&width=800&canvas=800:800"
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: parseFloat("$20.00".replace('$', '')),  // Remove the $ and convert to a number
      image: "https://artipoppe.com/wp-content/uploads/2016/04/Ring_Sling_menu-1.jpeg"
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      price: parseFloat("$25.00".replace('$', '')),  // Remove the $ and convert to a number
      image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dw143c7dd0/images/products/CA_PL_Yema_Tie_EN/cybex_yematie_dpbl_frontcarrying_position-y045_16c85f43a7463270.jpeg?sw=400&sh=400&sm=fit&q=70&strip=false"
    }
  ];
};
