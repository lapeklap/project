import { useEffect, useRef, useState } from 'react';
import {
  Send,
  Twitter,
  ExternalLink,
  TrendingUp,
  Zap,
  Shield,
  Flame,
  Copy,
  Check,
  Wallet,
  ArrowLeftRight,
} from 'lucide-react';

const CONTRACT_ADDRESS = '0x0331Bc6e11fe128b91E20F67F81a1e04b6e2e84C';

const SOCIAL_LINKS = {
  telegram: 'https://t.me/pervertinu',
  twitter: 'https://x.com/pervertinu',
  dexscreener: 'https://dexscreener.com/robinhood/0x0331Bc6e11fe128b91E20F67F81a1e04b6e2e84C',
  dextools: 'https://www.dextools.io/app/robinhood/pair-explorer/0x0331Bc6e11fe128b91E20F67F81a1e04b6e2e84C',
  uniswap: 'https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0x0331Bc6e11fe128b91E20F67F81a1e04b6e2e84C',
};

function CoinParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const coins: HTMLDivElement[] = [];
    const count = 18;

    for (let i = 0; i < count; i++) {
      const coin = document.createElement('div');
      coin.className = 'coin';
      const size = Math.random() * 12 + 6;
      coin.style.width = `${size}px`;
      coin.style.height = `${size}px`;
      coin.style.left = `${Math.random() * 100}%`;
      coin.style.bottom = '0';
      const duration = Math.random() * 8 + 6;
      const delay = Math.random() * 10;
      coin.style.animationDuration = `${duration}s`;
      coin.style.animationDelay = `${delay}s`;
      container.appendChild(coin);
      coins.push(coin);
    }

    return () => {
      coins.forEach((c) => c.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1a0a2e]/90 backdrop-blur-md border-b border-[#FFD700]/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="font-orbitron font-900 text-lg tracking-widest shimmer-text">
          PERVERT INU
        </span>
        <div className="hidden md:flex items-center gap-6">
          {[
            { label: 'About', href: '#about' },
            { label: 'Tokenomics', href: '#tokenomics' },
            { label: 'How to Buy', href: '#how-to-buy' },
            { label: 'Roadmap', href: '#roadmap' },
            { label: 'Community', href: '#community' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#c0a0e0] hover:text-[#FFD700] transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={SOCIAL_LINKS.uniswap}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-4 py-2 rounded-full text-xs"
        >
          BUY NOW
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A1A45] via-[#241538] to-[#1a0a2e]" />

      {/* Radial glow behind image */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFD700]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#8B00FF]/20 blur-[80px] pointer-events-none" />

      <CoinParticles />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/5 text-[#FFD700] text-xs font-orbitron tracking-wider">
          <Flame size={12} className="text-orange-400" />
          Robinhood Chain's Inu
          <Flame size={12} className="text-orange-400" />
        </div>

        {/* Hero image */}
        <div className="animate-float relative flex flex-col items-center mx-auto">
          <div className="absolute inset-0 rounded-2xl blur-3xl bg-[#FFD700]/10 scale-110" />
          <img
            src="/images/3.jpg"
            alt="PervertInu"
            className="relative rounded-2xl w-full max-w-2xl shadow-2xl"
            style={{
              boxShadow:
                '0 0 60px rgba(255,215,0,0.2), 0 0 120px rgba(139,0,255,0.15)',
            }}
          />
        </div>

        {/* Title */}
        <div className="flex flex-col items-center text-center mx-auto">
          <h1 className="font-orbitron font-black text-5xl sm:text-7xl tracking-tight glow-gold shimmer-text leading-none">
            PERVERT INU
          </h1>
          <p className="mt-3 text-[#c0a0e0] text-lg sm:text-xl font-light tracking-wide">
            The naughtiest Dog in the crypto universe
          </p>
        </div>

        {/* Contract address */}
        <button
          onClick={handleCopy}
          className="group flex items-center gap-3 px-5 py-2.5 rounded-xl card-glass hover:border-[#FFD700]/40 transition-all duration-200"
        >
          <span className="text-xs font-mono text-[#c0a0e0] group-hover:text-[#FFD700] transition-colors">
            CA: {CONTRACT_ADDRESS}
          </span>
          {copied ? (
            <Check size={14} className="text-green-400 flex-shrink-0" />
          ) : (
            <Copy
              size={14}
              className="text-[#c0a0e0] group-hover:text-[#FFD700] flex-shrink-0 transition-colors"
            />
          )}
        </button>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={SOCIAL_LINKS.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 rounded-full text-sm flex items-center gap-2"
          >
            <Zap size={16} />
            Buy on Uniswap
          </a>
          <a
            href={SOCIAL_LINKS.dexscreener}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-8 py-3.5 rounded-full text-sm flex items-center gap-2"
          >
            <TrendingUp size={16} />
            DexScreener
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          {[
            {
              href: SOCIAL_LINKS.telegram,
              icon: <Send size={18} />,
              label: 'Telegram',
            },
            {
              href: SOCIAL_LINKS.twitter,
              icon: <Twitter size={18} />,
              label: 'Twitter / X',
            },
            {
              href: SOCIAL_LINKS.dexscreener,
              icon: <TrendingUp size={18} />,
              label: 'DexScreener',
            },
            {
              href: SOCIAL_LINKS.dextools,
              icon: <ExternalLink size={18} />,
              label: 'DexTools',
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[#c0a0e0] hover:text-[#FFD700] hover:bg-[#FFD700]/5 transition-all duration-200 text-xs border border-[#ffffff10] hover:border-[#FFD700]/20"
            >
              {s.icon}
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#c0a0e0]/40 text-xs">
        <div className="w-px h-8 bg-gradient-to-b from-[#FFD700]/30 to-transparent" />
        scroll
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 relative"
      style={{ background: 'linear-gradient(180deg, #1a0a2e 0%, #241538 100%)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl text-[#FFD700] glow-gold mb-4">
            WHAT IS PERVERT INU?
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Flame size={32} className="text-orange-400" />,
              title: 'PURE DEGEN',
              desc: 'The naughtiest meme coin on the chain, PervertInu is for the true degens. No VC, no presale, no bullshit.',
            },
            {
              icon: <Shield size={32} className="text-[#FFD700]" />,
              title: 'SAFU',
              desc: 'Liquidity locked, contract renounced. The community owns this. Diamond hands only — paper hands get rekt.',
            },
            {
              icon: <Zap size={32} className="text-yellow-300" />,
              title: 'COMMUNITY DRIVEN',
              desc: 'Powered by the most degenerate community in crypto. We meme, we shill, we moon together. Wagmi.',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-glass rounded-2xl p-8 text-center hover:border-[#FFD700]/30 transition-all duration-300 group hover:glow-gold-box"
            >
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="font-orbitron font-bold text-sm tracking-widest text-[#FFD700] mb-3">
                {card.title}
              </h3>
              <p className="text-[#c0a0e0] text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TokenomicsSection() {
  const items = [
    { label: 'Total Supply', value: '1,000,000,000', sub: '1 Billion PERVERTINU' },
    { label: 'Buy Tax', value: '1%', sub: 'Community treasury' },
    { label: 'Sell Tax', value: '1%', sub: 'Community treasury' },
    { label: 'Liquidity', value: '100%', sub: 'Locked forever' },
  ];

  return (
    <section
      id="tokenomics"
      className="py-24 relative bg-[#2A1A45]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.04)_0%,_transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 mb-4">
            <img
              src="/images/teko.jpg"
              alt="Teko"
              className="w-32 h-32 sm:w-64 sm:h-64 rounded-lg object-cover flex-shrink-0 border border-[#FFD700]/30"
            />
            <h2 className="font-orbitron font-bold text-4xl text-[#FFD700] glow-gold">
              TOKENOMICS
            </h2>
            <img
              src="/images/teko2.png"
              alt="Teko 2"
              className="w-32 h-32 sm:w-64 sm:h-64 rounded-lg object-cover flex-shrink-0 border border-[#FFD700]/30"
            />
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto" />
          <p className="mt-4 text-[#c0a0e0] text-sm">Simple. Fair. Degen.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="card-glass rounded-2xl p-6 text-center animate-pulse-glow hover:border-[#FFD700]/40 transition-all duration-300"
            >
              <div className="font-orbitron font-black text-3xl sm:text-4xl shimmer-text mb-1">
                {item.value}
              </div>
              <div className="text-[#c0a0e0] text-xs font-semibold tracking-wide mb-1">
                {item.label}
              </div>
              <div className="text-[#7a5a9a] text-xs">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Distribution bar */}
        <div className="mt-12 card-glass rounded-2xl p-6">
          <h3 className="font-orbitron text-xs tracking-widest text-[#FFD700] mb-4 text-center">
            TOKEN DISTRIBUTION
          </h3>
          <div className="flex rounded-full overflow-hidden h-6">
            <div
              className="flex items-center justify-center text-[10px] font-bold text-[#1a0a2e]"
              style={{
                width: '60%',
                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
              }}
            >
              100% Fair Launch
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-[#1a0a2e]"
              style={{
                width: '20%',
                background: 'linear-gradient(90deg, #FFC000, #FFB300)',
              }}
            >
              0% Team
            </div>
            <div
              className="flex items-center justify-center text-[10px] font-bold text-white"
              style={{
                width: '20%',
                background: 'linear-gradient(90deg, #7B3FA0, #9B59B6)',
              }}
            >
              0% Presale
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToBuySection() {
  const steps = [
    {
      num: '01',
      icon: <Wallet size={26} />,
      title: 'GET A WALLET',
      desc: 'Download MetaMask or Trust Wallet — free crypto wallets for browser or mobile. Set up your seed phrase and keep it safe.',
      gradient: 'from-yellow-400/20 to-amber-600/10',
    },
    {
      num: '02',
      icon: <Zap size={26} />,
      title: 'FUND WITH ETH',
      desc: 'Buy Ethereum (ETH) on any exchange like Coinbase or Binance, then transfer it to your wallet address. Bridge your ETH from Ethereum to the Robinhood Chain.',
      gradient: 'from-orange-400/20 to-red-600/10',
    },
    {
      num: '03',
      icon: <ArrowLeftRight size={26} />,
      title: 'GO TO UNISWAP',
      desc: 'Visit app.uniswap.org, connect your wallet, paste the PervertInu contract address, and swap your ETH for PERVERTINU.',
      gradient: 'from-pink-400/20 to-purple-600/10',
    },
    {
      num: '04',
      icon: <Flame size={26} />,
      title: 'HODL & MOON',
      desc: 'Confirm the swap, add PERVERTINU to your wallet, and welcome to the degenerate PervertInu family. Diamond hands!',
      gradient: 'from-green-400/20 to-emerald-600/10',
    },
  ];

  return (
    <section id="how-to-buy" className="py-24 bg-[#241538] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.04)_0%,_transparent_70%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mb-6 rounded-full overflow-hidden border-2 border-[#FFD700]/40 glow-gold-box">
            <img
              src="/images/IMG_20260703_172605_725.jpg"
              alt="PervertInu mascot"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="font-orbitron font-bold text-4xl text-[#FFD700] glow-gold mb-4">
            HOW TO BUY
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
          <p className="mt-4 text-[#c0a0e0] text-sm max-w-md text-center">
            Four simple steps to join the PervertInu cult. Even a degenerate can do it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {steps.map((step) => (
            <div
              key={step.num}
              className="card-glass rounded-2xl p-6 h-full group hover:border-[#FFD700]/40 transition-all duration-300 hover:glow-gold-box"
            >
              <div className="flex items-center gap-5">
                <div
                  className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 border border-[#FFD700]/20 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-[#FFD700]">{step.icon}</div>
                  <span className="absolute -top-2 -right-2 font-orbitron font-black text-xs text-[#FFD700] bg-[#241538] border border-[#FFD700]/30 w-6 h-6 rounded-full flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-bold text-sm tracking-widest text-[#FFD700] mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[#c0a0e0] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={SOCIAL_LINKS.uniswap}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 rounded-full text-sm inline-flex items-center gap-2"
          >
            <Zap size={16} />
            Buy on Uniswap
          </a>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const phases = [
    {
      phase: 'PHASE 1',
      title: 'AWAKENING',
      image: '/images/rm.png',
      active: true,
      items: [
        'Token launch on Uniswap',
        'Website & social channels',
        'Community building',
        'DexTools trending',
      ],
    },
    {
      phase: 'PHASE 2',
      title: 'DEGENERACY',
      image: '/images/rm2.jpg',
      active: false,
      items: [
        '1,000 holders milestone',
        'Influencer partnerships',
        'Meme contest campaigns',
        'CoinGecko & CMC listing',
      ],
    },
    {
      phase: 'PHASE 3',
      title: 'MOON MISSION',
      image: '/images/rm3.jpg',
      active: false,
      items: [
        '10,000 holders',
        'Robinhood Chain domination',
        'CEX listings',
        'PervertInu DAO governance',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-[#241538] relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(139,0,255,0.08)_0%,_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl text-[#FFD700] glow-gold mb-4">
            ROADMAP
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((p) => (
            <div
              key={p.phase}
              className={`card-glass rounded-2xl p-7 relative transition-all duration-300 ${
                p.active
                  ? 'border-[#FFD700]/40 glow-gold-box'
                  : 'hover:border-[#FFD700]/20'
              }`}
            >
              {p.active && (
                <span className="absolute top-4 right-4 text-[10px] font-orbitron text-[#FFD700] bg-[#FFD700]/10 px-2 py-0.5 rounded-full border border-[#FFD700]/30">
                  LIVE
                </span>
              )}
              <div className="mb-5 overflow-hidden rounded-xl border border-[#FFD700]/20">
                <img
                  src={p.image}
                  alt={`${p.phase} ${p.title}`}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="font-orbitron text-xs tracking-widest text-[#FFD700]/60 mb-1">
                {p.phase}
              </div>
              <h3 className="font-orbitron font-bold text-lg text-[#FFD700] mb-5">
                {p.title}
              </h3>
              <ul className="space-y-2.5">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-[#c0a0e0]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]/50 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  const links = [
    {
      href: SOCIAL_LINKS.telegram,
      icon: <Send size={28} />,
      label: 'Telegram',
      desc: 'Join our alpha group',
      color: 'from-blue-600/20 to-blue-800/20',
      border: 'border-blue-500/20 hover:border-blue-400/50',
    },
    {
      href: SOCIAL_LINKS.twitter,
      icon: <Twitter size={28} />,
      label: 'Twitter / X',
      desc: 'Follow for updates',
      color: 'from-sky-600/20 to-sky-800/20',
      border: 'border-sky-500/20 hover:border-sky-400/50',
    },
    {
      href: SOCIAL_LINKS.dexscreener,
      icon: <TrendingUp size={28} />,
      label: 'DexScreener',
      desc: 'Track the chart',
      color: 'from-green-600/20 to-green-800/20',
      border: 'border-green-500/20 hover:border-green-400/50',
    },
    {
      href: SOCIAL_LINKS.dextools,
      icon: <ExternalLink size={28} />,
      label: 'DexTools',
      desc: 'Advanced analytics',
      color: 'from-orange-600/20 to-orange-800/20',
      border: 'border-orange-500/20 hover:border-orange-400/50',
    },
    {
      href: SOCIAL_LINKS.uniswap,
      icon: <Zap size={28} />,
      label: 'Uniswap',
      desc: 'Buy PERVERTINU now',
      color: 'from-pink-600/20 to-pink-800/20',
      border: 'border-pink-500/20 hover:border-pink-400/50',
    },
  ];

  return (
    <section
      id="community"
      className="py-24 bg-[#2A1A45] relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.05)_0%,_transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl text-[#FFD700] glow-gold mb-4">
            JOIN THE COMMUNITY
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto" />
          <p className="mt-4 text-[#c0a0e0] text-sm max-w-md mx-auto">
            Be part of the most degenerate community in crypto. Together we moon.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${l.color} border ${l.border} card-glass transition-all duration-300 group hover:-translate-y-1 hover:glow-gold-box`}
            >
              <div className="text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                {l.icon}
              </div>
              <div className="text-center">
                <div className="font-orbitron font-bold text-xs text-[#FFD700] tracking-wide">
                  {l.label}
                </div>
                <div className="text-[#c0a0e0] text-xs mt-0.5">{l.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a0a2e] border-t border-[#FFD700]/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-orbitron font-black text-xl shimmer-text tracking-widest">
            PERVERT INU
          </span>

          <div className="flex items-center gap-4">
            {[
              { href: SOCIAL_LINKS.telegram, icon: <Send size={18} /> },
              { href: SOCIAL_LINKS.twitter, icon: <Twitter size={18} /> },
              { href: SOCIAL_LINKS.dexscreener, icon: <TrendingUp size={18} /> },
              { href: SOCIAL_LINKS.dextools, icon: <ExternalLink size={18} /> },
              { href: SOCIAL_LINKS.uniswap, icon: <Zap size={18} /> },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7a5a9a] hover:text-[#FFD700] transition-colors duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <p className="text-[#7a5a9a] text-xs text-center md:text-right">
            &copy; 2025 PervertInu. Not financial advice.
            <br />
            Crypto is volatile — DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TokenomicsSection />
      <HowToBuySection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
