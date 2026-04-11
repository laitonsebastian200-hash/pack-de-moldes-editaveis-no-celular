/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Mail, Download, ThumbsUp, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState, ReactNode, useEffect } from "react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-12 md:py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const Button = ({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-[#25d366] hover:bg-[#128c7e] text-white font-extrabold py-4 px-10 rounded-full shadow-[0_10px_20px_rgba(37,211,102,0.3)] text-xl md:text-2xl transition-all cursor-pointer uppercase tracking-wide ${className}`}
  >
    {children}
  </motion.button>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-lg md:text-xl py-2 group"
      >
        <span className="group-hover:text-brand-red transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-red" /> : <ChevronDown className="text-gray-400" />}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="text-gray-600 mt-3 text-base md:text-lg leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    const pricing = document.getElementById("pricing");
    pricing?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden"
      >
        <Button onClick={scrollToPricing} className="w-full text-lg py-3 shadow-2xl">
          Quero o Pack de Moldes
        </Button>
      </motion.div>

      {/* Hero Section */}
      <Section className="bg-cream text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-brand-red blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-brand-green blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center relative z-10"
        >
          <div className="bg-white p-4 rounded-2xl shadow-sm mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center">
                <img src="https://picsum.photos/seed/phone-icon/40/40" alt="Icon" className="invert" referrerPolicy="no-referrer" />
              </div>
              <span className="font-display font-black text-xl md:text-2xl text-brand-red leading-none">
                PACK DE MOLDES<br/>
                <span className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Editáveis no Celular</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl mb-8 leading-[1.1] font-black max-w-5xl">
            Baixe mais de <span className="text-brand-red">500 Moldes</span> de Caixas e Lembrancinhas, prontos para editar direto do <span className="text-brand-red">celular.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-14 w-full max-w-4xl">
            {[
              "Editáveis no App Gratuito Canva.",
              "Moldes prontos para usar.",
              "Personalize em qualquer tema com facilidade."
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center md:justify-start gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white">
                <CheckCircle2 className="text-brand-green shrink-0" size={24} />
                <span className="text-base md:text-lg font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="relative mt-4 max-w-4xl mx-auto group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/20 to-brand-green/20 blur-2xl rounded-[3rem] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=620,fit=crop/AQEeoVwPR4FDzx4r/topo-cel-16-1-YbN4zkGVQ6fMbqbg.png" 
              alt="Celular com Canva e Lembrancinha Física" 
              className="w-full rounded-3xl shadow-2xl relative z-10 border-4 border-white"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-6 -top-6 md:-right-12 md:-top-12 z-20 bg-brand-red text-white p-6 rounded-full shadow-xl font-black text-xl md:text-2xl rotate-12 border-4 border-white"
            >
              +500<br/>MOLDES
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Pain Points Section */}
      <Section className="bg-soft-pink text-center relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-10 font-black leading-tight">
            Eu sei que você está cansada de procurar moldes e sempre encontrar arquivos que só funcionam no computador.
          </h2>
          <p className="text-xl md:text-2xl mb-16 text-gray-700 font-medium">E toda vez que tenta fazer algo pelo celular, você pensa:</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-brand-red text-white p-8 rounded-3xl shadow-2xl max-w-xs relative"
            >
              <p className="font-bold text-lg leading-snug">Eu encontro tantos moldes legais, mas nada abre no meu celular.</p>
              <div className="absolute -bottom-3 right-12 w-6 h-6 bg-brand-red rotate-45"></div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-red/10 blur-xl rounded-3xl"></div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=619,fit=crop/AQEeoVwPR4FDzx4r/ruminaassaues-5-1-YyvDO452xlcM48ew.png" 
                alt="Artesã frustrada" 
                className="w-64 h-auto md:w-96 rounded-3xl object-cover border-8 border-white shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div 
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-brand-red text-white p-8 rounded-3xl shadow-2xl max-w-xs relative"
            >
              <p className="font-bold text-lg leading-snug">Sem computador eu nunca vou conseguir fazer lembrancinhas bonitas.</p>
              <div className="absolute -bottom-3 left-12 w-6 h-6 bg-brand-red rotate-45"></div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-mint text-center border-y border-white/20">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-3xl mb-6 font-medium text-gray-700">Se existisse um jeito simples de criar tudo pelo seu celular, com moldes prontos, lindos e 100% editáveis no Canva?</p>
          <h2 className="text-4xl md:text-7xl text-brand-red mb-10 font-black tracking-tighter">Isso facilitaria a sua vida?</h2>
          <p className="text-xl md:text-2xl font-bold bg-white/40 inline-block px-8 py-3 rounded-full">Se a sua resposta for "SIM", o Pack de Moldes para Celular foi feito para você.</p>
        </div>
      </Section>

      {/* Steps Section */}
      <Section className="bg-soft-pink overflow-hidden">
        <h2 className="text-3xl md:text-6xl text-center mb-20 font-black leading-tight max-w-4xl mx-auto">
          Esses são os <span className="text-brand-red">3 passos</span> para você usar o Pack de Moldes Editáveis no Celular:
        </h2>
        
        <div className="space-y-32 relative">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="relative group shrink-0">
              <div className="absolute -inset-6 bg-brand-red/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/AQEeoVwPR4FDzx4r/passos-e-entrega-veis-9-1-d95ZV5WBGbcp4kkD.png" 
                alt="Escolhendo molde" 
                className="w-64 md:w-80 rounded-3xl shadow-2xl border-8 border-white relative z-10" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -left-8 -top-8 w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center text-4xl font-black shadow-xl z-20">01</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl mb-6 font-black leading-tight">Acesse o Pack de Moldes pelo celular e escolha qual deseja editar</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">São mais de 500 moldes prontos de caixas e lembrancinhas para você escolher, todos editáveis no app gratuito Canva.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
            <div className="relative group shrink-0">
              <div className="absolute -inset-6 bg-brand-green/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/AQEeoVwPR4FDzx4r/passos-e-entrega-veis-10-1-mnl4Vl2la2uM64zp.png" 
                alt="Editando no Canva" 
                className="w-64 md:w-80 rounded-3xl shadow-2xl border-8 border-white relative z-10" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -right-8 -top-8 w-20 h-20 bg-brand-green text-white rounded-full flex items-center justify-center text-4xl font-black shadow-xl z-20">02</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl mb-6 font-black leading-tight">Personalize o molde</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">Em poucos minutos e usando apenas o seu celular, você personaliza o molde no tema que desejar. Troque cores, fotos e textos com facilidade.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
            <div className="relative group shrink-0">
              <div className="absolute -inset-6 bg-brand-red/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AQEeoVwPR4FDzx4r/passos-e-entrega-veis-7-1-YbN4z7E5DzFM7qk1.png" 
                alt="Resultado final" 
                className="w-64 md:w-80 rounded-3xl shadow-2xl border-8 border-white relative z-10" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute -left-8 -top-8 w-20 h-20 bg-brand-red text-white rounded-full flex items-center justify-center text-4xl font-black shadow-xl z-20">03</div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-5xl mb-6 font-black leading-tight">Imprima e monte a peça</h3>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">É só imprimir, montar a peça e pronto. Suas lembrancinhas profissionais estão prontas para encantar seus clientes ou convidados.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Deliverables Grid */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-6xl text-center mb-24 font-black leading-tight">
          Para seguir esses 3 passos, <br className="hidden md:block"/>
          <span className="text-brand-red">veja tudo o que você vai receber:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Pack 500 */}
          <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-cream p-8 rounded-[3rem] mb-10 w-full flex justify-center">
              <img 
                src="https://i.im.ge/eJfVg1/WhatsApp_Image_2026-04-11_at_00.20.10.jpg" 
                alt="Pack 500 Moldes" 
                className="h-64 md:h-80 object-contain drop-shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-2xl md:text-4xl mb-6 font-black">Pack exclusivo com mais de 500 moldes prontos para editar em seu celular.</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Você poderá finalmente colocar sua criatividade em prática sem complicação nenhuma. É só abrir o molde, trocar a arte e ver suas peças ganhando vida na tela do seu celular.</p>
          </motion.div>

          {/* Biblioteca */}
          <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-mint p-8 rounded-[3rem] mb-10 w-full flex justify-center">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=768,fit=crop/AQEeoVwPR4FDzx4r/passos-e-entrega-veis-5-1-4jUJporyTO1f4u9z.png" 
                alt="Biblioteca 15k" 
                className="h-64 md:h-80 object-contain drop-shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-2xl md:text-4xl mb-6 font-black">Biblioteca Criativa Digital com mais de 15.000 Elementos e Papéis Digitais</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Uma biblioteca gigantesca de estampas, fundos e elementos digitais em alta resolução para você personalizar suas peças e criar artes únicas.</p>
          </motion.div>

          {/* Guia */}
          <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-soft-pink p-8 rounded-[3rem] mb-10 w-full flex justify-center">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=468,fit=crop/AQEeoVwPR4FDzx4r/imagens-cel-10-1-YBgjnKxWp2F7zBOm.png" 
                alt="Guia de Edição" 
                className="h-64 md:h-80 object-cover rounded-2xl shadow-xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-2xl md:text-4xl mb-6 font-black">Guia de Edição dos Moldes</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Um passo a passo prático te ensinando como fazer a edição dos moldes usando o seu celular e o app gratuito Canva de forma simples e rápida.</p>
          </motion.div>

          {/* Manual */}
          <motion.div whileHover={{ y: -10 }} className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-cream p-8 rounded-[3rem] mb-10 w-full flex justify-center">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=379,fit=crop/AQEeoVwPR4FDzx4r/impressora-yK71ESjFRdtqrpv7.png" 
                alt="Manual Impressão" 
                className="h-64 md:h-80 object-contain drop-shadow-2xl" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-2xl md:text-4xl mb-6 font-black">Manual Express de Impressão</h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">Aprenda os segredos para imprimir as suas peças direto do seu celular com qualidade profissional, garantindo cores vivas e cortes perfeitos.</p>
          </motion.div>
        </div>
      </Section>

      {/* Recap & Pricing */}
      <Section id="pricing" className="bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl mb-16 font-black leading-tight">Recapitulando tudo que você vai receber no Pack de Moldes Editáveis no Celular.</h2>
          
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 mb-16 border-4 border-brand-red/10">
            <div className="space-y-6 text-left mb-10">
              {[
                { name: "Pack Exclusivo (+500 Moldes)", price: "R$97,00" },
                { name: "Biblioteca Criativa (+15.000 Elementos)", price: "R$67,00" },
                { name: "Guia de Edição dos Moldes", price: "R$49,00" },
                { name: "Manual Express de Impressão", price: "R$97,00" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <p className="text-lg md:text-xl font-bold flex items-center gap-3">
                    <ArrowRight className="text-brand-red" size={20} />
                    {item.name}
                  </p>
                  <p className="text-brand-red font-black text-xl shrink-0">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl mb-10">
              <p className="text-2xl md:text-3xl font-bold">Tudo isso deveria custar: <span className="text-brand-red line-through opacity-50">R$310,00</span></p>
            </div>

            <p className="text-xl md:text-2xl font-medium text-gray-600 mb-12">Mas agora você pode ter acesso ao Pack de Moldes Editáveis no Celular junto com todos os bônus por apenas:</p>
            
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=208,fit=crop/AQEeoVwPR4FDzx4r/logomarca-3-1-m6L23k0LxrFG2NbW.png" 
              alt="Logo Pack de Moldes" 
              className="h-12 md:h-20 mx-auto mb-8 object-contain"
              referrerPolicy="no-referrer"
            />

            <img 
              src="https://i.im.ge/eJffef/WhatsApp_Image_2026-04-11_at_00.28.41.jpg" 
              alt="Mockup Oferta" 
              className="w-full max-w-2xl mx-auto mb-10 rounded-2xl shadow-lg"
              referrerPolicy="no-referrer"
            />

            <div className="space-y-4 mb-12">
              <p className="text-2xl md:text-3xl font-bold text-gray-400">Por apenas</p>
              <p className="text-7xl md:text-9xl font-black text-gray-900 tracking-tighter">R$10,00</p>
              <p className="text-xl md:text-3xl font-bold text-gray-500">Pagamento Único</p>
            </div>

            <div className="bg-brand-red/5 py-6 px-8 rounded-3xl mb-12">
              <h2 className="text-3xl md:text-5xl text-brand-red font-black mb-2">Acesso Vitalício</h2>
              <p className="text-lg md:text-xl font-bold text-brand-red/70">Pague uma única vez e tenha acesso para sempre.</p>
            </div>

            <Button 
              onClick={() => window.location.href = 'https://pay.hotmart.com/X105080926C'}
              className="w-full md:w-auto px-16 py-6 text-2xl md:text-3xl shadow-[0_20px_40px_rgba(37,211,102,0.4)]"
            >
              Eu Quero o Pack de Moldes
            </Button>
            
            <div className="mt-8 flex items-center justify-center gap-4 opacity-50">
              <img src="https://picsum.photos/seed/visa/40/25" alt="Visa" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/master/40/25" alt="Master" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/pix/40/25" alt="Pix" referrerPolicy="no-referrer" />
              <span className="text-xs font-bold uppercase tracking-widest">Compra 100% Segura</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Delivery Steps */}
      <Section className="bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl mb-20 font-black leading-tight">Compre agora e receba seu acesso no e-mail <span className="text-brand-red">imediatamente!</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Acesse seu e-mail", desc: "Assim que finalizar sua compra, você vai receber seu acesso no e-mail cadastrado." },
              { icon: Download, title: "Acesse o Pack", desc: "Você vai receber todos os entregáveis imediatamente para baixar e começar a usar." },
              { icon: ThumbsUp, title: "Tudo Pronto!", desc: "Agora é só acessar os moldes, editar no Canva e ver suas peças ganharem vida." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col items-center group hover:border-brand-red/20 transition-colors">
                <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-red/5 transition-colors">
                  <step.icon size={40} className="text-gray-800 group-hover:text-brand-red transition-colors" />
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Creators Section */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              <span className="text-brand-red">Renata Oliveira e Vanessa Ribeiro</span> são as criadoras do Pack de Moldes Editáveis para Celular.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>Nossos moldes já ajudaram milhares de mulheres artesãs a transformar sua criatividade em peças lindas e lucrativas.</p>
              <p>Somamos mais de <span className="text-brand-red font-black">9 mil alunas</span> e construímos uma comunidade com mais de <span className="text-brand-red font-black">800 mil seguidores</span>, mostrando na prática que esse é um dos mercados mais lucrativos e acessíveis do Brasil.</p>
              <p className="font-bold text-gray-900">Nosso objetivo é ajudar você a criar lembrancinhas lindas direto do celular, sem precisar de computador ou softwares complicados.</p>
            </div>
          </div>
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-brand-red/10 blur-2xl rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
            <img 
              src="https://i.pinimg.com/236x/13/57/ad/1357ad1a3444c039a4098948452b536a.jpg" 
              alt="Renata e Vanessa" 
              className="w-full rounded-[3rem] shadow-2xl relative z-10 border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-center mb-20 font-black">Perguntas Frequentes</h2>
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-gray-100">
            <FAQItem 
              question="Qual é a forma de pagamento?" 
              answer="Você pode fazer o pagamento via Pix ou cartão de crédito (com liberação imediata)." 
            />
            <FAQItem 
              question="O pagamento é seguro?" 
              answer="Sim, o pagamento é 100% seguro. Utilizamos a Hotmart, uma das maiores e mais seguras plataformas de produtos digitais do mundo." 
            />
            <FAQItem 
              question="Funciona em qualquer celular?" 
              answer="Sim! O único requisito é que seu celular consiga rodar o aplicativo gratuito do Canva (disponível para Android e iPhone)." 
            />
            <FAQItem 
              question="Como vou acessar o Pack de Moldes?" 
              answer="Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à nossa área de membros exclusiva, onde encontrará todos os moldes e bônus." 
            />
            <FAQItem 
              question="Preciso pagar mensalidade?" 
              answer="Não! O acesso é vitalício. Você paga uma única vez e o conteúdo é seu para sempre, incluindo futuras atualizações." 
            />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-center gap-2 opacity-50 grayscale invert">
            <img src="https://picsum.photos/seed/logo-footer/150/50" alt="Logo" className="h-8" referrerPolicy="no-referrer" />
          </div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Este site não faz parte do Google ou do Facebook. Além disso, este site NÃO é endossado pelo Google ou pelo Facebook de nenhuma maneira.
          </p>
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-500">
            <p>© 2026 Pack de Moldes Editáveis. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

