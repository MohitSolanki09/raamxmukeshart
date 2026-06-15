// "use client";

// const brands = [
//     { name: "Apple", logo: "/images/brands/apple.svg" },
//     { name: "Google", logo: "/images/brands/google.svg" },
//     { name: "Vivo", logo: "/images/brands/vivo.svg" },
//     { name: "Oppo", logo: "/images/brands/oppo.svg" },
//     { name: "Jade Blue", logo: "/images/brands/jade-blue.svg" },
//     { name: "Simpolo", logo: "/images/brands/simpolo.svg" },
//     { name: "Poojara", logo: "/images/brands/poojara.svg" },
//     { name: "Radhika", logo: "/images/brands/radhika.svg" },
// ];

// export default function ClientsPartnership() {
//     return (
//         <section className="clients-partnership" id="clients" data-animate>
//             <div className="container">
//                 <div className="clients-head">
//                     <div>
//                         <span className="clients-eyebrow">
//                             Clients and Partnership
//                         </span>

//                         <h2>
//                             Trusted by{" "}
//                             <em>50+ national and international brands.</em>
//                         </h2>
//                     </div>

//                     <p>
//                         Mukesh Arts brings brand trust, airport coordination,
//                         and relationship-led execution into one business
//                         conversation.
//                     </p>
//                 </div>

//                 {/* <div className="clients-stage">
//                     <div className="clients-core">
//                         <span>Trusted Across</span>
//                         <strong>50+</strong>
//                         <small>Brand Conversations</small>
//                     </div>

//                     {brands.map((brand, index) => (
//                         <div
//                             key={brand}
//                             className={`client-chip chip-${index + 1}`}
//                         >
//                             {brand}
//                         </div>
//                     ))}
//                 </div> */}
//                 <div className="clients-logo-stage">
//                     <div className="client-arc arc-1" />
//                     <div className="client-arc arc-2" />
//                     <div className="client-arc arc-3" />


//                     {brands.map((brand, index) => (
//                         <div className={`brand-logo-bubble brand-pos-${index + 1}`} key={brand.name}>
//                             <img src={brand.logo} alt={brand.name} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }












// "use client";

// import type { CSSProperties } from "react";
// import "./Home.css";

// const brands = [
//     { name: "Apple", logo: "/images/brands/apple.svg" },
//     { name: "Google", logo: "/images/brands/google.svg" },
//     { name: "Vivo", logo: "/images/brands/vivo.svg" },
//     { name: "Oppo", logo: "/images/brands/oppo.svg" },
//     { name: "Jade Blue", logo: "/images/brands/jade-blue.svg" },
//     { name: "Simpolo", logo: "/images/brands/simpolo.svg" },
//     { name: "Poojara", logo: "/images/brands/poojara.svg" },
//     { name: "Radhika", logo: "/images/brands/radhika.svg" },
// ];

// export default function ClientsPartnership() {
//     return (
//         <section className="clients-partnership" id="clients">
//             <div className="container">
//                 <div className="clients-premium-stage">
//                     <div className="clients-orbit-bg">
//                         <span className="orbit-line orbit-line-1" />
//                         <span className="orbit-line orbit-line-2" />
//                         <span className="orbit-line orbit-line-3" />
//                     </div>

//                     <div className="clients-center-content">
//                         <span className="clients-eyebrow">Clients and Partnership</span>

//                         <h2>
//                             Trusted by <em>50+ national and international brands.</em>
//                         </h2>

//                         <p>
//                             Mukesh Arts brings brand trust, airport coordination, and
//                             relationship-led execution into one business conversation.
//                         </p>
//                     </div>

//                     <div className="clients-orbit-track">
//                         {brands.map((brand, index) => (
//                             <div
//                                 key={brand.name}
//                                 className="brand-orbit-item"
//                                 style={
//                                     {
//                                         "--angle": `${(360 / brands.length) * index}deg`,
//                                     } as CSSProperties
//                                 }
//                             >
//                                 <div className="brand-logo-bubble">
//                                     <img src={brand.logo} alt={brand.name} />
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }








