import Banner from "./components/Banner";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Separator from "./Separtor";
import Topics from "./Topics";

export default function Home() {
  return (
    <div className="text-stone-900 dark:text-white bg-white/80 dark:bg-stone-950/80 font-sf">
      <Header />
      <main className="mx-auto md:max-w-3xl">
        <Banner />
        <Separator />
        <Profile />
        <Separator />
        <Topics />
        <Separator />
      </main>
    </div>
  );
}
