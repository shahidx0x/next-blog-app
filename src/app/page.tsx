import Authors from "@/components/Authors/Authors";
import Category from "@/components/Category/Category";
import Hero from "@/components/Hero/Hero";
import NewsLatter from "@/components/NewsLatter/NewsLatter";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Authors />
      <NewsLatter />
    </main>
  );
}