// "use client";

// import type { CSSProperties } from "react";
// import "./Home.css";

// const items = [
//     { id: 1, img: "/images/art1.jpg" },
//     { id: 2, img: "/images/art2.jpg" },
//     { id: 3, img: "/images/art3.jpg" },
//     { id: 4, img: "/images/art4.jpg" },
//     { id: 5, img: "/images/art5.jpg" },
//     { id: 6, img: "/images/art6.jpg" },
//     { id: 7, img: "/images/art7.jpg" },
//     { id: 8, img: "/images/art8.jpg" },
//     { id: 9, img: "/images/art9.jpg" },
// ];

// export default function ClientsPartnership() {
//     // Distribute items neatly along a top arch (e.g., from -75 degrees to +75 degrees)
//     const startAngle = -75;
//     const endAngle = 75;
//     const totalItems = items.length;
//     const angleStep = (endAngle - startAngle) / (totalItems - 1);

//     return (
//         <section className="premium-showcase-section" id="clients">
//             <div className="premium-container">

//                 {/* Decorative Arch Container for Desktop */}
//                 <div className="premium-arch-wrapper">
//                     {items.map((item, index) => {
//                         const currentAngle = startAngle + angleStep * index;
//                         // Introduce a subtle natural variation in rotation for a realistic physical layout
//                         const naturalTilt = currentAngle * 0.4;

//                         return (
//                             <div
//                                 key={item.id}
//                                 className="premium-arch-card"
//                                 style={{
//                                     "--card-angle": `${currentAngle}deg`,
//                                     "--card-tilt": `${naturalTilt}deg`,
//                                 } as CSSProperties}
//                             >
//                                 <div className="premium-card-inner">
//                                     <img src={item.img} alt={`Showcase visual ${item.id}`} loading="lazy" />
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 {/* Core Content Area */}
//                 <div className="premium-content-block">
//                     <span className="premium-eyebrow">Clients & Partnerships</span>

//                     <h2 className="premium-heading">
//                         Create Stunning AI Generated <br /> Photos Instantly
//                     </h2>

//                     <p className="premium-subtext">
//                         Transform your ideas into breathtaking visuals with cutting-edge AI technology.
//                     </p>

//                     <button className="premium-cta-btn">
//                         Start Generating Now
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>

//                 {/* Feature Grid Summary Row */}
//                 <div className="premium-features-row">
//                     <div className="feature-item">
//                         <h3>Realistic Results</h3>
//                         <p>Realistic, beautiful photos that look professionally crafted.</p>
//                     </div>
//                     <div className="feature-item">
//                         <h3>Fast Generation</h3>
//                         <p>Turn ideas into images in seconds.</p>
//                     </div>
//                     <div className="feature-item">
//                         <h3>Diverse Styles</h3>
//                         <p>Choose from a wide range of artistic styles.</p>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }








// "use client";

// import { useState } from "react";
// import "./Home.css";

// const categories = [
//   "Events",
//   "Campaigns",
//   "Private Campaigns",
//   "Corporate Campaigns",
//   "Temporary Agency Campaigns"
// ];

// const featureSteps = [
//   {
//     num: "01",
//     title: "Owner-operated media",
//     desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery."
//   },
//   {
//     num: "02",
//     title: "ASCO-led airport access",
//     desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team."
//   },
//   {
//     num: "03",
//     title: "Relationship-first execution",
//     desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction."
//   }
// ];

// export default function ClientsPartnership() {
//   const [activeTab, setActiveTab] = useState("Events");

//   return (
//     <section className="premium-features-section" id="features">
//       <div className="features-container">

