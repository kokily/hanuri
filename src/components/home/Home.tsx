import { HeroImage } from './hero/HeroImage';
import { HeroModal } from './hero/HeroModal';
import { HeroText } from './hero/HeroText';

export function Home() {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-50">
      <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-12 lg:gap-8">
        <HeroText />
        <HeroImage />

        <HeroModal />
      </div>
    </section>
  );
}
