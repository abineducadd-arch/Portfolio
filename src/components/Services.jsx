// src/pages/Services.jsx
const services = [
  {
    id: 1,
    title: 'Creative Direction',
    description: 'Comprehensive visual strategies that define the soul of a brand. We curate aesthetics that resonate with high-end audiences across all touchpoints.',
    icon: 'architecture',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWzvwcIw7KaVRVlhQ6zPFYNliERBr-9EbyEdMsA12syPQLbkXx6i9YiJRIbU9RaLuZFBtaJMbNppKQm3KlWewcpToPX1MigDAQ28iKYVUnnNLeyB527xvtVHGMSG9spiL_cBSunvmR7ljQu0f0ZIHPsFFfL5tDOYPIeUOqBCPafFF7z4ibHq3CpuqwTpC4Vd-EsvqDPoNx5XyqoaDjGACkKZUkYWjy4smXZJ6nOjaf1mtnaTVcfTWsgPRJYhw33TREX7KuVW930djd',
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Meticulous design systems built for longevity. We craft logos, typography, and color palettes that represent the pinnacle of your brand\'s heritage.',
    icon: 'identity_platform',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9y5UINdpVOKmbS0WTylPgPPU4ToHBYUwx8dYB_1wPuYp_spxXi3IXbsm6KzduHMQ6ALjQhgUuOd4XfEvMZ077hODmkMxSmUOixWtJ7RZrZjCqvR9XMkPC8BMrlHCII6RudaJ_qvxMe900CJ8d7fgeW0J3LHs0XPihMDB2TnSjMdkY2NMDlr4TNDNIUrpAcZkDdBn8v1smD6QEhDWbGvDrg50f_1psgqnJ0hBMI4l2QzZeGytGHR2FX6uUocWCrp9e3yu3sEr_2bhH',
    marginTop: true,
  },
  {
    id: 3,
    title: 'Product Design',
    description: 'User-centric digital experiences that prioritize clarity and function without sacrificing the beauty of the interaction.',
    icon: 'devices',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIfvK2PKDkfWVTrzPeX-ccv36Zs-8VnjgIF5FNPs3VnWam78KyNW0rbb1PwK9ZI0azUSkxMqwaY2uDgoLjBF11imgZT4Cl4DOU7j7uQL1zqgfIYqxRHWAXZio2ze59O8oHrG2izuGZiI4bkhYH28x7cRXxxalyaWekO5eqyx990AuPMDzjQLTUobn-sDgpoCI8RHR8tkl8xh4C5wrD3UjXRFiiYixpDwDF1fPql-sF5n2pjCmhDnLuMhP6pRvAvJAM1iqvqcwFB84d',
  },
  {
    id: 4,
    title: 'Motion & Experience',
    description: 'Cinematic motion design that brings digital canvases to life. We create fluid transitions and atmospheric narratives for the modern web.',
    icon: 'motion_mode',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHOZpcVzeKkq2QZK9EQ0XnPPxO27gYfzSf1pK79A-PceIxCQDDjdUuxxy3fepnhr636amW36jEcrI0b8SB4qCmlLGGXR9N4o8vrLGl02DUJystYJ3NMFMkF89qrzHLqg50Z-0Tu_i6387f0Ou33Fjwg-nALjD7XQwEHRPr__8e7UZIizPNaQsQ4wDgi-idaXGeG5KZKtnrt4r-etReTwA1SiJaBw4ver6eKI0Wnfmz9DfTYcKolu1soADhKzlAVe7P4S2jj9ohiBv6',
    marginTop: true,
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-16 pt-48 pb-32">
      {/* Hero Section */}
      <section className="mb-40">
        <div className="max-w-4xl">
          <p className="font-label-caps text-label-caps text-primary/60 mb-8">EXPERTISE &amp; CAPABILITIES</p>
          <h1 className="font-headline-xl text-headline-xl text-white mb-12">Services &amp; Expertise</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            We bridge the gap between architectural precision and digital fluidity. Our approach is grounded in the belief that luxury is found in the details that most overlook.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-64">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden glass-card rounded-xl p-12 hover:scale-[1.01] transition-all duration-700 ${service.marginTop ? 'mt-12' : ''}`}
            >
              <div className="flex justify-between items-start mb-16">
                <span className="font-label-caps text-label-caps text-white/20">0{service.id}</span>
                <span className="material-symbols-outlined text-white/40 text-4xl group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-white mb-6">{service.title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-12 max-w-md">
                {service.description}
              </p>
              <div className="w-full h-64 overflow-hidden rounded-lg">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-1000 scale-105 group-hover:scale-100"
                  src={service.image}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-64">
        <div className="border-t border-white/10 pt-32 grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="col-span-3 mb-16">
            <h2 className="font-headline-lg text-headline-lg text-white">The Process</h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-white/20 relative">
              <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-white"></div>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-primary mb-4">PHASE 01</p>
              <h4 className="font-headline-md text-headline-md text-white mb-6">Discovery</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Immersion into your world. We analyze market positioning, cultural context, and your core objectives to build a strategic foundation.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-white/20 relative">
              <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-primary mb-4">PHASE 02</p>
              <h4 className="font-headline-md text-headline-md text-white mb-6">Design</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The iterative translation of strategy into form. We explore, refine, and craft the visual language that speaks your truth.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-white/20 relative">
              <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-primary mb-4">PHASE 03</p>
              <h4 className="font-headline-md text-headline-md text-white mb-6">Delivery</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Executing the vision with uncompromising precision. We ensure every asset is polished and every interaction is seamless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="glass-card rounded-3xl py-32 px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
          <h2 className="font-headline-xl text-headline-xl text-white mb-12">Ready to define your aesthetic?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-16 max-w-2xl mx-auto">
            We take on a limited number of projects each year to ensure the highest level of craftsmanship and attention.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <button className="bg-white text-black px-12 py-5 rounded-full font-inter tracking-tighter uppercase text-sm font-semibold hover:scale-105 transition-all duration-500">
              Start an Inquiry
            </button>
            <button className="border border-white/20 text-white px-12 py-5 rounded-full font-inter tracking-tighter uppercase text-sm font-semibold hover:bg-white/5 transition-all duration-500">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;