//         {/* Step 1: Premium Filter Pills Layer */}
//         <div className="filter-pills-row">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`filter-pill-btn ${activeTab === category ? "is-active" : ""}`}
//               onClick={() => setActiveTab(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Step 2: Cards Canvas Grid with connecting wave accent logic */}
//         <div className="features-cards-grid">
//           {/* Decorative Path Line mimicking Image 2 */}
//           <div className="decor-connecting-curve">
//             <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
//               <path 
//                 d="M0,40 C150,110 300,10 450,40 C600,70 750,110 900,50 C1050,0 1150,60 1200,40" 
//                 stroke="rgba(227, 32, 25, 0.15)" 
//                 strokeWidth="2" 
//                 strokeDasharray="6 6"
//               />
//             </svg>
//           </div>

//           {featureSteps.map((step) => (
//             <div key={step.num} className="premium-feature-card">
//               {/* Giant abstract watermark number inspired by image 2 */}
//               <div className="card-watermark-num">{parseInt(step.num, 10)}</div>

//               <div className="card-inner-payload">
//                 <span className="card-step-indicator">{step.num}</span>
//                 <h3 className="card-main-title">{step.title}</h3>
//                 <p className="card-description">{step.desc}</p>
//               </div>

//               {/* Minimalist node dot tracker detailing step flow */}
//               <div className="card-flow-node">
//                 <span className="node-dot" />
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }












// "use client";

// import { useState, type CSSProperties } from "react";
// import "./Home.css";

// const brands = [
//     { name: "Apple", logo: "/images/brands/apple.svg" },
//     { name: "Google", logo: "/images/brands/google.svg" },
//     { name: "Vivo", logo: "/images/brands/vivo.svg" },
//     { name: "Oppo", logo: "/images/brands/oppo.svg" },
//     { name: "Jade Blue", logo: "/images/brands/jade-blue.svg" },
//     { name: "Simpolo", logo: "/images/brands/simpolo.svg" },
//     { name: "Poojara", logo: "/images/brands/poojara.svg" },
//     { name: "Radhika", logo: "/images/brands/radhika.svg" },
// ];

// const categories = [
//     "Events",
//     "Campaigns",
//     "Private Campaigns",
//     "Corporate Campaigns",
//     "Temporary Agency Campaigns"
// ];

// const featureSteps = [
//     {
//         num: "01",
//         title: "Owner-operated media",
//         desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery."
//     },
//     {
//         num: "02",
//         title: "ASCO-led airport access",
//         desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team."
//     },
//     {
//         num: "03",
//         title: "Relationship-first execution",
//         desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction."
//     }
// ];

// export default function ClientsPartnership() {
//     const [activeTab, setActiveTab] = useState("Events");

//     // Triplicate the array to build a visually endless looping orbit
//     const infiniteBrands = [...brands, ...brands, ...brands];

//     return (
//         <section className="premium-showcase-section" id="clients">

//             {/* ================= TOP REGION: INFINITE ORBITING BRANDS ================= */}
//             <div className="premium-orbit-container">
//                 <div className="premium-track-viewport">
//                     <div className="premium-orbit-track">
//                         {infiniteBrands.map((brand, index) => {
//                             const angleOffset = (360 / brands.length) * index;
//                             return (
//                                 <div
//                                     key={`${brand.name}-${index}`}
//                                     className="premium-arch-card"
//                                     style={{
//                                         "--card-offset-angle": `${angleOffset}deg`,
//                                     } as CSSProperties}
//                                 >
//                                     <div className="premium-card-inner">
//                                         <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Hero Copy Engine */}
//                 <div className="premium-content-block">
//                     <span className="premium-eyebrow">Clients & Partnerships</span>
//                     <h2 className="premium-heading">
//                         Trusted by <em>50+ national</em> <br /> and international brands.
//                     </h2>
//                     <p className="premium-subtext">
//                         Mukesh Arts brings brand trust, airport coordination, and relationship-led execution into one business conversation.
//                     </p>
//                     <button className="premium-cta-btn">
//                         Start Generating Now
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* ================= BOTTOM REGION: INTERACTIVE FEATURE TILES ================= */}
//             <div className="features-container">

