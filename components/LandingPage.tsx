
import React, { useState, useEffect, useRef } from 'react';

interface LandingPageProps {
  onProceedToCheckout: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onProceedToCheckout }) => {
  const [currentVariant, setCurrentVariant] = useState('fernheart');
  const [showNotification, setShowNotification] = useState(false);
  const [notifData, setNotifData] = useState({ name: 'Juliana', city: 'Curitiba', variant: 'Mossveil' });
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);

  const ofertaRef = useRef<HTMLElement>(null);

  const variantsData: any = {
    fernheart: {
      title: 'Magia <span class="text-primary font-magic text-4xl md:text-6xl">Fernheart</span> no seu Pote',
      img: 'https://i.ibb.co.com/RGvTm5G2/Fernheart-Fairy-Jar-Fernheart-Pote-de-Fadas.webp',
      label: 'FERNHEART - POTE DE FADA',
      purpose: 'Prosperidade, crescimento e novos começos',
      description: 'Ideal para quem deseja evolução pessoal, projetos novos, abundância e força interior para recomeçar.',
      icon: 'sprout'
    },
    mossveil: {
      title: 'O <span class="text-primary font-magic text-4xl md:text-6xl">Véu de Musgo</span> Místico',
      img: 'https://i.ibb.co.com/LDQ94dY0/Mossveil-Fairy-Jar-Mossveil-Pote-de-Fadas.webp',
      label: 'MOSSVEIL - POTE DE FADA',
      purpose: 'Saúde, equilíbrio e bem-estar',
      description: 'Indicada para atrair harmonia, autocuidado, cura emocional e conexão com a natureza.',
      icon: 'leaf'
    },
    sunwhister: {
      title: 'O <span class="text-primary font-magic text-4xl md:text-6xl">Sussurro do Sol</span> Dourado',
      img: 'https://i.ibb.co.com/Zzh5LzT1/Sunwhisper-Fairy-Jar-Sussurro-do-Sol-Pote-de-Fadas.webp',
      label: 'SUNWHISPER - POTE DE FADA',
      purpose: 'Alegria, vitalidade e sucesso',
      description: 'Para iluminar caminhos, aumentar a energia, autoestima e atrair boas oportunidades.',
      icon: 'sun'
    },
    elowen: {
      title: 'A <span class="text-primary font-magic text-4xl md:text-6xl">Sombra Lunar</span> Prateada',
      img: 'https://i.ibb.co.com/dsPh4Njh/Elowen-Fairy-Jar-Elowen-Pote-de-Fadas.webp',
      label: 'ELOWEN - POTE DE FADA',
      purpose: 'Proteção espiritual e intuição',
      description: 'Ajuda a afastar energias negativas, fortalecer a intuição e trazer segurança emocional.',
      icon: 'moon'
    },
    elara: {
      title: 'Chuva de <span class="text-primary font-magic text-4xl md:text-6xl">Estrelas</span> no Vidro',
      img: 'https://i.ibb.co.com/BSHz54q/Elara-Fairy-Jar-Elara-Pote-de-Fadas.webp',
      label: 'ELARA - POTE DE FADA',
      purpose: 'Realização de sonhos e esperança',
      description: 'Perfeita para quem está manifestando desejos, metas importantes e fé no futuro.',
      icon: 'sparkles'
    },
    daisy: {
      title: 'Coração de <span class="text-primary font-magic text-4xl md:text-6xl">Quartzo</span> Rosa',
      img: 'https://i.ibb.co.com/GfnYDpqZ/Daisy-Fairy-Jar-Margarida-Jarra-de-Fada.webp',
      label: 'DAISY - POTE DE FADA',
      purpose: 'Amor, autoestima e relacionamentos',
      description: 'Atrai amor-próprio, cura emocional, harmonia nos relacionamentos e afeto verdadeiro.',
      icon: 'heart'
    },
    isola: {
      title: 'A <span class="text-primary font-magic text-4xl md:text-6xl">Névoa do Oceano</span>',
      img: 'https://i.ibb.co.com/1J8zvbg6/Isola-Fairy-Jar-Isola-Jarra-de-Fada.webp',
      label: 'ISOLA - POTE DE FADA',
      purpose: 'Calma, clareza mental e fluidez',
      description: 'Ideal para aliviar ansiedade, trazer paz interior e ajudar em decisões importantes.',
      icon: 'waves'
    },
    dewdrop: {
      title: 'A <span class="text-primary font-magic text-4xl md:text-6xl">Geada de Inverno</span>',
      img: 'https://i.ibb.co.com/fYrLzZtj/Dewdrop-Fairy-Jar-Gota-de-Orvalho-Pote-de-Fada.webp',
      label: 'DEWDROP - POTE DE FADA',
      purpose: 'Foco, disciplina e estabilidade',
      description: 'Auxilia no controle emocional, organização da vida e fortalecimento da mente.',
      icon: 'snowflake'
    }
  };

  useEffect(() => {
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
    
    const notificationInterval = setInterval(() => {
      const names = ["Maria", "Fernanda", "Patrícia", "Gabriela", "Camila", "Luciana", "Sônia", "Beatriz", "Carla", "Renata"];
      const cities = ["São Paulo", "Rio de Janeiro", "Curitiba", "Fortaleza", "Belo Horizonte", "Salvador", "Porto Alegre"];
      const variantsNames = ["Fernheart", "Mossveil", "Sunwhisper", "Elowen", "Elara", "Daisy", "Isola", "Dewdrop"];
      
      setNotifData({
        name: names[Math.floor(Math.random() * names.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        variant: variantsNames[Math.floor(Math.random() * variantsNames.length)]
      });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 4000);
    }, 15000 + Math.random() * 20000);

    return () => clearInterval(notificationInterval);
  }, []);

  // Recriar ícones lucide sempre que a variante mudar para garantir que os novos apareçam
  useEffect(() => {
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
  }, [currentVariant]);

  const scrollToOferta = (e: React.MouseEvent) => {
    e.preventDefault();
    ofertaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const rate = (stars: number) => {
    setCurrentRating(Number(stars));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentRating === 0) {
      alert('Por favor, selecione quantas estrelas sua experiência merece! ✨');
      return;
    }
    setIsReviewSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Barra de Autenticidade */}
      <div className="bg-[#8E7AB5] text-white text-center py-2 px-4 font-semibold text-xs tracking-wider uppercase">
        SITE OFICIAL | FADAS ARTESANAIS
      </div>

      <header className="bg-white py-4 border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center">
          <h1 className="text-2xl font-magic text-primary">Fadas Artesanais</h1>
        </div>
      </header>

      {/* Aviso de Patente e Autenticidade */}
      <div className="bg-[#fff9eb] border border-[#e9c46a] text-[#926c15] py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <i data-lucide="shield-alert" className="w-4 h-4"></i>
          <p className="text-[10px] md:text-xs font-semibold">
            Todos os produtos são autênticos, com patentes genuínas. Falsificações serão investigadas!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-soft-pink pt-12 pb-20 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1 animate-fadeIn">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                
                
              </div>

              <h1 dangerouslySetInnerHTML={{ __html: variantsData[currentVariant].title }} className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight" />

              {/* Grid de 8 Variações */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                {Object.keys(variantsData).map(key => (
                  <div key={key} onClick={() => setCurrentVariant(key)} 
                    className={`cursor-pointer transition-all p-1 rounded-xl text-center shadow-sm bg-white border-2 ${currentVariant === key ? 'border-primary scale-105' : 'border-transparent opacity-70 grayscale-[0.5] hover:opacity-100 hover:grayscale-0'}`}>
                    <img src={variantsData[key].img} className="rounded-lg h-12 w-full object-cover mb-1" />
                    <span className="text-[8px] font-bold block truncate uppercase">{key}</span>
                  </div>
                ))}
              </div>

              {/* Explicação do Propósito - Novo Elemento */}
              <div key={currentVariant} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-primary shadow-sm mb-8 animate-fadeIn">
                <div className="flex items-center gap-3 mb-2 text-primary">
                   <i data-lucide={variantsData[currentVariant].icon} className="w-5 h-5"></i>
                   <span className="text-xs font-black uppercase tracking-widest">O Propósito desta Fada</span>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{variantsData[currentVariant].purpose}</h4>
                <p className="text-gray-600 italic text-sm leading-relaxed">
                  {variantsData[currentVariant].description}
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start gap-4">
                <button 
                  onClick={scrollToOferta}
                  className="inline-block bg-primary text-white text-lg font-bold py-5 px-12 rounded-full shadow-xl hover:opacity-90 transition transform hover:scale-105"
                >
                  RESERVAR MINHA PEÇA AUTÊNTICA
                </button>
              </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2 relative animate-fadeIn">
              <img key={variantsData[currentVariant].img} src={variantsData[currentVariant].img} alt="Fada artesanal mística" className="rounded-2xl shadow-2xl w-full sparkle-animation border-8 border-white transition-all duration-500 min-h-[400px] object-cover" />
              <div className="absolute -top-6 -right-2 bg-accent text-gray-800 font-bold rounded-full h-24 w-24 flex flex-col items-center justify-center shadow-lg text-center leading-tight text-[10px]">
                <i data-lucide="award" className="w-5 h-5 mb-1 text-primary"></i>
                PRODUTO<br/>AUTÊNTICO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="bg-white p-8 md:p-16 rounded-[50px] shadow-sm border border-[#EAD196] relative overflow-hidden animate-fadeIn">
            <i data-lucide="heart" className="w-12 h-12 text-primary mx-auto mb-8 sparkle-animation"></i>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 leading-snug">
              Uma Peça Única para o Seu <span className="text-primary italic">Espaço Sagrado</span>
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg italic">
              <p>"Imagine colocar uma fada no seu espaço sagrado, como um lembrete diário da sua mente, incentivando você a se reconectar com o seu verdadeiro eu."</p>
              <img src="https://i.ibb.co/QvjdbV8k/Artesao.png" alt="Artesão" className="mx-auto rounded-3xl" />
              <p className="font-bold text-gray-800 not-italic">Com cada fada única, você não está apenas comprando uma bela obra de arte — você também está iniciando uma jornada de autodescoberta e cura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Dinâmica - Reestilizada conforme screenshot */}
      <section id="oferta" ref={ofertaRef} className="py-16 bg-[#F3F4F6] scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden animate-fadeIn">
            {/* Header da Seção */}
            <div className="bg-[#8E7AB5] text-white py-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Você está adquirindo</h2>
            </div>
            
            <div className="p-6 md:p-10 bg-white">
              <div className="flex flex-col gap-6 mb-12">
                {/* Box 1: Seu Produto */}
                <div className="p-8 bg-[#FDF8F3] rounded-[2rem] border-2 border-[#8E7AB5]/30 border-dashed relative flex flex-col items-center">
                  <p className="text-[10px] font-bold text-[#8E7AB5]/60 tracking-[0.2em] mb-6 uppercase">SEU PRODUTO:</p>
                  <div className="w-52 h-52 mb-8 transform hover:scale-105 transition-transform duration-500">
                    <img key={variantsData[currentVariant].img} src={variantsData[currentVariant].img} alt="Produto Escolhido" className="w-full h-full object-cover rounded-[1.5rem] shadow-xl border-4 border-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-800 italic uppercase tracking-tighter">{variantsData[currentVariant].label}</h3>
                  <p className="text-xs text-primary font-bold mt-2 uppercase tracking-wide">{variantsData[currentVariant].purpose}</p>
                </div>

                {/* Box 2: Brinde */}
                <div className="p-8 bg-white rounded-[2rem] border-2 border-gray-200 border-dashed relative flex flex-col items-center justify-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EAD196] px-5 py-1.5 rounded-full shadow-md z-10 border border-[#d4af37]">
                    <span className="text-[9px] font-black uppercase text-gray-800 tracking-[0.1em] whitespace-nowrap">BRINDE EXCLUSIVO ✨</span>
                  </div>
                  
                  <div className="w-44 h-32 mb-6 mt-4">
                     <img src="https://i.ibb.co/QvjdbV8k/Artesao.png" alt="Brinde" className="w-full h-full object-cover rounded-xl filter drop-shadow-md grayscale-[0.2]" />
                  </div>
                  
                  <h4 className="font-bold text-gray-800 text-lg mb-1">Amuleto de Cristal Real</h4>
                  <p className="text-[10px] text-gray-400 text-center px-6 italic leading-relaxed mb-4">Um cristal de quartzo autêntico e um saquinho de "Pó de Estrela" para potencializar a energia do seu pote.</p>
                  <div className="text-[#8E7AB5] font-black text-[11px] uppercase tracking-widest">VALOR: <span className="line-through">R$ 13,90</span> → <span className="text-emerald-500">GRÁTIS</span></div>
                </div>
              </div>

              {/* Avaliações e Preço */}
              <div className="flex flex-col items-center mb-12">
                <div className="flex text-[#FFB800] gap-1.5 mb-3 scale-110">
                   <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                   <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                   <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                   <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                   <i data-lucide="star" className="w-6 h-6 fill-current"></i>
                </div>
                <p className="text-[11px] font-bold text-gray-400 tracking-tight mb-8">Excelente 4.8 de 5 | Mais de 14.386 avaliações reais</p>
                
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-gray-300 line-through text-2xl font-semibold opacity-80">De R$ 187,80</span>
                  <div className="flex flex-col items-center">
                    <div className="flex items-baseline text-[#8E7AB5] drop-shadow-sm">
                      <span className="text-5xl font-black mr-2">R$</span>
                      <span className="text-[96px] font-black tracking-tighter leading-none">79,90</span>
                    </div>
                    <span className="text-[11px] font-black text-[#10B981] uppercase tracking-[0.15em] mt-4 bg-[#10B981]/10 px-4 py-1 rounded-full">PREÇO PROMOCIONAL LIMITADO</span>
                  </div>
                </div>
              </div>

              {/* Botão de Compra - Estilo Screenshot */}
              <button 
                onClick={onProceedToCheckout}
                className="w-full max-w-xl mx-auto bg-[#EAD196] hover:bg-[#dec485] text-gray-900 text-2xl font-black py-7 rounded-[1.5rem] shadow-[0_12px_40px_rgba(234,209,150,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 uppercase tracking-tighter block mb-12 border-b-4 border-[#d4af37]"
              >
                COMPRAR AGORA
              </button>

              {/* Selos de Pagamento */}
              <div className="text-center pb-4">
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-8 tracking-[0.2em] opacity-60">PAGAMENTO 100% SEGURO VIA MERCADO PAGO</p>
                <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5" alt="Paypal" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3.5" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                    <img src="https://logopng.com.br/logos/pix-106.png" className="h-6" alt="Pix" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Depoimentos */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-xl font-bold mb-12 text-gray-800 uppercase tracking-tight">Experiência de quem já recebeu</h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {[
                { img: 'https://i.ibb.co/GvbfvtRY/1.png', txt: '"O Pote de Fada chegou e eu senti algo diferente na hora. O ambiente ficou mais leve." - Ana Paula ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/KcXnSLQx/2.png', txt: '"Coloquei no meu cantinho de meditação e ele trouxe muita paz." - Mariana Lopes ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/gH4fK03/3.png', txt: '"É delicado e acolhedor. Deixa a casa com uma energia gostosa." - Juliana Costa ⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/C5KR5qd7/4.png', txt: '"Me conectou com algo que eu nem sabia que estava adormecido." - Renata Azevedo ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/RG1gbw7b/5.png', txt: '"Não é só decoração, é presença." - Paula Nogueira ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/Ng3qGMsv/6.png', txt: '"Só de olhar já me acalma." - Bianca Rocha ⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/Vp9G0Twp/8.png', txt: '"Me lembrou minha infância, algo puro." - Larissa Mendes ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/PGVz4dNC/9.png', txt: '"Virou meu objeto de autocuidado." - Daniela Pires ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/6RcnwBST/10.png', txt: '"Mudou o clima do ambiente." - Fernanda Alves ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/B2r2x4h7/11.png', txt: '"É um carinho em forma de objeto." - Sonia Beltrão ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/chHVxRmS/12.png', txt: '"Transmite amor e presença." - Beatriz Macedo ⭐⭐⭐⭐⭐' },
                { img: 'https://i.ibb.co/m55bz8BX/13.png', txt: '"Cada detalhe passa intenção." - Heloisa Duarte ⭐⭐⭐⭐⭐' }
              ].map((item, i) => (
                <div key={i} className="unboxing-card bg-white w-64 rounded-2xl shadow-lg overflow-hidden shrink-0 border border-gray-100 text-left">
                  <img src={item.img} className="w-full h-48 object-cover" alt="Review" />
                  <p className="p-4 text-[11px] italic text-gray-600 leading-relaxed">{item.txt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Avaliação Mágica */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary blur-3xl rounded-full mix-blend-multiply animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent blur-3xl rounded-full mix-blend-multiply animate-blob delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 max-w-2xl relative z-10 text-center">
          <button onClick={() => setIsReviewFormOpen(!isReviewFormOpen)} 
            className="group relative inline-flex items-center justify-center py-5 px-12 overflow-hidden font-bold text-white transition-all duration-300 ease-out bg-primary rounded-full shadow-2xl hover:shadow-primary/50 hover:-translate-y-1">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
            <span className="relative flex items-center gap-3 text-lg tracking-wider">
              <i data-lucide="sparkles" className="w-6 h-6 animate-pulse text-yellow-200"></i>
              DEIXAR MINHA AVALIAÇÃO
            </span>
          </button>
          <p className="text-sm text-gray-400 mt-4 font-medium tracking-wide">Sua voz é parte da nossa credibilidade ✨</p>

          <div className={`mt-12 text-left transition-all duration-700 ${isReviewFormOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
             <div className="bg-white/90 backdrop-blur-xl border border-white/80 rounded-[30px] p-8 md:p-12 shadow-2xl relative overflow-hidden magic-form-card">
               <button onClick={() => setIsReviewFormOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors">
                  <i data-lucide="x" className="w-6 h-6"></i>
               </button>

               {!isReviewSubmitted ? (
                 <form onSubmit={handleReviewSubmit} className="space-y-6">
                   <div className="text-center mb-10">
                      <h3 className="font-magic text-5xl text-primary mb-3">Compartilhe seu Depoimento</h3>
                      <p className="text-gray-500 text-sm">Sua experiência nos ajuda a espalhar encanto pelo mundo.</p>
                   </div>
                   <div className="relative">
                      <input type="text" id="name" className="magic-input w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-primary peer" placeholder=" " required />
                      <label className="magic-label">Seu Nome</label>
                   </div>
                   <div className="relative">
                      <textarea id="comment" rows={4} className="magic-input w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-primary peer" placeholder=" " required></textarea>
                      <label className="magic-label">Sua Experiência</label>
                   </div>

                   <div className="flex flex-col items-center gap-4">
                      <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Sua Nota:</span>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(star => (
                          <button key={star} type="button" onClick={() => rate(star)} className="focus:outline-none transition-transform hover:scale-110">
                            <i data-lucide="star" className={`w-8 h-8 transition-colors ${currentRating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}></i>
                          </button>
                        ))}
                      </div>
                   </div>

                   <button type="submit" className="w-full py-5 bg-gradient-to-r from-[#D4AF37] via-accent to-[#D4AF37] text-gray-900 font-extrabold rounded-xl uppercase tracking-widest text-sm shadow-xl transform hover:-translate-y-1 transition-all">
                      Enviar Depoimento
                   </button>
                 </form>
               ) : (
                 <div className="text-center py-12 animate-fadeIn">
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100">
                       <i data-lucide="hourglass" className="w-12 h-12 text-green-500"></i>
                    </div>
                    <h4 className="text-3xl font-bold text-gray-800 mb-4 font-magic">Avaliação Recebida! ✨</h4>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8 max-w-md mx-auto">
                       <p className="text-yellow-800 font-medium text-sm leading-relaxed">
                          Sua avaliação está passando pela nossa moderação mágica. Ela será publicada em breve.
                       </p>
                    </div>
                    <button onClick={() => setIsReviewFormOpen(false)} className="text-primary font-bold hover:underline uppercase text-xs tracking-widest">Fechar</button>
                 </div>
               )}
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-3xl text-left">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">DÚVIDAS FREQUENTES</h2>
          <div className="space-y-4">
            {[
              { q: "Como acompanho o meu pedido?", a: "Após a confirmação do pagamento, o código de rastreamento será enviado por e-mail em até 3 dias úteis." },
              { q: "A fada é feita de quê?", a: "Esculpidas à mão com resina mística ecológica de alta durabilidade, protegidas por vidro temperado." },
              { q: "E se o vidro chegar quebrado?", a: "Nossa Garantia Intacta cobre o envio de uma nova peça imediatamente, sem custos." },
              { q: "O brinde de cristal é verdadeiro?", a: "Sim! Cada amuleto contém um cristal de Quartzo autêntico para harmonização." },
              { q: "O site é realmente seguro?", a: "Totalmente seguro. Utilizamos criptografia SSL de 256 bits e processamento via Mercado Pago." }
            ].map((faq, idx) => (
              <div key={idx} className="faq-item bg-white px-6 py-5 rounded-xl shadow-sm cursor-pointer group" onClick={(e) => e.currentTarget.classList.toggle('active')}>
                <div className="flex justify-between items-center font-bold">
                  <span className="text-left pr-4">{faq.q}</span>
                  <i data-lucide="chevron-down" className="transition-transform w-5 h-5 text-primary shrink-0"></i>
                </div>
                <div className="faq-answer text-gray-600 text-sm mt-4 leading-relaxed">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Notificação de Venda */}
      <div id="sales-notification" className={showNotification ? 'show' : ''}>
        <div className="bg-soft-pink p-2 rounded-full mr-3"><i data-lucide="shopping-cart" className="text-primary w-5 h-5"></i></div>
        <div>
          <p className="text-sm font-bold">{notifData.name} de {notifData.city}</p>
          <p className="text-xs text-gray-500">Acaba de adquirir a variação <span id="notif-variant" className="font-bold">{notifData.variant}</span> ✨</p>
        </div>
      </div>

      <footer className="bg-[#0b1120] text-white py-20 text-center relative">
        <div className="container mx-auto px-6">
          <h4 className="font-magic text-4xl text-primary mb-12">Fadas Artesanais</h4>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto text-left">
            <div>
              <h5 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[11px]">Políticas</h5>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Privacidade e Segurança</li>
                <li className="hover:text-white transition-colors cursor-pointer">Termos de Serviço</li>
                <li className="hover:text-white transition-colors cursor-pointer">Reembolso e Devolução</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[11px]">Suporte Especializado</h5>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <i data-lucide="mail" className="w-4 h-4 text-white"></i>
                <span>suporte@fadasartesanais.com.br</span>
              </div>
            </div>
          </div>

          {/* Badges Confidence */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg">
              <div className="flex gap-0.5 text-[#FFB800]">
                <i data-lucide="star" className="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" className="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" className="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" className="w-3.5 h-3.5 fill-current"></i>
                <i data-lucide="star" className="w-3.5 h-3.5 fill-current"></i>
              </div>
              <span className="text-[11px] font-bold text-gray-400">+14.386 avaliações</span>
            </div>

            <div className="bg-[#1e293b] border border-gray-700/50 rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg">
              <div className="w-5 h-5 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="text-[11px] font-bold text-gray-400">Google Navegação segura</span>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-12">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-medium">
              © 2022 FADAS ARTESANAIS LTDA • CNPJ 04.724.488/0001-50 • Marca e Patentes Registradas no INPI
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
