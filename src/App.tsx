import { useState } from "react";

const assetPathPrefix = "/assets";

// Brand logos
const imgViirl = `${assetPathPrefix}/fc8bc.png`;
const imgLeadCloud = `${assetPathPrefix}/d6e47.svg`;
const imgGoogle = `${assetPathPrefix}/622c7.svg`;
const imgYelp = `${assetPathPrefix}/3ce1e.svg`;
const imgAngi = `${assetPathPrefix}/6e94e.svg`;
const imgNetworx = `${assetPathPrefix}/30d21.svg`;
const imgMeta = `${assetPathPrefix}/294a5.svg`;
const imgThumbtack = `${assetPathPrefix}/0235f.svg`;
const imgLgGrn = `${assetPathPrefix}/08876.svg`;
const imgViLogo = `${assetPathPrefix}/f4313.svg`;
const imgStar1 = `${assetPathPrefix}/c0746.svg`;
const imgStar2 = `${assetPathPrefix}/9962b.svg`;

// Icons
const imgIconMsg = `${assetPathPrefix}/f8e3e.svg`;
const imgIconPhone = `${assetPathPrefix}/423d1.svg`;
const imgIconMail = `${assetPathPrefix}/3bb50.svg`;
const imgIconDB = `${assetPathPrefix}/f2f05.svg`;
const imgIconPlug = `${assetPathPrefix}/a7405.svg`;
const imgIconPlay = `${assetPathPrefix}/50a55.svg`;
const imgArrowRight = `${assetPathPrefix}/ab358.svg`;

// Glows
const imgGlowCyan = `${assetPathPrefix}/e96c7.svg`;
const imgGlowIndigo = `${assetPathPrefix}/34e14.svg`;
const imgGlowViolet = `${assetPathPrefix}/41fb9.svg`;

// Photos
const imgHandy = `${assetPathPrefix}/92234.png`;
const imgScreenA = `${assetPathPrefix}/184c7.png`;
const imgScreenB = `${assetPathPrefix}/0ad69.png`;

// ──────────────────────────────────────────────
// Design tokens extracted from the Figma source
// ──────────────────────────────────────────────

const colors = {
  "Dark / Ink": [
    { name: "Dark", hex: "#060612", css: "--color-dark" },
    { name: "Dark Secondary", hex: "#090a0d", css: "--color-dark-secondary" },
    { name: "Dark Panel", hex: "#24262a", css: "--color-dark-panel" },
    { name: "Dark Border", hex: "#2d3038", css: "--color-dark-border" },
  ],
  "Light / Canvas": [
    { name: "Canvas", hex: "#f8f9fa", css: "--color-light" },
    { name: "Canvas Secondary", hex: "#eef1f5", css: "--color-light-secondary" },
    { name: "Border", hex: "#e4e7ec", css: "--color-light-border" },
    { name: "Muted", hex: "#cbd2dc", css: "--color-light-muted" },
  ],
  "Text": [
    { name: "Primary", hex: "#111827", css: "--color-text-primary" },
    { name: "Secondary", hex: "#18283e", css: "--color-text-secondary" },
    { name: "Muted", hex: "#667085", css: "--color-text-muted" },
    { name: "Subtle", hex: "#5b6b83", css: "--color-text-subtle" },
    { name: "Faint", hex: "#69686e", css: "--color-text-faint" },
  ],
  "Blue / Brand": [
    { name: "Blue", hex: "#007aff", css: "--color-blue" },
    { name: "Blue Light", hex: "#007fff", css: "--color-blue-light" },
    { name: "Blue Vivid", hex: "#007ffa", css: "--color-blue-vivid" },
    { name: "Teal", hex: "#007fad", css: "--color-blue-teal" },
    { name: "Teal Bright", hex: "#009cde", css: "--color-blue-teal-bright" },
    { name: "Navy", hex: "#1d49ac", css: "--color-blue-navy" },
    { name: "Deep", hex: "#1b4894", css: "--color-blue-deep" },
    { name: "Deeper", hex: "#184067", css: "--color-blue-deeper" },
  ],
  "Semantic": [
    { name: "Error", hex: "#d32323", css: "--color-error" },
    { name: "Error Alt", hex: "#ea4335", css: "--color-error-google" },
    { name: "Warning", hex: "#fbbc05", css: "" },
    { name: "Success", hex: "#34a853", css: "" },
  ],
};