//                 {/* Category Segmented Controls */}
//                 <div className="filter-pills-row">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             className={`filter-pill-btn ${activeTab === category ? "is-active" : ""}`}
//                             onClick={() => setActiveTab(category)}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Crisp Outlined Data Display Cards */}
//                 <div className="features-cards-grid">
//                     {/* Wave Curve decorative connector layout layer */}
//                     <div className="decor-connecting-curve">
//                         <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
//                             <path
//                                 d="M0,40 C150,110 300,10 450,40 C600,70 750,110 900,50 C1050,0 1150,60 1200,40"
//                                 stroke="rgba(227, 32, 25, 0.12)"
//                                 strokeWidth="1.5"
//                                 strokeDasharray="6 6"
//                             />
//                         </svg>
//                     </div>

//                     {featureSteps.map((step) => (
//                         <div key={step.num} className="premium-feature-card">
//                             {/* Subtle backdropped huge step matrix indicator */}
//                             <div className="card-watermark-num">{parseInt(step.num, 10)}</div>

//                             <div className="card-inner-payload">
//                                 <span className="card-step-indicator">{step.num}</span>
//                                 <h3 className="card-main-title">{step.title}</h3>
//                                 <p className="card-description">{step.desc}</p>
//                             </div>

//                             {/* Step flow dynamic node design marker */}
//                             <div className="card-flow-node">
//                                 <span className="node-dot" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }





// "use client";

// import { useState, type CSSProperties } from "react";
// import "./Home.css";

// const brands = [
//     { name: "Apple", logo: "/images/brands/apple.svg" },
//     { name: "Google", logo: "/images/brands/google.svg" },
//     { name: "Vivo", logo: "/images/brands/vivo.svg" },
//     { name: "Oppo", logo: "/images/brands/oppo.svg" },
//     { name: "Jade Blue", logo: "/images/brands/jade-blue.svg" },
//     { name: "Simpolo", logo: "/images/brands/simpolo.svg" },
//     { name: "Poojara", logo: "/images/brands/poojara.svg" },
//     { name: "Radhika", logo: "/images/brands/radhika.svg" },
// ];

// const categories = [
//     "Events",
//     "Campaigns",
//     "Private Campaigns",
//     "Corporate Campaigns",
//     "Temporary Agency Campaigns"
// ];

// const featureSteps = [
//     {
//         num: "01",
//         title: "Owner-operated media",
//         desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery."
//     },
//     {
//         num: "02",
//         title: "ASCO-led airport access",
//         desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team."
//     },
//     {
//         num: "03",
//         title: "Relationship-first execution",
//         desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction."
//     }
// ];

// export default function ClientsPartnership() {
//     const [activeTab, setActiveTab] = useState("Events");

//     // Triplicate the array for an unbroken, infinite orbital rotation loop
//     const infiniteBrands = [...brands, ...brands, ...brands];

//     return (
//         <section className="premium-showcase-section" id="clients">

//             {/* ================= TOP HERO ORBIT BLOCK ================= */}
//             <div className="premium-orbit-container">

//                 {/* Floating track viewport locked structurally into position */}
//                 <div className="premium-track-viewport">
//                     <div className="premium-orbit-track">
//                         {infiniteBrands.map((brand, index) => {
//                             // Calculate the degree angle directly inside JavaScript to fix compiling errors
//                             const calculatedAngle = (360 / infiniteBrands.length) * index;

//                             return (
//                                 <div
//                                     key={`${brand.name}-${index}`}
//                                     className="premium-arch-card"
//                                     style={{
//                                         transform: `rotate(${calculatedAngle}deg) translateY(-340px)`,
//                                         transformOrigin: "50% 340px"
//                                     }}
//                                 >
//                                     <div className="premium-card-inner">
//                                         <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Content Node Frame */}
//                 <div className="premium-content-block">
//                     <span className="premium-eyebrow">Clients & Partnerships</span>
//                     <h2 className="premium-heading">
//                         Trusted by <em>50+ national</em> <br /> and international brands.
//                     </h2>
//                     <p className="premium-subtext">
//                         Mukesh Arts brings brand trust, airport coordination, and relationship-led execution into one business conversation.
//                     </p>
//                     <button className="premium-cta-btn">
//                         Start Generating Now
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>
//             </div>

