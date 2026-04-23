// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'nebula-core',
    title: 'NEBULA CORE',
    tags: ['Creative Direction', '3D Motion'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAU5I81qKnr0E-Z4N51yeck5cxqtSjUhzqxB77BLEUlpDgHenCk_N8Qn0Q6sXZOkyYktblghoMfxOla35g7VVoy44MW2Y7D8q6mi72U-ga6AGbFlQ7DxEu00E0_S5-omVeBtBy4F5VbLUI45vvyeKQRnuCaGnUkEu0jNphu_6TZsnVeCB11DQpGJsU87_6ziZtBj-GLZCzT1e1GnFc74ed-L1qzNj8_u8RtGvRWGKSJzMm3DGXGEv20AZHsv7DnplsjYB01AXGZa3Gw',
    span: 'full',
  },
  {
    id: 'aether-os',
    title: 'AETHER OS',
    tag: 'UI/UX Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFwGTORGV3RMPZi3_p_k-Q9afBu91Sfwk2xk8gklJ85kVBk0RSIsaMCpkr4cDxNleAn3v7LgF3jQhLQvNgINbmbR9KWdxi5ofCVGRuKPyOCnJ2lcIS3fqXKgs7BUkjq1BnBegYIShBY39yUMrM2t4vyok65gSKkaH0RB-HHgnO4bikcKK0erTVMt3QMYBdCYDBtQ_u3xeI5vk5oXQAE5VVhiPRkj3jHDJOTcgvriaZwfdlZh6llp9ogLtVVTrNELkD60KtXa2OWyMZ',
    span: 'col-span-7 mt-20',
    hasOverlay: true,
    overlayText: 'Designing the sensory interface for the next generation of spatial computing.',
  },
  {
    id: 'lumina',
    title: 'LUMINA',
    tag: 'Product Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB286KM-7QcR7xgRNJW76q6y9O51eaXKCMxVKzyblSvaQZTrS0hqifQYpoTCv5WjKu8l23oc1vVYYVrgwdqvYiPYpRNd5wU1j9ACOABQYw2s4o1UUIllPnX8cWFQSCWCV2WWLAfpyGifmSDU9InMLhxaz_OwtEVcG4ZQ_Usvbw33U3uW2eOajsB0Hcf44O_JfKbSAMzUGOkHNWHwv2_RbSugFQLTDE0V4KyjxQDPSci6AshMbx1tpmAocMAD7-xCYnVKM7QeDnLtAG',
    span: 'col-span-4 col-start-9 self-end',
  },
  {
    id: 'mono-archive',
    title: 'MONO ARCHIVE',
    tag: 'Editorial',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjWGTYWs47quctBRKNwjvl3pKf_S_KtcXFMITlklO7QEaAmkMQ_KHnxMWLMUdxZ4x715lBiC8UHcQ5jgVL6r6n4heCqKdsRogo1062S1T3HAAJ0rLCs-4Yne0OLMu2ftGFraxTWg4HXaRcgTx04OdJ1PsgGNTJJ_YPYS9qzvFYVJRp0YbRSmgqOQQtiC4G2NP0GyPxUGPSlcdrIMsqvWaQ2cDHjZRkpboI2hxLOMwjizhOncr_Po1Cigh9haKXpxp-EwAPEyj_lcg8',
    span: 'col-span-6',
  },
  {
    id: 'spectrum',
    title: 'SPECTRUM',
    tag: 'Brand Identity',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbIoizNkovep8HHuBVS0lJ0FQRW9_fOA3CdrgwScGTEOBDyVbEEp7gB0GKDHwakLJx6osymtgJQfjlGewlnSwrrm7bPAOXtu3bA12954hBMvbKcrZ0OUusydpa8einvLy59brFWVIzJVhVpGwe4sqfBlTQQ9SsntQlneq5vrvZMXrVX_pXwYnh6jvt6UmSMYvjvET8h9M4-IC8Rw70DEzhHSe6fTZTMwg4-OXqWJlrQyi1tL7feNAm9-qqAcSDjzFNGniKAHTMHiyV',
    span: 'col-span-6 mt-32',
  },
];

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-48 pb-32 px-16 max-w-[1440px] mx-auto">
        <div className="max-w-[800px]">
          <span className="font-label-caps text-label-caps text-primary mb-6 block">PROJECT ARCHIVE 2024</span>
          <h1 className="font-headline-xl text-headline-xl text-white mb-8">Selected works from the digital frontier.</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[600px]">
            A curated collection of visual narratives, digital architectures, and experiential design focused on the intersection of utility and art.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="grid grid-cols-12 gap-y-32 gap-x-6 px-16 max-w-[1440px] mx-auto">
        {/* Project 1: Full Width Featured */}
        <div className="col-span-12 group cursor-pointer relative">
          <div className="overflow-hidden aspect-[21/9] rounded-lg bg-surface-container-lowest">
            <img className="project-image w-full h-full object-cover" src={projects[0].image} alt={projects[0].title} />
          </div>
          <div className="mt-8 flex justify-between items-start">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-2">{projects[0].title}</h2>
              <div className="flex gap-4">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="font-label-caps text-label-caps text-white/40 border border-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Link to={`/case-study/${projects[0].id}`}>
                <span className="material-symbols-outlined text-white text-4xl">arrow_outward</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Project 2: Medium Left */}
        <div className="col-span-7 group cursor-pointer mt-20">
          <div className="overflow-hidden aspect-[4/5] rounded-lg bg-surface-container-lowest relative">
            <img className="project-image w-full h-full object-cover" src={projects[1].image} alt={projects[1].title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-12">
              <p className="text-white font-body-md max-w-sm">{projects[1].overlayText}</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="font-headline-md text-headline-md text-white mb-2">{projects[1].title}</h2>
            <span className="font-label-caps text-label-caps text-white/40">{projects[1].tag}</span>
          </div>
        </div>

        {/* Project 3: Medium Right Staggered */}
        <div className="col-span-4 col-start-9 group cursor-pointer self-end">
          <div className="overflow-hidden aspect-[3/4] rounded-lg bg-surface-container-lowest">
            <img className="project-image w-full h-full object-cover" src={projects[2].image} alt={projects[2].title} />
          </div>
          <div className="mt-8">
            <h2 className="font-headline-md text-headline-md text-white mb-2">{projects[2].title}</h2>
            <span className="font-label-caps text-label-caps text-white/40">{projects[2].tag}</span>
          </div>
        </div>

        {/* Project 4: Full Width Split Case Study */}
        <div className="col-span-12 grid grid-cols-12 gap-6 mt-20">
          <div className="col-span-5 flex flex-col justify-center pr-12">
            <span className="font-label-caps text-label-caps text-primary mb-6 block">004 / CASE STUDY</span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Redefining Digital Commerce.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-10">
              A deep dive into the architecture of luxury retail experiences, where every pixel is a deliberate choice.
            </p>
            <button className="w-fit flex items-center gap-3 font-label-caps text-label-caps text-white border-b border-white/20 pb-2 hover:border-white transition-all">
              VIEW CASE STUDY
              <span className="material-symbols-outlined text-sm">east</span>
            </button>
          </div>
          <div className="col-span-7 group cursor-pointer">
            <div className="overflow-hidden aspect-video rounded-lg bg-surface-container-lowest">
              <img className="project-image w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcOZCeCR9269UCLSnp95VMsU6ZLiXb3Kp29k6ICxVwFFfobJlhOR7EQeI9Ezl9kJvVTG6CSOkAZ_xevIZSUUJNKhh5h1cWePjUGAGiM_iKq95cW39gYLRpUee2c7mNyjWm3XbL21rbPUKDr8TnpjiEk_CFG2vrI6N9O9uU_NY5Ct7be3wHsJSkL-GAnnjd0xOP4jiZZi0C6vAl9Iwjs5pHmwTFzDTNZXfl8sr6eWqB6sR_GG6QnRQoHMa2x_K4Xms82hXCTvREsW7-" alt="Digital Mesh Network" />
            </div>
          </div>
        </div>

        {/* Project 5 & 6: Balanced Pairs */}
        <div className="col-span-6 group cursor-pointer">
          <div className="overflow-hidden aspect-square rounded-lg bg-surface-container-lowest">
            <img className="project-image w-full h-full object-cover" src={projects[3].image} alt={projects[3].title} />
          </div>
          <div className="mt-8">
            <h2 className="font-headline-md text-headline-md text-white mb-2">{projects[3].title}</h2>
            <span className="font-label-caps text-label-caps text-white/40">{projects[3].tag}</span>
          </div>
        </div>
        <div className="col-span-6 group cursor-pointer mt-32">
          <div className="overflow-hidden aspect-square rounded-lg bg-surface-container-lowest">
            <img className="project-image w-full h-full object-cover" src={projects[4].image} alt={projects[4].title} />
          </div>
          <div className="mt-8">
            <h2 className="font-headline-md text-headline-md text-white mb-2">{projects[4].title}</h2>
            <span className="font-label-caps text-label-caps text-white/40">{projects[4].tag}</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-40 pt-40 border-t border-white/5 text-center px-16 max-w-[1440px] mx-auto">
        <h2 className="font-headline-xl text-headline-xl text-white mb-12">Start a conversation.</h2>
        <div className="flex justify-center gap-6">
          <Link to="/contact" className="bg-white text-black px-12 py-6 rounded-full font-label-caps text-label-caps hover:scale-[1.02] transition-transform">
            HIRE THE STUDIO
          </Link>
          <Link to="/about" className="bg-transparent text-white border border-white/20 px-12 py-6 rounded-full font-label-caps text-label-caps hover:bg-white/10 transition-all">
            OUR PHILOSOPHY
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;