const typeScale = [
  { name: "Display XL", family: "DM Sans", weight: 800, size: 72, lh: 80, ls: -1.5, tag: "h1" },
  { name: "Display L", family: "DM Sans", weight: 700, size: 56, lh: 64, ls: -1, tag: "h1" },
  { name: "Display M", family: "DM Sans", weight: 700, size: 40, lh: 48, ls: -0.5, tag: "h2" },
  { name: "Heading", family: "DM Sans", weight: 600, size: 32, lh: 40, ls: 0, tag: "h3" },
  { name: "Subheading", family: "DM Sans", weight: 600, size: 24, lh: 32, ls: 0, tag: "h4" },
  { name: "Body/Base", family: "DM Sans", weight: 400, size: 20, lh: 32, ls: 0, tag: "p" },
  { name: "Body/Small", family: "DM Sans", weight: 400, size: 16, lh: 24, ls: 0, tag: "p" },
  { name: "Label/Nav", family: "DM Sans", weight: 600, size: 16, lh: 24, ls: 0, tag: "span" },
  { name: "Label/Button", family: "DM Sans", weight: 600, size: 16, lh: 24, ls: 0.5, tag: "span" },
  { name: "Caption", family: "DM Sans", weight: 500, size: 12, lh: 16, ls: 0.5, tag: "span" },
  { name: "Mono/Data", family: "DM Mono", weight: 500, size: 14, lh: 20, ls: 0, tag: "code" },
  { name: "Inter/Bold", family: "Inter", weight: 700, size: 16, lh: 24, ls: 0, tag: "span" },
];

const spacing = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128];

const sections = ["Colors", "Typography", "Spacing", "Components", "Icons", "Assets"];

// ──────────────────────────────────────────────
// Sub-components
// ──────────────────────────────────────────────

function Swatch({ name, hex, css }: { name: string; hex: string; css: string }) {
  const [copied, setCopied] = useState(false);
  const dark = isDark(hex);

  function copy(val: string) {
    navigator.clipboard.writeText(val).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <button
      onClick={() => copy(hex)}
      className="group flex flex-col rounded-xl overflow-hidden border border-[#e4e7ec] text-left transition-shadow hover:shadow-md focus:outline-none"
    >
      <div className="h-16 w-full" style={{ background: hex }} />
      <div className="bg-white px-3 py-2">
        <p className="text-[11px] font-semibold font-['DM_Sans'] text-[#111827] leading-tight">{name}</p>
        <p className="text-[10px] font-['DM_Mono'] text-[#667085] mt-0.5">{copied ? "Copied!" : hex}</p>
        {css && <p className="text-[9px] font-['DM_Mono'] text-[#cbd2dc] mt-0.5 truncate">{css}</p>}
      </div>
    </button>
  );
}

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

function TypeRow({ name, family, weight, size, lh, ls, tag }: typeof typeScale[0]) {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <div className="flex items-baseline gap-6 py-4 border-b border-[#e4e7ec] last:border-0">
      <div className="w-32 shrink-0">
        <p className="text-[11px] font-semibold font-['DM_Sans'] text-[#007aff]">{name}</p>
        <p className="text-[10px] font-['DM_Mono'] text-[#667085] mt-0.5">{family} · {weight} · {size}px</p>
      </div>
      <Tag
        style={{
          fontFamily: `'${family}', ${family === "DM Mono" ? "monospace" : "sans-serif"}`,
          fontWeight: weight,
          fontSize: `clamp(${Math.max(12, size * 0.55)}px, ${size * 0.7}px, ${size}px)`,
          lineHeight: `${lh / size}`,
          letterSpacing: ls ? `${ls}px` : undefined,
          color: "#111827",
          margin: 0,
        }}
      >
        The quick brown fox jumps
      </Tag>
    </div>
  );
}

