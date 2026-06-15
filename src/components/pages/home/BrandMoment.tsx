// import "./Home.css";

// const cards = [
//     {
//         number: "01",
//         title: "Premium Audience",
//         text: "Reach business travellers, families, NRIs, professionals, and high-value decision-makers.",
//     },
//     {
//         number: "02",
//         title: "High Attention",
//         text: "Airport spaces offer less clutter, longer dwell time, and stronger brand recall.",
//     },
//     {
//         number: "03",
//         title: "Strategic Presence",
//         text: "Visibility across arrival, departure, waiting, and passenger movement zones.",
//     },
// ];

// export default function BrandMoment() {
//     return (
//         <section className="brand-moment" id="about">
//             <div className="container brand-moment-inner">
//                 <div className="brand-moment-content">
//                     <span className="section-kicker">Why Airport Media</span>

//                     <h2>
//                         Your brand doesn’t just appear —{" "}
//                         <em>it arrives with your audience.</em>
//                     </h2>

//                     <p>
//                         Rajkot Airport Advertising Media gives brands a premium space to be
//                         seen by travellers when attention is higher, movement is focused,
//                         and recall is stronger than regular outdoor media.
//                     </p>

//                     <a href="#inventory" className="brand-moment-btn">
//                         Explore Inventory
//                         <span>→</span>
//                     </a>
//                 </div>

//                 <div className="brand-moment-cards">
//                     {cards.map((item) => (
//                         <article key={item.number} className="moment-card">
//                             <span>{item.number}</span>
//                             <h3>{item.title}</h3>
//                             <p>{item.text}</p>
//                         </article>
//                     ))}
//                 </div>

//                 <div className="brand-moment-quote">
//                     “Airport media is not only about visibility. It is about being seen in
//                     the right environment.”
//                 </div>
//             </div>
//         </section>
//     );
// }








function WhyAirport() {
    const cards = [
        {
            n: "01",
            t: "Premium Gujarat audience",
            p: "Business families, NRI movement, industrial corridors, and premium regional buyers pass through one controlled airport environment.",
        },
        {
            n: "02",
            t: "Cleaner brand attention",
            p: "Airport dwell time gives brands a calmer, higher-recall environment than crowded outdoor corridors.",
        },
        {
            n: "03",
            t: "Guided media planning",
            p: "We match digital, static, and journey placements to the campaign window before commercial discussion.",
        },
    ];

    return (
        <section className="why-airport-editorial section" id="whyairportmedia" data-animate>
            <div className="container">
                <div className="why-editorial-head">
                    <div>
                        <span className="eyebrow">Why Rajkot Int Airport</span>
                        <h2 className="why-editorial-title">
                            Premium recall, airport access, and{" "}
                            <em>ground-backed execution</em>.
                        </h2>
                    </div>

                    <p>
                        The value is not only the board. It is the audience, the access, the
                        visit handling, and the team that knows how airport media actually
                        moves.
                    </p>
                </div>

                <div className="why-editorial-grid" data-stagger>
                    {cards.map((card) => (
                        <article className="why-editorial-card" key={card.n} data-stagger-item>
                            <span>{card.n}</span>
                            <h3>{card.t}</h3>
                            <p>{card.p}</p>
                        </article>
                    ))}
                </div>

                <div className="brand-moment-quote">
                    Airport media is not only about visibility.<br />
                    It is about being seen in the right environment.
                </div>
            </div>



        </section>
    );
}

export default WhyAirport;