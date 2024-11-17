import Index from "./Component/Index";
import Navbar from "./Component/Navbar";
import RecentCreated from "./Component/RecentCreated";
import TopNft from "./Component/TopNft";



export default function Home() {
  return (
    <main className="h-full">
      <Navbar/>
      <section id="Home">
      <Index/>
      </section>
      <section id="TopNft">
      <TopNft/>
      </section>
      <RecentCreated/>
    </main>
  );
}
