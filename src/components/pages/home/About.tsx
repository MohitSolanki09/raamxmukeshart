// import "./Home.css";

// const features = [
//     {
//         number: "01",
//         title: "Premium Airport Environment",
//     },
//     {
//         number: "02",
//         title: "High-Value Traveller Audience",
//     },
//     {
//         number: "03",
//         title: "Digital & Static Media Options",
//     },
//     {
//         number: "04",
//         title: "Strategic Brand Placement",
//     },
// ];

// export default function About() {
//     return (
//         <section className="about-section" id="about">
//             <div className="container">
//                 <div className="about-grid">
//                     {/* Left Content */}
//                     <div className="about-content">
//                         <span className="section-tag">
//                             About Rajkot Airport Media
//                         </span>

//                         <h2>
//                             Premium airport advertising solutions for brands that want
//                             <span> better visibility.</span>
//                         </h2>

//                         <p>
//                             Rajkot Airport Advertising Media helps brands connect with
//                             travellers, business audiences, families, NRIs, and
//                             decision-makers through high-impact airport media placements.
//                         </p>

//                         <p>
//                             Our focus is to offer clean, premium, and strategic advertising
//                             spaces across Rajkot Airport where brands can build trust,
//                             visibility, and stronger recall.
//                         </p>
//                     </div>

//                     {/* Right Side */}
//                     <div className="about-right">
//                         <div className="about-media">
//                             <video autoPlay muted loop playsInline>
//                                 <source
//                                     src="/videos/airport-about.mp4"
//                                     type="video/mp4"
//                                 />
//                             </video>
//                         </div>

//                         <div className="about-cards">
//                             {features.map((item) => (
//                                 <div key={item.number} className="about-card">
//                                     <span>{item.number}</span>
//                                     <h4>{item.title}</h4>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 <div className="about-quote">
//                     <p>
//                         “Your brand deserves to be seen where attention is already high.”
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }









// import "./Home.css";

// const flowItems = [
//     "Premium Audience",
//     "Business Travellers",
//     "Digital Screens",
//     "Brand Recall",
// ];

// export default function About() {
//     return (
//         <section className="about-flow-section" id="about" data-animate>
//             <div className="container">
//                 <div className="about-flow-head">
//                     <span>About Rajkot Airport Media</span>

//                     <h2>
//                         Airport advertising that puts your brand where it{" "}
//                         <em>matters most.</em>
//                     </h2>
//                 </div>

//                 <div className="about-flow-copy">
//                     <p>
//                         Rajkot Airport Advertising Media connects brands with travellers,
//                         NRIs, business audiences, and decision-makers through premium,
//                         high-impact media placements across the terminal.
//                     </p>

//                     <p>
//                         We provide clean and strategic advertising spaces that help brands
//                         build trust, recall, and visibility with every passenger that walks
//                         through.
//                     </p>
//                 </div>

//                 <div className="audience-flow">
//                     {flowItems.map((item, index) => (
//                         <div className="flow-wrap" key={item}>
//                             <div className="flow-item">
//                                 <span className="flow-dot" />
//                                 <p>{item}</p>
//                             </div>

//                             {index !== flowItems.length - 1 && <div className="flow-line" />}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }








// import "./Home.css";

// const flowItems = [
//     { title: "Premium Audience", desc: "Engage high-net-worth individuals and global travelers." },
//     { title: "Business Travellers", desc: "Influence corporate leaders and active decision makers." },
//     { title: "Digital Screens", desc: "Ultra-HD networks displaying synchronized media assets." },
//     { title: "Brand Recall", desc: "Maximize structural exposure and retention benchmarks." },
// ];

// export default function About() {
//     return (
//         <section className="about-premium-section" id="about" data-animate>
//             {/* Structural Background Accents */}
//             <div className="about-glow-core"></div>

//             <div className="container about-premium-inner">

//                 {/* Header Block */}
//                 <div className="about-premium-head">
//                     <div className="premium-mini-badge">
//                         <span className="badge-line"></span>
//                         <span className="badge-text">Corporate Profile</span>
//                     </div>

//                     <h2 className="about-title-main">
//                         Strategic architectural media built for <em>undivided attention.</em>
//                     </h2>
//                 </div>

//                 {/* Narrative Grid */}
//                 <div className="about-premium-grid">
//                     <div className="grid-narrative-copy">
//                         <p>
//                             Rajkot International Airport Advertising Media acts as a premium pipeline
//                             connecting elite brands with high-intent audiences, NRIs, and commercial decision-makers
//                             through high-impact terminal installations.
//                         </p>
//                         <p>
//                             We engineer hyper-clean, minimal structural advertising zones designed to integrate flawlessly
//                             with the airport’s modern layout—fostering immediate trust, sustained recall, and unmatched brand clarity.
//                         </p>
//                     </div>

