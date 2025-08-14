import Banner from "./components/Banner";
import BigSeparator from "./components/BigSeparator";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Separator from "./components/Separator";
import Topics from "./components/Topics";

export default function Home() {
  return (
    <div className="text-stone-900 dark:text-white bg-white/80 dark:bg-stone-950/80 font-sf overflow-hidden">
      <Header />
      <main className="mx-auto md:max-w-3xl">
        <Banner />
        <Separator />
        <Profile />
        <BigSeparator />
        <Topics />
        <BigSeparator />
        <div className="mt-8">
          
        </div>
      </main>
    </div>
  );
}
