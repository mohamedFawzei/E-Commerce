import { api } from "./api";
export async function getProducts() {
  const res = await fetch(`${api}/products`);
  const data = await res.json();
  //console.log(data);

  return data;
}