//                     {/* Interactive Animated Flow System */}
//                     <div className="audience-premium-flow">
//                         {flowItems.map((item, index) => (
//                             <div className="flow-card-wrapper" key={item.title}>
//                                 <div className="flow-card-main">
//                                     <div className="flow-card-header">
//                                         <div className="flow-indicator-node">
//                                             <span className="node-pulse"></span>
//                                             <span className="node-index">0{index + 1}</span>
//                                         </div>
//                                         <h3>{item.title}</h3>
//                                     </div>
//                                     <p className="flow-card-desc">{item.desc}</p>

//                                     {/* Infinite Gradient Accent Line */}
//                                     <div className="flow-card-track"></div>
//                                 </div>

//                                 {/* Connecting structural lines between items */}
//                                 {index !== flowItems.length - 1 && (
//                                     <div className="flow-connecting-pipe">
//                                         <div className="pipe-pulse-particle"></div>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="programmatic-vector-canvas">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" opacity="0.04">
//                         <defs>
//                             <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                                 <stop offset="0%" stopColor="#e32019" />
//                                 <stop offset="100%" stopColor="#090d16" stopOpacity="0" />
//                             </linearGradient>
//                         </defs>
//                         {/* Abstract Flight Path Trajectories */}
//                         <path d="M-100,200 Q300,50 800,400 T1800,100" fill="none" stroke="url(#lineGrad)" strokeWidth="2" />
//                         <path d="M100,900 Q600,450 1200,800 T2200,300" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" />

//                         {/* Technical Guidance Crosshairs */}
//                         <circle cx="75%" cy="40%" r="120" fill="none" stroke="rgba(255,255,255,0.3)" strokeDasharray="4 8" />
//                         <circle cx="75%" cy="40%" r="4" fill="#e32019" />
//                         <line x1="75%" y1="0" x2="75%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 4" />
//                     </svg>
//                     <div className="vector-ambient-shading"></div>
//                 </div>

//             </div>
//         </section>
//     );
// }



// "use client";

// import { useState } from "react";
// import "./Home.css";

// const bentoFeatures = [
//     {
//         id: "01",
//         title: "Premium Audience Pipeline",
//         tag: "Demographics",
//         desc: "Direct pipeline connecting elite global brands with high-net-worth travelers, commercial decision-makers, and affluent NRIs.",
//         metric: "84% Elite Tier",
//         vectorType: "radar"
//     },
//     {
//         id: "02",
//         title: "Synchronized Digital Network",
//         tag: "Infrastructure",
//         desc: "Next-generation Ultra-HD display architectures strategically engineered for flawless, uninterrupted visual synchronized broadcast.",
//         metric: "100% Sync Rate",
//         vectorType: "grid"
//     },
//     {
//         id: "03",
//         title: "High-Retention Exposure",
//         tag: "Metrics",
//         desc: "Hyper-clean, minimal structural placement zones optimized within terminal bottlenecks to guarantee exceptional structural dwell times.",
//         metric: "4.2x Retention",
//         vectorType: "waveform"
//     }
// ];

// export default function About() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="premium-about-workspace" id="about">
//             {/* Dynamic Background Glass & Ambient Noise Grid */}
//             <div className="workspace-matrix-overlay"></div>
//             <div className="ambient-glow-emitter positioning-alpha"></div>
//             <div className="ambient-glow-emitter positioning-beta"></div>

//             <div className="about-fluid-container">
//                 <div className="about-split-architecture">

//                     {/* LEFT COLUMN: Narrative & Dynamic Metrics */}
//                     <div className="architecture-narrative-block">
//                         <div className="brand-meta-badge">
//                             <div className="badge-ticker-dot"></div>
//                             <span className="badge-label-mono">Media Engineering // 2026</span>
//                         </div>

//                         <h2 className="editorial-statement-title">
//                             Architectural media installations designed for <span className="text-gradient-fire">uncompromising impact.</span>
//                         </h2>

//                         <div className="editorial-prose">
//                             <p>
//                                 Rajkot International Airport Advertising Media reimagines commercial space as premium canvas. We build minimal structural layouts engineered to integrate seamlessly into modern architectural environments.
//                             </p>
//                             <p>
//                                 By positioning messaging at high-dwell transition points, we cultivate immediate visual authority, driving unmatched brand clarity and memory retention.
//                             </p>
//                         </div>

