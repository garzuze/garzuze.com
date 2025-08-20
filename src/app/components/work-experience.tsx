import { WorkExperience } from '@/components/work-experience';
import { WORK_EXPERIENCE } from '../data/work-experience';
import { TypographyH2 } from './tipography-h2';

const WorkXP = () => {
  return (
    <div className="border-x border-stone-200 dark:border-stone-900 py-6 px-[24px]">
      <TypographyH2>Work Experiences</TypographyH2>
      <WorkExperience experiences={WORK_EXPERIENCE} />
    </div>
  );
};
export default WorkXP;
