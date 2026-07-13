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
  Anchor,
  BrainCircuit,
} from "lucide-react";

// Toate CTA-urile de aplicare duc catre formularul extern.
const APPLY_URL = "https://formular.wayfindercoaching.ro";

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
          if (options.triggerOnce && node) observer.unobserve(node);
        } else if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold: options.threshold }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
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

// Eyebrow reutilizabil (label mic, nu heading — pastreaza ierarhia corecta).
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs uppercase tracking-[0.3em] text-[#C89B7B] font-semibold">
    {children}
  </p>
);

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

      {/* NAVBAR */}
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
              Coach &amp; Trainer NLP
            </span>
          </div>
          <a
            href={APPLY_URL}
            className="hidden md:flex items-center gap-2 text-sm uppercase tracking-wider text-white/80 hover:text-white transition-colors group"
          >
            <span className="border-b border-transparent group-hover:border-[#C89B7B] pb-1 transition-all">
              Aplică acum
            </span>
            <ArrowRight className="w-4 h-4 text-[#C89B7B] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-30 object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/10 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center flex flex-col items-center">
          <Reveal delay={50}>
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-10 rounded-full border border-white/10 shadow-[0_0_40px_rgba(20,184,166,0.15)] flex items-center justify-center bg-[#050505] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-[#C89B7B]/40"></div>
              <span className="relative z-10 font-cinematic text-3xl md:text-4xl font-bold bg-gradient-to-br from-teal-400 to-[#C89B7B] bg-clip-text text-transparent">
                AV
              </span>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="font-cinematic text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-10">
              La un moment dat, <br className="hidden md:block" /> începi să simți
              că <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-[#C89B7B] text-glow-copper">
                nu trăiești viața ta.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={450}>
            <div className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-light leading-relaxed space-y-5">
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

          <Reveal delay={650}>
            <a
              href={APPLY_URL}
              className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-white uppercase tracking-widest text-sm rounded-sm"
            >
              Aplică pentru o discuție
              <ChevronRight className="w-4 h-4 text-[#14b8a6]" />
            </a>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#14b8a6] to-transparent"></div>
        </div>
      </section>

      {/* 2. REALITATEA PE CARE PUȚINI O SPUN */}
      <section className="py-20 md:py-32 relative border-t border-white/5 overflow-hidden">
        <BackgroundRune className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] -right-[250px] md:-right-[400px] top-0 text-teal-500" />
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow>Realitatea pe care puțini o spun</Eyebrow>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10 md:gap-12 max-w-3xl mx-auto">
            <Reveal direction="up">
              <div className="space-y-5 text-xl md:text-2xl font-light text-zinc-400 leading-relaxed border-l-2 border-zinc-800 pl-8 md:pl-12">
                <p>Ai învățat să te adaptezi.</p>
                <p>Să fii „ok”.</p>
                <p>Să nu deranjezi.</p>
                <p>Să faci ce trebuie.</p>
                <p className="text-white pt-4">
                  Și, la un moment dat, adaptarea asta a devenit normalitate.
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <div className="glass-card p-8 md:p-12 relative overflow-hidden border-l-2 border-l-teal-500">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/10 to-transparent"></div>
                <p className="text-sm uppercase tracking-widest text-teal-500 mb-6 font-semibold relative z-10">
                  Ai început să:
                </p>
                <ul className="space-y-4 text-lg text-zinc-300 relative z-10">
                  <li className="flex gap-4">
                    <span className="text-teal-500 shrink-0">→</span> spui „da”
                    când voiai să spui „nu”
                  </li>
                  <li className="flex gap-4">
                    <span className="text-teal-500 shrink-0">→</span> alegi
                    siguranța în locul adevărului
                  </li>
                  <li className="flex gap-4">
                    <span className="text-teal-500 shrink-0">→</span> îți ajustezi
                    comportamentul în funcție de ceilalți
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={400}>
            <div className="mt-10 md:mt-12 p-8 md:p-14 glass-card text-center relative overflow-hidden border border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#C89B7B] to-transparent opacity-70"></div>

              <div className="space-y-6 relative z-10">
                <p className="font-cinematic text-3xl md:text-5xl text-white italic leading-tight text-glow-copper">
                  Și fără să-ți dai seama…
                </p>
                <p className="text-zinc-300 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
                  ai început să fii o versiune a ta sufocată de așteptări și
                  presiune,
                  <span className="text-[#C89B7B] font-medium block mt-2">
                    dar te păcălești că funcționează.
                  </span>
                </p>

                <div className="pt-6 border-t border-white/5 max-w-md mx-auto">
                  <p className="text-lg md:text-xl text-zinc-400">
                    Nu ești împlinit, maschezi zâmbete,
                  </p>
                  <p className="font-cinematic text-2xl md:text-3xl text-red-400/90 italic mt-3 text-glow-red">
                    până într-o zi… când clachezi.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#14b8a6] to-transparent opacity-50"></div>
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

            <p className="text-zinc-400 text-lg font-light mb-8">
              Apare, uneori în liniște, alteori în haos:
            </p>

            <h2 className="font-cinematic text-3xl md:text-6xl text-white leading-tight mb-10">
              „Eu… viața cui o trăiesc,{" "}
              <span className="italic text-[#C89B7B]">de fapt?</span>”
            </h2>

            <div className="max-w-xl mx-auto space-y-3 text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
              <p>Nu e o întrebare confortabilă.</p>
              <p className="text-white">Dar e una sinceră.</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-16 md:mt-20 pt-12 border-t border-white/10 max-w-2xl mx-auto">
              <p className="text-zinc-400 text-lg font-light mb-6">
                Și dacă te-am luat prea tare, uite o întrebare mai blândă:
              </p>
              <h3 className="font-cinematic text-2xl md:text-4xl text-teal-50/90 leading-tight mb-10">
                „Trăiesc viața așa cum îmi doresc?”
              </h3>
              <p className="text-zinc-500 text-base md:text-lg font-light italic leading-relaxed">
                Foarte interesant cum mintea noastră nu se poate abține să nu
                răspundă la întrebări.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. POVESTEA MEA */}
      <section className="py-20 md:py-32 relative bg-[#0a0a0a] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <Eyebrow>Povestea mea</Eyebrow>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 relative lg:sticky lg:top-32">
              <Reveal direction="right">
                <figure className="relative aspect-[3/4] overflow-hidden rounded-sm group border border-white/5 m-0">
                  <div className="absolute inset-0 bg-teal-900/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                    alt="Alex Varga"
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20"></div>
                  <figcaption className="absolute bottom-4 left-6 md:bottom-5 md:left-8 z-30">
                    <span className="block font-cinematic text-2xl md:text-3xl text-white drop-shadow-xl">
                      Alex Varga
                    </span>
                    <span className="block text-xs md:text-sm text-[#14b8a6] uppercase tracking-widest mt-1 drop-shadow-md">
                      Coach &amp; Trainer NLP
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={200}>
                <div className="space-y-7 text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
                  <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mb-8 md:mb-12">
                    Mult timp m-am simțit ca un actor într-o piesă{" "}
                    <span className="italic text-[#C89B7B]">scrisă de alții.</span>
                  </h2>

                  <div className="pl-6 border-l border-white/10 space-y-5 text-zinc-300">
                    <p>Am jucat după regulile altora.</p>
                    <p>Am evitat adevărul, alegeam confortul.</p>
                    <p>
                      Am fugit de anumite părți din mine, pe care nu le puteam
                      accepta.
                    </p>
                  </div>

                  <p className="pt-4">Și, pentru o perioadă, a funcționat.</p>
                  <p>
                    Sau cel puțin așa credeam, dar{" "}
                    <span className="text-white">mă mințeam singur…</span>
                  </p>
                  <p>Până când… n-am mai rezistat.</p>

                  <p className="italic text-zinc-500 border-y border-white/5 py-8 my-8">
                    Pentru că, indiferent cât de bine joci un rol,{" "}
                    <strong className="font-bold text-white not-italic">
                      la un moment dat obosești să nu fii TU.
                    </strong>
                  </p>

                  <p>În tot zbuciumul ăsta am realizat ceva esențial:</p>

                  <div className="glass-card p-8 mt-6 border-l-2 border-l-[#14b8a6]">
                    <p className="font-cinematic text-xl md:text-2xl text-white mb-2">
                      Nu viața în sine mă ținea blocat…
                    </p>
                    <p className="font-cinematic text-xl md:text-2xl text-[#14b8a6] italic">
                      ci felul în care o vedeam.
                    </p>
                  </div>

                  <p className="text-[#C89B7B] font-medium pt-10 md:pt-14 text-xl">
                    …deci știu cum e. Pentru că și eu am fost acolo.
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
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14 md:mb-20">
              <Eye className="w-8 h-8 text-teal-500 mx-auto mb-6" />
              <Eyebrow>Momentul de shift</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6">
                Am schimbat interpretarea mea{" "}
                <span className="italic text-[#C89B7B]">asupra realității.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass-card p-8 md:p-12 border-t-2 border-t-zinc-700">
              <h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-8 pb-4 border-b border-white/5">
                Cea veche era construită din:
              </h3>
              <ul className="space-y-6 text-zinc-400 text-lg">
                <li className="flex items-start gap-4">
                  <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                  <span>convingeri vechi care nu mă mai ajutau</span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                  <span>
                    frici care îmi controlau setările și-mi dictau viața
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <ShieldAlert className="w-5 h-5 text-zinc-600 shrink-0 mt-1" />
                  <span>mecanisme automate distructive</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 md:mt-12 text-center max-w-2xl mx-auto">
              <p className="font-cinematic text-2xl md:text-3xl text-white italic leading-relaxed">
                Practic, jucam un rol de marionetă…
              </p>
              <p className="text-lg md:text-xl text-zinc-400 font-light mt-4 leading-relaxed">
                Și sforile erau trase de{" "}
                <span className="text-[#C89B7B]">
                  fricile, tiparele, traumele și durerile mele.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. CE FAC AZI */}
      <section className="py-20 md:py-32 relative bg-[#111111] border-y border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="mb-12 md:mb-16">
              <Eyebrow>Ce fac azi</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6 mb-8">
                Sunt coach &amp; trainer NLP.
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
                <p>
                  Misiunea mea este să sprijin oamenii să devină{" "}
                  <span className="text-white">
                    autorii propriei povești
                  </span>
                  , să o scrie conștient și autentic, așa cum și-o doresc.
                </p>
                <p>
                  Tot ce fac pornește de la o premisă simplă: viața merge înainte
                  și provocări vor apărea mereu. Dar diferența dintre a fi un
                  simplu martor la propria viață și a fi cel care o conduce stă în{" "}
                  <span className="text-[#C89B7B]">
                    capacitatea de a-ți schimba perspectiva.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card p-8 md:p-12 border-l-2 border-l-[#C89B7B]">
              <p className="text-lg text-zinc-400 font-light mb-2">
                Nu lucrez cu oameni care vor doar să „înțeleagă” de ce stau pe
                loc.
              </p>
              <p className="text-white text-lg font-medium mb-8">
                Lucrez cu oameni care:
              </p>
              <ul className="space-y-5 text-lg text-zinc-300">
                <li className="flex gap-4">
                  <span className="text-[#C89B7B] shrink-0">→</span>
                  S-au săturat să se învârtă în aceleași cercuri.
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C89B7B] shrink-0">→</span>
                  Vor să iasă din tipare care îi țin pe loc, nu doar să le
                  analizeze.
                </li>
                <li className="flex gap-4">
                  <span className="text-[#C89B7B] shrink-0">→</span>
                  Pe care îi doare mai tare să rămână unde sunt, decât să facă
                  pasul spre schimbare.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. CUI SE POTRIVEȘTE CU ADEVĂRAT */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <Target className="w-8 h-8 text-teal-500 mx-auto mb-6" />
              <Eyebrow>Cui se potrivește cu adevărat</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6">
                E pentru tine dacă simți că:
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:gap-5">
            {[
              "ai un potențial pe care nu îl accesezi",
              "te autosabotezi exact când începi să avansezi",
              "te pierzi în gânduri și scenarii de groază",
              "îți e greu să spui ce vrei cu adevărat",
              "trăiești mai mult pentru alții decât pentru tine",
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 80}>
                <div className="glass-card px-6 py-5 md:px-8 md:py-6 flex items-start gap-5 hover:bg-white/[0.04] transition-colors duration-500">
                  <span className="text-teal-500 text-xl leading-none mt-0.5 shrink-0">
                    —
                  </span>
                  <span className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-12 md:mt-16 text-center">
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
                …și mai ales dacă nu vrei să-ți explici problemele, ci{" "}
                <span className="text-white">să le abordezi pas cu pas</span>,
                găsind un mod de a funcționa.
              </p>
              <p className="font-cinematic text-2xl md:text-4xl text-[#C89B7B] italic leading-tight mt-10 text-glow-copper">
                Un mod prin care să fii autentic și bine cu tine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. CUM ARE LOC SCHIMBAREA */}
      <section className="py-20 md:py-32 relative bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
              <Eyebrow>Cum are loc schimbarea</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6 mb-8">
                Schimbarea reală{" "}
                <span className="italic text-[#C89B7B]">
                  nu vine din motivație.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                Degeaba te bați cu pumnul în piept… ai mai făcut asta și știi că
                „magia” dispare între{" "}
                <span className="text-white">24 și 72 de ore</span>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass-card p-8 md:p-10 max-w-2xl mx-auto mb-16 md:mb-20">
              <p className="text-sm uppercase tracking-widest text-teal-500 mb-6 font-semibold">
                Vine din:
              </p>
              <ul className="space-y-4 text-lg text-zinc-300">
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">—</span> Conștientizare
                  profundă
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">—</span> Reglare internă
                </li>
                <li className="flex gap-4">
                  <span className="text-teal-500 shrink-0">—</span> Acțiune
                  repetată în direcția nouă
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="text-center text-lg md:text-xl text-zinc-400 font-light mb-12 md:mb-16 max-w-2xl mx-auto">
              În procesul nostru, te ghidez să lucrezi{" "}
              <span className="text-white">direct cu tiparele tale:</span>
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden md:block -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
              {[
                { step: "01", title: "Le înțelegi", icon: BrainCircuit, color: "text-zinc-400" },
                { step: "02", title: "Le rescrii", icon: MoveUpRight, color: "text-[#C89B7B]" },
                { step: "03", title: "Le integrezi", icon: Anchor, color: "text-teal-500" },
              ].map((item, idx) => (
                <Reveal key={idx} delay={idx * 200}>
                  <div className="bg-[#050505] p-8 border border-white/5 rounded-sm relative text-center group hover:border-white/20 transition-colors">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#050505] px-4 font-cinematic text-2xl text-zinc-700 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                    <item.icon
                      className={`w-10 h-10 mx-auto mt-6 mb-6 opacity-80 ${item.color}`}
                    />
                    <h3 className="font-cinematic text-2xl text-white">
                      {item.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROCESUL */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14 md:mb-20">
              <Eyebrow>Procesul</Eyebrow>
            </div>
          </Reveal>

          <div className="space-y-4 md:space-y-5 mb-14 md:mb-16">
            {[
              "Te ghidez să îți stabilești unde vrei să ajungi.",
              "Te susțin să vezi blocajele care te țin pe loc.",
              "Îți ofer unelte prin care să treci cu bine prin provocări.",
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className="glass-card px-6 py-6 md:px-10 md:py-7 flex items-start gap-6 border-l-2 border-l-teal-500">
                  <span className="font-cinematic text-2xl md:text-3xl text-zinc-700 shrink-0 leading-none">
                    0{idx + 1}
                  </span>
                  <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-cinematic text-2xl md:text-4xl text-white leading-tight mb-6">
                Ce ai de făcut?
              </h3>
              <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
                Fii sincer cu tine.{" "}
                <span className="text-[#C89B7B]">
                  O să descoperi ceva sublim.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="glass-card p-8 md:p-12 mt-12 md:mt-14 border-l-2 border-l-[#C89B7B] max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed italic">
                Blocajele pe care le ai sunt{" "}
                <span className="text-white not-italic font-medium">
                  părți din tine care vor să se exprime și să fie văzute
                </span>
                . Fiecare din ele are o intenție bună, doar că nu știu cum să și-o
                exprime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-14 md:mt-16 text-center space-y-6">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                Succesul acestui proces depinde direct de implicarea ta.
              </p>
              <p className="font-cinematic text-2xl md:text-4xl text-[#14b8a6] italic leading-tight text-glow-teal">
                Acționezi acum, pentru tine din viitor!
              </p>
              <p className="text-sm md:text-base text-zinc-500 font-light italic pt-4">
                Ps: Magia se întâmplă între întâlnirile noastre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. ADEVĂRUL PE CARE NU-L SPUNE NIMENI */}
      <section className="py-24 md:py-40 relative bg-black border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,155,123,0.05)_0%,_transparent_70%)]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-14 md:mb-20">
              <Eyebrow>Adevărul pe care nu-l spune nimeni</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6">
                Transformarea reală{" "}
                <span className="italic text-[#C89B7B]">are un cost.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-center text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-8">
              Pe parcurs:
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-20">
            {[
              {
                title: "Unele relații se vor schimba",
                desc: "E posibil să „pierzi” anumiți oameni; obișnuiți cu versiunea ta care „lăsa de la ea”, s-ar putea să nu mai rezoneze cu omul care pune limite clare.",
              },
              {
                title: "Unele obiceiuri vor dispărea",
                desc: "Vei lăsa în urmă mecanismele care te-au ținut în siguranță până acum, dar care azi sunt cușca ta.",
              },
              {
                title: "Unele versiuni ale tale vor „muri”",
                desc: "Identitatea construită pentru a fi acceptat se va dizolva, lăsând loc unui „tu” care, în sfârșit, respiră liber.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className="glass-card p-8 h-full border-t-2 border-t-[#C89B7B]/40">
                  <h3 className="font-cinematic text-xl md:text-2xl text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="text-center text-zinc-500 uppercase tracking-widest text-xs font-semibold mb-8">
              Vor exista momente în care:
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Vei simți rezistență",
                desc: "Mintea ta va urla să te întorci la ce e familiar, chiar dacă e nasol. Asta se întâmplă pentru că „Gardianul” tău interior interpretează schimbarea ca pe un pericol.",
              },
              {
                title: "Vei vrea să renunți",
                desc: "Vor apărea zile în care totul va părea prea greu și vei prefera vechiul haos în locul efortului de a construi ceva nou; e punctul în care majoritatea se opresc.",
              },
              {
                title: "Vei avea îndoieli",
                desc: "O să zici că ești condamnat să rămâi în vechea poveste. Chill, face parte din proces. Când se întâmplă asta, știi că ești aproape de next level.",
              },
              {
                title: "Mă vei înjura",
                desc: "Nu sunt aici să te mângâi pe creștet sau să-ți dau dreptate în vechile tale scuze, ci să te ghidez spre a-ți depăși limitările. Îmi asum asta, pentru că știu ce te așteaptă dincolo de ele.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 120}>
                <div className="glass-card p-8 h-full border-l-2 border-l-red-500/40">
                  <h3 className="font-cinematic text-xl md:text-2xl text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CE SE VA SCHIMBA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-14 md:mb-20">
              <Eyebrow>Ce se va schimba</Eyebrow>
              <h2 className="font-cinematic text-3xl md:text-5xl text-white leading-tight mt-6">
                Dincolo de proces.{" "}
                <span className="text-teal-500 italic">Cine devii.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Vei fi mai conștient",
                desc: "Ieși de pe pilot automat și răspunzi autentic în loc să reacționezi. Între stimul și reacție apare un spațiu. Acolo începe libertatea.",
              },
              {
                title: "Vei fi mai stabil",
                desc: "Te vei păstra mai mult pe direcția ta. Îți găsești echilibrul în tine, nu în ceilalți.",
              },
              {
                title: "Vei fi mai aliniat",
                desc: "Acțiunile îți vor fi cât mai aliniate cu gândurile tale. Iar energia revine.",
              },
            ].map((item, idx) => (
              <Reveal key={idx} delay={idx * 150}>
                <div className="glass-card p-8 md:p-10 h-full border-l-2 border-l-teal-500 hover:bg-white/[0.04] transition-colors duration-500">
                  <h3 className="font-cinematic text-2xl text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section id="apply" className="py-24 md:py-48 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(20,184,166,0.15)_0%,_transparent_60%)]"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Reveal>
            <div className="space-y-4 text-xl md:text-2xl text-zinc-400 font-light mb-12">
              <p>Nu trebuie să știi tot drumul.</p>
              <p>Nu trebuie să fii „pregătit”.</p>
            </div>

            <h2 className="font-cinematic text-3xl md:text-6xl text-white leading-tight mb-6">
              Dar dacă ai citit până aici…
              <br />
              <span className="italic text-glow-teal text-[#14b8a6]">
                deja știi că ceva trebuie să se schimbe.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="glass-card p-8 md:p-12 max-w-xl mx-auto rounded-sm mt-14 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C89B7B] via-teal-500 to-[#C89B7B]"></div>

              <p className="text-white text-lg md:text-xl mb-2">
                Aplică pentru o discuție de 20–30 min
              </p>
              <p className="text-zinc-400 text-sm mb-8">
                (completezi formularul și te contactez eu)
              </p>

              <a
                href={APPLY_URL}
                className="w-full btn-premium py-5 px-6 text-white uppercase tracking-widest text-sm font-semibold flex items-center justify-center gap-3 rounded-sm"
              >
                Aplică acum
                <ArrowRight className="w-4 h-4 text-[#C89B7B]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cinematic text-xl text-white">ALEX VARGA</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-teal-500 mt-1">
              Coach &amp; Trainer NLP
            </span>
          </div>

          <p className="text-zinc-600 text-sm font-cinematic italic max-w-xs">
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
        <div className="mt-12 text-center text-zinc-700 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Alex Varga. Toate drepturile rezervate.
        </div>
      </footer>
    </div>
  );
}
