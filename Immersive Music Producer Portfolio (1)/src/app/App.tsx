import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Mail, Instagram, Twitter, Phone } from 'lucide-react';
import { RunwayModel } from './components/RunwayModel';
import { FashionShowCarousel } from './components/FashionShowCarousel';
import { EditorialGrid } from './components/EditorialGrid';
import { AwardShowcase } from './components/AwardShowcase';
import { MagazinePageTurn } from './components/MagazinePageTurn';
import { RunwayLighting } from './components/RunwayLighting';

const fashionShows = [
  {
    image: 'https://images.unsplash.com/photo-1543728069-a3f97c5a2f32?w=1920',
    title: 'NOIR ÉLÉGANCE',
    season: 'SPRING / SUMMER 2026',
    description: 'A celebration of timeless sophistication with contemporary edge. Featuring flowing silhouettes and architectural details.',
  },
  {
    image: 'https://images.unsplash.com/photo-1635279474047-ab3cda78bbe8?w=1920',
    title: 'LUMIÈRE',
    season: 'FALL / WINTER 2025',
    description: 'Inspired by the golden hour of Paris. Luxurious textures meet minimalist design in perfect harmony.',
  },
  {
    image: 'https://images.unsplash.com/photo-1662532577856-e8ee8b138a8b?w=1920',
    title: 'ROUGE PASSION',
    season: 'RESORT 2026',
    description: 'Bold statements in crimson and gold. Where classic couture meets modern rebellion.',
  },
];

const lookbookItems = [
  {
    image: 'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?w=800',
    title: 'ETERNAL GRACE',
    category: 'EVENING WEAR',
    span: 'large' as const,
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?w=800',
    title: 'DOUBLE VISION',
    category: 'READY-TO-WEAR',
  },
  {
    image: 'https://images.unsplash.com/photo-1664076458686-3449062080ac?w=800',
    title: 'SILK DREAMS',
    category: 'HAUTE COUTURE',
    span: 'tall' as const,
  },
  {
    image: 'https://images.unsplash.com/flagged/photo-1553277004-39d655b57262?w=800',
    title: 'MODERN CLASSIC',
    category: 'BRIDAL',
  },
  {
    image: 'https://images.unsplash.com/photo-1571924848943-25c2c95bbb4b?w=800',
    title: 'IVORY ROSE',
    category: 'COUTURE',
    span: 'wide' as const,
  },
  {
    image: 'https://images.unsplash.com/photo-1659522761084-79196b64abe4?w=800',
    title: 'WHISPER',
    category: 'EVENING',
  },
];

