// const AIRPORT_STATS = [
//     {
//         value: "10-15",
//         label: "Advertising Sites",
//     },
//     {
//         value: "70-80",
//         label: "Media Surfaces",
//     },
//     {
//         value: "24/7",
//         label: "Passenger Visibility",
//     },
//     {
//         value: "100%",
//         label: "Premium Reach",
//     },
// ];

// export default function Hero() {
//     return (
//         <section id="top" className="hero">
//             <div
//                 className="hero-photo day"
//                 style={{
//                     backgroundImage: "url('/img/hero-day.png')",
//                 }}
//             />

//             <div
//                 className="hero-photo night"
//                 style={{
//                     backgroundImage: "url('/img/hero-night.png')",
//                 }}
//             />

//             <div className="container hero-content">
//                 <span className="eyebrow hero-eyebrow">
//                     Rajkot Airport x Mukesh Arts
//                 </span>

//                 <h1 className="hero-h1">
//                     Airport visibility, <em>engineered.</em>
//                 </h1>

//                 <p className="hero-sub">
//                     A premium media network for brands that want Saurashtra's travelling
//                     audience and the high-context recall only an airport environment
//                     delivers. Inventory you can shortlist, plans you can actually pitch
//                     internally, and a path to a CRM-tracked relationship.
//                 </p>

//                 <div className="hero-actions">
//                     <a href="#inventory" className="btn-primary">
//                         Preview the Portfolio
//                     </a>

//                     <a href="#identity" className="btn-ghost">
//                         Compare Identity Routes
//                     </a>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="hero-stats">
//                     {AIRPORT_STATS.map((stat) => (
//                         <article key={stat.label}>
//                             <strong>{stat.value}</strong>
//                             <span>{stat.label}</span>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }












// import airportVideo from "@/public/videos/hero_media.mp4";

const AIRPORT_STATS = [
    { value: "10-15", label: "Prime Ad Sites" },
    { value: "70-80", label: "Media Surfaces" },
    { value: "24/7", label: "Airport Visibility" },
    { value: "100%", label: "Premium Brand Recall" },
];
const airportVideo = "/videos/hero_media.mp4";
export default function Hero() {
    return (
        <section id="top" className="hero">
            {/* <video className="hero-video" autoPlay muted loop playsInline>
                <source src="/videos/airport-hero.mp4" type="video/mp4" />
            </video> */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={airportVideo} type="video/mp4" />
            </video>

            <div className="hero-overlay" />
            <div className="hero-glow hero-glow-left" />
            <div className="hero-glow hero-glow-right" />

            <div className="container hero-content">
                <div className="hero-badge">
                    <span></span>
                    Rajkot Airport Advertising Media
                </div>

                <h1 className="hero-h1">
                    Premium Airport Media for <em>High-Impact Brands.</em>
                </h1>

                <p className="hero-sub">
                    Showcase your brand across Rajkot Airport’s premium advertising
                    network with high-visibility airport media, digital screens, static
                    boards, and passenger journey touchpoints designed for maximum recall.
                </p>

                {/* <div className="hero-actions">
                    <a href="#inventory" className="btn-primary">
                        View Inventory
                    </a>

                    <a href="#contact" className="btn-ghost">
                        Request Media Kit
                    </a>
                </div> */}


                {/* <div className="hero-trust">
                    <span>OOH Media</span>
                    <span>Airport Branding</span>
                    <span>Digital Screens</span>
                    <span>Static Boards</span>
                </div> */}
                <div className="hero-trust">
                    {[
                        "OOH Media",
                        "Airport Branding",
                        "Digital Screens",
                        "Static Boards",
                    ].map((item, index) => (
                        <span key={item} style={{ "--i": index } as React.CSSProperties}>
                            <b>0{index + 1}</b>
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* <div className="hero-actions">
                <a href="#inventory" className="hero-btn hero-btn-primary">
                    <span>View Inventory</span>
                    <svg viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 12H19M19 12L13 6M19 12L13 18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>

                <a href="#contact" className="hero-btn hero-btn-secondary">
                    <span>Request Media Kit</span>
                </a>
            </div> */}

            <div className="container hero-stats-wrap">
                <div className="hero-stats">
                    {AIRPORT_STATS.map((stat) => (
                        <article key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}