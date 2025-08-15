import { WorkExperience } from "@/components/work-experience";
import { TypographyH2 } from "./tipography-h2";
import { EDUCATION } from "../data/education";

const Education = () => {
  return (
    <div className="border-x border-stone-200 dark:border-stone-900 py-6 px-[24px]">
            <TypographyH2>
                Education
            </TypographyH2>
            <WorkExperience experiences={EDUCATION} />
        </div>
  )
};

export default Education