const campaigns = [
  {
    image: 'https://images.unsplash.com/photo-1758738180213-9320972d07eb?w=800',
    title: 'THE SOPHISTICATE',
    collection: 'AW 2025 CAMPAIGN',
  },
  {
    image: 'https://images.unsplash.com/photo-1762605135376-ae5af70a5628?w=800',
    title: 'DESERT MUSE',
    collection: 'RESORT 2026',
  },
  {
    image: 'https://images.unsplash.com/photo-1779405949264-a44d50a14315?w=800',
    title: 'ROYAL AFFAIR',
    collection: 'HERITAGE COLLECTION',
  },
];

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <RunwayLighting />

      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 100 ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          borderBottom: scrollY > 100 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none',
          backdropFilter: scrollY > 100 ? 'blur(10px)' : 'none',
        }}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-6 h-6 text-amber-400" />
              <span className="text-2xl tracking-[0.3em] font-light">MAISON ÉLÉGANCE</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <a href="#collections" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">COLLECTIONS</a>
              <a href="#lookbook" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">LOOKBOOK</a>
              <a href="#campaigns" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">CAMPAIGNS</a>
              <a href="#brand" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">THE BRAND</a>
              <a href="#awards" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">AWARDS</a>
              <a href="#contact" className="text-sm tracking-[0.2em] hover:text-amber-400 transition-colors">CONTACT</a>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554882195-8cf792f9a571?w=1920"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative z-10 text-center px-6">
          <motion.p
            className="text-xs tracking-[0.5em] text-amber-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            HAUTE COUTURE
          </motion.p>

          <motion.h1
            className="text-8xl md:text-9xl font-light tracking-[0.2em] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            ÉLÉGANCE
          </motion.h1>

          <motion.p
            className="text-xl font-light tracking-[0.3em] text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            SPRING / SUMMER 2026
          </motion.p>

          <motion.button
            className="px-12 py-4 border-2 border-amber-400 text-amber-400 tracking-[0.3em] text-sm hover:bg-amber-400 hover:text-black transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            DISCOVER THE COLLECTION
          </motion.button>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent" />
        </motion.div>
      </section>

      <section id="collections" className="relative py-32 bg-black">
        <FashionShowCarousel slides={fashionShows} />
      </section>

      <section id="lookbook" className="relative py-32 px-6">
        <div className="container mx-auto">
          <MagazinePageTurn>
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.5em] text-amber-400 mb-4">EDITORIAL</p>
              <h2 className="text-6xl font-light tracking-[0.2em] mb-6">LOOKBOOK</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </motion.div>
          </MagazinePageTurn>

          <EditorialGrid items={lookbookItems} />
        </div>
      </section>

      <section id="campaigns" className="relative py-32 px-6 bg-gradient-to-b from-black via-amber-950/5 to-black">
        <div className="container mx-auto">
          <MagazinePageTurn delay={0.2}>
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.5em] text-amber-400 mb-4">VISUAL STORIES</p>
              <h2 className="text-6xl font-light tracking-[0.2em] mb-6">CAMPAIGNS</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </motion.div>
          </MagazinePageTurn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <RunwayModel
                key={index}
                image={campaign.image}
                title={campaign.title}
                collection={campaign.collection}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="brand" className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <MagazinePageTurn delay={0.3}>
              <motion.div
                className="relative h-[600px] overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1774549470665-8a2be79a33e3?w=800"
                  alt="Atelier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-2 border-amber-400/20" />
              </motion.div>
            </MagazinePageTurn>

            <MagazinePageTurn delay={0.5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs tracking-[0.5em] text-amber-400 mb-6">OUR PHILOSOPHY</p>
                <h2 className="text-5xl font-light tracking-[0.1em] mb-8">
                  BEHIND THE BRAND
                </h2>

                <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                  <p>
                    Founded in the heart of Paris, Maison Élégance represents the pinnacle
                    of haute couture craftsmanship. Each piece is a testament to our
                    unwavering commitment to timeless elegance and innovative design.
                  </p>

                  <p>
                    Our atelier combines centuries-old techniques with contemporary vision,
                    creating garments that transcend trends and define sophistication. Every
                    stitch, every fold, every detail is executed with meticulous precision.
                  </p>

                  <p>
                    We believe luxury is not just about materials—it's about the story
                    woven into every thread, the artistry in every seam, and the emotion
                    captured in every silhouette.
                  </p>
                </div>

                <motion.div
                  className="mt-8 flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-px bg-amber-400" />
                  <span className="text-xs tracking-[0.3em] text-amber-400">EST. 2020</span>
                </motion.div>
              </motion.div>
            </MagazinePageTurn>
          </div>
        </div>
      </section>

      <section id="awards" className="relative py-32 px-6 bg-gradient-to-b from-black via-amber-950/10 to-black">
        <div className="container mx-auto max-w-6xl">
          <MagazinePageTurn>
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.5em] text-amber-400 mb-4">RECOGNITION</p>
              <h2 className="text-6xl font-light tracking-[0.2em] mb-6">AWARDS</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8" />
              <p className="text-gray-400 font-light max-w-2xl mx-auto">
                Honored by the world's most prestigious fashion institutions for
                excellence in design, innovation, and craftsmanship.
              </p>
            </motion.div>
          </MagazinePageTurn>

          <AwardShowcase />
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <MagazinePageTurn delay={0.2}>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.5em] text-amber-400 mb-4">GET IN TOUCH</p>
              <h2 className="text-6xl font-light tracking-[0.2em] mb-6">CONTACT</h2>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </motion.div>
          </MagazinePageTurn>

          <motion.div
            className="border border-amber-400/20 p-12 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-[0.3em] text-amber-400 mb-2">ATELIER</h3>
                  <p className="text-gray-300 font-light">
                    15 Avenue Montaigne<br />
                    75008 Paris, France
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.3em] text-amber-400 mb-2">CONTACT</h3>
                  <div className="space-y-2 text-gray-300 font-light">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>contact@maisonelegance.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>+33 1 23 45 67 89</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.3em] text-amber-400 mb-4">FOLLOW US</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="w-10 h-10 border border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/10 flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram className="w-5 h-5 text-amber-400" />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-10 h-10 border border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/10 flex items-center justify-center transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-5 h-5 text-amber-400" />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-[0.3em] text-amber-400 mb-6">INQUIRIES</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  For private appointments, bespoke commissions, and press inquiries,
                  please reach out to our team. We look forward to creating something
                  extraordinary together.
                </p>

                <motion.button
                  className="w-full py-4 border-2 border-amber-400 text-amber-400 tracking-[0.3em] text-sm hover:bg-amber-400 hover:text-black transition-all duration-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SCHEDULE APPOINTMENT
                </motion.button>
              </div>
            </div>

            <motion.div
              className="mt-12 pt-8 border-t border-amber-400/20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.3em] text-gray-500">
                HAUTE COUTURE SINCE 2020
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-amber-400/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-sm tracking-[0.3em] font-light">MAISON ÉLÉGANCE</span>
            </div>

            <p className="text-xs tracking-[0.2em] text-gray-500">
              © 2026 MAISON ÉLÉGANCE. ALL RIGHTS RESERVED.
            </p>

            <div className="flex gap-6 text-xs tracking-[0.2em] text-gray-400">
              <a href="#" className="hover:text-amber-400 transition-colors">PRIVACY</a>
              <a href="#" className="hover:text-amber-400 transition-colors">TERMS</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