//             {/* ================= BOTTOM INTERACTIVE DATA GRID ================= */}
//             <div className="features-container">

//                 <div className="filter-pills-row">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             className={`filter-pill-btn ${activeTab === category ? "is-active" : ""}`}
//                             onClick={() => setActiveTab(category)}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="features-cards-grid">
//                     <div className="decor-connecting-curve">
//                         <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
//                             <path
//                                 d="M0,40 C150,110 300,10 450,40 C600,70 750,110 900,50 C1050,0 1150,60 1200,40"
//                                 stroke="rgba(227, 32, 25, 0.12)"
//                                 strokeWidth="1.5"
//                                 strokeDasharray="6 6"
//                             />
//                         </svg>
//                     </div>

//                     {featureSteps.map((step) => (
//                         <div key={step.num} className="premium-feature-card">
//                             <div className="card-watermark-num">{parseInt(step.num, 10)}</div>

//                             <div className="card-inner-payload">
//                                 <span className="card-step-indicator">{step.num}</span>
//                                 <h3 className="card-main-title">{step.title}</h3>
//                                 <p className="card-description">{step.desc}</p>
//                             </div>

//                             <div className="card-flow-node">
//                                 <span className="node-dot" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }





// "use client";

// import { useState } from "react";
// import "./Home.css";

// const brands = [
//     { name: "Apple", logo: "/images/brands/apple.svg" },
//     { name: "Google", logo: "/images/brands/google.svg" },
//     { name: "Vivo", logo: "/images/brands/vivo.svg" },
//     { name: "Oppo", logo: "/images/brands/oppo.svg" },
//     { name: "Jade Blue", logo: "/images/brands/jade-blue.svg" },
//     { name: "Simpolo", logo: "/images/brands/simpolo.svg" },
//     { name: "Poojara", logo: "/images/brands/poojara.svg" },
//     { name: "Radhika", logo: "/images/brands/radhika.svg" },
// ];

// const categories = [
//     "Events",
//     "Campaigns",
//     "Private Campaigns",
//     "Corporate Campaigns",
//     "Temporary Agency Campaigns"
// ];

// const featureSteps = [
//     {
//         num: "01",
//         title: "Owner-operated media",
//         desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery."
//     },
//     {
//         num: "02",
//         title: "ASCO-led airport access",
//         desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team."
//     },
//     {
//         num: "03",
//         title: "Relationship-first execution",
//         desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction."
//     }
// ];

// export default function ClientsPartnership() {
//     const [activeTab, setActiveTab] = useState("Events");

//     // Triplicate the array for an unbroken, infinite orbital rotation loop
//     const infiniteBrands = [...brands, ...brands, ...brands];

//     return (
//         <section className="premium-showcase-section" id="clients">

//             {/* ================= TOP HERO ORBIT BLOCK ================= */}
//             {/* <div className="premium-orbit-container">


//                 <div className="orbit-system-height-box">
//                     <div className="premium-track-viewport">
//                         <div className="premium-orbit-track">
//                             {infiniteBrands.map((brand, index) => {
//                                 const calculatedAngle = (360 / infiniteBrands.length) * index;

//                                 return (
//                                     <div
//                                         key={`${brand.name}-${index}`}
//                                         className="premium-arch-card"
//                                         style={{
//                                             transform: `rotate(${calculatedAngle}deg) translateY(-260px)`,
//                                             transformOrigin: "50% 260px"
//                                         }}
//                                     >
//                                         <div className="premium-card-inner">
//                                             <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" />
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 </div>


