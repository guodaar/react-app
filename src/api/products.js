import axios from "axios";

const PRODUCT_API = "https://testapi.io/api/lukasnvc/resource/NewEshop";

const transformData = (products) => {
  return products.map((product) => ({
    ...product,
    picUrl: JSON.parse(product.picUrl),
    size: JSON.parse(product.size),
  }));
};

export const fetchProducts = async () => {
  const response = await axios.get(PRODUCT_API);
  return transformData(response.data.data);
};
