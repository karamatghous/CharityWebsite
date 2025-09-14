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

const Section = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.section>
);

export default function App() {
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

  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 via-white to-emerald-50 text-slate-800">
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
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#vision">Vision & Mission</a>
            <a href="#services">Free Services</a>
            <a href="#hospital">Hospital Project</a>
            <a href="#donate">Donate</a>
            <a href="#contact">Contact</a>
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

      {/* Sections with matching IDs */}
      <Section id="home" className="py-24 text-center">
        <h1 className="text-4xl font-bold">Welcome to {BRAND.name}</h1>
        <p className="mt-4">Free operations, medicines, meals, and ambulance service for those in need.</p>
      </Section>

      <Section id="about" className="py-24 text-center bg-slate-50">
        <h2 className="text-3xl font-bold">About Us</h2>
        <p className="mt-4">We believe healthcare is a right, not a privilege.</p>
      </Section>

      <Section id="vision" className="py-24 text-center">
        <h2 className="text-3xl font-bold">Vision & Mission</h2>
        <p className="mt-4">Vision: A healthier, stronger rural community with equal access to care.<br />
        Mission: Provide free doctors, medicines, meals, and ambulance services.</p>
      </Section>

      <Section id="services" className="py-24 text-center bg-slate-50">
        <h2 className="text-3xl font-bold">Our Free Services</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex justify-center items-center gap-2"><Syringe className="h-5 w-5" /> Free Operations</li>
          <li className="flex justify-center items-center gap-2"><Pill className="h-5 w-5" /> Free Medicines</li>
          <li className="flex justify-center items-center gap-2"><Utensils className="h-5 w-5" /> Free Meals</li>
          <li className="flex justify-center items-center gap-2"><Ambulance className="h-5 w-5" /> Free Ambulance</li>
        </ul>
      </Section>

      <Section id="hospital" className="py-24 text-center">
        <h2 className="text-3xl font-bold">Hospital Project</h2>
        <p className="mt-4">We are building a hospital in Chakswari to deliver free healthcare. Phase 1 includes OPD, Pharmacy, Lab, and 50-bed ward.</p>
      </Section>

      <Section id="donate" className="py-24 text-center bg-slate-50">
        <h2 className="text-3xl font-bold">Donate</h2>
        <p className="mt-4">Your support keeps our services free for the needy.</p>
      </Section>

      <Section id="contact" className="py-24 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4"><Phone className="inline h-5 w-5" /> {BRAND.phone}</p>
        <p className="mt-2"><Mail className="inline h-5 w-5" /> info@chakswarihospital.org</p>
        <p className="mt-2"><MapPin className="inline h-5 w-5" /> Chakswari, Pakistan</p>
      </Section>
    </div>
  );
}