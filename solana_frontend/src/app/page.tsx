import Navbar from "./Component/Navbar";
import Index from "./Component/Index";
import TopNft from "./Component/TopNft";
import RecentCreated from "./Component/RecentCreated";

export default function Home() {
  return (
    <main className="h-full">
      
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
