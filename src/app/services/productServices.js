const BASE_URL =
  "https://6725e6d1c39fedae05b634be.mockapi.io/learning/api/products";
export const productServices = {
  getProduct: () => {
    return axios({
      url: BASE_URL,
      method: "GET",
    });
  },

  // delete SP
  delProduct: (id) => {
    return axios({
      url: `${BASE_URL}/${id}`,
      method: "DELETE",
    });
  },

  // edit SP
  addProduct: (product) => {
    return axios({
      url: BASE_URL,
      method: "POST",
      data: product,
    });
  },
};
