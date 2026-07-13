"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  ArrowRight,
  Compass,
  Eye,
  ShieldAlert,
  Target,
  MoveUpRight,
  Zap,
  Anchor,
  BrainCircuit,
} from "lucide-react";

// --- CUSTOM HOOK FOR SCROLL ANIMATIONS ---
const useIntersectionObserver = (
  options: { threshold?: number; triggerOnce?: boolean } = {
    threshold: 0.1,
    triggerOnce: true,
  }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (options.triggerOnce && node) {
            observer.unobserve(node);
          }
        } else if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold: options.threshold }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options.threshold, options.triggerOnce]);

  return [ref, isIntersecting] as const;
};

// --- REUSABLE ANIMATION COMPONENT ---
const Reveal = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  let translateClass = "translate-y-12";
  if (direction === "left") translateClass = "-translate-x-12";
  if (direction === "right") translateClass = "translate-x-12";
  if (direction === "none") translateClass = "translate-y-0 scale-95";

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- GEOMETRIC BACKGROUND ACCENTS ---
const BackgroundRune = ({ className }: { className?: string }) => (
  <svg
    className={`absolute opacity-[0.03] pointer-events-none ${className}`}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="0.5"
  >
    <circle cx="50" cy="50" r="40" />
    <circle cx="50" cy="50" r="30" />
    <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" />
    <polygon points="50,15 85,50 50,85 15,50" />
  </svg>
);

