import { About, Brands, Header, Services } from "./_components/home";

export default function Home() {
  return (
    <section className="font-sora bg-foreground flex flex-col items-center">
      <Header />
      <div className="bg-white w-screen relative z-10 space-y-12 rounded-b-[60px] overflow-hidden">
        <About />
        <Services />
        <Brands />
      </div>
      <div className="h-max w-screen bg-black sticky bottom-0 text-white"></div>
    </section>
  );
}
