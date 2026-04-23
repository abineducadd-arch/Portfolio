// src/pages/CaseStudy.jsx
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams();

  // For demonstration, we'll show the Aetherial Archive case study regardless of ID
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[1024px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover scale-105"
            alt="ultra-modern glass architectural structure"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYo-gO_Ke5zjW6XJzmdKfz76jaRDSwavREO-qL2h_y6agLbCsaRtWnGm-7QMHkxrrQNFR45FRb8wIe_yqGT75m-R8AZc8zttKE4LbnDAdtEyE1es8pyRKLk8WjwJ1nVIjKI13cymEjBJHoSX6Okax8lCEWJzP2K_iWNK9uxDBTuKt1UreQZdSocNkLd9PepWAuHAjqwFcxWO17M392W2Y1X5cPPZm6NXKJ3Had6-2AON4F_PSAAIDvOTZv9n44PSQ3Hq6ynt2Gjp8u"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-surface-container-lowest"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end px-16 pb-32 max-w-[1440px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-4 block tracking-[0.4em]">Case Study / 2024</span>
            <h1 className="font-headline-xl text-headline-xl mb-8 leading-none">AETHERIAL <br /> ARCHIVE.</h1>
            <div className="flex gap-12 items-center">
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-white/40 mb-1">CLIENT</span>
                <span className="font-body-md text-white">Lumina Tech Group</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-white/40 mb-1">ROLE</span>
                <span className="font-body-md text-white">Creative Direction</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] text-white/40 mb-1">TIMELINE</span>
                <span className="font-body-md text-white">4 Months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-40 px-16 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-headline-md text-headline-md mb-8">The Challenge</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Lumina required a brand identity that felt both ancient and futuristic. The challenge was to bridge the gap between tangible craftsmanship and ethereal digital presence, creating a sanctuary for high-value data.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
            <div className="h-[1px] w-full bg-white/10 mb-12"></div>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <span className="font-headline-md text-primary block mb-2">01</span>
                <p className="text-white/60 font-body-md">Fragmented visual language across global touchpoints.</p>
              </div>
              <div>
                <span className="font-headline-md text-primary block mb-2">02</span>
                <p className="text-white/60 font-body-md">High bounce rates on legacy documentation portals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full h-[819px] bg-surface-container overflow-hidden">
        <img
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          alt="minimalist workspace with high-end tech equipment"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIZ1dSxcfm9CY8LFXaELvADkOdAZESaC2LkyyG07Nsbun1OmceEPitqoLm4O7yfPCDsaYiTNjlo38nVnmyyeHMDhTT53qAmJI5z_ViGM45wFirtfwajOc5ur_CX7tPAM7z-YJi-ykEQk8yEt0Fe2sEzfQL3BlBFqcLQV4DfSpWAGLms5sGdSrwXwoPjI1P-S1FCq0o6_fYa8vh_9T1QiIsAgS-lYmGqmJHjxyQ2we3w8YjcVBJPoBEXMzo51zSe8NXWnPi5fNPNRJe"
        />
      </section>

      {/* Solution & Results Section */}
      <section className="py-40 px-16 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-32">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-headline-md text-headline-md mb-8">The Solution</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                We developed a design system based on "Monolithic Minimal." Utilizing high-contrast typography and vast negative space, the interface mimics a digital gallery. The use of glassmorphism allowed for depth without clutter.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 border border-white/5 bg-surface-container rounded-xl glass-glow">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    layers
                  </span>
                  <h3 className="font-body-md font-bold mb-2">Layered Hierarchy</h3>
                  <p className="text-sm text-white/40">Visual depth through translucent surfaces and refined blur effects.</p>
                </div>
                <div className="p-8 border border-white/5 bg-surface-container rounded-xl glass-glow">
                  <span className="material-symbols-outlined text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    speed
                  </span>
                  <h3 className="font-body-md font-bold mb-2">Rapid Access</h3>
                  <p className="text-sm text-white/40">Optimized navigation paths reducing search time by 40%.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="aspect-[3/4] bg-surface-container rounded-2xl overflow-hidden relative group">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="abstract 3D glass sculpture"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxYq21i_sPfuJanKVJVSqozyi5eMjSmBjtGdBKCguqmSe1zkhPmBQOGTTq_BSCA6vgNRmblz7w-PczLqq0dyM6FCgwhcSfW6BWHQtxoVdqOzEVTyXMMQ91r7YDN3y2vlAgPkiH11c1MHIOYdOR9qQ4vOd9vtMQ2YrTeuL_lsATIFYmBfaq4OTcZT5ZS4NUjMRcqnQtpldLKTjfCnqBOfEaPDi04syyIGBb0c6vFHhFDKgbVeDJ4fiTuWFEdSE_aq2CJX8NfRTHzmj7"
                />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="font-label-caps text-[10px] opacity-60">DETAIL V_01</span>
                  <div className="h-[1px] w-12 bg-white mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid of Results */}
          <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[600px]">
            <div className="col-span-2 row-span-2 bg-surface-container rounded-3xl overflow-hidden relative group border border-white/5">
              <img
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                alt="sophisticated user interface design"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQjkL-VGkZZLvLqN46vh6jjsAkjP4ybp1hFF8wIcdGe3h2QK-6PHNpuVzpOwP1ZbveC3NnsLDMNdxQx1WNM1_UPeAL2PZwaaTwP83kiHZEtXUfvcdFhMqHKMGV0x3smAqPk6kYbqg9_iZUzYAUMQqJ-2LQa1QuaegC0SZRazNBMZ5Vkwb5rmGiFHXbn-RjJ_xJOziJs6-k37W2bZ8PZbYJlOn1xMQGVwdl0beR0n36ygQSr-LYDmSMMEOLC1o_Rtn_cnj5HJfVR5lM"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h4 className="font-headline-md text-headline-md mb-2">98% Satisfaction</h4>
                <p className="text-white/60">Global user feedback exceeded all historical benchmarks.</p>
              </div>
            </div>
            <div className="col-span-2 row-span-1 bg-surface-container rounded-3xl p-12 border border-white/5 flex items-center justify-between">
              <div>
                <h4 className="font-headline-md text-headline-md text-primary">+120%</h4>
                <p className="text-white/60">Engagement Growth</p>
              </div>
              <span className="material-symbols-outlined text-6xl text-white/10" style={{ fontVariationSettings: "'FILL' 0" }}>
                trending_up
              </span>
            </div>
            <div className="col-span-1 row-span-1 bg-surface-container rounded-3xl p-8 border border-white/5 text-center flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-3xl mb-4 text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                public
              </span>
              <p className="font-label-caps text-[10px] text-white/40">Global Reach</p>
              <p className="font-body-md mt-2">24 Countries</p>
            </div>
            <div className="col-span-1 row-span-1 bg-primary rounded-3xl p-8 text-on-primary text-center flex flex-col justify-center items-center">
              <span className="material-symbols-outlined text-3xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
              <p className="font-label-caps text-[10px] text-on-primary/60">AWARD</p>
              <p className="font-body-md font-bold mt-2">Best UX 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Preview */}
      <section className="relative py-32 px-16 bg-surface-container-highest group cursor-pointer overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-40">
          <img
            className="w-full h-full object-cover"
            alt="abstract satellite view of earth at night"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqJhdJ6xX1wiDG74Gy2mkFItvXk0QAF8cPDrJFmU83zI4FLvOwILxOt-KcWF06J4e9_wxae3rMwSt8KoctZyp6iEyygPr3E2ShF3c5xUhJE0JdZ-TQUv66N86HLecst1c9QdsxKhmMEWwecyZnMaq15G0BxD49Z6qyrwLZRxti7pAdxNyhqTjmGteeWpZm-YjbVn6MQvOZSWJzYBRnkls6NMgiwd-j3JOdPX6v_HJYcdfFBXHmE57s68L97zgpBINPaoUSmN2NRuOB"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <span className="font-label-caps text-label-caps mb-6 block text-white/40 tracking-[0.5em]">NEXT PROJECT</span>
          <h2 className="font-headline-xl text-headline-xl group-hover:tracking-widest transition-all duration-700">NEBULOUS CORE.</h2>
          <div className="mt-12 inline-flex items-center gap-4 text-white hover:text-primary transition-colors">
            <span className="font-label-caps">VIEW CASE STUDY</span>
            <span className="material-symbols-outlined">east</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;