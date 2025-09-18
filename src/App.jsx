import { useEffect, useRef, useState } from "react";
import {
  HeartHandshake,
  HandHeart,
  Phone,
  Mail,
  MapPin,
  Building2,
  Syringe,
  Pill,
  Utensils,
  Stethoscope,
  Users,
  ExternalLink,
  Newspaper,
  CalendarDays,
  Camera,
  CreditCard,
  PiggyBank,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

/* ---------- Org + Links (EDIT THESE) ---------- */
const ORG = {
  name: "Barakah In Kindness",                 // <- your charity name
  tagline: "Providing support and relief to those in need.",
  email: "hello@barakah.org",                  // <- your UK charity email
  phone: "+44 20 1234 5678",                   // <- your UK contact number
  charityNo: "Charity No. 1234567",            // <- your UK charity number
  address: "London, United Kingdom",
};
const DONATE = {
  paypal: "https://www.paypal.com/donate?hosted_button_id=YOUR_ID", // <- paste real link
  stripe: "https://buy.stripe.com/test_abc123",                      // <- paste real link
};
const BANK = {
  bankName: "Your Bank plc",
  accountName: "Barakah In Kindness",
  sortCode: "08-71-99",
  accountNo: "12414064",
  referenceNote: "Use your email as reference",
};

/* ---------- Helpers ---------- */
const Section = ({ id, children, className = "" }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`scroll-mt-24 ${className}`}
  >
    {children}
  </motion.section>
);

const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -3 }}
    className={`rounded-2xl border bg-white/90 backdrop-blur p-5 shadow-sm hover:shadow-md transition ${className}`}
  >
    {children}
  </motion.div>
);