//                         {/* Live Changing Data Readout Based on Selected Bento Box */}
//                         <div className="dynamic-telemetry-panel">
//                             <div className="telemetry-row">
//                                 <span className="telemetry-key">Selected Module:</span>
//                                 <span className="telemetry-value text-gradient-fire">MOD_{bentoFeatures[activeIndex].id}</span>
//                             </div>
//                             <div className="telemetry-row">
//                                 <span className="telemetry-key">System Target:</span>
//                                 <span className="telemetry-value">{bentoFeatures[activeIndex].tag}</span>
//                             </div>
//                             <div className="telemetry-progress-track">
//                                 <div
//                                     className="telemetry-progress-fill"
//                                     style={{ width: `${(activeIndex + 1) * 33.33}%` }}
//                                 ></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* RIGHT COLUMN: Interactive Bento Grid Matrix */}
//                     <div className="architecture-bento-matrix">
//                         {bentoFeatures.map((item, index) => (
//                             <div
//                                 key={item.id}
//                                 className={`bento-interactive-tile ${activeIndex === index ? "state-active" : ""}`}
//                                 onMouseEnter={() => setActiveIndex(index)}
//                             >
//                                 {/* Visual Structural Backing Vectors */}
//                                 <div className="tile-vector-canvas">
//                                     {item.vectorType === "radar" && (
//                                         <svg className="vector-svg" viewBox="0 0 200 200">
//                                             <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
//                                             <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
//                                             <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(227, 32, 25, 0.1)" strokeWidth="1" strokeDasharray="4 4" />
//                                             <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
//                                         </svg>
//                                     )}
//                                     {item.vectorType === "grid" && (
//                                         <svg className="vector-svg" viewBox="0 0 200 200">
//                                             <path d="M0,40 H200 M0,80 H200 M0,120 H200 M0,160 H200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
//                                             <path d="M40,0 V200 M80,0 V200 M120,0 V200 M160,0 V200" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
//                                             <circle cx="80" cy="80" r="3" fill="#e32019" opacity="0.4" />
//                                         </svg>
//                                     )}
//                                     {item.vectorType === "waveform" && (
//                                         <svg className="vector-svg" viewBox="0 0 200 200">
//                                             <path d="M10,100 Q45,20 90,100 T190,100" fill="none" stroke="url(#bentoGrad)" strokeWidth="1.5" />
//                                             <defs>
//                                                 <linearGradient id="bentoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
//                                                     <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
//                                                     <stop offset="50%" stopColor="#e32019" stopOpacity="0.3" />
//                                                     <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
//                                                 </linearGradient>
//                                             </defs>
//                                         </svg>
//                                     )}
//                                 </div>

//                                 {/* Content Elements */}
//                                 <div className="tile-content-wrapper">
//                                     <div className="tile-header-group">
//                                         <span className="tile-numerical-index">{item.id}</span>
//                                         <span className="tile-runtime-tag">{item.tag}</span>
//                                     </div>

//                                     <h3 className="tile-structural-title">{item.title}</h3>
//                                     <p className="tile-descriptive-prose">{item.desc}</p>

//                                     <div className="tile-metric-footer">
//                                         <span className="metric-accent-output">{item.metric}</span>
//                                         <div className="metric-arrow-vector"></div>
//                                     </div>
//                                 </div>

//                                 {/* Laser Corner Accents */}
//                                 <div className="laser-corner top-left"></div>
//                                 <div className="laser-corner bottom-right"></div>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { useState } from "react";
import "./Home.css";

const aboutFeatures = [
    {
        id: "01",
        title: "Premium Traveller Audience",
        tag: "Audience",
        desc: "Reach business travellers, NRIs, families, decision-makers, and premium regional buyers in one controlled airport environment.",
        metric: "High-Value Reach",
        vectorType: "radar",
    },
    {
        id: "02",
        title: "Airport Media Network",
        tag: "Media",
        desc: "Digital screens, static boards, journey placements, and terminal visibility planned around passenger movement and dwell time.",
        metric: "Multi-Zone Visibility",
        vectorType: "terminal",
    },
    {
        id: "03",
        title: "Brand Recall Environment",
        tag: "Recall",
        desc: "Cleaner attention, fewer distractions, and premium surroundings help brands become more memorable than crowded outdoor spaces.",
        metric: "Stronger Brand Memory",
        vectorType: "flight",
    },
];

