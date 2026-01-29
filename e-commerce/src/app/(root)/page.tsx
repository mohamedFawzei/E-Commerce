import { getProducts } from "@/app/api/getProducts";
import MySwiper from "../_components/swiper/MySwiper";
import Card from "../_components/card/Card";

export default async function Home() {
  const { data } = await getProducts();

  console.log(data);

  return (
    <section>
      <MySwiper />
      <Card />
    </section>
  );
}
