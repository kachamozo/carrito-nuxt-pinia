import { getData, postData } from "../service/config.service";

export const productoService = {
  getProductos: async () => getData("product"),
  postProductos: async (body: any) => postData("product", body),
  putProductos: async (body: any) => postData("product", body),
  deleteProductos: async (body: any) => postData("product", body),
};
