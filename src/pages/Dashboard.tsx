import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoodLogger } from "@/components/MoodLogger";
import { ChatbotInterface } from "@/components/ChatbotInterface";
import { CommunityForum } from "@/components/CommunityForum";
import { MoodAnalytics } from "@/components/MoodAnalytics";
import { Activity, BarChart3, BookOpen, Brain, CircleHelp, Heart, Home, Menu, MessageCircle, Phone, Settings, Shield, Sparkles, Users } from "lucide-react";

export default function Dashboard() {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userName = "Alex";
  const today = new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(new Date());

  const handleMoodLog = (mood: string) => {
    if (currentStreak === 7) setCurrentStreak(8);
    console.log("Mood logged:", mood);
  };

  const nav = [
    { id: "home", label: "Overview", icon: Home },
    { id: "community", label: "Community", icon: Users },
    { id: "analytics", label: "Your progress", icon: BarChart3 },
    { id: "resources", label: "Resources", icon: BookOpen },
  ];

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col px-5 py-6 transition-transform lg:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <a href="/" className="mb-10 flex items-center gap-3 px-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Brain size={21} /></span>
          <span><span className="block text-lg font-semibold tracking-tight">nirvana</span><span className="block text-[11px] text-muted-foreground">A little space for you</span></span>
        </a>
        <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[.16em] text-muted-foreground">Your space</div>
        <nav className="space-y-1">
          {nav.map(({ id, label, icon: Icon }) => (
            <button key={id} className="dashboard-nav-item w-full text-left" data-active={activeSection === id} onClick={() => { setActiveSection(id); setMobileMenuOpen(false); if (id !== "home") document.getElementById(`section-${id}`)?.scrollIntoView({ behavior: "smooth" }); else window.scrollTo({ top: 0, behavior: "smooth" }); }}>
              <Icon size={18} strokeWidth={1.8} />{label}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-[#f2f6f3] p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium"><Shield size={16} className="text-primary" />Your privacy matters</div>
          <p className="text-xs leading-relaxed text-muted-foreground">This preview uses sample content. Nothing here is saved.</p>
          <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground"><Sparkles size={12} /> Interactive product preview</div>
        </div>
        <button className="mt-4 flex items-center gap-3 rounded-xl p-2 text-left hover:bg-muted"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e7eee9] text-sm font-semibold text-primary">A</div><div className="min-w-0 flex-1"><div className="text-sm font-medium">Alex Morgan</div><div className="text-xs text-muted-foreground">Student account</div></div><Settings size={16} className="text-muted-foreground" /></button>
      </aside>
      {mobileMenuOpen && <button aria-label="Close menu" className="fixed inset-0 z-40 bg-black/20 lg:hidden" onClick={() => setMobileMenuOpen(false)} />}

      <div className="min-h-screen lg:pl-[252px]">
        <header className="sticky top-0 z-30 border-b border-[#e8eeeb] bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8">
            <div className="flex items-center gap-3"><Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(true)} aria-label="Open menu"><Menu size={20} /></Button><span className="hidden text-sm text-muted-foreground sm:inline">{today}</span><span className="text-sm text-muted-foreground sm:hidden">Your space</span></div>
            <div className="flex items-center gap-3"><Badge variant="secondary" className="gap-1.5 rounded-full bg-[#edf5ef] px-3 py-1 text-primary hover:bg-[#edf5ef]"><Sparkles size={13} /> {currentStreak} day streak</Badge><Button variant="ghost" size="icon" aria-label="Help"><CircleHelp size={19} /></Button></div>
          </div>
        </header>

        <main className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10">
          <section className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div><p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-primary">Your wellbeing, at your pace</p><h1 className="text-3xl font-semibold tracking-tight sm:text-[34px]">Good morning, {userName}<span aria-hidden="true"> ☀️</span></h1><p className="mt-2 text-sm text-muted-foreground sm:text-base">A small check-in can make a big difference. How are you doing?</p></div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-[#9caa9d]" /> Preview · sample data</div>
          </section>

          <section className="mb-6 flex flex-col gap-4 rounded-2xl border border-[#eadfcf] bg-[#fbf7ef] p-4 sm:flex-row sm:items-center sm:px-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#9e6c3b]"><Phone size={18} /></div>
            <div className="flex-1"><h2 className="text-sm font-semibold">You deserve support, whenever you need it.</h2><p className="mt-0.5 text-xs text-muted-foreground">If you or someone you know is in immediate danger, contact local emergency services.</p></div>
            <Button variant="outline" size="sm" className="shrink-0 border-[#dfd2bf] bg-white text-foreground hover:bg-[#f8f2e8]">View support options</Button>
          </section>

          <section className="mb-8 grid gap-5 xl:grid-cols-[minmax(310px,.82fr)_minmax(0,1.5fr)]">
            <div><div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground"><Activity size={14} /> Daily check-in</div><MoodLogger currentStreak={currentStreak} onMoodLog={handleMoodLog} /></div>
            <div><div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground"><MessageCircle size={14} /> A moment to talk</div><ChatbotInterface /></div>
          </section>

          <Tabs value={activeSection === "home" ? "community" : activeSection} onValueChange={setActiveSection} className="space-y-5">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"><div><h2 className="text-xl font-semibold tracking-tight">Your wellbeing toolkit</h2><p className="mt-1 text-sm text-muted-foreground">Explore support that meets you where you are.</p></div>
              <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl bg-[#edf1ee] p-1 sm:w-auto">
                <TabsTrigger id="section-community" value="community" className="gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm"><Users size={15} /> Community</TabsTrigger><TabsTrigger id="section-analytics" value="analytics" className="gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm"><BarChart3 size={15} /> Progress</TabsTrigger><TabsTrigger id="section-resources" value="resources" className="gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm"><Heart size={15} /> Resources</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="community" id="section-community" className="mt-0"><div className="grid gap-5 xl:grid-cols-[1.35fr_.8fr]"><div className="surface-card overflow-hidden"><CommunityForum /></div><Card className="surface-card"><CardHeader className="pb-3"><CardTitle className="flex items-center gap-2 text-base"><Shield size={18} className="text-primary" />A kind community</CardTitle></CardHeader><CardContent><p className="mb-5 text-sm leading-relaxed text-muted-foreground">A little care goes a long way. Help make this a safe space for everyone.</p><div className="space-y-4">{["Lead with kindness and curiosity", "Share experiences, keep personal details private", "Flag anything that feels unsafe", "Peer support complements professional care"].map((item) => <div key={item} className="flex gap-3 text-sm"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /><span>{item}</span></div>)}</div><div className="mt-6 border-t pt-4 text-xs text-muted-foreground">You can choose what to share, and when.</div></CardContent></Card></div></TabsContent>
            <TabsContent value="analytics" id="section-analytics" className="mt-0"><div className="surface-card p-4 sm:p-6"><MoodAnalytics /></div></TabsContent>
            <TabsContent value="resources" id="section-resources" className="mt-0"><div className="grid gap-4 md:grid-cols-3">{[{ icon: Sparkles, title: "Find a moment of calm", desc: "A short breathing reset for when your day feels full.", action: "Start a breathing exercise" }, { icon: BookOpen, title: "Study with less stress", desc: "Practical ways to make study time feel more manageable.", action: "Explore study tips" }, { icon: Heart, title: "Reach out for support", desc: "Find trusted people and services who can help.", action: "View support options" }].map(({ icon: Icon, title, desc, action }) => <Card key={title} className="surface-card"><CardHeader><div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ef] text-primary"><Icon size={19} /></div><CardTitle className="text-base">{title}</CardTitle></CardHeader><CardContent><p className="mb-5 text-sm leading-relaxed text-muted-foreground">{desc}</p><Button variant="outline" size="sm" className="w-full">{action}</Button></CardContent></Card>)}</div></TabsContent>
          </Tabs>
          <footer className="mt-10 flex flex-col gap-2 border-t border-[#e8eeeb] pt-5 text-xs text-muted-foreground sm:flex-row sm:justify-between"><span>Nirvana is a reflection and peer support prototype, not a replacement for professional care.</span><span className="inline-flex items-center gap-1"><Sparkles size={12} /> Demo interactions aren’t saved</span></footer>
        </main>
      </div>
    </div>
  );
}
