import Image from "next/image";
import { BadgeCheck, Flower2, Leaf, ShieldCheck } from "lucide-react";

const trustMarks = [
  { label: "AYUSH Approved", Icon: BadgeCheck },
  { label: "100% Plant Based", Icon: Leaf },
  { label: "Quality Assured", Icon: ShieldCheck },
  { label: "Inspired by Ayurveda", Icon: Flower2 },
];

export default function Home() {
  return (
    <main className="landing" aria-label="Cannalogic">
      <a className="full-page-link" href="/go" aria-label="Continue to Cannalogic" />
      <div className="landing-content">
        <div className="brand-header">
          <Image
            className="brand-mark"
            src="/logoos.png"
            alt="Cannalogic"
            width={1080}
            height={264}
            priority
            sizes="(max-width: 699px) 100px, 150px"
          />

          <Image
            className="promotional-badge"
            src="/TN%20BADGE%20COMPRESSED.png"
            alt="Promoted by Thampi Nagarjuna"
            width={1080}
            height={768}
            priority
            sizes="(max-width: 699px) 180px, 290px"
          />
        </div>

        <div className="hero-content">
          <Image
            className="hemp-leaf"
            src="/CANN%20LEAF%20COMPRESSED.png"
            alt="A sunlit green hemp leaf"
            width={1240}
            height={1240}
            priority
            sizes="(max-width: 699px) 58vw, 330px"
          />

          <section className="message" aria-label="Natural Healing for a healthier you">
            <h1>Natural Healing</h1>
            <p>for a healthier you</p>
          </section>

          <div className="shop-button" aria-hidden="true">Shop Products</div>
        </div>

        <ul className="trust-marks" aria-label="Our commitments">
          {trustMarks.map(({ label, Icon }) => (
            <li className="trust-mark" key={label}>
              <span className="trust-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={1.5} />
              </span>
              <span className="trust-label">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}