/* ---------- App ---------- */
export default function App() {
  const actions = [
    {
      icon: <Building2 className="h-6 w-6 text-stone-700" />,
      title: "Donate to Hospital",
      desc: "Support construction and equipment for the Chakswari Hospital project.",
      href: "#donate",
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-stone-700" />,
      title: "Sponsor a Patient",
      desc: "Cover surgery, diagnostics and recovery for someone in need.",
      href: "#sponsorship",
    },
    {
      icon: <Utensils className="h-6 w-6 text-stone-700" />,
      title: "Feed Families",
      desc: "Help provide monthly essentials to vulnerable families.",
      href: "#projects",
    },
    {
      icon: <Pill className="h-6 w-6 text-stone-700" />,
      title: "Donate Medication",
      desc: "Fund essential medicines for chronic and emergency patients.",
      href: "#projects",
    },
  ];

  const blog = [
    {
      title: "Free Medical Camp – Mirpur",
      date: "24 Aug 2025",
      excerpt: "Over 300 patients received checkups, medicines and referrals.",
      image: "/media/camp-1.jpg", // replace with Sufyaan’s photo
    },
    {
      title: "Ambulance Fund Reaches 60%",
      date: "10 Aug 2025",
      excerpt: "Thanks to our supporters, we’re close to funding a new ambulance.",
      image: "/media/ambulance.jpg",
    },
  ];

  const gallery = [
    { src: "/media/hospital-1.jpg", alt: "Hospital site" },
    { src: "/media/clinic-1.jpg", alt: "Clinic day" },
    { src: "/media/meds-1.jpg", alt: "Medicine packs" },
    { src: "/media/food-1.jpg", alt: "Food distribution" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-stone-50 via-white to-amber-50 text-stone-800">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <HeartHandshake className="h-6 w-6 text-amber-700" />
            <span className="tracking-tight">{ORG.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Our Projects</a>
            <a href="#getinvolved">Get Involved</a>
            <a href="#organise">Organise Event</a>
            <a href="#blog">Blog</a>
            <a href="#donate">Donate</a>
            <a href="#sponsorship">Sponsorship</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-amber-700 text-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md active:scale-[0.98]"
            >
              <HandHeart className="h-4 w-4" /> Donate
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <Section id="home" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-800 text-xs font-medium">
              Compassion in action
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              {ORG.name}
            </h1>
            <p className="mt-4 text-lg text-stone-700">{ORG.tagline}</p>
            <div className="mt-8 flex gap-3">
              <a
                href="#projects"
                className="rounded-full bg-stone-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg active:scale-[0.98]"
              >
                Learn More
              </a>
              <a
                href="#donate"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold hover:shadow active:scale-[0.99]"
              >
                Donate
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border shadow bg-stone-100 aspect-[5/3] flex items-center justify-center">
            {/* Replace with hero image/video from Sufyaan */}
            <Camera className="h-12 w-12 text-stone-500" />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((a) => (
            <Card key={a.title}>
              <div className="flex items-start gap-3">
                {a.icon}
                <div>
                  <div className="font-semibold">{a.title}</div>
                  <p className="text-sm text-stone-600 mt-1">{a.desc}</p>
                  <a href={a.href} className="mt-2 inline-flex items-center gap-1 text-amber-800 text-sm font-medium">
                    Go <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-16 lg:py-24 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-900">About</h2>
            <p className="mt-4 text-stone-700">
              We’re a UK-registered charity ({ORG.charityNo}) focused on healthcare relief and poverty
              alleviation. Our current flagship project is the **Chakswari Hospital**—a community-driven
              facility offering free surgeries, medicines, and emergency support to the poor and vulnerable.
            </p>
            <ul className="mt-6 space-y-3 text-stone-700">
              <li className="flex gap-2"><Stethoscope className="h-5 w-5 text-amber-700" /> Free operations & triage</li>
              <li className="flex gap-2"><Pill className="h-5 w-5 text-amber-700" /> In-house essential medicines</li>
              <li className="flex gap-2"><Users className="h-5 w-5 text-amber-700" /> Volunteer doctors & nurses</li>
            </ul>
          </div>
          <Card>
            <div className="font-semibold">Contact (UK)</div>
            <ul className="mt-3 text-sm space-y-2">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {ORG.email}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {ORG.phone}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {ORG.address}</li>
              <li className="flex items-center gap-2"><Newspaper className="h-4 w-4" /> {ORG.charityNo}</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-stone-900">Our Projects</h2>
          <p className="mt-3 text-stone-700 max-w-3xl">
            We run ongoing and future initiatives across healthcare and family support.
          </p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Card>
              <div className="font-semibold">Chakswari Hospital (Current)</div>
              <p className="text-sm text-stone-600 mt-1">Building a free community hospital in Pakistan.</p>
              <a href="#donate" className="mt-3 inline-flex items-center gap-1 text-amber-800 text-sm font-medium">
                Support this project <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </Card>
            <Card>
              <div className="font-semibold">Ambulance & Medicines (Current)</div>
              <p className="text-sm text-stone-600 mt-1">Funding emergency transport and essential drugs.</p>
            </Card>
            <Card>
              <div className="font-semibold">Rural Clinics (Future)</div>
              <p className="text-sm text-stone-600 mt-1">Weekly outreach clinics for remote villages.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* GET INVOLVED */}
      <Section id="getinvolved" className="py-16 lg:py-24 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Card>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-amber-700" />
              <div className="font-semibold">Volunteer with us</div>
            </div>
            <p className="mt-2 text-sm text-stone-600">
              Doctors, nurses, coordinators—apply to join our programmes.
            </p>
            <a
              href="https://forms.gle/your-volunteer-form"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm hover:shadow"
            >
              Apply now <ExternalLink className="h-4 w-4" />
            </a>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-amber-700" />
              <div className="font-semibold">Organise an Event</div>
            </div>
            <p className="mt-2 text-sm text-stone-600">
              Host a fundraiser at your school, workplace, or community centre.
              Email <b>{ORG.email}</b> for a starter pack and support.
            </p>
          </Card>
        </div>
      </Section>

      {/* BLOG */}
      <Section id="blog" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-stone-900">Blog & Updates</h2>
          <p className="mt-3 text-stone-700">Stories from the field and upcoming events.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blog.map((p) => (
              <Card key={p.title} className="p-0 overflow-hidden">
                <div className="aspect-[4/3] bg-stone-100">
                  {/* Put Sufyaan’s image in /public/media and update p.image path */}
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-stone-500">{p.date}</div>
                  <div className="font-semibold mt-1">{p.title}</div>
                  <p className="text-sm text-stone-600 mt-1">{p.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* DONATE (with working links) */}
      <Section id="donate" className="py-16 lg:py-24 bg-amber-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-stone-900">Donate</h2>
            <p className="mt-3 text-stone-700">
              Your generosity funds our hospital build, medicines, ambulance and family support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={DONATE.stripe}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg"
              >
                <CreditCard className="h-4 w-4" /> Donate with Card (Stripe)
              </a>
              <a
                href={DONATE.paypal}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:shadow"
              >
                <PiggyBank className="h-4 w-4" /> Donate with PayPal
              </a>
              <a
                href="#bank"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold hover:shadow"
              >
                Bank Transfer Details
              </a>
            </div>
          </div>

          {/* Quick media/Gallery */}
          <Card>
            <div className="font-semibold flex items-center gap-2">
              <Camera className="h-4 w-4" /> Photos & Videos
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {gallery.slice(0, 4).map((g) => (
                <div key={g.src} className="aspect-square overflow-hidden rounded-lg bg-stone-100">
                  <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <a href="#blog" className="mt-4 inline-flex items-center gap-1 text-amber-800 text-sm font-medium">
              See more updates <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Card>
        </div>
      </Section>

      {/* SPONSORSHIP */}
      <Section id="sponsorship" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <Card>
            <div className="font-semibold">Sponsor a Patient</div>
            <p className="text-sm text-stone-600 mt-1">
              Fund surgery, diagnostics and recovery for a specific individual.
              Email <b>{ORG.email}</b> to be matched and receive updates.
            </p>
          </Card>
          <Card>
            <div className="font-semibold">Sponsor Hospital Equipment</div>
            <p className="text-sm text-stone-600 mt-1">
              From beds to monitors—choose an item to sponsor and we’ll recognise your gift.
            </p>
          </Card>
        </div>
      </Section>

      {/* BANK DETAILS PAGELET */}
      <Section id="bank" className="py-16 lg:py-24 bg-amber-50/50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-stone-900">Bank Transfer</h2>
          <p className="mt-3 text-stone-700">Please use the details below to donate by bank transfer:</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Card><div className="text-xs text-stone-500">Account Name</div><div className="font-semibold">{BANK.accountName}</div></Card>
            <Card><div className="text-xs text-stone-500">Bank</div><div className="font-semibold">{BANK.bankName}</div></Card>
            <Card><div className="text-xs text-stone-500">Sort Code</div><div className="font-semibold">{BANK.sortCode}</div></Card>
            <Card><div className="text-xs text-stone-500">Account Number</div><div className="font-semibold">{BANK.accountNo}</div></Card>
          </div>
          <div className="mt-4 text-sm text-stone-600">
            Reference: <b>{BANK.referenceNote}</b>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-900">Contact</h2>
            <p className="mt-4 text-stone-700">
              We’d love to hear from you. For partnerships, media or general enquiries, reach out below.
            </p>
            <div className="mt-6 grid gap-3">
              <a href={`mailto:${ORG.email}`} className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:shadow">
                <Mail className="h-4 w-4" /> {ORG.email}
              </a>
              <a href={`tel:${ORG.phone.replace(/\s+/g, "")}`} className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm hover:shadow">
                <Phone className="h-4 w-4" /> {ORG.phone}
              </a>
            </div>
          </div>
          <Card>
            <div className="font-semibold">Newsletter</div>
            <p className="text-sm text-stone-600 mt-1">Subscribe for updates and impact stories.</p>
            {/* Wire this to your provider (Mailchimp/ConvertKit/etc.) */}
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Email address" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-amber-300" />
              <button type="button" className="rounded-xl bg-stone-900 text-white px-4 py-2 text-sm">Subscribe</button>
            </form>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <HeartHandshake className="h-4 w-4 text-amber-700" />
            <span>{ORG.name}</span>
          </div>
          <div className="text-xs text-stone-500">
            © {new Date().getFullYear()} {ORG.name}. {ORG.charityNo}
          </div>
        </div>
      </footer>
    </div>
  );
}