export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = aboutFeatures[activeIndex];

    return (
        <section className="premium-about-workspace" id="about" data-animate>
            <div className="workspace-matrix-overlay" />
            <div className="ambient-glow-emitter positioning-alpha" />
            <div className="ambient-glow-emitter positioning-beta" />

            <div className="about-fluid-container">
                <div className="about-split-architecture">
                    <div className="architecture-narrative-block">
                        <div className="brand-meta-badge">
                            <span className="badge-ticker-dot" />
                            <span className="badge-label-mono">About Rajkot Airport Media</span>
                        </div>

                        <h2 className="editorial-statement-title">
                            Airport advertising built for{" "}
                            <span className="text-gradient-fire">premium attention.</span>
                        </h2>

                        <div className="editorial-prose">
                            <p>
                                Rajkot Airport Advertising Media connects brands with travellers,
                                business audiences, NRIs, and decision-makers through premium
                                airport media placements.
                            </p>
                            <p>
                                We help brands choose the right mix of digital, static, and
                                journey-based visibility across high-attention airport zones.
                            </p>
                        </div>

                        {/* <div className="dynamic-telemetry-panel">
                            <div className="telemetry-row">
                                <span className="telemetry-key">Selected Focus</span>
                                <span className="telemetry-value">RAJ_{active.id}</span>
                            </div>

                            <div className="telemetry-row">
                                <span className="telemetry-key">Media Value</span>
                                <span className="telemetry-value">{active.metric}</span>
                            </div>

                            <div className="telemetry-progress-track">
                                <div
                                    className="telemetry-progress-fill"
                                    style={{ width: `${(activeIndex + 1) * 33.33}%` }}
                                />
                            </div>
                        </div> */}
                        <div className="airport-vector-card">
                            <div className="airport-vector-visual">
                                <svg viewBox="0 0 260 120" aria-hidden="true">
                                    <path className="route-line" d="M22 82 C76 22 140 22 214 62" />
                                    <circle className="route-dot dot-a" cx="22" cy="82" r="5" />
                                    <circle className="route-dot dot-b" cx="118" cy="32" r="5" />
                                    <circle className="route-dot dot-c" cx="214" cy="62" r="5" />

                                    <path
                                        className="mini-plane"
                                        d="M164 48 L178 42 L207 20 L214 26 L190 54 L198 75 L190 78 L176 60 L160 66 Z"
                                    />

                                    <rect className="terminal-block" x="28" y="92" width="52" height="12" />
                                    <rect className="terminal-block" x="92" y="92" width="52" height="12" />
                                    <rect className="terminal-block" x="156" y="92" width="52" height="12" />
                                </svg>
                            </div>

                            <div className="airport-vector-copy">
                                <span>Passenger Journey</span>
                                <strong>{active.title}</strong>
                                <p>{active.metric}</p>
                            </div>
                        </div>

                    </div>

                    <div className="architecture-bento-matrix">
                        {aboutFeatures.map((item, index) => (
                            <button
                                type="button"
                                key={item.id}
                                className={`bento-interactive-tile ${activeIndex === index ? "state-active" : ""
                                    }`}
                                onMouseEnter={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                            >
                                <div className="tile-vector-canvas">
                                    {item.vectorType === "radar" && <RadarVector />}
                                    {item.vectorType === "terminal" && <TerminalVector />}
                                    {item.vectorType === "flight" && <FlightVector />}
                                </div>

                                <div className="tile-content-wrapper">
                                    <div className="tile-header-group">
                                        <span className="tile-numerical-index">{item.id}</span>
                                        <span className="tile-runtime-tag">{item.tag}</span>
                                    </div>

                                    <h3 className="tile-structural-title">{item.title}</h3>
                                    <p className="tile-descriptive-prose">{item.desc}</p>

                                    <div className="tile-metric-footer">
                                        <span className="metric-accent-output">{item.metric}</span>
                                        <span className="metric-arrow-vector">→</span>
                                    </div>
                                </div>

                                <span className="laser-corner top-left" />
                                <span className="laser-corner bottom-right" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function RadarVector() {
    return (
        <svg className="vector-svg" viewBox="0 0 220 220" aria-hidden="true">
            <circle cx="110" cy="110" r="84" />
            <circle cx="110" cy="110" r="54" />
            <circle cx="110" cy="110" r="12" />
            <path d="M110 110 L174 62" />
            <path d="M46 110 H174" />
            <path d="M110 46 V174" />
        </svg>
    );
}

function TerminalVector() {
    return (
        <svg className="vector-svg" viewBox="0 0 220 220" aria-hidden="true">
            <path d="M42 154 H178" />
            <path d="M58 154 V74 H162 V154" />
            <path d="M78 96 H142" />
            <path d="M78 118 H142" />
            <path d="M92 154 V132 H128 V154" />
            <circle cx="66" cy="172" r="5" />
            <circle cx="154" cy="172" r="5" />
        </svg>
    );
}

function FlightVector() {
    return (
        <svg className="vector-svg" viewBox="0 0 220 220" aria-hidden="true">
            <path d="M34 142 C74 74 132 62 188 82" />
            <path d="M76 136 L110 120 L164 68 L174 78 L128 132 L142 166 L130 172 L104 144 L78 152 Z" />
            <path d="M46 160 H174" />
            <path d="M72 178 H148" />
        </svg>
    );
}