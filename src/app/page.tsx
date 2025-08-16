import AboutMe from "./components/about-me";
import Banner from "./components/banner";
import BigSeparator from "./components/big-separator";
import Header from "./components/header";
import Profile from "./components/profile";
import Separator from "./components/my-separator";
import Socials from "./components/socials";
import TechStack from "./components/tech-stack";
import Topics from "./components/topics";
import WorkXP from "./components/work-experience";
import Education from "./components/education";
import Projects from "./components/projects";


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
        <Education />
        <BigSeparator />
        <Projects />
        <BigSeparator/>
      </main>
    </div>
  );
}