function Badge({ label, variant = "blue" }: { label: string; variant?: "blue" | "dark" | "light" | "error" | "teal" }) {
  const styles = {
    blue: "bg-[#007aff] text-white",
    dark: "bg-[#060612] text-white",
    light: "bg-[#eef1f5] text-[#18283e]",
    error: "bg-[#d32323] text-white",
    teal: "bg-[#007fad] text-white",
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-['DM_Sans'] tracking-wide ${styles[variant]}`}>
      {label}
    </span>
  );
}

function Button({ label, variant = "primary", size = "md" }: { label: string; variant?: "primary" | "secondary" | "ghost" | "dark"; size?: "sm" | "md" | "lg" }) {
  const v = {
    primary: "bg-[#007aff] text-white hover:bg-[#0069e0] active:bg-[#005cc8]",
    secondary: "bg-[#eef1f5] text-[#111827] hover:bg-[#e4e7ec]",
    ghost: "border border-[#e4e7ec] text-[#111827] hover:bg-[#f8f9fa]",
    dark: "bg-[#060612] text-white hover:bg-[#24262a]",
  };
  const s = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl font-semibold font-['DM_Sans'] tracking-[0.5px] transition-colors ${v[variant]} ${s[size]}`}
    >
      {label}
    </button>
  );
}

