import { useEffect, useRef, useState } from "react";
import {
  HeartHandshake,
  Stethoscope,
  MapPin,
  Pill,
  Users,
  HandHeart,
  Mail,
  Phone,
  Building2,
  CheckCircle2,
  Sparkles,
  Utensils,
  Ambulance,
  Syringe,
  Youtube,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

function CountUp({ to = 0, duration = 1200, suffix = "" }) {
  const [val, setVal] = useState(0);
  const startTime = useRef(null);
  useEffect(() => {
    let raf;
    const animate = (t) => {
      if (startTime.current === null) startTime.current = t;
      const p = Math.min(1, (t - startTime.current) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

const Section = ({ children, className = "" }) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function CharityLandingPage() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // Contact form refs (WhatsApp submit)
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const msgRef = useRef(null);

  const BRAND = {
    name: "Chakswari Hospital",
    phone: "+92 341 5334861",
    phonePlain: "+923415334861",
    whatsapp: "https://wa.me/923415334861",
  };

  const stats = [
    { label: "Patients treated (pilot camps)", value: 3200, suffix: "+" },
    { label: "Volunteer doctors", value: 45, suffix: "" },
    { label: "Free medicines provided", value: 18000, suffix: "+" },
    { label: "Target beds in first wing", value: 50, suffix: "" },
  ];

  const values = [
    { title: "Compassion", desc: "Treating every patient with kindness, empathy, and respect." },
    { title: "Equity", desc: "Ensuring fair access to healthcare for all, with extra support for those in need." },
    { title: "Service", desc: "Placing the health and well-being of our community above all else." },
    { title: "Integrity", desc: "Acting with honesty, transparency, and accountability in every decision." },
    { title: "Excellence", desc: "Striving for the highest standards in medical care and community service." },
  ];

  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const quickAmts = [5, 20, 50, 100];

  const openWhatsAppWithForm = () => {
    const name = nameRef.current?.value?.trim() || "";
    const em = emailRef.current?.value?.trim() || "";
    const msg = msgRef.current?.value?.trim() || "";
    const text = `New enquiry from ${name || "(no name)"}%0AEmail: ${em || "(not provided)"}%0A%0AMessage:%0A${msg || "(empty)"}`;
    const url = `${BRAND.whatsapp}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800 selection:bg-emerald-200/60">
      {/* Decorative blobs */}
      <motion.div aria-hidden style={{ y: blobY }} className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
      </motion.div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <HeartHandshake className="h-6 w-6 text-emerald-600" /> {BRAND.name}
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {["Home","About","Vision & Mission","Free Services","Hospital Project","Donate","Contact"].map((l,i)=>(
              <a key={i} href={`#${l.toLowerCase().replace(/ & /g,"-").replace(/ /g,"")}`} className="hover:text-slate-900">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={BRAND.whatsapp} target="_blank" className="hidden sm:inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm shadow hover:shadow-md">
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
            <a href="#donate" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm shadow hover:shadow-md">
              <HandHeart className="h-4 w-4" /> Donate
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">Care for all, <span className="text-emerald-600">help for those in need</span></h1>
            <p className="mt-6 text-lg">We provide free operations, medicines, meals, and ambulance service for those who cannot afford care.</p>
            <div className="mt-8 flex gap-3">
              <a href="#donate" className="rounded-xl bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-6 py-3 shadow">Donate Now</a>
              <a href={BRAND.whatsapp} target="_blank" className="rounded-xl border px-6 py-3 shadow">WhatsApp Us</a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s)=>(
                <div key={s.label} className="rounded-xl border p-4 bg-white/70">
                  <div className="text-2xl font-extrabold text-emerald-700"><CountUp to={s.value} suffix={s.suffix}/></div>
                  <div className="text-xs text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] rounded-3xl border shadow-xl flex items-center justify-center bg-gradient-to-br from-sky-50 to-emerald-100">
            <Building2 className="h-16 w-16 text-emerald-700" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="py-16 bg-gradient-to-b from-white to-sky-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold">Who we are</h2>
            <p className="mt-6">{BRAND.name} is a charity hospital offering free medical care. We believe healthcare is a right, not a privilege.</p>
            <div className="mt-6 rounded-3xl overflow-hidden border shadow-sm">
              <a href="https://youtu.be/K-1x3Hl4P9I" target="_blank" className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-red-600 to-red-400 text-white group">
                <Youtube className="h-16 w-16 group-hover:scale-110 transition-transform" />
                <span className="absolute bottom-3 right-3 text-xs bg-white text-red-600 px-2 py-1 rounded-lg shadow">Watch on YouTube</span>
              </a>
            </div>
          </div>
          <div className="rounded-3xl border p-6 bg-white/80">
            <h3 className="font-semibold">What your gift can do</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><CheckCircle2 className="inline h-4 w-4 text-emerald-600" /> Fund a life-saving operation</li>
              <li><CheckCircle2 className="inline h-4 w-4 text-emerald-600" /> Provide essential medicines</li>
              <li><CheckCircle2 className="inline h-4 w-4 text-emerald-600" /> Sponsor hot meals</li>
              <li><CheckCircle2 className="inline h-4 w-4 text-emerald-600" /> Keep ambulances running</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section id="vision" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold">Vision</h2>
            <p className="mt-4">A healthier, stronger rural community where everyone has access to medical care and support.</p>
            <h2 className="mt-10 text-3xl font-extrabold">Mission</h2>
            <p className="mt-4">To provide free access to qualified doctors and medication for those in need, with compassion and excellence.</p>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold">Values</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {values.map((v)=>(
                <div key={v.title} className="rounded-2xl border p-4 bg-white/70">
                  <div className="font-semibold text-emerald-700">{v.title}</div>
                  <div className="text-sm mt-1">{v.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 border p-4 bg-emerald-50 rounded-xl">Motto: “Care for all, help for those in need.”</div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="freeServices" className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Our Free Services</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border p-5 bg-white shadow-sm"><Syringe className="h-5 w-5" /> Free Operations</div>
            <div className="rounded-2xl border p-5 bg-white shadow-sm"><Pill className="h-5 w-5" /> Free Medicines</div>
            <div className="rounded-2xl border p-5 bg-white shadow-sm"><Utensils className="h-5 w-5" /> Free Meals</div>
            <div className="rounded-2xl border p-5 bg-white shadow-sm"><Ambulance className="h-5 w-5" /> Free Ambulance</div>
          </div>
        </div>
      </Section>

      {/* Hospital */}
      <Section id="hospitalproject" className="py-16 bg-gradient-to-b from-sky-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold">Building the Hospital</h2>
            <p className="mt-4">We are building a hospital in Chakswari to deliver free healthcare. Phase 1 includes OPD, Pharmacy, Lab, and 50-bed ward.</p>
            <ul className="mt-6 space-y-2 text-slate-700 text-sm">
              <li className="flex gap-2"><Users className="h-5 w-5" /> Daily OPD capacity: 250 patients</li>
              <li className="flex gap-2"><Stethoscope className="h-5 w-5" /> 24/7 emergency & triage</li>
              <li className="flex gap-2"><Pill className="h-5 w-5" /> In-house free pharmacy</li>
              <li className="flex gap-2"><Building2 className="h-5 w-5" /> Phase 1: OPD, Ward, Lab, Pharmacy</li>
            </ul>
          </div>
          <div className="rounded-3xl border shadow overflow-hidden">
            <div className="aspect-[4/3]">
              <iframe className="h-full w-full" src="https://www.openstreetmap.org/export/embed.html?bbox=73.68%2C33.10%2C73.81%2C33.18&layer=mapnik&marker=33.14%2C73.74"></iframe>
            </div>
            <div className="p-4 border-t flex justify-between items-center text-sm">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Chakswari, Pakistan</div>
              <a href="https://maps.google.com/?q=Chakswari,+Azad+Kashmir" target="_blank" className="text-xs border px-2 py-1 rounded">Open in Google Maps</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Donate */}
      <Section id="donate" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold">Make a Donation</h2>
            <form className="mt-6 grid gap-4 border p-6 rounded-3xl bg-white/80">
              <div className="flex gap-2 flex-wrap">
                {[5,20,50,100].map((amt)=>(
                  <button key={amt} type="button" onClick={()=>setAmount(String(amt))} className={`px-4 py-2 rounded-xl border ${amount==String(amt)?"bg-emerald-600 text-white":"bg-white"}`}>${amt}</button>
                ))}
              </div>
              <input type="number" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Custom amount" className="rounded-xl border px-3 py-2" />
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email for receipt" className="rounded-xl border px-3 py-2" />
              <button type="button" className="rounded-xl bg-emerald-600 text-white px-6 py-3">Proceed to Payment (placeholder)</button>
            </form>
          </div>
          <div className="rounded-3xl border p-6 bg-white">
            <h3 className="font-semibold">Contact for Bank Transfer</h3>
            <p className="mt-2 text-sm">Call or WhatsApp us for verified account details.</p>
            <p className="mt-2"><Phone className="h-4 w-4 inline" /> {BRAND.phone}</p>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold">Contact</h2>
            <p className="mt-4">Have questions, need help, or want to partner? Send a message and we’ll get back to you.</p>
            <form className="mt-6 rounded-3xl border p-6 bg-white/80 grid gap-4" onSubmit={(e)=>{e.preventDefault(); openWhatsAppWithForm();}}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input ref={nameRef} type="text" className="mt-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input ref={emailRef} type="email" className="mt-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-sky-300" />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea ref={msgRef} rows={4} className="mt-2 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-300" />
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={`tel:${BRAND.phonePlain}`} className="rounded-xl border px-4 py-2 text-sm hover:shadow">Call us</a>
                <a href={BRAND.whatsapp} target="_blank" className="rounded-xl border px-4 py-2 text-sm hover:shadow">WhatsApp</a>
              </div>
              <button type="submit" className="rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg">Send via WhatsApp</button>
            </form>
          </div>
          <div className="rounded-3xl border p-6 bg-gradient-to-b from-white to-slate-50">
            <h3 className="font-semibold">Reach us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-700" /> info@chakswarihospital.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-700" /> <a href={`tel:${BRAND.phonePlain}`} className="hover:underline">{BRAND.phone}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-700" /> Chakswari, Pakistan</li>
            </ul>
            <div className="mt-6 rounded-2xl border bg-white p-4 text-sm">
              <p className="font-medium">Transparency</p>
              <p className="text-slate-600 mt-1">We publish impact updates and can share usage reports with donors.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <HeartHandshake className="h-4 w-4 text-emerald-700" />
            <span>{BRAND.name} — Pakistan</span>
          </div>
          <div className="text-xs text-slate-500">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
