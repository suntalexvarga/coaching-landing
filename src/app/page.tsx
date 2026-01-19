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
    <div className="min-h-screen bg-white scroll-smooth">
      <ScrollProgress />
      {/* SECTION 1 - HERO */}
      <section className="bg-[#faf9f7] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Îți sabotezi propriile planuri fără să înțelegi de ce?
              </motion.h1>
              
              <motion.div 
                className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-700 font-sans"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="font-sans">
                  Coaching 1 la 1 pentru oameni care vor rezultate reale, nu motivație de o zi.
                </p>
                <p className="font-sans">
                  Dacă trăiești mai mult reacționând decât construind și te învârți între „ar trebui" și „nu reușesc să mă țin", te sprijin să înțelegi ce te oprește și să construiești un mod de a acționa pe care să te poți baza.
                </p>
              </motion.div>

              <motion.div 
                className="pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-base md:text-lg text-gray-600 italic font-sans">
                  În 4 ședințe punem pe masă ce te ține blocat, cum funcționează, ce parte din tine trage frâna și cum o transformi în aliat.
                </p>
              </motion.div>

              <motion.div 
                className="pt-4 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a href={CTA_LINK}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-[#c9a961] hover:bg-[#b89850] text-white font-semibold uppercase tracking-wide px-8 py-4 hover:shadow-lg">
                      Programează o discuție scurtă
                    </Button>
                  </motion.div>
                </a>
                <div className="text-sm text-gray-600 space-y-1 max-w-md">
                  <p>20 de minute în care vei afla dacă ești pregătit să lucrezi la ceea ce amâni de ani de zile.</p>
                  <p>Fără presiune. Vedem dacă are sens să lucrăm împreună.</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/firefighterrr.png"
                  alt="Alexandru Varga - Coaching 1:1 pe autosabotare și comportament"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-4 text-center space-y-1">
                <p className="font-semibold text-gray-900">Alexandru Varga</p>
                <p className="text-sm text-gray-600">Coaching 1:1 pe autosabotare și comportament</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PENTRU CINE ESTE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto space-y-8">
            {/* Introducere cu ilustrație */}
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                {/* Text */}
                <motion.div 
                  className="text-center md:text-left"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                    E pentru tine dacă te-ai săturat să fii mereu în modul „sting incendii"
                  </h2>
                  <p className="text-lg text-gray-600">
                    și vrei să construiești ceva care depinde de tine.
                  </p>
                </motion.div>
                
                {/* Ilustrație */}
                <motion.div 
                  className="relative w-full aspect-[3/2] md:aspect-[5/3] rounded-lg overflow-hidden bg-gray-100"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Image
                    src="/firefighterrr.png"
                    alt="Pompier stinge incendii - ilustrație pentru modul reactiv"
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </div>
            </div>

            {/* Bullets cu Check icons */}
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <ul className="space-y-4 text-gray-700 leading-relaxed font-sans">
                <motion.li 
                  className="flex items-start gap-4 group/item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                  </div>
                  <span className="text-lg font-sans pt-0.5">Ai trăit mult timp reactiv și simți că viața ta e mai mult „rezolvat" decât „ales".</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-4 group/item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                  </div>
                  <span className="text-lg font-sans pt-0.5">Începi lucruri, dar nu le duci până la capăt.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-4 group/item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                  </div>
                  <span className="text-lg font-sans pt-0.5">Te pierzi în analiză, perfecționism sau amânare.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-4 group/item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                  </div>
                  <span className="text-lg font-sans pt-0.5">Te apasă teama de eșec sau teama că, dacă reușești, vei fi văzut / judecat / respins.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-4 group/item"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                  </div>
                  <span className="text-lg font-sans pt-0.5">Ai senzația că nu poți conta constant pe tine, chiar dacă din exterior „te descurci".</span>
                </motion.li>
              </ul>
            </motion.div>

            {/* Remarcă separată cu Separator */}
            <div className="pt-8 max-w-2xl mx-auto">
              <Separator className="mb-6" />
              <p className="text-base text-gray-600 italic font-sans text-center">
                Nu este pentru tine dacă vrei o soluție magică și nu ești dispus să fii sincer cu tine.
              </p>
            </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 - PROBLEMA REALĂ */}
      <section className="bg-[#faf9f7] py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-16 text-center">
              Ce se întâmplă, de fapt, în tine
            </h2>
          </FadeIn>
          
          <motion.div 
            className="space-y-8 md:space-y-10 text-lg leading-relaxed text-gray-700 font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Primul bloc - intro */}
            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-lg font-sans">
                <span className="font-semibold text-gray-900">Reacționezi, nu alegi.</span> (Ai multă informație, și te-ai obișnuit să răspunzi factorilor externi)
              </p>
              <p className="text-lg font-sans">
                Când trăiești pe modul <span className="italic font-medium">„rezolv ce e important pentru alții"</span> nu mai ai timp pentru tine. Fain?
              </p>
              <p className="text-lg font-sans">
                Și în timp, când apare ceva important de făcut pentru tine, <span className="font-semibold text-gray-900">parcă nu te poți baza pe tine.</span>
              </p>
              <p className="text-lg font-sans">
                <span className="font-semibold text-gray-900">Anxietatea devine o alarmă permanentă.</span> Autosabotarea devine „logică". Și ajungi să te oprești exact când contează.
              </p>
            </motion.div>

            {/* Bloc special pentru soluție */}
            <motion.div 
              className="bg-white p-6 md:p-8 border-l-4 border-[#c9a961] my-8"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg leading-relaxed font-sans">
                Vrei să înveți să nu te mai lupți cu tine? Le înțelegem, le decodăm, și le folosim în favoarea ta.
              </p>
            </motion.div>

            {/* Bloc special pentru fraza cheie */}
            <motion.div 
              className="space-y-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-lg leading-relaxed font-sans">
                De cele mai multe ori <span className="font-semibold text-gray-900">nu lipsa de informație e problema.</span> Ci faptul că ai fost mult timp <span className="italic">antrenat să reacționezi, nu să alegi.</span>
              </p>
              <p className="text-lg leading-relaxed font-sans">
                Când trăiești în modul <span className="italic font-medium">„rezolv ce apare"</span>, nu mai rămâne spațiu pentru ce depinde doar de tine. Și în timp apare o convingere tăcută:
              </p>
              <motion.p 
                className="text-2xl md:text-3xl font-serif font-semibold text-gray-900 text-center py-4 italic"
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                „Nu pot conta pe mine"
              </motion.p>
              <p className="text-lg font-sans">
                <span className="font-semibold text-gray-900">Anxietatea devine o alarmă permanentă.</span> Autosabotarea devine „logică". Și ajungi să te oprești exact când contează.
              </p>
            </motion.div>

            {/* Final - soluția */}
            <motion.div 
              className="pt-8 mt-8 border-t-2 border-gray-300 space-y-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-lg font-sans font-semibold text-gray-900">
                Noi nu ne luptăm cu aceste mecanisme.
              </p>
              <p className="text-lg font-sans">
                Le înțelegem, le decodăm și le folosim în favoarea ta.
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Gradient transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf9f7] to-white pointer-events-none" />
      </section>

      {/* CTA 1 - După Problema Reală */}
      <section className="bg-[#faf9f7] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-sans">
            Gata să înțelegi ce te oprește și cum să transformi asta în aliat?
          </p>
          <a href={CTA_LINK}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#c9a961] hover:bg-[#b89850] text-white font-semibold uppercase tracking-wide px-8 py-4 hover:shadow-lg">
                Programează o discuție scurtă
              </Button>
            </motion.div>
          </a>
        </div>
      </section>

      {/* SECTION 4 - METODA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Metoda mea
              </h2>
            </div>
          </FadeIn>
          
          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-lg leading-relaxed text-gray-700 font-sans">
            <p className="font-sans">
              Lucrăm în sesiuni 1 la 1, live, într-un proces structurat, dar flexibil.
            </p>
            <p className="font-sans">
              Nu îți dau „rețete rapide", ci te ajut să înțelegi precis cum funcționezi, ce te blochează și ce ai de făcut, concret, diferit.
            </p>
            <p className="font-sans">
              Lucrăm pe trei niveluri, în paralel:
            </p>
          </div>

          {/* Accordion pentru cei 3 pași */}
          <div className="mb-16">
            <MethodSteps
            steps={[
              {
                number: 1,
                title: "Claritate psihologică / mentală",
                content: (
                  <div className="space-y-4">
                    <p>
                      Identificăm mecanismul exact: ce te declanșează, ce poveste rulează în fundal, ce beneficii ascunse are blocajul.
                    </p>
                    <p>
                      Nu rămânem la „mă autosabotez". Coborâm la:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ce anume activează reacția,</li>
                      <li>ce îți spui în minte în acel moment,</li>
                      <li>ce rol are, de fapt, partea care trage frâna.</li>
                    </ul>
                    <p>
                      Când vezi clar harta, nu mai pare „un haos", ci un proces logic pe care îl poți influența.
                    </p>
                  </div>
                ),
              },
              {
                number: 2,
                title: "Reglaj emoțional",
                content: (
                  <div className="space-y-4">
                    <p>
                      Emoțiile sunt feedback, nu defect. Nu încercăm să le „oprim", ci să le înțelegem.
                    </p>
                    <p>Înveți să:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>recunoști diferența dintre emoție și povestea despre ea,</li>
                      <li>stai cu emoția fără să intri în spirala de overthinking,</li>
                      <li>iei decizii fără să fugi de disconfort.</li>
                    </ul>
                    <p>
                      Scopul nu e „să nu mai simți nimic", ci să nu mai fii condus de reacții automate.
                    </p>
                  </div>
                ),
              },
              {
                number: 3,
                title: "Strategie aplicată",
                content: (
                  <div className="space-y-4">
                    <p>
                      Transformăm „vreau să" în direcție, pași mici și consistență.
                    </p>
                    <p>
                      Nu lucrăm cu planuri rigide, imposibil de susținut.
                    </p>
                    <p>Ne uităm la:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>ce depinde cu adevărat de tine,</li>
                      <li>care este cel mai mic pas realist,</li>
                      <li>cum urmărești progresul fără să te lovești cu perfecționismul.</li>
                    </ul>
                    <p>
                      Accent pe consistență, nu pe performanță spectaculoasă de o zi.
                    </p>
                  </div>
                ),
              },
            ]}
            />
          </div>

          <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-300">
            <p className="text-gray-700 leading-relaxed text-lg font-sans">
              Lucrăm online, prin video call. Între ședințe poți primi exerciții, reflecții sau mici experimente de făcut în viața ta reală.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-lg font-sans">
              Scopul fiecărei întâlniri este să pleci cu claritate + un pas concret, nu cu „inspirație" care se stinge în 24 de ore.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 - STRUCTURA PROCESULUI */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
              Cum arată colaborarea (4 ședințe)
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 max-w-5xl mx-auto">
            {/* S1 */}
            <FadeIn delay={0}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-gray-200 hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl font-bold text-[#c9a961] group-hover:scale-110 transition-transform duration-300">S1</span>
                    <CardTitle className="text-xl">Harta problemei</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  <p className="text-gray-700 leading-relaxed text-lg font-sans">
                    Clarificăm tiparul: trigger → gând → emoție → reacție → consecință.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-sans">
                    Pui pe masă exemple concrete din viața ta, nu scenarii teoretice. La final, ai o hartă clară a modului în care funcționează autosabotarea la tine.
                  </p>
                </CardContent>
              </Card>
              </motion.div>
            </FadeIn>

            {/* S2 */}
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-gray-200 hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-3xl font-bold text-[#c9a961] group-hover:scale-110 transition-transform duration-300">S2</span>
                    <CardTitle className="text-xl">Conflictul intern</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 relative z-10">
                  <p className="text-gray-700 leading-relaxed text-lg font-sans">
                    Partea care vrea să crească și partea care vrea siguranță. Le identificăm și le punem la aceeași masă.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg font-sans">
                    În loc să încerci să „învingi" o parte din tine, înveți să o înțelegi și să o transformi în aliat.
                  </p>
                </CardContent>
              </Card>
              </motion.div>
            </FadeIn>

            {/* S3 */}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-gray-200 hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl font-bold text-[#c9a961] group-hover:scale-110 transition-transform duration-300">S3</span>
                      <CardTitle className="text-xl">Rescrierea strategiei</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 relative z-10">
                    <p className="text-gray-700 leading-relaxed text-lg font-sans">
                      Schimbăm structura din minte, nu doar conținutul. Ne uităm la ce faci, când, cum și de ce.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg font-sans">
                      Ajustăm modul în care iei decizii și îți planifici acțiunile, astfel încât să fie aliniate cu ce vrei, nu cu fricile automate. Asta schimbă emoția și comportamentul.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>

            {/* S4 */}
            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-gray-200 hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-3xl font-bold text-[#c9a961] group-hover:scale-110 transition-transform duration-300">S4</span>
                      <CardTitle className="text-xl">Integrare</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 relative z-10">
                    <p className="text-gray-700 leading-relaxed text-lg font-sans">
                      Plan simplu pe 30 de zile: ce continui, ce oprești, ce începi.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg font-sans">
                      Accent pe consistență, nu perfecțiune. Ajustăm ce nu funcționează și stabilim cum vei ști că ești pe direcția potrivită.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-sm text-gray-600 italic">
              Chiar dacă acesta este cadrul propus, lucrăm cu ce este prioritar pentru tine.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              Dacă în timpul procesului apare o problemă cu o urgență mai mare decât ce am stabilit inițial, ne concentrăm pe ea și ajustăm împreună structura.
            </p>
          </div>
        </div>
      </section>

      {/* CTA 2 - După Cum arată colaborarea */}
      <section className="bg-[#faf9f7] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-sans">
            Gata să înțelegi ce te oprește și cum să transformi asta în aliat?
          </p>
          <a href={CTA_LINK}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#c9a961] hover:bg-[#b89850] text-white font-semibold uppercase tracking-wide px-8 py-4 hover:shadow-lg">
                Programează o discuție scurtă
              </Button>
            </motion.div>
          </a>
        </div>
      </section>

      {/* SECTION 6 - CE OBȚII */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Ce obții concret
              </h2>
              
              <p className="text-lg text-gray-600">
                Atât cât te implici, atât obții la final. Fair?
              </p>
            </div>
          </FadeIn>

          <motion.div 
            className="space-y-8 text-lg leading-relaxed text-gray-700 font-sans"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Claritate evidențiat */}
            <motion.div 
              className="bg-[#faf9f7] p-6 md:p-8 border-l-4 border-[#c9a961]"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-sans">
                <span className="font-semibold text-gray-900">Claritate</span>, dar nu îți promit că îți va fi mai ușor.
              </p>
            </motion.div>

            {/* Direcție evidențiat */}
            <motion.div 
              className="bg-[#faf9f7] p-6 md:p-8 border-l-4 border-[#c9a961]"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.02, x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-sans">
                <span className="font-semibold text-gray-900">Direcție</span>, dar nu și rezultate fără să te miști.
              </p>
            </motion.div>

            {/* Restul textului narativ */}
            <motion.div 
              className="space-y-4 pt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="text-lg font-sans">
                Lucrurile nu devin neapărat mai ușoare. Dar devin mai clare.
                Nu mai trăiești doar reacționând. Nu mai abandonezi lucruri importante pe drum.
              </p>
             
              <p className="text-lg font-sans">
                Îți oprești spirala anxietății mai repede și revii la acțiune.
                Înveți, pas cu pas, să contezi pe tine. Nu pe chef. Nu pe context. Pe tine.
              </p>
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - OFERTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
              Pachete
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-5xl mx-auto mb-12 items-stretch">
            {/* Pachet 1 - START */}
            <FadeIn delay={0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-gray-200 hover:border-[#c9a961] hover:shadow-lg transition-all duration-300 relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#c9a961]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="text-2xl md:text-3xl mb-2">START</CardTitle>
                <div className="mt-6 space-y-1">
                  <CardDescription className="text-xs uppercase tracking-wider">Investiție</CardDescription>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    [de completat]
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10 flex-1">
                <ul className="space-y-4 text-gray-700 font-sans">
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed">4 ședințe 1:1 (săptămânal)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed">Suport scurt între ședințe, orientat pe aplicare (mesaje scurte / clarificări)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/10 flex items-center justify-center group-hover/item:bg-[#c9a961]/20 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed">Exerciții și resurse personalizate</span>
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="relative z-10 pt-6 border-t border-gray-100">
                <a href={CTA_START_LINK} className="w-full">
                  <Button variant="secondary" className="w-full group/btn">
                    <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                      Alege START
                    </span>
                  </Button>
                </a>
              </CardFooter>
              </Card>
              </motion.div>
            </FadeIn>

            {/* Pachet 2 - DEEP DIVE (Highlighted) */}
            <FadeIn delay={0.2}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group border-2 border-[#c9a961] hover:border-[#b89850] hover:shadow-xl transition-all duration-300 relative bg-gradient-to-br from-white to-[#c9a961]/5 h-full">
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <Badge className="shadow-lg">Recomandat</Badge>
              </div>

              <CardHeader className="pb-6 pt-8 relative z-10">
                <CardTitle className="text-2xl md:text-3xl mb-2">DEEP DIVE</CardTitle>
                <div className="mt-6 space-y-1">
                  <CardDescription className="text-xs uppercase tracking-wider">Investiție</CardDescription>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                    [de completat]
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5 relative z-10 flex-1">
                <ul className="space-y-4 text-gray-700 font-sans">
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/20 flex items-center justify-center group-hover/item:bg-[#c9a961]/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed font-medium">Tot ce include START</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/20 flex items-center justify-center group-hover/item:bg-[#c9a961]/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed">+ 1 ședință extra de follow-up (după 2 săptămâni)</span>
                  </li>
                  <li className="flex items-start gap-3 group/item">
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c9a961]/20 flex items-center justify-center group-hover/item:bg-[#c9a961]/30 transition-colors">
                      <Check className="w-3.5 h-3.5 text-[#c9a961] stroke-[3]" />
                    </div>
                    <span className="text-base leading-relaxed">+ Protocol de menținere pe 30 de zile</span>
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="relative z-10 pt-6 border-t border-[#c9a961]/20">
                <a href={CTA_START_LINK} className="w-full">
                  <Button variant="default" className="w-full group/btn shadow-md hover:shadow-lg transition-shadow">
                    <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                      Alege DEEP DIVE
                    </span>
                  </Button>
                </a>
              </CardFooter>
              </Card>
              </motion.div>
            </FadeIn>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 font-sans">
              Dacă nu știi ce pachet ți se potrivește, clarificăm în discuția scurtă.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALE */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            Ce spun oamenii cu care am lucrat
          </h2>

          <div className="mb-8 text-center text-sm text-gray-600 max-w-2xl mx-auto">
            <p className="mb-2">
              Aici încarci screenshot-uri WhatsApp sau citate scurte, concrete.
            </p>
            <p>
              Evită formulările vagi de tip „a fost wow".
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Testimonial 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#faf9f7] border-l-4 border-[#c9a961] h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 italic text-lg font-sans">
                    „Am trecut de la a începe 5 proiecte și a nu termina niciunul, la a duce la capăt exact ce îmi propun, pas cu pas."
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    — [Nume], [oraș]
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#faf9f7] border-l-4 border-[#c9a961] h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 italic text-lg font-sans">
                    „Anxietatea nu a dispărut complet, dar nu mai conduce ea. În loc să intru în bucle de overthinking, știu ce am de făcut concret."
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    — [Nume], [oraș]
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#faf9f7] border-l-4 border-[#c9a961] h-full">
                <CardContent className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4 italic text-lg font-sans">
                    „Trăiam în modul 'sting incendii'. Acum știu foarte clar care sunt direcțiile mele și îmi fac timp pentru ele fără să mă simt vinovat."
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    — [Nume], [oraș]
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Poți folosi 3–6 screenshot-uri reale din conversații (WhatsApp / email) în locul sau pe lângă citatele scrise.
          </p>
        </div>
      </section>

      {/* CTA 3 - După Testimoniale */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-6 font-sans">
            Ești pregătit să lucrezi la ceea ce amâni de ani de zile?
          </p>
          <a href={CTA_LINK}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#c9a961] hover:bg-[#b89850] text-white font-semibold uppercase tracking-wide px-8 py-4 hover:shadow-lg">
                Programează o discuție scurtă
              </Button>
            </motion.div>
          </a>
        </div>
      </section>

      {/* SECTION 9 - DESPRE MINE */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            <div className="md:col-span-8">
              <FadeIn>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                  Despre mine
                </h2>
              </FadeIn>
              
              <motion.div 
                className="space-y-8 text-lg leading-relaxed text-gray-700 font-sans"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                {/* Primul bloc */}
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-lg font-sans">
                    O perioadă bună din viața mea n-am fost „blocat". <span className="font-semibold text-gray-900">Eram ocupat. Foarte ocupat.</span>
                  </p>
                  <p className="text-lg font-sans">
                    <span className="font-semibold text-gray-900">Stingeam incendii.</span> Rezolvam ce apărea. Răspundeam la ce cereau alții. Trăiam într-un mod reactiv, convins că asta înseamnă să fii responsabil.
                  </p>
                </motion.div>

                {/* Separator vizual */}
                <div className="border-t border-gray-200 my-6" />

                {/* Al doilea bloc */}
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-lg font-sans">
                    Nu mă uitam la ce depinde de mine. Nu pentru că nu voiam, ci pentru că <span className="font-semibold text-gray-900">nu credeam că pot prea mult pe cont propriu.</span>
                  </p>
                  <p className="text-lg font-sans">
                    <span className="font-semibold text-gray-900">Stima mea de sine era mică</span>, chiar dacă din exterior nu se vedea neapărat. Așa că începeam proiecte și le abandonam. Nu din lipsă de idei, ci din lipsă de încredere că pot duce ceva până la capăt.
                  </p>
                </motion.div>

                {/* Bloc evidențiat */}
                <motion.div 
                  className="bg-white p-6 md:p-8 border-l-4 border-[#c9a961] my-6"
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg leading-relaxed font-sans">
                    Din afară părea <span className="font-semibold text-gray-900">lipsă de disciplină</span>. Din interior era o convingere tăcută: <span className="italic font-medium">„nu pot conta pe mine"</span>.
                  </p>
                </motion.div>

                {/* Al treilea bloc */}
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-lg font-sans">
                    Autosabotarea mea nu era zgomotoasă. <span className="font-semibold text-gray-900">Era liniștită.</span> Se manifesta prin amânare, prin prioritățile altora puse înaintea mea, prin renunțări „raționale".
                  </p>
                  <p className="text-lg font-sans">
                    Procesul pe care îl folosesc azi vine de acolo. Din <span className="font-semibold text-gray-900">mutarea atenției de la ce se întâmplă în jur la ce pot face eu, constant, chiar și cu frică.</span>
                  </p>
                </motion.div>

                {/* Separator vizual */}
                <div className="border-t border-gray-200 my-6" />

                {/* Final */}
                <motion.div 
                  className="space-y-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="text-lg font-sans">
                    Lucrez cu oameni care se recunosc în asta. Oameni care au fost mult timp ocupați să se adapteze și care simt că <span className="font-semibold text-gray-900">e momentul să construiască ceva al lor.</span>
                  </p>
                </motion.div>
              </motion.div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <strong>Alexandru Varga</strong>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  (poți înlocui ulterior cu numele final și cu detalii de formare profesională, dacă vrei.)
                </p>
              </div>
            </div>

            {/* Optional image */}
            <div className="md:col-span-4">
              <div className="relative aspect-square w-full max-w-xs mx-auto rounded-lg overflow-hidden bg-gray-200">
                <Image
                  src="/firefighterrr.png"
                  alt="Alexandru Varga"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 - FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            Întrebări frecvente
          </h2>

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
      </section>

      {/* SECTION 11 - CTA FINAL */}
      <section className="bg-[#faf9f7] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            Vrei să poți conta pe tine?
          </h2>
          
          <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-10 font-sans">
            <p className="font-sans">
              Dacă te-ai regăsit în rândurile de mai sus, nu ai nevoie de mai multă motivație.
            </p>
            <p className="font-sans">
              Ai nevoie de claritate și de un sistem care să te învețe, din nou, să contezi pe tine.
            </p>
          </div>

          <div className="space-y-3">
            <a href={CTA_LINK}>
              <Button className="bg-[#c9a961] hover:bg-[#b89850] text-white font-semibold uppercase tracking-wide px-8 py-4 hover:shadow-lg hover:scale-105">
                Programează o discuție scurtă
              </Button>
            </a>
            <p className="text-sm text-gray-600">
              20 de minute. Cost: 20 de minute pentru amândoi. Fără presiune.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
