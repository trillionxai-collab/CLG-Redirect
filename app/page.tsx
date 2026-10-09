import Image from "next/image";
import { ShieldCheck, Sprout, Stethoscope } from "lucide-react";

const benefits = [
  { label: "DOCTOR RECOMMENDED", Icon: Stethoscope },
  { label: "100% NATURAL", Icon: Sprout },
  { label: "TRUSTED BY 50K+ CUSTOMERS", Icon: ShieldCheck },
];

export default function Home() {
  return (
    <main className="landing" aria-label="Cannalogic">
      <div className="botanical botanical-top-left" aria-hidden="true" />
      <div className="botanical botanical-top-right" aria-hidden="true" />
      <div className="botanical botanical-mid-right" aria-hidden="true" />
      <div className="botanical botanical-bottom-left" aria-hidden="true" />
      <div className="botanical botanical-bottom-right" aria-hidden="true" />

      <div className="brand-mark" aria-hidden="true">
        <Image
          src="/cannalogic-logo.png"
          alt=""
          width={675}
          height={426}
          priority
          sizes="(max-width: 699px) 160px, 190px"
        />
      </div>

      <section className="message" aria-label="Crafted with care, tested for trust">
        <h1>
          <span>Crafted</span>
          <span>with care,</span>
          <span className="italic">tested</span>
          <span className="italic">for trust.</span>
        </h1>
        <div className="shop-button" aria-hidden="true">Shop Products</div>
      </section>

      <ul className="benefits" aria-label="Benefits">
        {benefits.map(({ label, Icon }) => (
          <li className="benefit" key={label}>
            <span className="benefit-icon" aria-hidden="true">
              <Icon size={25} strokeWidth={1.6} />
            </span>
            <span className="benefit-label">{label}</span>
          </li>
        ))}
      </ul>

      <a className="full-page-link" href="/go" aria-label="Continue to Cannalogic" />
    </main>
  );
}