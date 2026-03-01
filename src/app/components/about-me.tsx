import { TypographyH2 } from './tipography-h2';

const AboutMe = () => {
  return (
    <div className="border-x border-stone-200 dark:border-stone-900 py-6 px-[24px]">
      <TypographyH2>About Me</TypographyH2>
      <p className="leading-7 mt-6">
        I’m a Software Engineer with experience building web applications across
        diverse domains.
      </p>
      <p className="leading-7 mt-6">
        Despite my young age I&apos;ve been building since 2021, when I had my
        first contact with coding at high school. Since then, I&apos;ve been
        improving my problem solving skills and contributing to different
        projects.
      </p>
      <p className="leading-7 mt-6">
        I am proud of being approved in{' '}
        <a
          href="https://servicos.nc.ufpr.br/documentos/ps2025/resultado/2fase/concorrencia/077_00.html"
          className="underline hover:font-bold"
        >
          first place
        </a>{' '}
        at my university and having created a{' '}
        <a href="https://mlrh.com.br" className="underline hover:font-bold">
          system
        </a>{' '}
        that supports my father and his company in helping other people find
        their jobs. But, most importantly, I am proud of having built this
        journey with honesty, discipline and drive.
      </p>
    </div>
  );
};

export default AboutMe;
