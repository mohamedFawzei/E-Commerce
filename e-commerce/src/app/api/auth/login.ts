import { LoginSchema } from "@/types/schemas.types";
import { api } from "../api";

export async function Login(data: LoginSchema) {
  let res = await fetch(`${api}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  let resData = await res.json();

  console.log("resData", resData);

  return resData;
}