function Input({ placeholder, label }: { placeholder: string; label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold font-['DM_Sans'] text-[#18283e]">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="rounded-xl border border-[#e4e7ec] bg-white px-4 py-3 text-base font-['DM_Sans'] text-[#111827] placeholder:text-[#cbd2dc] outline-none focus:ring-2 focus:ring-[#007aff]/30 focus:border-[#007aff] transition-all"
      />
    </div>
  );
}

function Card({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl p-6 flex flex-col gap-4 ${
        dark
          ? "bg-[#090a0d] border border-[#2d3038] text-white"
          : "bg-white border border-[#e4e7ec] text-[#111827]"
      }`}
    >
      <div className="flex items-center justify-between">
        <Badge label="Active" variant={dark ? "blue" : "light"} />
        <span className="text-xs font-['DM_Mono'] text-[#667085]">12 Sept 2026</span>
      </div>
      <div>
        <p className={`text-lg font-semibold font-['DM_Sans'] ${dark ? "text-white" : "text-[#111827]"}`}>
          Lead Cloud Campaign
        </p>
        <p className={`text-sm font-['DM_Sans'] mt-1 ${dark ? "text-[#667085]" : "text-[#5b6b83]"}`}>
          Integrates with Google, Yelp, Angi and 8 more channels seamlessly.
        </p>
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-[#e4e7ec]/10">
        <div className="flex flex-col">
          <span className="text-2xl font-bold font-['Inter'] text-[#007aff]">+233%</span>
          <span className="text-xs font-['DM_Sans'] text-[#667085]">Lead volume</span>
        </div>
        <div className="flex flex-col ml-6">
          <span className="text-2xl font-bold font-['Inter'] text-[#007fad]">–84%</span>
          <span className="text-xs font-['DM_Sans'] text-[#667085]">Cost per lead</span>
        </div>
      </div>
    </div>
  );
}

function StatTile({ value, label, up }: { value: string; label: string; up: boolean }) {
  return (
    <div className="flex flex-col gap-1 p-5 rounded-2xl bg-white border border-[#e4e7ec]">
      <span className={`text-3xl font-extrabold font-['Inter'] ${up ? "text-[#007aff]" : "text-[#007fad]"}`}>{value}</span>
      <span className="text-sm font-['DM_Sans'] text-[#667085]">{label}</span>
    </div>
  );
}

function IconTile({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[#e4e7ec] bg-white hover:border-[#007aff]/40 transition-colors">
      <img src={src} alt={label} className="w-8 h-8 object-contain" />
      <span className="text-[10px] font-['DM_Mono'] text-[#667085] text-center">{label}</span>
    </div>
  );
}

function PartnerLogo({ src, label }: { src: string; label: string }) {
  return (
    <div className="flex items-center justify-center p-4 rounded-xl border border-[#e4e7ec] bg-white hover:border-[#007aff]/30 transition-colors">
      <img src={src} alt={label} className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity" />
    </div>
  );
}

// ──────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = useState("Colors");

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-['DM_Sans']">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e4e7ec]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={imgViirl} alt="VIIRL" className="h-8 object-contain" />
            <div className="h-5 w-px bg-[#e4e7ec]" />
            <span className="text-sm font-semibold text-[#667085] tracking-[0.5px] uppercase">Design System</span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === s
                    ? "bg-[#007aff] text-white"
                    : "text-[#667085] hover:text-[#111827] hover:bg-[#f8f9fa]"
                }`}
              >
                {s}
              </button>
            ))}
          </nav>
          <Badge label="v1.0.0" variant="light" />
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <div className="relative mb-16 rounded-3xl overflow-hidden bg-[#060612] px-10 py-16">
          {/* Ambient glows */}
          <img src={imgGlowCyan} alt="" className="absolute left-[-10%] top-[-20%] w-[40%] opacity-60 pointer-events-none" />
          <img src={imgGlowViolet} alt="" className="absolute right-[-5%] bottom-[-20%] w-[35%] opacity-50 pointer-events-none" />
          <img src={imgGlowIndigo} alt="" className="absolute left-[40%] top-[-10%] w-[30%] opacity-40 pointer-events-none" />
          {/* Stars */}
          <img src={imgStar1} alt="" className="absolute left-[8%] top-[20%] w-[3px]" />
          <img src={imgStar2} alt="" className="absolute left-[25%] top-[40%] w-[2px]" />
          <img src={imgStar2} alt="" className="absolute right-[20%] top-[25%] w-[2px]" />
          <img src={imgStar1} alt="" className="absolute right-[35%] bottom-[30%] w-[3px]" />

          <div className="relative z-10 max-w-2xl">
            <Badge label="Design System" variant="blue" />
            <h1
              className="mt-6 text-white"
              style={{ fontFamily: "'DM Sans'", fontWeight: 800, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, letterSpacing: "-1px" }}
            >
              VIIRL Lead Cloud
            </h1>
            <p
              className="mt-4 text-[#667085]"
              style={{ fontFamily: "'DM Sans'", fontWeight: 400, fontSize: 20, lineHeight: "32px" }}
            >
              An exportable design token system built from the VIIRL Lead Cloud product. Colors, typography, components, and assets — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button label="Get Started" variant="primary" />
              <Button label="View Source" variant="ghost" />
            </div>
          </div>
        </div>

        {/* Colors */}
        <section id="Colors" className="mb-16">
          <SectionHeader title="Colors" subtitle="Full palette extracted from the Figma source. Click any swatch to copy the hex." />
          {Object.entries(colors).map(([group, swatches]) => (
            <div key={group} className="mb-8">
              <h3 className="text-xs font-semibold font-['DM_Mono'] text-[#667085] uppercase tracking-widest mb-3">{group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                {swatches.map((sw) => (
                  <Swatch key={sw.hex} {...sw} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Typography */}
        <section id="Typography" className="mb-16">
          <SectionHeader title="Typography" subtitle="Type scale using DM Sans, DM Mono, and Inter — the three typefaces from the VIIRL system." />
          <div className="bg-white rounded-2xl border border-[#e4e7ec] px-8 py-2">
            {typeScale.map((t) => (
              <TypeRow key={t.name} {...t} />
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { family: "DM Sans", desc: "Primary sans-serif. Used for UI labels, body copy, and all display headings. Variable weight from 300–700." },
              { family: "DM Mono", desc: "Monospaced for data labels, code, and technical readouts. Medium weight by default." },
              { family: "Inter", desc: "High-legibility figures for stats, KPIs, and numerical callouts. Extra Bold for maximum impact." },
            ].map((f) => (
              <div key={f.family} className="bg-white rounded-2xl border border-[#e4e7ec] p-6">
                <p className="text-xs font-semibold font-['DM_Mono'] text-[#007aff] uppercase tracking-widest mb-2">{f.family}</p>
                <p style={{ fontFamily: `'${f.family}'`, fontWeight: 700, fontSize: 28, lineHeight: 1.2, color: "#111827" }}>
                  Aa Bb Cc
                </p>
                <p className="text-sm text-[#667085] font-['DM_Sans'] mt-3">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section id="Spacing" className="mb-16">
          <SectionHeader title="Spacing" subtitle="Base-4 spacing scale. All measurements in pixels." />
          <div className="bg-white rounded-2xl border border-[#e4e7ec] p-8 flex flex-wrap items-end gap-4">
            {spacing.map((n) => (
              <div key={n} className="flex flex-col items-center gap-2">
                <div className="bg-[#007aff]/15 border border-[#007aff]/30 rounded" style={{ width: Math.min(n, 64), height: Math.min(n, 64) }} />
                <span className="text-[10px] font-['DM_Mono'] text-[#667085]">{n}px</span>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#090a0d] rounded-2xl border border-[#2d3038] p-6">
            <p className="text-xs font-['DM_Mono'] text-[#667085] mb-3">CSS custom properties</p>
            <pre className="text-sm font-['DM_Mono'] text-[#007aff] leading-7">
              {spacing.map((n) => `--spacing-${n}: ${n}px;`).join("\n")}
            </pre>
          </div>
        </section>

        {/* Components */}
        <section id="Components" className="mb-16">
          <SectionHeader title="Components" subtitle="Core UI building blocks. Buttons, inputs, badges, cards, and stat tiles." />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Buttons */}
            <ComponentBlock title="Buttons">
              <div className="flex flex-wrap gap-3 items-center">
                <Button label="Primary" variant="primary" />
                <Button label="Secondary" variant="secondary" />
                <Button label="Ghost" variant="ghost" />
                <Button label="Dark" variant="dark" />
              </div>
              <div className="flex flex-wrap gap-3 items-center mt-4">
                <Button label="Small" variant="primary" size="sm" />
                <Button label="Medium" variant="primary" size="md" />
                <Button label="Large" variant="primary" size="lg" />
              </div>
            </ComponentBlock>

            {/* Badges */}
            <ComponentBlock title="Badges">
              <div className="flex flex-wrap gap-3">
                <Badge label="Active" variant="blue" />
                <Badge label="Certified" variant="dark" />
                <Badge label="Partner" variant="teal" />
                <Badge label="Default" variant="light" />
                <Badge label="Alert" variant="error" />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Google", "Yelp", "Angi", "Meta", "Thumbtack", "Nextdoor"].map((ch) => (
                  <Badge key={ch} label={ch} variant="light" />
                ))}
              </div>
            </ComponentBlock>

            {/* Inputs */}
            <ComponentBlock title="Inputs">
              <div className="flex flex-col gap-4">
                <Input label="Business Name" placeholder="e.g. Handy Home Services" />
                <Input label="Contact Email" placeholder="you@example.com" />
              </div>
            </ComponentBlock>

            {/* Stat Tiles */}
            <ComponentBlock title="Stat Tiles">
              <div className="grid grid-cols-2 gap-3">
                <StatTile value="+233%" label="Lead Volume" up={true} />
                <StatTile value="+388%" label="Revenue" up={true} />
                <StatTile value="–84%" label="Cost Per Lead" up={false} />
                <StatTile value="4.9★" label="Avg Rating" up={true} />
              </div>
            </ComponentBlock>
          </div>

          {/* Cards */}
          <ComponentBlock title="Cards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card />
              <Card dark />
            </div>
          </ComponentBlock>

          {/* Code block */}
          <ComponentBlock title="Mono / Code Block">
            <div className="bg-[#090a0d] rounded-xl border border-[#2d3038] p-5 overflow-x-auto">
              <pre className="text-sm font-['DM_Mono'] text-[#007aff] leading-7">
                {`// Lead Cloud integration
const campaign = await viirl.leads.create({
  channels: ["google", "yelp", "angi"],
  budget:   { monthly: 2500, currency: "USD" },
  target:   { radius: 25, unit: "mi" },
});

console.log(campaign.id); // lc_a1b2c3d4`}
              </pre>
            </div>
          </ComponentBlock>
        </section>

        {/* Icons */}
        <section id="Icons" className="mb-16">
          <SectionHeader title="Icons" subtitle="Lucide outline icons at 1.25 stroke-width. ISC licensed — editable native vectors." />
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
            <IconTile src={imgIconMsg} label="message-circle-more" />
            <IconTile src={imgIconPhone} label="phone" />
            <IconTile src={imgIconMail} label="mail" />
            <IconTile src={imgIconDB} label="database" />
            <IconTile src={imgIconPlug} label="plug" />
            <IconTile src={imgIconPlay} label="play" />
            <IconTile src={imgArrowRight} label="arrow-right" />
            <IconTile src={imgLeadCloud} label="lead-cloud-logo" />
          </div>
        </section>

        {/* Assets */}
        <section id="Assets" className="mb-16">
          <SectionHeader title="Assets" subtitle="Partner logos and brand assets. Each is a replaceable component in the Figma source." />

          <ComponentBlock title="Partner Channel Logos">
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
              <PartnerLogo src={imgGoogle} label="Google" />
              <PartnerLogo src={imgYelp} label="Yelp" />
              <PartnerLogo src={imgAngi} label="Angi" />
              <PartnerLogo src={imgMeta} label="Meta" />
              <PartnerLogo src={imgThumbtack} label="Thumbtack" />
              <PartnerLogo src={imgNetworx} label="Networx" />
              <PartnerLogo src={imgLgGrn} label="LG GRN" />
            </div>
          </ComponentBlock>

          <ComponentBlock title="Brand Assets">
            <div className="flex flex-wrap items-center gap-6">
              <div className="p-4 rounded-xl border border-[#e4e7ec] bg-white">
                <img src={imgViirl} alt="VIIRL Logo" className="h-10 object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-[#2d3038] bg-[#090a0d]">
                <img src={imgViirl} alt="VIIRL Logo Dark" className="h-10 object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-[#e4e7ec] bg-white">
                <img src={imgLeadCloud} alt="Lead Cloud" className="h-10 object-contain" />
              </div>
              <div className="p-4 rounded-xl border border-[#e4e7ec] bg-white">
                <img src={imgViLogo} alt="VI" className="h-10 object-contain" />
              </div>
            </div>
          </ComponentBlock>

          <ComponentBlock title="Photography Style">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden aspect-video bg-[#eef1f5]">
                <img src={imgHandy} alt="Handy team" className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden bg-[#eef1f5] aspect-square">
                  <img src={imgScreenA} alt="Dashboard screenshot A" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden bg-[#eef1f5] aspect-square">
                  <img src={imgScreenB} alt="Dashboard screenshot B" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </ComponentBlock>

          {/* Gradient reference */}
          <ComponentBlock title="Background Gradients">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl h-24 border border-[#e4e7ec]" style={{ background: "linear-gradient(100.26deg, #e5e8ec 23.7%, #fafafa 78%)" }}>
                <div className="h-full flex items-end p-3"><span className="text-[10px] font-['DM_Mono'] text-[#667085]">Hero gradient</span></div>
              </div>
              <div className="rounded-xl h-24 border border-[#e4e7ec]" style={{ background: "linear-gradient(178.4deg, #f6f9ff 2.6%, #f9f8f6 48.7%, #f1f5f9 147.8%)" }}>
                <div className="h-full flex items-end p-3"><span className="text-[10px] font-['DM_Mono'] text-[#667085]">Content gradient</span></div>
              </div>
              <div className="rounded-xl h-24 border border-[#2d3038]" style={{ background: "linear-gradient(178deg, #060612 0%, #090a0d 100%)" }}>
                <div className="h-full flex items-end p-3"><span className="text-[10px] font-['DM_Mono'] text-[#667085]">Dark gradient</span></div>
              </div>
            </div>
          </ComponentBlock>
        </section>

        {/* Tokens export */}
        <section className="mb-16">
          <SectionHeader title="Token Export" subtitle="Copy the CSS custom properties below to use this design system anywhere." />
          <div className="bg-[#090a0d] rounded-2xl border border-[#2d3038] p-6 overflow-x-auto">
            <pre className="text-xs font-['DM_Mono'] text-[#007aff] leading-6">
              {`:root {
  /* Dark */
  --color-dark:              #060612;
  --color-dark-secondary:    #090a0d;
  --color-dark-panel:        #24262a;
  --color-dark-border:       #2d3038;

  /* Light */
  --color-light:             #f8f9fa;
  --color-light-secondary:   #eef1f5;
  --color-light-border:      #e4e7ec;
  --color-light-muted:       #cbd2dc;

  /* Text */
  --color-text-primary:      #111827;
  --color-text-secondary:    #18283e;
  --color-text-muted:        #667085;
  --color-text-subtle:       #5b6b83;

  /* Blue */
  --color-blue:              #007aff;
  --color-blue-light:        #007fff;
  --color-blue-teal:         #007fad;
  --color-blue-teal-bright:  #009cde;
  --color-blue-navy:         #1d49ac;
  --color-blue-deep:         #1b4894;

  /* Semantic */
  --color-error:             #d32323;
  --color-success:           #34a853;
  --color-warning:           #fbbc05;

  /* Typography */
  --font-sans:               'DM Sans', system-ui, sans-serif;
  --font-mono:               'DM Mono', ui-monospace, monospace;
  --font-inter:              'Inter', system-ui, sans-serif;

  /* Spacing */
  --spacing-1:  4px;
  --spacing-2:  8px;
  --spacing-3:  12px;
  --spacing-4:  16px;
  --spacing-5:  20px;
  --spacing-6:  24px;
  --spacing-8:  32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;

  /* Radius */
  --radius-sm:  8px;
  --radius-md:  12px;
  --radius-lg:  16px;
  --radius-xl:  20px;
  --radius-2xl: 24px;
}`}
            </pre>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#e4e7ec] bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={imgViirl} alt="VIIRL" className="h-6 object-contain" />
            <span className="text-sm text-[#667085] font-['DM_Sans']">Lead Cloud Design System · v1.0.0</span>
          </div>
          <div className="flex items-center gap-4">
            <Badge label="DM Sans" variant="light" />
            <Badge label="DM Mono" variant="light" />
            <Badge label="Inter" variant="light" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8">
      <h2
        style={{ fontFamily: "'DM Sans'", fontWeight: 700, fontSize: "clamp(24px, 3vw, 36px)", color: "#111827", letterSpacing: "-0.5px" }}
      >
        {title}
      </h2>
      <p className="mt-2 text-base font-['DM_Sans'] text-[#667085]">{subtitle}</p>
    </div>
  );
}

function ComponentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 bg-white rounded-2xl border border-[#e4e7ec] p-6">
      <p className="text-xs font-semibold font-['DM_Mono'] text-[#007aff] uppercase tracking-widest mb-5">{title}</p>
      {children}
    </div>
  );
}
