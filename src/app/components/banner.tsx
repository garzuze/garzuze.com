import AnimatedGradient from '@/components/animated-gradient';
import { SpecialText } from '@/components/special-text';

const Banner = () => {
  return (
    <div className="h-40 sm:h-52 border-x border-stone-200 dark:border-stone-900 relative    flex items-center justify-center">
      <div className="z-10 flex flex-col items-center text-white gap-1">
        <SpecialText speed={100} className="text-lg" inView>
          غرزوز
        </SpecialText>
      </div>
      <AnimatedGradient style={{ zIndex: 0 }} config={{ preset: 'Vortex' }} />
    </div>
  );
};

export default Banner;
