import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, ArrowUpRight, Brain, Check, Heart, LockKeyhole, Menu, MessageCircle, ShieldCheck, Sparkles, Users, X } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import Dashboard from "./Dashboard";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  if (showDashboard) return <Dashboard />;

  const features = [
    { number: "01", icon: Heart, title: "Check in with yourself", text: "Name what you’re feeling. Notice your patterns. Build a little more self-understanding, one day at a time.", color: "sage" },
    { number: "02", icon: MessageCircle, title: "Talk it through", text: "A gentle space to put your thoughts into words and explore what might help next.", color: "peach" },
    { number: "03", icon: Users, title: "Feel less alone", text: "Hear from a peer community navigating the same wonderfully complicated season of life.", color: "lilac" },
  ];

  return (
    <div className="landing-page min-h-screen bg-background text-foreground">
      <nav className="landing-nav sticky top-0 z-40 border-b border-black/[.06] bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Nirvana home"><span className="brand-mark"><Brain size={19} strokeWidth={1.8} /></span><span className="leading-tight"><span className="block text-[18px] font-semibold tracking-[-.04em]">nirvana<span className="text-primary">.</span></span><span className="block text-[10px] tracking-[.11em] text-muted-foreground">STUDENT WELLBEING</span></span></a>
          <div className="hidden items-center gap-9 md:flex"><a href="#approach" className="landing-link">Our approach</a><a href="#tools" className="landing-link">What’s inside</a><a href="#community" className="landing-link">Community</a></div>
          <div className="hidden items-center gap-3 md:flex"><button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setShowDashboard(true)}>Log in</button><Button onClick={() => setShowDashboard(true)} className="h-11 rounded-full px-5">Explore the demo <ArrowUpRight size={16} className="ml-1" /></Button></div>
          <button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
        {menuOpen && <div className="space-y-1 border-t px-5 py-4 md:hidden"><a href="#approach" className="block py-2 text-sm" onClick={() => setMenuOpen(false)}>Our approach</a><a href="#tools" className="block py-2 text-sm" onClick={() => setMenuOpen(false)}>What’s inside</a><a href="#community" className="block py-2 text-sm" onClick={() => setMenuOpen(false)}>Community</a><Button className="mt-2 w-full rounded-full" onClick={() => setShowDashboard(true)}>Explore the demo <ArrowRight size={16} /></Button></div>}
      </nav>

      <main id="top">
        <section className="landing-hero relative overflow-hidden">
          <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
          <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-24">
            <div className="relative z-10 max-w-[590px]">
              <div className="eyebrow"><span className="eyebrow-dot" /> A softer place to land</div>
              <h1 className="hero-title mt-7">You don’t have to<br className="hidden sm:block" /> have it <span className="title-accent">figured out.</span></h1>
              <p className="mt-6 max-w-[480px] text-base leading-7 text-[#53625b] sm:text-lg sm:leading-8">College can ask a lot of you. Nirvana gives you a private-feeling space to check in, find perspective, and feel a little more supported.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button onClick={() => setShowDashboard(true)} className="h-12 rounded-full px-6 text-sm shadow-[0_8px_24px_rgba(44,92,66,.2)]">Take a look around <ArrowRight size={17} className="ml-2" /></Button><a href="#approach" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#dfe5dc] bg-white/60 px-6 text-sm font-medium transition hover:bg-white">See how it works <ArrowDown size={15} /></a></div>
              <div className="mt-9 flex items-center gap-2 text-xs text-[#68756c]"><LockKeyhole size={14} className="text-primary" /> A demo space for reflection and support</div>
            </div>
            <div className="hero-art-wrap relative mx-auto w-full max-w-[640px] lg:mr-0">
              <div className="hero-art-frame"><img src={heroImage} alt="A person taking a quiet moment to breathe" className="hero-art-image" /><div className="hero-art-wash" /><div className="hero-art-caption"><span className="caption-icon"><Sparkles size={15} /></span><span><b>A moment for yourself</b><small>There’s no perfect way to begin.</small></span></div></div>
              <div className="floating-note note-top"><span className="note-icon note-icon-heart"><Heart size={16} fill="currentColor" /></span><span><b>Start where you are</b><small>Every feeling is welcome</small></span></div>
              <div className="floating-note note-bottom"><span className="note-icon note-icon-check"><Check size={16} /></span><span><b>Your pace. Your space.</b><small>Small steps count, too.</small></span></div>
              <div className="hero-sparkle sparkle-a">✳</div><div className="hero-sparkle sparkle-b">✳</div>
            </div>
          </div>
          <div className="hero-bottom-rule"><span>SUPPORT FOR THE IN-BETWEEN MOMENTS</span><span className="rule-line" /><span>MADE WITH STUDENTS IN MIND</span></div>
        </section>

        <section id="approach" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <div><div className="section-kicker">A little more room to breathe</div><h2 className="section-title mt-4">Support that meets<br />you <span className="serif-accent">where you are.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">Some days need a check-in. Some days need a conversation. Some days, it just helps to know you’re not the only one.</p><button onClick={() => setShowDashboard(true)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3">Explore your space <ArrowRight size={16} /></button></div>
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">{features.map(({ number, icon: Icon, title, text, color }) => <article key={number} className={`feature-tile feature-${color}`}><div className="flex items-start justify-between"><span className="feature-number">{number}</span><span className="feature-icon"><Icon size={20} strokeWidth={1.7} /></span></div><h3 className="mt-10 text-[17px] font-semibold tracking-[-.025em]">{title}</h3><p className="mt-2 text-[13px] leading-6 text-[#647069]">{text}</p></article>)}</div>
          </div>
        </section>

        <section id="tools" className="tools-section py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><div className="section-kicker">Inside your space</div><h2 className="section-title mt-4">A few good things,<br /><span className="serif-accent">all in one place.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Thoughtful tools for the days that feel easy, and the days that don’t.</p></div>
            <div className="tool-grid mt-10"><button onClick={() => setShowDashboard(true)} className="tool-card tool-card-large"><span className="tool-index">01 / REFLECT</span><span className="tool-illustration mood-illustration"><span className="mood-sun" /><span className="mood-label">How are you,<br />really?</span><span className="mood-pills"><i /><i /><i /><i /></span></span><span className="tool-card-bottom"><span><b>Daily mood check-ins</b><small>Notice how you’re feeling, without judgment.</small></span><span className="tool-arrow"><ArrowUpRight size={18} /></span></span></button>
              <button onClick={() => setShowDashboard(true)} className="tool-card"><span className="tool-index">02 / TALK</span><span className="tool-illustration chat-illustration"><span className="chat-bubble chat-bubble-a">I’ve got a lot on my mind.</span><span className="chat-bubble chat-bubble-b">Want to unpack it together?</span><span className="chat-spark">✳</span></span><span className="tool-card-bottom"><span><b>A place to talk</b><small>Put your thoughts into words.</small></span><span className="tool-arrow"><ArrowUpRight size={18} /></span></span></button>
              <button id="community" onClick={() => setShowDashboard(true)} className="tool-card"><span className="tool-index">03 / CONNECT</span><span className="tool-illustration community-illustration"><span className="community-orb orb-1">J</span><span className="community-orb orb-2">M</span><span className="community-orb orb-3">A</span><span className="community-thread">You’re not alone here.</span></span><span className="tool-card-bottom"><span><b>Peer community</b><small>Find connection in shared stories.</small></span><span className="tool-arrow"><ArrowUpRight size={18} /></span></span></button>
            </div>
          </div>
        </section>

        <section className="promise-section px-5 py-16 sm:px-8 sm:py-24"><div className="promise-inner mx-auto max-w-[1120px]"><div className="promise-stamp"><ShieldCheck size={28} strokeWidth={1.5} /></div><div className="section-kicker text-[#c8e1c5]">Thoughtful by design</div><h2 className="mt-4 max-w-[700px] text-3xl font-medium leading-tight tracking-[-.04em] text-white sm:text-5xl">Your wellbeing isn’t a productivity project.</h2><p className="mt-5 max-w-[570px] text-sm leading-7 text-white/65 sm:text-base">Nirvana is a gentle companion for reflection and peer connection. It isn’t a diagnosis or a substitute for care from a qualified professional.</p><Button onClick={() => setShowDashboard(true)} className="mt-8 h-12 rounded-full bg-[#d9edca] px-6 text-[#213d2b] hover:bg-white">Step inside <ArrowRight size={16} className="ml-2" /></Button><div className="promise-decoration">n.</div></div></section>
      </main>
      <footer className="landing-footer"><div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"><a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight"><span className="brand-mark brand-mark-small"><Brain size={15} /></span>nirvana<span className="text-primary">.</span></a><p className="text-xs text-muted-foreground">A student wellbeing prototype · For reflection and peer support</p><a href="#top" className="text-xs text-muted-foreground hover:text-primary">Back to top ↑</a></div></footer>
    </div>
  );
};

export default Index;
