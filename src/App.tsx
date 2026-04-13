/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Mail, Download, ThumbsUp, ChevronDown, ChevronUp, ArrowRight, Star, ShieldCheck, Clock, Zap, Users, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, ReactNode, useEffect } from "react";

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const Button = ({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`bg-[#25d366] hover:bg-[#128c7e] text-white font-extrabold py-5 px-12 rounded-full shadow-[0_15px_30px_rgba(37,211,102,0.4)] text-xl md:text-3xl transition-all cursor-pointer uppercase tracking-wider ${className}`}
  >
    {children}
  </motion.button>
);

const Carousel = ({ images, className = "" }: { images: string[]; className?: string }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative w-full overflow-hidden rounded-[2rem] shadow-2xl border-8 border-white bg-gray-100 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${i === index ? "bg-brand-red w-8" : "bg-white/50 w-2 hover:bg-white/80"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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
      {/* BARRA DE PROMOÇÃO */}
      <div className="bg-brand-red text-white py-3 px-4 text-center font-bold text-sm md:text-base animate-pulse">
        🔥 OFERTA POR TEMPO LIMITADO: 90% DE DESCONTO SOMENTE HOJE!
      </div>

      {/* Sticky CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: showSticky ? 0 : 100 }}
        className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden"
      >
        <Button onClick={scrollToPricing} className="w-full text-lg py-3 shadow-2xl">
          Quero o Pack de Carrosséis
        </Button>
      </motion.div>

      {/* HEADLINE & SUBHEADLINE */}
      <Section className="bg-cream text-center relative overflow-hidden pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center relative z-10"
        >
          <div className="bg-white p-3 rounded-xl shadow-sm mb-8">
            <span className="font-display font-black text-brand-red uppercase tracking-widest text-sm">
              O Maior Pack Cristão do Brasil
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl mb-6 leading-[1.1] font-black max-w-5xl">
            Transforme a Comunicação da sua Igreja com <span className="text-brand-red">Artes Profissionais</span> em Minutos.
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-600 font-medium max-w-3xl mb-12">
            Mais de 500 carrosséis e artes prontas para editar no Canva direto pelo seu celular.
          </p>

          {/* BOTAO DE COMPRA */}
          <div className="mt-16 mb-20 flex flex-col items-center">
            <Carousel 
              images={[
                "https://i.pinimg.com/736x/f1/0e/99/f10e994673e13585175233c42399bd73.jpg",
                "https://i.pinimg.com/236x/46/ef/8a/46ef8a1fa7021df267d5ba4193765da9.jpg",
                "https://i.pinimg.com/736x/73/24/c4/7324c46e204b31c46229a8335bbf035b.jpg",
                "https://i.pinimg.com/736x/c3/32/7c/c3327c1a37030a97134f6a455d33dffe.jpg"
              ]} 
              className="max-w-md aspect-[4/5]"
            />
            <div className="mt-12">
              <Button onClick={scrollToPricing}>
                Quero Acesso Imediato
              </Button>
            </div>
            <p className="mt-4 text-gray-500 font-bold flex items-center justify-center gap-2">
              <ShieldCheck size={20} className="text-brand-green" /> Compra 100% Segura e Acesso Vitalício
            </p>
          </div>
        </motion.div>
      </Section>

      {/* O QUE VAI RECEBER */}
      <Section className="bg-white">
        <h2 className="text-4xl md:text-7xl text-center mb-20 font-black leading-tight">
          O que você vai <span className="text-brand-red">receber:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {[
            {
              title: "500+ Carrosséis Editáveis",
              desc: "Templates focados em engajamento, versículos, avisos e convites para cultos.",
              img: "https://i.pinimg.com/1200x/52/bd/d7/52bdd7459b1add51eda8afe6dc279be2.jpg",
              color: "bg-cream"
            },
            {
              title: "Biblioteca de Elementos",
              desc: "Milhares de ícones, fundos e imagens cristãs em alta resolução.",
              img: "https://i.pinimg.com/1200x/9e/5c/3c/9e5c3ce4384f44a588b70ff918011d01.jpg",
              color: "bg-mint"
            },
            {
              title: "Guia de Edição Rápida",
              desc: "Aprenda a dominar o Canva no celular e criar artes em menos de 5 minutos.",
              img: "https://i.pinimg.com/1200x/16/71/e0/1671e09ee0b9f9e15aea70314731abd2.jpg",
              color: "bg-soft-pink"
            },
            {
              title: "Suporte Exclusivo",
              desc: "Acesso ao nosso time para tirar todas as suas dúvidas sobre o uso do pack.",
              img: "https://i.pinimg.com/1200x/03/45/e9/0345e95ea0ea41f91a55d9c3cfae4154.jpg",
              color: "bg-cream"
            }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className={`${item.color} p-6 rounded-[2.5rem] mb-8 w-full flex justify-center`}>
                <img src={item.img} alt={item.title} className="h-64 object-contain drop-shadow-xl rounded-2xl" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-2xl md:text-4xl mb-4 font-black">{item.title}</h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button onClick={scrollToPricing}>
            Quero Receber Tudo Isso
          </Button>
        </div>
      </Section>

      {/* BENEFICIOS DIRETOS */}
      <Section className="bg-gray-50">
        <h2 className="text-4xl md:text-7xl text-center mb-20 font-black">Por que escolher <span className="text-brand-red">nosso Pack?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Economize Tempo", desc: "Artes prontas que levariam horas para fazer, agora ficam prontas em minutos." },
            { icon: Zap, title: "Fácil de Usar", desc: "Não precisa ser designer. Basta abrir no Canva, trocar o texto e pronto." },
            { icon: Star, title: "Qualidade Premium", desc: "Designs modernos e profissionais que elevam o nível da sua igreja." },
            { icon: Users, title: "Mais Engajamento", desc: "Carrosséis pensados estrategicamente para gerar mais curtidas e comentários." },
            { icon: ShieldCheck, title: "Acesso Vitalício", desc: "Pague uma vez e use para sempre, com todas as atualizações inclusas." },
            { icon: MessageSquare, title: "Suporte VIP", desc: "Estamos aqui para te ajudar em cada passo da sua jornada criativa." }
          ].map((benefit, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center group hover:border-brand-red/20 transition-all">
              <div className="w-16 h-16 bg-brand-red/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-black mb-3">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button onClick={scrollToPricing}>
            Garantir Minha Vaga
          </Button>
        </div>
      </Section>

      {/* SESSÃO DOS BÓNUS */}
      <Section className="bg-brand-red text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl text-center mb-20 font-black">Bônus <span className="text-cream">Exclusivos</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Estratégias de Conteúdo", desc: "O que postar em cada dia da semana para manter sua igreja ativa e engajada.", val: "R$ 97,00" },
              { title: "Pack de Legendas Prontas", desc: "Nunca mais fique sem saber o que escrever na descrição dos seus posts.", val: "R$ 47,00" },
              { title: "Calendário Editorial", desc: "Um guia completo de 365 dias para você nunca mais ficar sem ideias.", val: "R$ 67,00" },
              { title: "Curso Canva Mobile", desc: "Aprenda truques avançados para criar artes incríveis pelo celular.", val: "R$ 147,00" }
            ].map((bonus, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-cream rounded-2xl flex items-center justify-center shrink-0">
                  <Star className="text-brand-red" size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">{bonus.title}</h3>
                  <p className="text-white/80 mb-2">{bonus.desc}</p>
                  <p className="text-cream font-bold">Valor: <span className="line-through">{bonus.val}</span> - GRÁTIS</p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTAO DE COMPRA */}
          <div className="text-center mt-20">
            <Button onClick={scrollToPricing} className="bg-white !text-brand-red hover:bg-cream">
              Quero Meus Bônus Agora
            </Button>
          </div>
        </div>
      </Section>

      {/* OUTRO CARROSSEL DE IMAGEM SEMPRE MOSTRANDO O PRODUTO */}
      <Section className="bg-white text-center">
        <h2 className="text-4xl md:text-6xl mb-16 font-black leading-tight">Veja o Pack <span className="text-brand-red">por dentro:</span></h2>
        <Carousel images={[
          "https://fv5-5.files.fm/thumb_show.php?i=z8sp89avsb&view&v=1&PHPSESSID=220e823b679f383c41076ac7ab55c8fbdb1ff736",
          "https://fv5-5.files.fm/thumb_show.php?i=ed32gq3nr3&view&v=1&PHPSESSID=220e823b679f383c41076ac7ab55c8fbdb1ff736"
        ]} />
        <div className="mt-16">
          <Button onClick={scrollToPricing}>
            Quero Começar Agora
          </Button>
        </div>
      </Section>

      {/* GARANTIA DE 7 DIAS */}
      <Section className="bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <img src="https://fv5-2.files.fm/thumb_show.php?i=u632z84vwe&view&v=1&PHPSESSID=220e823b679f383c41076ac7ab55c8fbdb1ff736" alt="Garantia" className="mx-auto mb-10 w-40 h-40" referrerPolicy="no-referrer" />
          <h2 className="text-4xl md:text-7xl mb-8 font-black">Risco Zero para Você!</h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-12 leading-relaxed">
            Você tem <span className="text-white font-bold">7 dias de garantia incondicional.</span> Se por qualquer motivo você não gostar do pack, nós devolvemos 100% do seu dinheiro sem perguntas.
          </p>
          <div className="inline-block bg-white/5 border border-white/10 px-8 py-4 rounded-2xl">
            <p className="text-lg font-bold">O seu sucesso é o nosso compromisso.</p>
          </div>
        </div>
      </Section>

      {/* DOIS CARDS DA OFERTA PARA A PESSOA COMPRAR */}
      <Section id="pricing" className="bg-cream">
        <h2 className="text-4xl md:text-7xl text-center mb-20 font-black">Escolha a melhor <span className="text-brand-red">oferta:</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Basic */}
          <div className="bg-white rounded-[3rem] p-10 shadow-xl border-4 border-transparent hover:border-brand-red transition-all flex flex-col">
            <h3 className="text-3xl font-black mb-4">Pack Essencial</h3>
            <p className="text-gray-500 mb-8">Ideal para pequenas igrejas que estão começando.</p>
            <div className="mb-8">
              <p className="text-5xl font-black">R$ 10,00</p>
              <p className="text-gray-400 font-bold">Pagamento Único</p>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {["500+ Carrosséis", "Biblioteca de Elementos", "Guia de Edição", "Acesso Vitalício"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <CheckCircle2 className="text-brand-green" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Button onClick={() => window.location.href = 'https://pay.hotmart.com/L105337952S'} className="w-full text-xl py-4">
              Comprar Agora
            </Button>
          </div>

          {/* Card 2: Premium/Complete */}
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-brand-red relative flex flex-col scale-105">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-red text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
              Mais Vendido
            </div>
            <h3 className="text-3xl font-black mb-4">Pack Premium + Bônus</h3>
            <p className="text-gray-500 mb-8">A solução completa para o ministério de comunicação.</p>
            <div className="mb-8">
              <p className="text-5xl font-black">R$ 19,90</p>
              <p className="text-gray-400 font-bold">Pagamento Único</p>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {["Tudo do Pack Essencial", "Todos os Bônus Inclusos", "Calendário Editorial", "Suporte VIP Prioritário"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <CheckCircle2 className="text-brand-green" size={20} /> {item}
                </li>
              ))}
            </ul>
            <Button onClick={() => window.location.href = 'https://pay.hotmart.com/V105338213V'} className="w-full text-xl py-4">
              Quero o Completo
            </Button>
          </div>
        </div>
      </Section>

      {/* APÓS OS CARDS DA OFERTA ENTRAM OS DEPOIMENTOS */}
      <Section className="bg-white">
        <h2 className="text-4xl md:text-7xl text-center mb-20 font-black">O que dizem nossos <span className="text-brand-red">alunos:</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Pastor Marcos", role: "Igreja Batista", text: "O pack mudou a cara das nossas redes sociais. Antes era tudo amador, agora as pessoas comentam como as artes estão bonitas." },
            { name: "Ana Paula", role: "Líder de Jovens", text: "Muito fácil de usar! Eu faço tudo pelo celular enquanto estou no ônibus. Economizo muito tempo e o resultado é incrível." },
            { name: "Carlos Eduardo", role: "Comunicação", text: "O melhor investimento que fizemos para o nosso ministério este ano. Os bônus de estratégia de conteúdo são valiosíssimos." }
          ].map((testimonial, i) => (
            <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-brand-red text-brand-red" />)}
              </div>
              <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center font-black text-brand-red">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-black text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-bold">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Button onClick={scrollToPricing}>
            Fazer Parte do Time
          </Button>
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
            <p>© 2026 Pack de Carrosséis para Igreja. Todos os direitos reservados.</p>
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

