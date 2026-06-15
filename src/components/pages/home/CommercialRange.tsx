import "./Home.css";

export default function CommercialRange() {
    return (
        <section className="commercial-fixed-card" id="commercial">

            <div className="commercial-fixed-inner">
                <div className="commercial-fixed-content">
                    <span className="commercial-fixed-tag">Commercial Range</span>

                    <h2>
                        Wide airport media inventory, starting from
                        <em> ₹2L+ per month.</em>
                    </h2>

                    <p>
                        Pricing stays consultative. Serious buyers share their campaign window,
                        then receive the right plan, availability, and owner-side follow-up.
                    </p>

                    {/* <a href="#contact">Discuss campaign</a> */}
                </div>

                <div className="commercial-fixed-meta">
                    <div>
                        <strong>₹2L+</strong>
                        <span>Starting monthly range</span>
                    </div>

                    <div>
                        <strong>Custom</strong>
                        <span>Plan based on media mix</span>
                    </div>
                </div>
            </div>
        </section>
    );
}