import AboutMe from './components/about-me';
import Banner from './components/banner';
import BigSeparator from './components/big-separator';
import BlogPosts from './components/blog-posts';
import Education from './components/education';
import Header from './components/header';
import MySeparator from './components/my-separator';
import Profile from './components/profile';
import Projects from './components/projects';
import Skills from './components/skills';
import Socials from './components/socials';
import TechStack from './components/tech-stack';
import Topics from './components/topics';
import WorkXP from './components/work-experience';

export default function Home() {
  return (
    <div className="text-stone-900 dark:text-white bg-white/80 dark:bg-stone-950/80 overflow-hidden">
      <Header />
      <main className="mx-auto md:max-w-3xl mt-16">
        <Banner />
        <MySeparator />
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
        <BlogPosts />
        <BigSeparator />
        <Projects />
        <BigSeparator />
        <Skills />
        <BigSeparator />
      </main>
    </div>
  );
}
