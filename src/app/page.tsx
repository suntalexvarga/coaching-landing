"use client";

import FAQ from "@/components/FAQ";
import MethodSteps from "@/components/MethodSteps";
import { ScrollProgress } from "@/components/ScrollProgress";
import { FadeIn } from "@/components/FadeIn";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const CTA_LINK = "[CTA_LINK]";
const CTA_START_LINK = "[CTA_START_LINK]";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white scroll-smooth selection:bg-primary/30 selection:text-white font-sans">
      <ScrollProgress />

      {/* HEADER */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-sans text-sm md:text-base lg:text-lg font-bold text-white uppercase tracking-[0.2em]">
              Alexandru Varga
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            <a href="#metoda" className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
              Metoda
            </a>
            <a href="#proces" className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
              Procesul
            </a>
            <a href="#pachete" className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
              Pachete
            </a>
            <a href="#despre" className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
              Despre
            </a>
            <a href="#faq" className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          
          <div className="flex items-center shrink-0">
            <a href={CTA_LINK}>
              <Button className="bg-cta hover:bg-cta-hover text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] px-4 py-2 md:px-6 md:py-3 h-auto rounded shadow-lg transition-all duration-300">
                Programează o discuție
              </Button>
            </a>
          </div>
        </div>
      </motion.header>
      
      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-40 lg:pb-32 bg-background">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <motion.div 
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-cta/10 rounded-full blur-[80px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -30, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div 
              className="lg:col-span-7 space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
            
              </motion.div>

              <motion.h1 
                className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white tracking-tight"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Îți sabotezi propriile <br />
                planuri fără să înțelegi de ce?
              </motion.h1>
              
              <motion.div 
                className="space-y-6 text-lg md:text-xl leading-relaxed text-white/70 font-sans max-w-xl font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p>
                  Coaching 1 la 1 pentru oameni care vor rezultate reale, nu motivație de o zi. Dacă trăiești mai mult reacționând decât construind și te învârți între „ar trebui" și „nu reușesc să mă țin", te sprijin să înțelegi ce te oprește și să construiești un mod de a acționa pe care să te poți baza.
                </p>
              </motion.div>

              <motion.div 
                className="pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="inline-flex items-center gap-5 bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-5 md:p-6 rounded shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-1 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(59,175,182,0.8)] relative z-10" />
                  <p className="text-base md:text-lg text-white/90 italic font-sans leading-relaxed relative z-10">
                    În 4 ședințe punem pe masă ce te ține blocat, cum funcționează, ce parte din tine trage frâna și cum o transformi în aliat.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="pt-6 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <a href={CTA_LINK} className="inline-block">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="bg-cta hover:bg-cta-hover text-white font-bold uppercase tracking-[0.12em] px-10 py-6 text-base rounded-md shadow-[0_12px_25px_-8px_rgba(243,106,60,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(243,106,60,0.6)] transition-all duration-500">
                      Programează o discuție scurtă
                    </Button>
                  </motion.div>
                </a>
                <div className="text-xs text-white/30 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                    <span>20 de minute în care vei afla dacă ești pregătit să lucrezi la ceea ce amâni de ani de zile.</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-primary/40 rounded-full" />
                    <span>Fără presiune. Vedem dacă are sens să lucrăm împreună.</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-primary/20 translate-x-8 translate-y-8 rounded-xl blur-2xl opacity-25 -z-10 animate-pulse" />
                <div className="absolute inset-0 border-2 border-primary/20 translate-x-6 translate-y-6 rounded-xl -z-10" />
                <div className="absolute inset-0 border border-white/5 -translate-x-3 -translate-y-3 rounded-xl -z-10" />
                
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border border-white/10 group">
                  <Image
                    src="/firefighterrr.png"
                    alt="Alexandru Varga"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70" />
                </div>

                <motion.div 
                  className="absolute -bottom-8 -right-4 md:-right-8 bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-7 rounded-md shadow-2xl max-w-[260px] group hover:border-primary/30 transition-colors duration-500"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 1 }}
                >
                  <p className="font-sans font-bold text-white text-2xl tracking-tight mb-1">Alexandru Varga</p>
                  <div className="h-0.5 w-12 bg-primary group-hover:w-16 transition-all duration-500 mb-3" />
                  <p className="text-[9px] text-primary font-black uppercase tracking-[0.25em] leading-tight opacity-80">
                    Coaching comportamental <br /> & autosabotare
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PENTRU CINE ESTE */}
      <section className="relative py-20 overflow-hidden bg-bg-alt border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-12">
                <div className="space-y-5">
                  <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white leading-[1.2] tracking-tight">
                  E pentru tine dacă te-ai săturat să fii mereu în modul 
                  <span className="text-primary italic">„sting incendii"</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed font-light">
                   Şi vrei să construiești ceva care depinde de tine.
                  </p>
                </div>
                
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-cta/20 opacity-10 blur-2xl group-hover:opacity-20 transition duration-1000" />
                  <div className="relative w-full aspect-video rounded-md overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                    <Image
                      src="/firefighterrr.png"
                      alt="Reactivitate vs Alegere"
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* Primele 3 bullet points */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                  {[
                    "Ai trăit mult timp reactiv și simți că viața ta e mai mult „rezolvat\" decât „ales\".",
                    "Începi lucruri, dar nu le duci până la capăt.",
                    "Te pierzi în analiză, perfecționism sau amânare."
                  ].map((text, i) => (
                    <motion.div 
                      key={i}
                      className="flex flex-col gap-4 p-6 rounded-md bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                        <Check className="w-4 h-4 text-primary stroke-[3]" />
                      </div>
                      <span className="text-base text-white/70 font-sans leading-relaxed font-light">{text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Ultimele 2 bullet points - fiecare ocupă jumătate */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  {[
                    "Te apasă teama de eșec sau teama că, dacă reușești, vei fi văzut / judecat / respins.",
                    "Ai senzația că nu poți conta constant pe tine, chiar dacă din exterior „te descurci\"."
                  ].map((text, i) => (
                    <motion.div 
                      key={i + 3}
                      className="flex flex-col gap-4 p-6 rounded-md bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (i + 3) * 0.1, duration: 0.8 }}
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                        <Check className="w-4 h-4 text-primary stroke-[3]" />
                      </div>
                      <span className="text-base text-white/70 font-sans leading-relaxed font-light">{text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto mb-6" />
                <p className="text-sm text-white/30 italic font-sans whitespace-nowrap">
                  Nu este pentru tine dacă vrei o soluție magică și nu ești dispus să fii sincer cu tine.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - PROBLEMA REALĂ */}
      <section className="relative py-20 md:py-24 overflow-hidden bg-background border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 relative">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                Ce se întâmplă, <span className="text-primary italic">de fapt</span>, în tine
              </h2>
            </div>
          </FadeIn>
          
          <div className="space-y-12">
            <motion.div 
              className="space-y-6 text-base md:text-lg leading-relaxed text-white/70 font-sans font-light"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.3 } },
              }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                Reacționezi, nu alegi. (Ai multă informație, și te-ai obișnuit să răspunzi factorilor externi)
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                Când trăiești pe modul „rezolv ce e important pentru alții" nu mai ai timp pentru tine. Fain?
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                Și în timp, când apare ceva important de făcut pentru tine, parcă nu te poți baza pe tine.
              </motion.p>

              <motion.div 
                className=" relative"
                variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
              >
               
                
              
              </motion.div>

              <motion.p variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="text-center max-w-xl mx-auto">
                <span className="text-white font-medium">Anxietatea devine o alarmă permanentă.</span> <br />
                Autosabotarea devine „logică". Și ajungi să te oprești exact când contează.
              </motion.p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-br from-white/[0.08] to-transparent p-8 md:p-10 rounded-lg border border-white/10 shadow-3xl relative overflow-hidden group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
             
                <p className="text-base md:text-lg text-white font-light leading-relaxed relative z-10">
                  Vrei sa inveti sa nu te mai lupti cu tine? Le intelegem, le decodam, si le folosim in favoara ta.
                </p>
            </motion.div>

            <motion.div 
              className="space-y-6 text-base md:text-lg text-white/60 leading-relaxed font-light max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p>
                De cele mai multe ori <span className="font-semibold text-white">nu lipsa de informație e problema.</span> Ci faptul că ai fost mult timp <span className="italic">antrenat să reacționezi, nu să alegi.</span>
              </p>
              <p>
                Când trăiești în modul <span className="italic font-medium text-white">„rezolv ce apare"</span>, nu mai rămâne spațiu pentru ce depinde doar de tine. Și în timp apare o convingere tăcută:
              </p>
              <p className="text-2xl md:text-3xl font-sans font-bold text-primary text-center py-4 italic tracking-tight">
                „Nu pot conta pe mine"
              </p>
              <p>
                <span className="font-semibold text-white">Anxietatea devine o alarmă permanentă.</span> Autosabotarea devine „logică". Și ajungi să te oprești exact când contează.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - METODA */}
      <section id="metoda" className="bg-bg-alt py-20 md:py-24 relative border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight">
                Metoda mea
              </h2>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto mb-16 space-y-6 text-base md:text-lg leading-relaxed text-white/60 font-sans font-light">
            <p>
              Lucrăm în sesiuni 1 la 1, live, într-un proces structurat, dar flexibil.
            </p>
            <p>
              Nu îți dau „rețete rapide", ci te ajut să înțelegi precis cum funcționezi, ce te blochează și ce ai de făcut, concret, diferit.
            </p>
            <p>
              Lucrăm pe trei niveluri, în paralel:
            </p>
          </div>

          <div className="mb-16">
            <MethodSteps
              steps={[
                {
                  number: 1,
                  title: "Claritate psihologică / mentală",
                  content: (
                    <div className="space-y-4 text-base md:text-lg text-white/70 font-light leading-relaxed">
                      <p>Identificăm mecanismul exact: ce te declanșează, ce poveste rulează în fundal, ce beneficii ascunse are blocajul.</p>
                      <p>Nu rămânem la „mă autosabotez". Coborâm la:</p>
                      <ul className="space-y-3 ml-5">
                        {["ce anume activează reacția,", "ce îți spui în minte în acel moment,", "ce rol are, de fapt, partea care trage frâna."].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>Când vezi clar harta, nu mai pare „un haos", ci un proces logic pe care îl poți influența.</p>
                    </div>
                  ),
                },
                {
                  number: 2,
                  title: "Reglaj emoțional",
                  content: (
                    <div className="space-y-4 text-base md:text-lg text-white/70 font-light leading-relaxed">
                      <p>Emoțiile sunt feedback, nu defect. Nu încercăm să le „oprim", ci să le înțelegem.</p>
                      <p>Înveți să:</p>
                      <ul className="space-y-3 ml-5">
                        {["recunoști diferența dintre emoție și povestea despre ea,", "stai cu emoția fără să intri în spirala de overthinking,", "iei decizii fără să fugi de disconfort."].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>Scopul nu e „să nu mai simți nimic", ci să nu mai fii condus de reacții automate.</p>
                    </div>
                  ),
                },
                {
                  number: 3,
                  title: "Strategie aplicată",
                  content: (
                    <div className="space-y-4 text-base md:text-lg text-white/70 font-light leading-relaxed">
                      <p>Transformăm „vreau să" în direcție, pași mici și consistență.</p>
                      <p>Nu lucrăm cu planuri rigide, imposibil de susținut.</p>
                      <p>Ne uităm la:</p>
                      <ul className="space-y-3 ml-5">
                        {["ce depinde cu adevărat de tine,", "care este cel mai mic pas realist,", "cum urmărești progresul fără să te lovești cu perfecționismul."].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p>Accent pe consistență, nu pe performanță spectaculoasă de o zi.</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 pt-10 border-t border-white/5 space-y-4 text-base md:text-lg text-white/40 font-light italic leading-relaxed">
            <p>Lucrăm online, prin video call. Între ședințe poți primi exerciții, reflecții sau mici experimente de făcut în viața ta reală.</p>
            <p>Scopul fiecărei întâlniri este să pleci cu claritate + un pas concret, nu cu „inspirație" care se stinge în 24 de ore.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - STRUCTURA PROCESULUI */}
      <section id="proces" className="py-20 md:py-24 relative overflow-hidden bg-background border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <div className="mb-16 text-center">
              <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight">
                Cum arată colaborarea <br /> <span className="text-primary italic">(4 ședințe)</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { id: "S1", title: "Harta problemei", text: "Clarificăm tiparul: trigger → gând → emoție → reacție → consecință. Pui pe masă exemple concrete din viața ta, nu scenarii teoretice. La final, ai o hartă clară a modului în care funcționează autosabotarea la tine." },
              { id: "S2", title: "Conflictul intern", text: "Partea care vrea să crească și partea care vrea siguranță. Le identificăm și le punem la aceeași masă. În loc să încerci să „învingi\" o parte din tine, înveți să o înțelegi și să o transformi în aliat." },
              { id: "S3", title: "Rescrierea strategiei", text: "Schimbăm structura din minte, nu doar conținutul. Ne uităm la ce faci, când, cum și de ce. Ajustăm modul în care iei decizii și îți planifici acțiunile, astfel încât să fie aliniate cu ce vrei, nu cu fricile automate. Asta schimbă emoția și comportamentul." },
              { id: "S4", title: "Integrare", text: "Plan simplu pe 30 de zile: ce continui, ce oprești, ce începi. Accent pe consistență, nu perfecțiune. Ajustăm ce nu funcționează și stabilim cum vei ști că ești pe direcția potrivită." }
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.5 }}>
                  <Card className="relative h-full bg-white/[0.02] border-white/[0.05] hover:border-primary/20 transition-all duration-700 p-8 rounded-lg overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                      <span className="font-sans text-7xl font-black text-white tracking-tighter">{s.id}</span>
                    </div>
                    <div className="relative z-10 space-y-6">
                      
                      <h3 className="text-2xl font-sans font-semibold text-white tracking-tight">{s.title}</h3>
                      <p className="text-base text-white/50 leading-relaxed font-light">{s.text}</p>
                    </div>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 space-y-3 text-center">
            <p className="text-base text-white/30 italic font-sans">
              Chiar dacă acesta este cadrul propus, lucrăm cu ce este prioritar pentru tine.
            </p>
            <p className="text-base text-white/30 italic font-sans">
              Dacă în timpul procesului apare o problemă cu o urgență mai mare decât ce am stabilit inițial, ne concentrăm pe ea și ajustăm împreună structura.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - CE OBȚII */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-bg-alt border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight">
                Ce obții concret
              </h2>
              <p className="text-lg text-white/30 font-light">Atât cât te implici, atât obții la final. Fair?</p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {[
              { title: "Claritate", desc: "dar nu îți promit că îți va fi mai ușor." },
              { title: "Direcție", desc: "dar nu și rezultate fără să te miști." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-white/[0.03] p-8 md:p-10 rounded-lg border border-white/[0.05] hover:border-primary/20 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="h-px w-8 bg-primary/40 group-hover:w-12 transition-all duration-500" />
                <p className="text-base md:text-lg text-white/90 font-light leading-relaxed">
                  <span className="font-bold text-white uppercase tracking-tighter mr-3">{item.title}</span>, {item.desc}
                </p>
              </motion.div>
            ))}

            <motion.div 
              className="space-y-6 pt-8 text-base md:text-lg text-white/60 leading-relaxed font-light max-w-3xl"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p>Lucrurile nu devin neapărat mai ușoare. Dar devin mai clare. Nu mai trăiești doar reacționând. Nu mai abandonezi lucruri importante pe drum.</p>
              <p>Îți oprești spirala anxietății mai repede și revii la acțiune. Înveți, pas cu pas, să contezi pe tine. Nu pe chef. Nu pe context. Pe tine.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - PACHETE */}
      <section id="pachete" className="py-20 md:py-24 bg-background relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight">Pachete</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <Card className="h-full bg-white/[0.03] border-white/[0.05] hover:border-white/20 transition-all duration-700 p-8 md:p-10 rounded-xl flex flex-col group relative overflow-hidden">
                <div className="space-y-8 relative z-10 flex-1">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-sans font-medium text-white/90 uppercase tracking-widest">Start</h3>
                    <div className="flex flex-col gap-1">
                      <span className="text-4xl font-sans font-bold text-white tracking-tighter">[de completat]</span>
                    </div>
                  </div>
                  <ul className="space-y-6">
                    {[
                      "4 ședințe 1:1 (săptămânal)",
                      "Suport scurt între ședințe (mesaje scurte)",
                      "Exerciții și resurse personalizate"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group/item">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/item:bg-primary/20 transition-all">
                          <Check className="w-2.5 h-2.5 text-primary stroke-[3]" />
                        </div>
                        <span className="text-base text-white/60 leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <CardFooter className="pt-10 p-0 relative z-10 border-t border-white/5 mt-10">
                  <a href={CTA_START_LINK} className="w-full">
                    <Button variant="secondary" className="w-full py-7 text-base rounded-md border-white/10 hover:bg-white/5 transition-all uppercase tracking-[0.12em] font-black">Alege START</Button>
                  </a>
                </CardFooter>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-cta rounded-xl blur-xl opacity-20 animate-pulse" />
                <Card className="relative h-full bg-[#1A2329] border-primary/30 p-8 md:p-10 rounded-xl flex flex-col overflow-hidden shadow-3xl">
                  <div className="absolute top-0 right-0 p-8">
                    <div className="bg-cta text-white text-[8px] font-black uppercase tracking-[0.2em] py-1.5 px-6 rounded-full shadow-2xl">Recomandat</div>
                  </div>
                  <div className="space-y-8 relative z-10 flex-1">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-sans font-medium text-white uppercase tracking-widest">Deep Dive</h3>
                      <div className="flex flex-col gap-1">
                        <span className="text-4xl font-sans font-bold text-white tracking-tighter">[de completat]</span>
                      </div>
                    </div>
                    <ul className="space-y-6">
                      {[
                        "Tot ce include START",
                        "+ 1 ședință extra de follow-up",
                        "+ Protocol de menținere pe 30 de zile"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group/item">
                          <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shadow-[0_0_12px_rgba(59,175,182,0.4)]">
                            <Check className="w-2.5 h-2.5 text-primary stroke-[3]" />
                          </div>
                          <span className="text-base text-white font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <CardFooter className="pt-10 p-0 relative z-10 border-t border-primary/20 mt-10">
                    <a href={CTA_START_LINK} className="w-full">
                      <Button className="w-full py-7 text-base bg-cta hover:bg-cta-hover text-white rounded-md shadow-glow uppercase tracking-[0.12em] font-black">Alege DEEP DIVE</Button>
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </FadeIn>
          </div>

          <div className="text-center max-w-xl mx-auto">
            <p className="text-base text-white/30 font-light font-sans italic">
              Dacă nu știi ce pachet ți se potrivește, clarificăm în discuția scurtă.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALE */}
      <section className="py-20 md:py-24 bg-bg-alt relative border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight leading-none">Ce spun oamenii <br /> cu care am lucrat</h2>
          </div>

          <div className="mb-12 text-center space-y-3 max-w-xl mx-auto text-white/40 font-light text-base italic">
            <p>Aici încarci screenshot-uri WhatsApp sau citate scurte, concrete.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "„Am trecut de la a începe 5 proiecte și a nu termina niciunul, la a duce la capăt exact ce îmi propun, pas cu pas.\"",
              "„Anxietatea nu a dispărut complet, dar nu mai conduce ea. În loc să intru în bucle de overthinking, știu ce am de făcut concret.\"",
              "„Trăiam în modul 'sting incendii'. Acum știu foarte clar care sunt direcțiile mele și îmi fac timp pentru ele fără să mă simt vinovat.\""
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <Card className="bg-white/[0.02] border-l-2 border-l-primary border-y-white/[0.05] border-r-white/[0.05] p-8 rounded-r-lg h-full flex flex-col justify-between hover:bg-white/[0.04] transition-all duration-500 group relative">
                  <div className="space-y-6">
                    <div className="text-primary/20 text-5xl font-sans leading-none absolute top-6 left-6 opacity-30">"</div>
                    <p className="text-lg text-white/80 leading-relaxed italic font-sans relative z-10 pt-6">{t}</p>
                  </div>
                  <div className="mt-10 pt-6 border-t border-white/5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-[9px] font-black uppercase tracking-widest shadow-2xl">Client</div>
                    <div className="flex flex-col">
                      <span className="text-base text-white/90 font-medium">— [Nume]</span>
                      <span className="text-[9px] text-white/20 uppercase tracking-widest font-black">[oraș]</span>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <p className="text-center text-[10px] text-white/20 mt-12 font-light uppercase tracking-widest italic">
            Poți folosi 3–6 screenshot-uri reale din conversații în locul sau pe lângă citatele scrise.
          </p>
        </div>
      </section>

      {/* SECTION 9 - DESPRE MINE */}
      <section id="despre" className="py-20 md:py-24 relative overflow-hidden bg-background border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
            <div className="md:col-span-8">
              <FadeIn>
                <div className="mb-10">
                  <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight leading-none">
                    Despre mine
                  </h2>
                </div>
              </FadeIn>
              
              <motion.div 
                className="space-y-6 text-base md:text-lg leading-relaxed text-white/70 font-sans font-light"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-5">
                  <p>O perioadă bună din viața mea n-am fost „blocat". <span className="font-semibold text-white font-sans italic text-xl">Eram ocupat. Foarte ocupat.</span></p>
                  <p><span className="text-white font-medium italic">Stingeam incendii.</span> Rezolvam ce apărea. Răspundeam la ce cereau alții. Trăiam într-un mod reactiv, convins că asta înseamnă să fii responsabil.</p>
                </motion.div>

                <div className="h-px w-16 bg-white/10 my-8" />

                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-5">
                  <p>Nu mă uitam la ce depinde de mine. Nu pentru că nu voiam, ci pentru că <span className="text-white font-medium">nu credeam că pot prea mult pe cont propriu.</span></p>
                  <p><span className="text-white font-medium italic">Stima mea de sine era mică</span>, chiar dacă din exterior nu se vedea neapărat. Așa că începeam proiecte și le abandonam. Nu din lipsă de idei, ci din lipsă de încredere că pot duce ceva până la capăt.</p>
                </motion.div>

                <motion.div 
                  className="bg-white/[0.03] p-8 rounded-lg border-l-2 border-primary my-10 relative overflow-hidden group"
                  variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                >
                  <p className="text-base md:text-lg leading-relaxed font-sans text-white/90 font-light relative z-10 italic">
                    Din afară părea <span className="font-bold text-white uppercase tracking-tighter text-xl mr-2">lipsă de disciplină</span>. Din interior era o convingere tăcută: <span className="text-primary font-sans font-bold">„nu pot conta pe mine"</span>.
                  </p>
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-5">
                  <p>Autosabotarea mea nu era zgomotoasă. <span className="font-semibold text-white">Era liniștită.</span> Se manifesta prin amânare, prin prioritățile altora puse înaintea mea, prin renunțări „raționale".</p>
                  <p>Procesul pe care îl folosesc azi vine de acolo. Din <span className="text-white font-medium italic">mutarea atenției de la ce se întâmplă în jur la ce pot face eu, constant, chiar și cu frică.</span></p>
                </motion.div>

                <div className="h-px w-16 bg-white/10 my-8" />

                <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-5">
                  <p>Lucrez cu oameni care se recunosc în asta. Oameni care au fost mult timp ocupați să se adapteze și care simt că <span className="text-white font-sans italic text-xl font-bold">e momentul să construiască ceva al lor.</span></p>
                </motion.div>
              </motion.div>

              <div className="mt-16 pt-10 border-t border-white/5 flex flex-col gap-1.5">
                <p className="text-lg text-white font-sans font-bold tracking-tight">Alexandru Varga</p>
                <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] font-black">Coaching comportamental</p>
              </div>
            </div>

            <div className="md:col-span-4 sticky top-24">
              <motion.div 
                className="relative aspect-square w-full rounded-lg overflow-hidden border border-white/10 shadow-3xl group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/firefighterrr.png"
                  alt="Alexandru Varga"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ */}
      <section id="faq" className="py-20 md:py-24 relative overflow-hidden bg-bg-alt border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3 space-y-5">
              <div className="space-y-3">
                <h2 className="font-sans text-2xl md:text-4xl font-semibold text-white tracking-tight leading-none">
                  Întrebări <br /> <span className="text-primary italic">frecvente</span>
                </h2>
              </div>
              <p className="text-lg text-white/30 font-light leading-relaxed">Tot ce trebuie să știi înainte de a începe procesul.</p>
            </div>
            <div className="lg:w-2/3">
              <FAQ
                items={[
                  {
                    question: "Nu sunt chiar atât de rău. Are sens pentru mine?",
                    answer: "Nu trebuie să fii \"la pământ\" ca să beneficiezi de coaching pe autosabotare. Autosabotarea e subtilă. Dacă te regăsești în tiparul de \"încep, dar nu duc la capăt\", \"știu ce am de făcut, dar nu fac\", are sens să explorăm.",
                  },
                  {
                    question: "Poate nu e pentru mine.",
                    answer: "Dacă te-ai recunoscut în descriere, merită o discuție scurtă. În acele 20 de minute îți explic cum lucrez, pun întrebări, vezi cum mă simți. Dacă nu e potrivit, îți spun direct.",
                  },
                  {
                    question: "Nu cred că pot schimba asta.",
                    answer: "Autosabotarea nu e personalitate. E un set de comportamente învățate. Ce ai învățat se poate dezînvăța, pas cu pas. Nu îți promit magie. Îți propun muncă aplicată și structură.",
                  },
                  {
                    question: "E terapie?",
                    answer: "Nu. Nu fac diagnostic clinic. Lucrăm pe mecanisme, comportamente și implementare în viața ta de zi cu zi. Dacă, pe parcurs, observ că ai nevoie de suport clinic sau de terapie, îți spun clar și, dacă pot, te îndrum mai departe.",
                  },
                  {
                    question: "Cum decurge, concret?",
                    answer: "4 ședințe 1:1, online, cu exerciții între ele, tracking simplu și aplicare în viața reală. Fiecare sesiune are un focus clar, iar la final pleci cu un pas concret, nu doar cu idei.",
                  },
                  {
                    question: "Ce se întâmplă dacă sunt foarte ocupat?",
                    answer: "Tocmai atunci are sens. Procesul e construit să fie aplicabil, nu consumator de timp. Nu îți umplu agenda cu teme. Ne uităm la cum să introduci schimbările în contextul vieții pe care o ai deja.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 - CTA FINAL */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden bg-background border-t border-white/5">
        {/* Massive background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[180px] opacity-40 -z-10" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <div className="space-y-6">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.1]">
              Vrei să poți  <span className="text-primary italic">conta pe tine?</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white/70 font-sans max-w-2xl mx-auto font-light">
              <p>Dacă te-ai regăsit în rândurile de mai sus, nu ai nevoie de mai multă motivație.</p>
              <p>Ai nevoie de claritate și de un sistem care să te învețe, din nou, să contezi pe tine.</p>
            </div>
          </div>

          <div className="space-y-6">
            <a href={CTA_LINK} className="inline-block">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-cta/30 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Button className="bg-cta hover:bg-cta-hover text-white font-bold uppercase tracking-[0.12em] px-10 py-6 text-base rounded-md shadow-[0_12px_25px_-8px_rgba(243,106,60,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(243,106,60,0.6)] relative z-10 transition-all duration-500">
                  Programează o discuție scurtă
                </Button>
              </motion.div>
            </a>
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
              20 de minute. Fără nicio obligație.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 border-t border-white/5 relative z-10 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-sans text-2xl font-bold text-white tracking-tighter">Alexandru Varga</span>
            <span className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-black">Coaching comportamental © 2026</span>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
            {["Contact", "Termeni", "Confidențialitate"].map((l, i) => (
              <a key={i} href="#" className="text-white/30 hover:text-primary transition-all duration-500 text-[10px] uppercase tracking-[0.25em] font-black">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
