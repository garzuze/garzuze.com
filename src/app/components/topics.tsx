import { CodeXmlIcon, GraduationCapIcon, LightbulbIcon, Mail, PhoneIcon, PinIcon } from "lucide-react";

const Topics = () => {
  return (
    <section data-slot="panel" className="border-stone-200 dark:border-stone-900 border-x border-edge">
      <div data-slot="panel-body" className="p-4 space-y-2">
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <CodeXmlIcon size={16} />
          </div>
          <p className="text-balance">FullStack Developer @<a
            className="ml-0.5 font-medium underline-offset-4 hover:underline"
            href="https://britania.com.br"
            target="_blank" rel="noopener">Britânia</a></p>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <LightbulbIcon size={16} />
          </div>
          <p className="text-balance">Createor of <a className="ml-0.5 font-medium underline-offset-4 hover:underline"
            href="https://mlrh.com.br"
            target="_blank" rel="noopener">MLRH System</a></p>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <GraduationCapIcon size={16} />
          </div>
          <p className="text-balance">Student @<a className="underline-offset-4 hover:underline" href="https://chanhdai.com"
            target="_blank" rel="noopener noreferrer">UFPR</a></p>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <PinIcon size={16} />
          </div>
          <p className="text-balance">Curitiba, Paraná - Brasil</p>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <PhoneIcon size={16} />
          </div>
          <p className="text-balance"><a className="underline-offset-4 hover:underline" href="tel:+5541995149971"
            target="_blank" rel="noopener noreferrer">+55 (41) 99514-9971</a></p>
        </div>
        <div className="flex items-center gap-4 font-mono">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#b1c7e6] dark:bg-[#718396] dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15"
            aria-hidden="true">
            <Mail size={16} />
          </div>
          <p className="text-balance"><a className="underline-offset-4 hover:underline" href="mailto:lucas@garzuze.com"
            target="_blank" rel="noopener noreferrer">lucas@garzuze.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default Topics;
