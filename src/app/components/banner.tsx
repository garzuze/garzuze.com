import AnimatedGradient from '@/components/animated-gradient';

const Banner = () => {
  return (
    <div className="h-40 sm:h-52 border-x border-stone-200 dark:border-stone-900 relative    flex items-center justify-center">
      <AnimatedGradient style={{ zIndex: 0 }} config={{ preset: 'Vortex' }} />
    </div>
  );
};

export default Banner;
