import React, { useState } from 'react';
import { 
  User, 
  BookOpen, 
  Zap, 
  Wrench, 
  Mail, 
  Sparkles, 
  Github, 
  Twitter, 
  Youtube, 
  Award, 
  ChevronRight, 
  Cpu, 
  FolderGit2, 
  CheckCircle,
  Clock,
  Flame,
  GraduationCap,
  Compass
} from 'lucide-react';

interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface InquiryFormState {
  company: string;
  email: string;
  projectDescription: string;
  budget: string;
}

export default function AboutCreator() {
  // Contact Form State
  const [contactForm, setContactForm] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Business Inquiry Form State
  const [inquiryForm, setInquiryForm] = useState<InquiryFormState>({
    company: '',
    email: '',
    projectDescription: '',
    budget: '$500 - $1,000',
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Honeypots
  const [contactHoneypot, setContactHoneypot] = useState('');
  const [inquiryHoneypot, setInquiryHoneypot] = useState('');

  // Loading States
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingInquiry, setIsSubmittingInquiry] = useState(false);

  // Submission Errors
  const [contactError, setContactError] = useState<string | null>(null);
  const [inquiryError, setInquiryError] = useState<string | null>(null);

  // Inline Validation States
  const [contactValidationErrors, setContactValidationErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  const [inquiryValidationErrors, setInquiryValidationErrors] = useState<{
    company?: string;
    email?: string;
    projectDescription?: string;
  }>({});

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactError(null);
    setContactValidationErrors({});

    // Client-side validations
    const errors: typeof contactValidationErrors = {};
    if (!contactForm.name.trim()) {
      errors.name = 'Your name is required.';
    }
    if (!contactForm.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
      errors.email = 'Please enter a valid email format.';
    }
    if (!contactForm.subject.trim()) {
      errors.subject = 'Subject is required.';
    }
    if (!contactForm.message.trim()) {
      errors.message = 'Message text is required.';
    }

    if (Object.keys(errors).length > 0) {
      setContactValidationErrors(errors);
      return;
    }

    setIsSubmittingContact(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
          website_url: contactHoneypot, // Hidden anti-spam honeypot
        }),
      });

      const text = await response.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Invalid API response:", text);
      }

      if (!response.ok) {
        const errorMsg = data && data.message ? data.message : (data && data.error ? data.error : 'Something went wrong. Please try again later.');
        throw new Error(errorMsg);
      }

      if (data && data.success === false) {
        throw new Error(data.message || 'Something went wrong. Please try again later.');
      }

      setContactSubmitted(true);
    } catch (err: any) {
      setContactError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquiryError(null);
    setInquiryValidationErrors({});

    // Client-side validations
    const errors: typeof inquiryValidationErrors = {};
    if (!inquiryForm.company.trim()) {
      errors.company = 'Company/Network name is required.';
    }
    if (!inquiryForm.email.trim()) {
      errors.email = 'Contact email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryForm.email)) {
      errors.email = 'Please enter a valid email format.';
    }
    if (!inquiryForm.projectDescription.trim()) {
      errors.projectDescription = 'Project description is required.';
    }

    if (Object.keys(errors).length > 0) {
      setInquiryValidationErrors(errors);
      return;
    }

    setIsSubmittingInquiry(true);

    try {
      const response = await fetch('/api/partnership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: inquiryForm.company,
          email: inquiryForm.email,
          projectDescription: inquiryForm.projectDescription,
          budget: inquiryForm.budget,
          fax_number: inquiryHoneypot, // Hidden anti-spam honeypot
        }),
      });

      const text = await response.text();
      let data: any = null;
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Invalid API response:", text);
      }

      if (!response.ok) {
        const errorMsg = data && data.message ? data.message : (data && data.error ? data.error : 'Something went wrong. Please try again later.');
        throw new Error(errorMsg);
      }

      if (data && data.success === false) {
        throw new Error(data.message || 'Something went wrong. Please try again later.');
      }

      setInquirySubmitted(true);
    } catch (err: any) {
      setInquiryError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmittingInquiry(false);
    }
  };

  const resetContactForm = () => {
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setContactHoneypot('');
    setContactSubmitted(false);
    setContactError(null);
    setContactValidationErrors({});
  };

  const resetInquiryForm = () => {
    setInquiryForm({ company: '', email: '', projectDescription: '', budget: '$500 - $1,000' });
    setInquiryHoneypot('');
    setInquirySubmitted(false);
    setInquiryError(null);
    setInquiryValidationErrors({});
  };

  // Content configuration lists
  const favoriteTopics = [
    {
      title: 'Automatic Farms',
      description: 'Designing vertical iron farms, sugarcane growers, and mob setups to harvest infinite resources automatically.',
      icon: Cpu,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Survival Quests',
      description: 'Creating step-by-step survival milestones to guide players from punching their first wood to getting full diamond gear.',
      icon: ChevronRight,
      color: 'text-orange-400 bg-orange-500/10 border-orange-500/20'
    },
    {
      title: 'Trading Halls',
      description: 'Building easy villager hubs to trade simple resources like paper or sticks for diamond gear and enchantments.',
      icon: User,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Redstone Devices',
      description: 'Connecting simple redstone clocks, pulse extenders, and automatic multi-chest item sorting systems.',
      icon: Zap,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20'
    },
    {
      title: 'Game Mechanics',
      description: 'Understanding new patch updates, mob spawning rules, and nether-coordinate portal grids simply.',
      icon: Wrench,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Dungeon Raids',
      description: 'Locating and exploring bastions, ancient cities, ocean monuments, and strongholds safely.',
      icon: Compass,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20'
    },
  ];

  const futureRoadmap = [
    {
      title: 'Minecraft Seed Database',
      phase: 'Phase 1 • Q3 2026',
      description: 'A curated list of incredible seeds with coordinates for spawners, witch huts, and epic base locations.',
      status: 'In Planning'
    },
    {
      title: 'Interactive Tools & Calculators',
      phase: 'Phase 2 • Q4 2026',
      description: 'Simple web calculators for coordinate conversions, spawner bounds, and furnace fuel times.',
      status: 'Coming Soon'
    },
    {
      title: 'Advanced Farm Tutorials',
      phase: 'Phase 3 • Q4 2026',
      description: 'Step-by-step block layouts and blueprints for building high-yield farms.',
      status: 'In Progress'
    },
    {
      title: 'Redstone Academy',
      phase: 'Phase 4 • Q1 2027',
      description: 'Simple Redstone guides covering basic components up to hopper clocks and sorting systems.',
      status: 'Planned'
    },
  ];

  const funFacts = [
    {
      title: 'Favorite Dimension',
      value: 'The Nether',
      detail: 'Soul Sand Valleys. There is nothing like flying through magma chasms or building high-speed safe ice highways.',
      icon: Flame,
    },
    {
      title: 'Favorite Farm Type',
      value: 'Wither Skeleton',
      detail: 'Clearing nether fortress pathways to easily farm wither skeleton skulls and fuel coal.',
      icon: Award,
    },
    {
      title: 'Favorite Mob',
      value: 'Wolf (Tamed & Armored)',
      detail: 'An indispensable survival companion. Armed in custom armadillo shields (v1.21 update).',
      icon: User,
    },
    {
      title: 'Years Playing',
      value: '8+ Years',
      detail: 'Began exploring custom survival worlds back in 2018 during the Update Aquatic.',
      icon: Clock,
    },
    {
      title: 'Favorite Update',
      value: '1.16 & 1.21',
      detail: 'The Nether Update and the Tricky Trials expansion with trial chambers.',
      icon: Sparkles,
    }
  ];

  return (
    <div className="space-y-16 py-4 transition-colors">
      
      {/* 1. HERO SECTION */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/60 py-16 sm:py-20 px-6 sm:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-md dark:shadow-2xl backdrop-blur-md">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.06),transparent_50%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/40 border border-emerald-555/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>SAHIL • SURVIVAL GUIDE</span>
          </div>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            About the <span className="text-emerald-405">Creator</span>
          </h1>
          <p className="font-sans text-gray-300 text-sm sm:text-base leading-relaxed font-medium">
            The story, future plans, and simple goals behind Minecraft Mastery. Written by a player who loves making simple guides for everyone.
          </p>
        </div>

        {/* Personalized Branding Avatar block */}
        <div className="relative flex-shrink-0 group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-20 group-hover:opacity-40 blur-md transition duration-500" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-neutral-950 border-2 border-emerald-500 p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="w-12 h-12 rounded-lg bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 font-mono text-2xl font-bold mb-2">
              S
            </div>
            <span className="font-sans font-bold text-xs text-white">Sahil</span>
            <span className="font-mono text-[9px] text-emerald-400 font-medium">Enthusiast & Dev</span>
          </div>
        </div>
      </div>

      {/* 2. MY STORY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-emerald-400" /> My Story
          </h2>
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 p-6 sm:p-8 rounded-2xl space-y-5 shadow-md backdrop-blur-xs">
            <p className="font-sans text-sm text-gray-205 leading-relaxed">
              Hi, I'm <strong className="text-emerald-300 font-semibold text-base">Sahil</strong>.
            </p>
            <p className="font-sans text-sm text-gray-300 leading-relaxed font-medium">
              I've spent hundreds of hours playing Minecraft, building farms, experimenting with villagers, exploring structures, and learning game mechanics.
            </p>
            <p className="font-sans text-sm text-gray-300 leading-relaxed font-medium">
              I created <strong className="text-white font-medium">Minecraft Mastery</strong> because I wanted one place where players could find useful Minecraft information without searching through dozens of websites and videos.
            </p>
            <p className="font-sans text-sm text-gray-350 leading-relaxed font-light font-medium">
              Whether you're a beginner building your first house or an advanced player creating mega farms, my goal is to help you learn faster and enjoy the game more.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-3 bg-neutral-950 rounded-lg border border-emerald-950/40">
                <span className="font-mono text-[10px] text-gray-500 block">STUDENT WORKSHOP</span>
                <span className="font-sans font-medium text-xs text-white mt-1 block flex items-center gap-1.5 font-bold">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" /> Survival Builder
                </span>
              </div>
              <div className="p-3 bg-neutral-950 rounded-lg border border-emerald-950/40">
                <span className="font-mono text-[10px] text-gray-500 block">SURVIVAL PREFERENCE</span>
                <span className="font-sans font-medium text-xs text-white mt-1 block flex items-center gap-1.5 font-bold">
                  <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" /> 100% Legit Vanilla
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* WEBSITE MISSION CARD & SOCIAL LINKS */}
        <div className="space-y-6">
          <h2 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-450" /> Website Mission
          </h2>
          
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border-2 border-emerald-500/20 relative overflow-hidden flex flex-col justify-between h-72 shadow-md">
            <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/35 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-display font-semibold text-white group-hover:text-amber-500 transition text-lg">
                My Simple Goal
              </h4>
              <p className="font-sans text-xs text-gray-200 leading-relaxed italic font-medium">
                "To build a friendly, simple, and easy-to-use guide wiki that helps players of all skill levels learn how to play and automate their worlds."
              </p>
            </div>

            {/* Social media connections */}
            <div className="border-t border-emerald-950/50 pt-4 flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500">CONNECT WITH ME</span>
              <div className="flex gap-2">
                <a 
                  href="https://github.com/sahilkoslia" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-md bg-neutral-950 hover:bg-neutral-900 border border-emerald-950/45 text-gray-300 hover:text-emerald-400 transition shadow-sm"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/sahil_mastery" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-md bg-neutral-950 hover:bg-neutral-900 border border-emerald-950/45 text-gray-300 hover:text-emerald-400 transition shadow-sm"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com/sahil_minecraft_mastery" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-md bg-neutral-950 hover:bg-neutral-900 border border-emerald-950/45 text-gray-300 hover:text-emerald-400 transition shadow-sm"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. FAVORITE TOPICS CARDS */}
      <div className="space-y-6">
        <h2 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-400" /> Favorite Minecraft Topics
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 p-5 rounded-2xl flex flex-col justify-between h-44 group minecraft-card backdrop-blur-xs"
              >
                <div className="space-y-2">
                  <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${topic.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-semibold text-sm text-white group-hover:text-emerald-400 transition">{topic.title}</h4>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed line-clamp-3 font-medium">
                    {topic.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. FUN FACTS SECTION */}
      <div className="space-y-6">
        <h2 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-neutral-800 pb-2 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-450" /> Sahil's Fun Facts
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {funFacts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 rounded-2xl p-4 space-y-3 flex flex-col justify-between minecraft-card backdrop-blur-xs"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block">{fact.title}</span>
                  <span className="font-sans font-extrabold text-white text-sm tracking-tight flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-emerald-450 animate-pulse" />
                    {fact.value}
                  </span>
                </div>
                <p className="font-sans text-[11px] text-gray-400 leading-normal font-medium">
                  {fact.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. FUTURE VISION ROADMAP */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-neutral-800 pb-2">
          <h2 className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" /> Future Vision & Roadmap
          </h2>
          <span className="font-mono text-[9px] text-emerald-300 mt-1 sm:mt-0 font-bold uppercase tracking-wider">DEVELOPMENT LOG 2026-2027</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {futureRoadmap.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/55 p-5 rounded-2xl space-y-3 relative group minecraft-card backdrop-blur-xs"
            >
              <div className="absolute top-4 right-4 text-[9px] font-mono px-2 py-0.5 bg-neutral-950 text-gray-400 border border-emerald-950/40 rounded font-bold shadow-inner">
                {item.status}
              </div>
              
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-emerald-300 font-bold block">{item.phase}</span>
                <h4 className="font-sans font-bold text-white text-sm tracking-tight">{item.title}</h4>
              </div>

              <p className="font-sans text-xs text-gray-300 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. CONTACT & BUSINESS INQUIRY */}
      <div id="creator-forms" className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        
        {/* CONTACT FORM */}
        <div className="space-y-4">
          <div className="border-b border-neutral-800 pb-2">
            <h3 className="font-mono text-xs font-bold text-gray-305 uppercase tracking-widest flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-400 animate-pulse" /> Standard Contact Form
            </h3>
            <p className="text-[10px] text-gray-500 font-sans mt-1">Found a bug or have a suggestion? Leave a feedback wire.</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 p-6 rounded-2xl shadow-md backdrop-blur-xs">
            {contactSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-emerald-500/35 text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="font-display font-semibold text-white">Message Transmitted!</h4>
                <p className="font-sans text-xs text-gray-300 max-w-sm mx-auto font-medium">
                  Message sent successfully. We will review your submission shortly.
                </p>
                <button
                  type="button"
                  onClick={resetContactForm}
                  className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-900 border border-emerald-950/50 rounded-md text-xs font-mono text-emerald-300 transition cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                {contactError && (
                  <div className="p-3.5 bg-red-950/20 border border-red-900/30 rounded-lg text-xs text-red-400 font-sans">
                    {contactError}
                  </div>
                )}

                {/* Honeypot field (hidden from modern screen readers & tab indexes for anti-bot protection) */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={contactHoneypot}
                    onChange={(e) => setContactHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Your Name</label>
                    <input
                      type="text"
                      disabled={isSubmittingContact}
                      className={`w-full bg-neutral-950 border rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans transition-all ${
                        contactValidationErrors.name 
                          ? 'border-red-500/50' 
                          : 'border-emerald-950/80 focus:border-emerald-500'
                      }`}
                      placeholder="Sahil"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    />
                    {contactValidationErrors.name && (
                      <p className="text-[10px] text-red-400 font-mono mt-0.5">{contactValidationErrors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Email Address</label>
                    <input
                      type="text"
                      disabled={isSubmittingContact}
                      className={`w-full bg-neutral-950 border rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans transition-all ${
                        contactValidationErrors.email 
                          ? 'border-red-500/50' 
                          : 'border-emerald-950/80 focus:border-emerald-500'
                      }`}
                      placeholder="steve@overworld.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    />
                    {contactValidationErrors.email && (
                      <p className="text-[10px] text-red-400 font-mono mt-0.5">{contactValidationErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-400 uppercase">Subject</label>
                  <input
                    type="text"
                    disabled={isSubmittingContact}
                    className={`w-full bg-neutral-950 border rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans transition-all ${
                      contactValidationErrors.subject 
                        ? 'border-red-500/50' 
                        : 'border-emerald-950/80 focus:border-emerald-500'
                    }`}
                    placeholder="General Suggestion / Bug report"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                  {contactValidationErrors.subject && (
                    <p className="text-[10px] text-red-400 font-mono mt-0.5">{contactValidationErrors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-400 uppercase">Message</label>
                  <textarea
                    rows={4}
                    disabled={isSubmittingContact}
                    className={`w-full bg-neutral-955 border rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans resize-none transition-all ${
                      contactValidationErrors.message 
                        ? 'border-red-500/50' 
                        : 'border-emerald-950/80 focus:border-emerald-500'
                    }`}
                    placeholder="Provide coordinate specifics, mob configurations or farm output feedback..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                  {contactValidationErrors.message && (
                    <p className="text-[10px] text-red-400 font-mono mt-0.5">{contactValidationErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingContact}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-950 font-mono text-xs font-bold rounded-lg transition active:translate-y-0.5 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border border-emerald-400"
                >
                  {isSubmittingContact ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* BUSINESS INQUIRY FORM */}
        <div className="space-y-4 font-sans">
          <div className="border-b border-neutral-800 pb-2">
            <h3 className="font-mono text-xs font-bold text-gray-305 uppercase tracking-widest flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-emerald-400" /> Business Inquiry Form
            </h3>
            <p className="text-[10px] text-gray-500 font-sans mt-1">Want to collaborate on a sponsored Minecraft project or custom tool?</p>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-950/50 p-6 rounded-2xl shadow-md backdrop-blur-xs">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-emerald-500/35 text-emerald-305 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 animate-pulse" />
                </div>
                <h4 className="font-display font-semibold text-white">Inquiry Received!</h4>
                <p className="font-sans text-xs text-gray-300 max-w-sm mx-auto font-medium">
                  Business inquiry submitted successfully. We will respond as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={resetInquiryForm}
                  className="px-4 py-1.5 bg-neutral-950 hover:bg-neutral-900 border border-emerald-950/50 rounded-md text-xs font-mono text-emerald-300 transition cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                {inquiryError && (
                  <div className="p-3.5 bg-red-950/20 border border-red-900/30 rounded-lg text-xs text-red-400 font-sans">
                    {inquiryError}
                  </div>
                )}

                {/* Honeypot field */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <input
                     type="text"
                     name="fax_number"
                     tabIndex={-1}
                     autoComplete="off"
                     value={inquiryHoneypot}
                     onChange={(e) => setInquiryHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Company/Network Name</label>
                    <input
                      type="text"
                      disabled={isSubmittingInquiry}
                      className={`w-full bg-neutral-955 border rounded-lg p-2.5 text-xs text-gray-205 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans transition-all ${
                        inquiryValidationErrors.company 
                          ? 'border-red-500/50' 
                          : 'border-emerald-950/80 focus:border-emerald-500'
                      }`}
                      placeholder="Apex Hosting Ltd"
                      value={inquiryForm.company}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                    />
                    {inquiryValidationErrors.company && (
                      <p className="text-[10px] text-red-400 font-mono mt-0.5">{inquiryValidationErrors.company}</p>
                    )}
                  </div>

                  {/* Contact Email */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Contact Email</label>
                    <input
                      type="text"
                      disabled={isSubmittingInquiry}
                      className={`w-full bg-neutral-955 border rounded-lg p-2.5 text-xs text-gray-205 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans transition-all ${
                        inquiryValidationErrors.email 
                          ? 'border-red-500/50' 
                          : 'border-emerald-950/80 focus:border-emerald-500'
                      }`}
                      placeholder="partners@network.com"
                      value={inquiryForm.email}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    />
                    {inquiryValidationErrors.email && (
                      <p className="text-[10px] text-red-400 font-mono mt-0.5">{inquiryValidationErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget Dropdown */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Estimated Budget</label>
                    <select
                      disabled={isSubmittingInquiry}
                      className="w-full bg-neutral-955 border border-emerald-950/80 rounded-lg p-2.5 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans outline-none"
                      value={inquiryForm.budget}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, budget: e.target.value })}
                    >
                      <option value="$100 - $500">$100 - $500</option>
                      <option value="$500 - $1,000">$500 - $1,000</option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] text-gray-400 uppercase">Response SLA</label>
                    <div className="w-full bg-neutral-950 border border-dashed border-emerald-950/60 rounded-lg p-2 flex items-center justify-center text-[10.5px] text-gray-400 uppercase font-mono shadow-inner">
                      ✉ SLA Response under 48h
                    </div>
                  </div>
                </div>

                {/* Project Description Term */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-400 uppercase">Project Goal or Description</label>
                  <textarea
                    rows={4}
                    disabled={isSubmittingInquiry}
                    className={`w-full bg-neutral-955 border rounded-lg p-2.5 text-xs text-gray-202 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 font-sans resize-none transition-all ${
                      inquiryValidationErrors.projectDescription 
                        ? 'border-red-500/50' 
                        : 'border-emerald-950/80 focus:border-emerald-500'
                    }`}
                    placeholder="Describe your server promotion, video content partnership, or sponsorship proposal..."
                    value={inquiryForm.projectDescription}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, projectDescription: e.target.value })}
                  />
                  {inquiryValidationErrors.projectDescription && (
                    <p className="text-[10px] text-red-400 font-mono mt-0.5">{inquiryValidationErrors.projectDescription}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmittingInquiry}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 hover:text-neutral-955 text-neutral-950 font-mono text-xs font-bold rounded-lg border border-emerald-400 transition active:translate-y-0.5 shadow-sm cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmittingInquiry ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Request Partnership</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
