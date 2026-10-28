import Image from "next/image";

const certs = [
  "SARTECH II",
  "Advanced Land Nav",
  "Ocean Rescue",
  "SCUBA",
  "Wilderness First Aid",
  "CPR",
  "ICS 100",
  "ICS 200",
  "ICS 700",
  "ICS 800",
];

export default function Home() {
  return (
    <main className="topo-bg min-h-screen text-[#e8e8e8]">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center py-20 px-6 text-center">
        <Image
          src="/images/logo.webp"
          alt="Upstate Mountain SAR circular patch logo featuring Table Rock and Pinnacle Mountain topographic map"
          width={280}
          height={280}
          priority
          className="rounded-full shadow-[0_0_60px_rgba(200,16,46,0.35)] mb-8"
        />

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight max-w-3xl">
          Upstate Mountain SAR
        </h1>
        <div className="accent-line mt-4 mb-6" />
        <p className="text-xl md:text-2xl text-[#cccccc] max-w-2xl font-light leading-relaxed">
          A volunteer team ready to go anywhere,<br className="hidden md:block" /> do anything,{" "}
          <span className="text-white font-semibold">for anyone.</span>
        </p>
        <p className="mt-4 text-[#999999] text-base uppercase tracking-widest font-semibold">
          South Carolina Mountains
        </p>
      </section>

      {/* ─── MISSION ──────────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-16" id="mission">
        <div className="section-card text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Mission</h2>
          <div className="accent-line md:ml-0" />
          <p className="text-[#cccccc] leading-relaxed mt-4 text-lg">
            Our primary mission is{" "}
            <strong className="text-white">search and rescue</strong>, with a strong emphasis on{" "}
            <strong className="text-white">preventative search and rescue</strong> in the South
            Carolina mountains. We pre-deploy to busy, difficult trailheads to distribute water,
            electrolytes, and food to hikers, and provide direct assistance to anyone who needs
            support on the trail — before an emergency becomes a rescue.
          </p>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ───────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-16" id="certifications">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Team Certifications
        </h2>
        <div className="accent-line" />
        <p className="text-center text-[#999999] mb-6 mt-2">
          Our team holds a range of specialized credentials across rescue disciplines.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {certs.map((c) => (
            <span key={c} className="cert-badge">{c}</span>
          ))}
        </div>
      </section>

      {/* ─── TRAINING & COLLABORATION ─────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-16" id="training">
        <div className="section-card">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Training &amp; Collaboration
          </h2>
          <div className="accent-line md:ml-0" />
          <p className="text-[#cccccc] leading-relaxed mt-4 text-lg">
            We are committed to continuous training and to building relationships with other SAR teams
            across the region. If you represent a SAR organization and are interested in joint
            training, exercises, or mutual aid agreements, we want to connect.
          </p>
          <a
            href="mailto:info@upstatemountainsar.org"
            className="inline-block mt-5 bg-[#c8102e] hover:bg-[#e8294a] text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Email Us to Collaborate
          </a>
        </div>
      </section>

      {/* ─── JOIN THE TEAM ─────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-16" id="join">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Join the Team
        </h2>
        <div className="accent-line" />
        <p className="text-[#cccccc] text-center mt-3 mb-8 text-lg">
          Interested in serving? Email your resume and certifications to{" "}
          <a
            href="mailto:info@upstatemountainsar.org"
            className="text-[#e8294a] hover:text-white font-semibold transition-colors"
          >
            info@upstatemountainsar.org
          </a>
        </p>

        <div className="section-card">
          <h3 className="text-xl font-bold text-white mb-1">Selection Process</h3>
          <p className="text-[#999999] mb-6">
            Stage 1 is an interview. If invited, you will then be asked to complete our fitness
            assessment.
          </p>

          <h3 className="text-lg font-bold text-[#c8102e] uppercase tracking-wide mb-4">
            Fitness Test
          </h3>

          <div className="fitness-item">
            <p className="text-white font-semibold mb-1">Pack Test — 3 miles / 45 lbs / under 45 min</p>
            <p className="text-[#bbbbbb] text-sm leading-relaxed">
              USFS standard pack test, followed by an additional 30 minutes going up and over a
              picnic table with your SAR pack (~20 lbs.) and a 45 lb. kettlebell or dumbbell.
            </p>
          </div>

          <div className="fitness-item">
            <p className="text-white font-semibold mb-1">Burpee Pack Pull-Ups — 10 min / minimum 50 reps</p>
            <p className="text-[#bbbbbb] text-sm leading-relaxed">
              As many reps as possible in 10 minutes wearing your SAR pack (~20 lbs.). Minimum
              standard: 50 reps.
            </p>
          </div>

          <div className="fitness-item">
            <p className="text-white font-semibold mb-1">Trap Bar Deadlift — 225 lbs / 1 min / minimum 15 reps</p>
            <p className="text-[#bbbbbb] text-sm leading-relaxed">
              As many reps as possible with good form in 1 minute at 225 pounds. Minimum standard:
              15 reps.
            </p>
          </div>
        </div>
      </section>

      {/* ─── EQUAL OPPORTUNITY ────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-6 pb-16" id="diversity">
        <div className="section-card border-[rgba(200,16,46,0.2)]">
          <h2 className="text-xl font-bold text-white mb-2">Equal Opportunity</h2>
          <p className="text-[#cccccc] leading-relaxed">
            Upstate Mountain SAR does not discriminate on the basis of color, race, gender, national
            origin, religion, age, disability, sexual orientation, or any other characteristic. We
            welcome all qualified volunteers who share our commitment to service.
          </p>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/10 py-10 px-6 text-center">
        <Image
          src="/images/logo.webp"
          alt="Upstate Mountain SAR"
          width={70}
          height={70}
          className="mx-auto mb-4 rounded-full opacity-80"
        />
        <p className="text-white font-bold text-lg tracking-wide mb-1">Upstate Mountain SAR</p>
        <p className="text-[#888888] text-sm mb-4">South Carolina Mountains</p>
        <p className="text-[#666666] text-sm max-w-xl mx-auto leading-relaxed">
          Upstate Mountain SAR is an independent volunteer team and is not currently affiliated with,
          endorsed by, or operating under any official government agency, state park system, wildlife
          management area (WMA), or land management organization.
        </p>
        <p className="text-[#555555] text-xs mt-6">
          &copy; 2026 Upstate Mountain SAR &mdash; All rights reserved.
        </p>
      </footer>
    </main>
  );
}