//                 <div className="premium-content-block">
//                     <span className="premium-eyebrow">Clients & Partnerships</span>
//                     <h2 className="premium-heading">
//                         Trusted by <em>50+ national</em> <br /> and international brands.
//                     </h2>
//                     <p className="premium-subtext">
//                         Mukesh Arts brings brand trust, airport coordination, and relationship-led execution into one business conversation.
//                     </p>
//                     <button className="premium-cta-btn">
//                         Start Generating Now
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </button>
//                 </div>
//             </div> */}



//             {/* ================= BOTTOM INTERACTIVE DATA GRID ================= */}
//             <div className="features-container">

//                 <div className="filter-pills-row">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             className={`filter-pill-btn ${activeTab === category ? "is-active" : ""}`}
//                             onClick={() => setActiveTab(category)}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>

//                 {/* <div className="features-cards-grid">
//                     <div className="decor-connecting-curve">
//                         <svg viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
//                             <path
//                                 d="M0,40 C150,110 300,10 450,40 C600,70 750,110 900,50 C1050,0 1150,60 1200,40"
//                                 stroke="rgba(227, 32, 25, 0.12)"
//                                 strokeWidth="1.5"
//                                 strokeDasharray="6 6"
//                             />
//                         </svg>
//                     </div>

//                     {featureSteps.map((step) => (
//                         <div key={step.num} className="premium-feature-card">
//                             <div className="card-watermark-num">{parseInt(step.num, 10)}</div>

//                             <div className="card-inner-payload">
//                                 <span className="card-step-indicator">{step.num}</span>
//                                 <h3 className="card-main-title">{step.title}</h3>
//                                 <p className="card-description">{step.desc}</p>
//                             </div>

//                             <div className="card-flow-node">
//                                 <span className="node-dot" />
//                             </div>
//                         </div>
//                     ))}
//                 </div> */}
//                 <div className="features-cards-grid">
//                     <div className="decor-connecting-curve" aria-hidden="true">
//                         <svg viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
//                             <path
//                                 d="M70 92 C190 150 270 10 420 54 C560 95 650 135 790 78 C955 12 1045 38 1130 70"
//                                 stroke="#e32019"
//                                 strokeWidth="3.2"
//                                 strokeLinecap="round"
//                                 fill="none"
//                             />

//                             <circle cx="190" cy="95" r="15" fill="#ffffff" />
//                             <circle cx="190" cy="95" r="6" fill="#cfd7df" />

//                             <circle cx="610" cy="105" r="15" fill="#ffffff" />
//                             <circle cx="610" cy="105" r="8" fill="#cfd7df" />

//                             <circle cx="1015" cy="40" r="15" fill="#ffffff" />
//                             <circle cx="1015" cy="40" r="6" fill="#cfd7df" />
//                         </svg>
//                     </div>

//                     {featureSteps.map((step) => (
//                         <div key={step.num} className="premium-feature-card">
//                             <div className="card-watermark-num">
//                                 {parseInt(step.num, 10)}
//                             </div>

//                             <div className="card-inner-payload">
//                                 <span className="card-step-indicator">{step.num}</span>
//                                 <h3 className="card-main-title">{step.title}</h3>
//                                 <p className="card-description">{step.desc}</p>
//                             </div>

//                             <div className="card-flow-node">
//                                 <span className="node-dot" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//             </div>
//         </section>
//     );
// }












"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import "./Home.css";
import oppo from '@/public/images/clients/oppo.jpg'
import vivo from '@/public/images/clients/vivo.png'
import apple from '@/public/images/clients/apple.jpg'
import poojara from '@/public/images/clients/poojara.svg'
import google from '@/public/images/clients/google.png'
import jade from '@/public/images/clients/jadeblue.webp'
import simpolo from '@/public/images/clients/simpolo.webp'
import oneplus from '@/public/images/clients/oneplus.png'
import radhika from '@/public/images/clients/radhikajwl.png'





const items = [
    { id: 1, img: poojara, },
    { id: 2, img: oppo, },
    { id: 3, img: vivo, },
    { id: 4, img: google },
    { id: 5, img: apple },
    { id: 6, img: jade },
    { id: 7, img: radhika },
    { id: 8, img: oneplus },
    { id: 9, img: simpolo },

];

