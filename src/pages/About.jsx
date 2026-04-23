import Contact from '../assets/Contact.png'
const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-16 pt-48 pb-32">
      {/* Biography Section */}
      <section className="grid grid-cols-12 gap-6 items-center mb-40">
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-primary/50">BIOGRAPHY</span>
            <h1 className="font-headline-xl text-headline-xl text-white leading-tight">The Art of Essence.</h1>
          </div>
          <div className="flex flex-col gap-8 max-w-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              I believe in quiet luxury—the kind that doesn't scream for attention but commands it through impeccable detail and intentional negative space.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant/70">
              For over a decade, I have partnered with visionaries to strip away the noise and reveal the core identity of luxury brands. My philosophy is rooted in cinematic minimalism: where every pixel serves a narrative and every interaction feels like a natural extension of the user.
            </p>
            <div className="flex gap-12 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-headline-md">12+</span>
                <span className="font-label-caps text-[10px] text-primary/40 uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white font-bold text-headline-md">84</span>
                <span className="font-label-caps text-[10px] text-primary/40 uppercase tracking-widest">Global Awards</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden glass-glow group">
            <img 
              alt="Portrait of a professional designer" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" 
              src={Contact}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-40"></div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default About;