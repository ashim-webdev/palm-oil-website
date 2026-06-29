import { Sparkles, ArrowRight, Phone, Mail, MapPin, Pin } from 'lucide-react';


export default function CtaBanner() {
  return (
    <section id="CtaBanner" className="scroll-mt-20 font-serif pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#005734] rounded-[2.5rem] overflow-hidden p-14 text-center shadow-teal">
          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/8 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
          <div className="absolute top-1/2 right-24 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 flex flex-col justify-center items-center gap-4 ">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 mb-7">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-600 text-white whitespace-nowrap">Discover Your Perfect Furniture</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-800 text-white mb-5 leading-tight tracking-tight">
              Ready To Transform Your Living Space?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-xl mx-auto leading-relaxed">
              From elegant sofas and dining sets to modern bedroom collections, we create furniture designed to bring comfort, style, and lasting quality into your home. Explore our collection today and discover pieces crafted for modern living.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+2347037189416"
                className="flex items-center gap-3 bg-white text-brand-600 font-700 px-8 py-4 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-float whitespace-nowrap"
              >
                <div className='animate-UpDown'>
                  <Phone className="w-5 h-5" />
                </div>
                +234 703 718 9416
              </a>
              <a
                href="#collection"
                className="btn-shine flex items-center gap-2.5 bg-white/15 backdrop-blur border-2 border-white/40 text-white font-700 px-8 py-4 rounded-2xl hover:bg-white/25 transition-all duration-300 whitespace-nowrap"
              >
                Browse Collection
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}