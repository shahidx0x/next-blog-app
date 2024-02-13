import Authors from "@/components/Authors/Authors";
import Category from "@/components/Category/Category";
import Hero from "@/components/Hero/Hero";
import NewsLatter from "@/components/NewsLatter/NewsLatter";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Authors />
      <NewsLatter />
      <ScrollToTop />
    </main>
  );
}
