// src/pages/Contact.jsx
const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-16 pt-48 pb-32">
      <section className="grid grid-cols-12 gap-6 py-32 border-t border-white/5">
        <div className="col-span-12 lg:col-span-4">
          <div className="sticky top-48 flex flex-col gap-6">
            <span className="font-label-caps text-label-caps text-primary/50">INQUIRIES</span>
            <h2 className="font-headline-lg text-headline-lg text-white">Let's define the future together.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant/60 max-w-xs">
              Currently accepting select commissions for late 2024. Reach out to initiate a dialogue.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <a className="text-white font-bold tracking-tight hover:text-primary transition-colors" href="mailto:studio@thevoid.com">
                studio@thevoid.com
              </a>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-white/20">public</span>
                <span className="text-on-surface-variant/60">London / Paris / New York</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <form className="grid grid-cols-2 gap-8 bg-surface-container-lowest/50 p-12 rounded-2xl glass-glow border border-white/5">
            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-white/40 uppercase">Full Name</label>
              <input
                className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-white/40 uppercase">Email Address</label>
              <input
                className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10"
                placeholder="john@example.com"
                type="email"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2 pt-4">
              <label className="font-label-caps text-[10px] text-white/40 uppercase">Subject</label>
              <select className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                <option className="bg-surface-container-lowest">New Brand Strategy</option>
                <option className="bg-surface-container-lowest">Product Design</option>
                <option className="bg-surface-container-lowest">Consultation</option>
                <option className="bg-surface-container-lowest">Other</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col gap-2 pt-4">
              <label className="font-label-caps text-[10px] text-white/40 uppercase">Your Message</label>
              <textarea
                className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/10 resize-none"
                placeholder="Tell me about your vision..."
                rows="4"
              ></textarea>
            </div>
            <div className="col-span-2 pt-8">
              <button
                className="w-full bg-white text-black font-bold py-6 rounded-lg hover:scale-[1.01] hover:bg-white/90 transition-all duration-300 font-label-caps tracking-widest flex items-center justify-center gap-4"
                type="submit"
              >
                SEND MESSAGE
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;