import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import BigSeparator from "./components/BigSeparator";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Separator from "./components/Separator";
import Socials from "./components/Socials";
import TechStack from "./components/TechStack";
import Topics from "./components/Topics";
import WorkXP from "./components/WorkXP";

export default function Home() {
  return (
    <div className="text-stone-900 dark:text-white bg-white/80 dark:bg-stone-950/80 overflow-hidden">
      <Header />
      <main className="mx-auto md:max-w-3xl mt-16">
        <Banner />
        <Separator />
        <Profile />
        <BigSeparator />
        <Topics />
        <BigSeparator />
        <Socials />
        <BigSeparator />
        <AboutMe />
        <BigSeparator />
        <WorkXP />
        <BigSeparator />
        <TechStack />
        <BigSeparator />
      </main>
    </div>
  );
}