const categories = ["Events", "Campaigns", "Private Campaigns", "Corporate Campaigns", "Temporary Agency Campaigns"];
const featureSteps = [{ num: "01", title: "Owner-operated media", desc: "The same team that sells the plan also understands sites, operations, approvals, and campaign delivery." }, { num: "02", title: "ASCO-led airport access", desc: "Airport visits, checks, access windows, and protocol coordination are handled by the ASCO side with a ready ground team." }, { num: "03", title: "Relationship-first execution", desc: "Brands get hospitality, clear follow-through, and a deeper business relationship beyond a one-time media transaction." }];

export default function ClientsPartnership() {
    // Distribute items neatly along a top arch (e.g., from -75 degrees to +75 degrees)
    const startAngle = -75;
    const endAngle = 75;
    const totalItems = items.length;
    const angleStep = (endAngle - startAngle) / (totalItems - 1);

    return (
        <section className="premium-showcase-section" id="clients">
            <div className="container">
                <div className="pre-container">
                    <div className="premium-container">

                        {/* Decorative Arch Container for Desktop */}
                        <div className="premium-arch-wrapper">
                            {items.map((item, index) => {
                                const currentAngle = startAngle + angleStep * index;
                                // Introduce a subtle natural variation in rotation for a realistic physical layout
                                const naturalTilt = currentAngle * 0.4;

                                return (
                                    <div
                                        key={item.id}
                                        className="premium-arch-card"
                                        style={{
                                            "--card-angle": `${currentAngle}deg`,
                                            "--card-tilt": `${naturalTilt}deg`,
                                        } as CSSProperties}
                                    >
                                        <div className="premium-card-inner">
                                            {/* <img src={item.img} alt={`Showcase visual ${item.id}`} loading="lazy" /> */}
                                            <Image
                                                src={item.img}
                                                alt=""
                                                width={600}
                                                height={400}
                                            />
                                            {/* <img src={item.img} alt={`${item.name} logo`} loading="lazy" /> */}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <div className="premium-content-block">
                        <span className="premium-eyebrow">Clients & Partnerships</span>

                        <h2 className="premium-heading">
                            Trusted by <em>50+ brands</em> <br />
                            across premium campaigns.
                        </h2>

                        <p className="premium-subtext">
                            Mukesh Arts connects premium brands with Rajkot Airport’s passenger journey
                            through trusted media planning, airport coordination, and relationship-led execution.
                        </p>

                        <a href="#contact" className="premium-cta-btn">
                            <span>Plan Your Campaign</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                <path
                                    d="M3.5 8h8M8.5 4.5L12 8l-3.5 3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>


                    <div className="features-cards-grid">
                        <div className="decor-connecting-curve" aria-hidden="true">
                            <svg viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
                                <path
                                    d="M70 92 C190 150 270 10 420 54 C560 95 650 135 790 78 C955 12 1045 38 1130 70"
                                    stroke="#e32019"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                <circle cx="190" cy="95" r="15" fill="#ffffff" />
                                <circle cx="190" cy="95" r="6" fill="#cfd7df" />

                                <circle cx="610" cy="105" r="15" fill="#ffffff" />
                                <circle cx="610" cy="105" r="8" fill="#cfd7df" />

                                <circle cx="1015" cy="40" r="15" fill="#ffffff" />
                                <circle cx="1015" cy="40" r="6" fill="#cfd7df" />
                            </svg>
                        </div>

                        {featureSteps.map((step) => (
                            <div key={step.num} className="premium-feature-card">
                                <div className="card-watermark-num">
                                    {parseInt(step.num, 10)}
                                </div>

                                <div className="card-inner-payload">
                                    <span className="card-step-indicator">{step.num}</span>
                                    <h3 className="card-main-title">{step.title}</h3>
                                    <p className="card-description">{step.desc}</p>
                                </div>

                                <div className="card-flow-node">
                                    <span className="node-dot" />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section >
    );
}