// --- MAIN APPLICATION ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-300 selection:bg-teal-500/30 selection:text-white">
      <div className="bg-noise"></div>

      {/* FIXED NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-lg py-4 border-b border-white/5 shadow-2xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-cinematic text-xl md:text-2xl font-semibold tracking-wide text-white">
              ALEX VARGA
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C89B7B]">
              Perspective Coach
            </span>
          </div>
          <a
            href="#apply"
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider text-white/80 hover:text-white transition-colors group"
          >
            <span className="border-b border-transparent group-hover:border-[#C89B7B] pb-1 transition-all">
              Aplică acum
            </span>
            <ArrowRight className="w-4 h-4 text-[#C89B7B] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt="Misty Mountains"
            className="w-full h-full object-cover opacity-30 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 text-center flex flex-col items-center">
          <Reveal delay={50}>
            <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8 rounded-full border border-white/10 shadow-[0_0_40px_rgba(20,184,166,0.15)] flex items-center justify-center bg-[#050505] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-[#C89B7B]/40 z-0"></div>
              <span className="relative z-10 font-cinematic text-4xl md:text-5xl font-bold bg-gradient-to-br from-teal-400 to-[#C89B7B] bg-clip-text text-transparent">
                AV
              </span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <h1 className="font-cinematic text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-8">
              La un moment dat, <br className="hidden md:block" /> începi să simți că{" "}
              <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-[#C89B7B] text-glow-copper">
                nu trăiești viața ta.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={500}>
            <div className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed space-y-4">
              <p>Nu e ceva evident. Nu e un „moment dramatic”.</p>
              <p>E mai subtil de atât.</p>
              <p>
                E senzația aia că… deși viața merge înainte,{" "}
                <span className="text-white font-normal">
                  ceva din tine a rămas în urmă.
                </span>
              </p>
              <p>
                Că reacționezi mai mult decât alegi. Că repeți tipare pe care le
                înțelegi… dar nu le poți opri.
              </p>
              <p className="text-xl md:text-2xl text-teal-50 pt-4 pb-8 italic font-cinematic">
                <span className="text-[#14b8a6]">Și poate cel mai frustrant:</span>{" "}
                știi că ai mai mult în tine… dar nu reușești să ajungi acolo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={700}>
            <a
              href="#apply"
              className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-white uppercase tracking-widest text-sm rounded-sm"
            >
              Aplică pentru o discuție
              <ChevronRight className="w-4 h-4 text-[#14b8a6]" />
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#14b8a6] to-transparent"></div>
        </div>
      </section>

      {/* 2. REALITATEA PE CARE PUȚINI O SPUN */}
      <section className="py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
        <BackgroundRune className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] -right-[250px] md:-right-[400px] top-0 text-teal-500" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-12 max-w-3xl mx-auto">
            <Reveal direction="up">
              <div className="space-y-6 text-xl md:text-2xl font-light text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-8 md:pl-12">
                <p>Ai învățat să te adaptezi.</p>
                <p>Să fii „ok”. Să nu deranjezi.</p>
                <p>Să faci ce trebuie.</p>
                <p className="text-white mt-8">
                  Și adaptarea asta a devenit normalitate.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="glass-card p-8 md:p-12 space-y-6 relative overflow-hidden border-l-2 border-l-teal-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-900/10 to-transparent"></div>
                <p className="text-sm uppercase tracking-widest text-teal-500 mb-6 font-semibold relative z-10">
                  Te critici când:
                </p>
                <ul className="space-y-4 text-lg text-zinc-300 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-teal-500">→</span> spui „da” deși voiai să
                    spui „nu”
                  </li>
                  <li className="flex gap-4">
                    <span className="text-teal-500">→</span> alegi „siguranța” în
                    locul adevărului tău
                  </li>
                  <li className="flex gap-4">
                    <span className="text-teal-500">→</span> îți ajustezi
                    comportamentul în funcție de ceilalți
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* FULL-WIDTH HIGHLIGHT */}
          <Reveal delay={400}>
            <div className="mt-8 md:mt-12 p-8 md:p-14 glass-card text-center relative overflow-hidden border border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#C89B7B] to-transparent opacity-70"></div>

              <div className="space-y-6 relative z-10">
                <p className="font-cinematic text-3xl md:text-5xl text-white italic leading-relaxed text-glow-copper">
                  Și fără să-ți dai seama…
                </p>
                <p className="text-zinc-300 font-sans text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
                  ai ajuns să fii o versiune a ta sufocată de așteptări și presiune,
                  <span className="text-[#C89B7B] font-medium block mt-2">
                    dar te păcălești că funcționează.
                  </span>
                </p>

                <div className="pt-6 border-t border-white/5 max-w-md mx-auto">
                  <p className="text-xl text-zinc-400 mb-2">
                    Nu ești împlinit. Maschezi zâmbete.
                  </p>
                  <p className="font-cinematic text-2xl md:text-3xl text-red-400/90 italic mt-4 text-glow-red">
                    Până într-o zi… când clachezi.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent opacity-50"></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. ÎNTREBAREA CARE DOARE */}
      <section className="py-24 md:py-40 relative mystic-gradient border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,155,123,0.03)_0%,_transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <Compass className="w-12 h-12 text-[#C89B7B] mx-auto mb-10 opacity-80" />
            <h2 className="font-cinematic text-4xl md:text-6xl text-white leading-tight mb-8">
              „Eu… viața cui o trăiesc,{" "}
              <span className="italic text-[#C89B7B]">de fapt?</span>”
            </h2>
            <h3 className="font-cinematic text-3xl md:text-4xl text-teal-50/80 mb-16">
              „Trăiesc viața așa cum îmi doresc?”
            </h3>

            <div className="max-w-xl mx-auto space-y-6 text-xl text-zinc-300 font-light leading-relaxed">
              <p>
                Nu sunt întrebări confortabile.{" "}
                <br className="hidden md:block" />{" "}
                <span className="text-white font-medium">
                  Dar te pot ajuta să te trezești.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. POVESTEA PERSONALĂ */}
      <section className="py-20 md:py-32 relative bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C89B7B] mb-12 md:mb-16 text-center">
              Ghidul tău
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative lg:sticky lg:top-32">
              <Reveal direction="right">
                <figure className="relative aspect-[3/4] overflow-hidden rounded-sm group border border-white/5 m-0">
                  <div className="absolute inset-0 bg-teal-900/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    alt="Alex Varga - Perspective Coach"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20"></div>
                  <figcaption className="absolute bottom-4 left-6 md:bottom-5 md:left-8 z-30">
                    <span className="block font-cinematic text-2xl md:text-3xl text-white drop-shadow-xl">
                      Alex Varga
                    </span>
                    <span className="block text-xs md:text-sm text-[#14b8a6] uppercase tracking-widest mt-1 drop-shadow-md">
                      Perspective Coach
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="space-y-8 text-lg md:text-xl font-light text-zinc-400">
                  <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mb-8 md:mb-12">
                    Mult timp m-am simțit ca un actor într-o piesă{" "}
                    <span className="italic text-[#C89B7B]">scrisă de alții.</span>
                  </h2>

                  <div className="pl-6 border-l border-white/10 space-y-6 text-zinc-300">
                    <p>Am jucat după regulile altora.</p>
                    <p>Am evitat adevărul. Alegeam confortul.</p>
                    <p>
                      Am fugit de anumite părți din mine pe care nu le puteam
                      accepta.
                    </p>
                  </div>

                  <p className="pt-4">
                    Și, pentru o perioadă, a funcționat. Sau cel puțin așa credeam.
                  </p>
                  <p>
                    Dar mă mințeam singur.{" "}
                    <span className="text-white">Până când… n-am mai rezistat.</span>
                  </p>

                  <p className="italic text-zinc-500 border-y border-white/5 py-8 my-8">
                    Pentru că, indiferent cât de bine joci un rol,{" "}
                    <strong className="font-bold text-white">
                      la un moment dat obosești să nu fii TU
                    </strong>
                    .
                  </p>

                  <p>În tot zbuciumul ăsta am realizat ceva esențial:</p>

                  <div className="glass-card p-8 mt-8 border-l-2 border-l-[#14b8a6]">
                    <p className="font-cinematic text-2xl text-white mb-2">
                      Nu viața în sine mă ținea blocat…
                    </p>
                    <p className="font-cinematic text-2xl text-[#14b8a6] italic">
                      Ci felul în care o vedeam.
                    </p>
                  </div>

                  <p className="text-[#C89B7B] font-medium pt-12 md:pt-20">
                    Deci știu cum e. Pentru că și eu am fost acolo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOMENTUL DE SHIFT */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <BackgroundRune className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] -left-[200px] md:-left-[300px] top-[10%] text-[#C89B7B]" />
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <Eye className="w-8 h-8 text-teal-500 mx-auto mb-6" />
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mb-6">
                Am schimbat interpretarea mea asupra realității.
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal direction="right" delay={100}>
              <div className="glass-card p-10 relative group border-t-2 border-t-zinc-800 h-full">
                <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-8 pb-4 border-b border-white/5">
                  Vechea Interpretare
                </h3>
                <ul className="space-y-6 text-zinc-400">
                  <li className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                    <span>
                      Convingeri limitative care dictau „ce este posibil”
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                    <span>Frici mascate sub formă de prudență</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                    <span>Mecanisme automate de apărare și autosabotaj</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="left" delay={300}>
              <div className="glass-card p-10 relative overflow-hidden border-t-2 border-t-teal-500 h-full">
                <div className="absolute -inset-1 bg-teal-500/5 blur-2xl z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-sm uppercase tracking-widest text-teal-400 mb-8 pb-4 border-b border-white/10">
                    Noua Interpretare
                  </h3>
                  <ul className="space-y-6 text-white">
                    <li className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                      <span>Claritate radicală asupra intențiilor reale</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                      <span>Alegere conștientă în locul reacției automate</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <Zap className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                      <span>Autenticitate și o perspectivă complet nouă</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. CE FACE AZI & PENTRU CINE ESTE */}
      <section className="py-20 md:py-32 relative bg-[#111111] border-y border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="mb-16 md:mb-24 md:flex items-end justify-between border-b border-white/10 pb-8 md:pb-12">
              <div className="max-w-2xl">
                <h2 className="font-cinematic text-4xl md:text-5xl text-white leading-tight mb-4">
                  Astăzi, ghidez oameni să-și{" "}
                  <span className="text-[#C89B7B] italic">rescrie povestea.</span>
                </h2>
                <p className="text-zinc-400 text-lg">
                  Ca Perspective Coach & Trainer NLP, te ajut să schimbi direcția
                  schimbând percepția.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="flex gap-2 items-center text-sm uppercase tracking-widest text-zinc-500">
                  <Target className="w-4 h-4 text-teal-500" />
                  Pentru cine este?
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Autosabotaj",
                desc: "Când știi ce ai de făcut, dar ceva te oprește constant.",
              },
              {
                title: "Anxietate",
                desc: "Zgomotul mental care nu te lasă să trăiești în prezent.",
              },
              {
                title: "Lipsă Direcție",
                desc: "Senzația de plutire în derivă, fără un nord clar.",
              },
              {
                title: "Validare Externă",
                desc: "Trăiești pentru a îndeplini așteptările celorlalți.",
              },
              {
                title: "Tipare Repetitive",
                desc: "Atragi aceleași situații sau relații toxice.",
              },
              {
                title: "Overthinking",
                desc: "Paralizia analizei care te împiedică să acționezi.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="glass-card p-8 group hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 h-full">
                  <h4 className="text-xl font-cinematic text-white mb-3 group-hover:text-[#14b8a6] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FRAMEWORK-UL TRANSFORMĂRII */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mb-6">
                Framework-ul Transformării
              </h2>
              <p className="text-zinc-400">
                Un proces în 3 pași pentru a-ți recupera identitatea.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 hidden md:block -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  step: "01",
                  title: "Înțelegi",
                  subtitle: "Conștientizare & Blocaje",
                  icon: BrainCircuit,
                  color: "text-zinc-400",
                },
                {
                  step: "02",
                  title: "Rescrii",
                  subtitle: "Reglare & Noua Perspectivă",
                  icon: MoveUpRight,
                  color: "text-[#C89B7B]",
                },
                {
                  step: "03",
                  title: "Integrezi",
                  subtitle: "Acțiune & Identitate Nouă",
                  icon: Anchor,
                  color: "text-teal-500",
                },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 200}>
                  <div className="bg-[#050505] p-8 border border-white/5 rounded-sm relative text-center group hover:border-white/20 transition-colors">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#050505] px-4 font-cinematic text-2xl text-zinc-700 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <item.icon
                      className={`w-10 h-10 mx-auto mt-6 mb-6 opacity-80 ${item.color}`}
                    />
                    <h3 className="font-cinematic text-2xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. ADEVĂRUL PE CARE NU-L SPUNE NIMENI */}
      <section className="py-24 md:py-40 relative bg-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,155,123,0.05)_0%,_transparent_70%)]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C89B7B] mb-6 font-semibold">
              Costul Transformării
            </p>
            <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mb-10 md:mb-12">
              Adevărul pe care <br /> nu-l spune nimeni.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6 text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto">
              <p>Evoluția nu este confortabilă. Nu este doar „gândire pozitivă”.</p>
              <p>Înseamnă pierderea unor relații care nu te mai reprezintă.</p>
              <p>Înseamnă dărâmarea unei identități vechi la care țineai.</p>
              <p className="text-white pt-6">
                Te vei lovi de rezistență. De gardianul interior care vrea să te
                țină „în siguranță” în mediocritate.
              </p>
              <p className="text-[#C89B7B] italic font-cinematic text-2xl pt-4">
                Dar este singurul drum spre tine însuți.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. CE SE SCHIMBĂ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-cinematic text-3xl md:text-5xl text-white text-center leading-tight mb-16 md:mb-20">
              Dincolo de proces.{" "}
              <span className="text-teal-500 italic">Cine devii.</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "Mai conștient",
              "Mai stabil",
              "Mai autentic",
              "Mai liber",
              "Mai aliniat",
            ].map((trait, idx) => (
              <Reveal key={idx} delay={idx * 100} className="w-full md:w-auto">
                <div className="px-8 py-4 glass-card text-white text-lg font-cinematic italic text-center rounded-sm border-l-2 border-l-teal-500">
                  {trait}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <section id="apply" className="py-24 md:py-48 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(20,184,166,0.15)_0%,_transparent_60%)]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="font-cinematic text-4xl md:text-6xl text-white leading-tight mb-10">
              „Nu trebuie să știi tot drumul. <br />
              <span className="text-zinc-500 text-3xl md:text-5xl">
                Dar dacă ai ajuns până aici…
              </span>
              <br />
              <span className="italic text-glow-teal text-[#14b8a6]">
                știi deja că ceva trebuie să se schimbe.”
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card p-8 md:p-12 max-w-xl mx-auto rounded-sm mt-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C89B7B] via-teal-500 to-[#C89B7B]"></div>

              <p className="text-white text-lg mb-8">
                Aplică pentru o discuție de 20–30 min. <br />
                <span className="text-zinc-400 text-sm">
                  (Completezi formularul. Te contactez eu.)
                </span>
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Numele tău"
                  className="w-full bg-[#050505] border border-white/10 p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#050505] border border-white/10 p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-teal-500 transition-colors"
                />
                <button className="w-full btn-premium py-5 mt-4 text-white uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-3">
                  Aplică Acum
                  <ArrowRight className="w-4 h-4 text-[#C89B7B]" />
                </button>
              </form>
              <p className="text-[10px] text-zinc-600 uppercase tracking-wider mt-6">
                Locurile sunt limitate pentru sesiunile 1:1.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cinematic text-xl text-white">ALEX VARGA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-teal-500 mt-1">
              Perspective Coach • NLP Specialist
            </span>
          </div>

          <p className="text-zinc-600 text-sm font-cinematic italic">
            &ldquo;Schimbi direcția când îți schimbi percepția.&rdquo;
          </p>

          <div className="flex gap-2 text-sm text-zinc-500">
            {["Instagram", "Facebook", "LinkedIn"].map((label) => (
              <a
                key={label}
                href="#"
                className="inline-flex items-center min-h-[44px] px-3 rounded-sm hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C89B7B] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 text-zinc-700 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Alex Varga. Toate drepturile rezervate.
        </div>
      </footer>
    </div>
  );
}
