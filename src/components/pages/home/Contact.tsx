import "./Home.css";

export default function Contact() {
    return (
        <section className="contact-section" id="contact" data-animate>
            <div className="container contact-inner">
                <div className="contact-content">
                    <span className="section-tag">Contact Us</span>

                    <h2>
                        Let’s plan your next <em>airport media campaign.</em>
                    </h2>

                    <p>
                        Share your campaign requirement, preferred media type, and timeline.
                        Our team will help you choose the right advertising spaces at Rajkot
                        Airport.
                    </p>

                    <div className="contact-info">
                        <div>
                            <span>Location</span>
                            {/* <p>Rajkot International Airport, Gujarat</p> */}
                            <p>PLOT NO. 71, SURVEY NO. 145, JAMBUDIYA, Morbi, Gujarat - 363642.</p>
                        </div>

                        <div>
                            <span>Email</span>
                            <p>info@example.com</p>
                        </div>

                        <div>
                            <span>Response</span>
                            <p>Within 1 working day</p>
                        </div>
                    </div>
                </div>

                {/* <form className="contact-form">
                    <div className="form-row">
                        <label>
                            <span>Name *</span>
                            <input type="text" placeholder="Your name" />
                        </label>

                        <label>
                            <span>Phone *</span>
                            <input type="tel" placeholder="+91" />
                        </label>
                    </div>

                    <label>
                        <span>Company / Brand</span>
                        <input type="text" placeholder="Company name" />
                    </label>

                    <label>
                        <span>Campaign Interest</span>
                        <select defaultValue="">
                            <option value="" disabled>
                                Select media type
                            </option>
                            <option>Digital Screens</option>
                            <option>Static Boards</option>
                            <option>Airport Branding</option>
                            <option>Full Airport Plan</option>
                        </select>
                    </label>

                    <label>
                        <span>Message</span>
                        <textarea
                            rows={5}
                            placeholder="Tell us about your campaign, timeline, or budget range"
                        />
                    </label>

                    <button type="submit">Request Media Kit</button>
                </form> */}
                <form className="contact-form">
                    <div className="form-row">
                        <label className="field-wrap">
                            <span>Name *</span>
                            <div className="premium-input">
                                <input type="text" placeholder="Your name" />
                            </div>
                        </label>

                        <label className="field-wrap">

                            <span>Phone *</span>
                            {/* <input type="tel" placeholder="+91" /> */}
                            <div className="premium-input">
                                <input type="tel" placeholder="+91" />
                            </div>
                        </label>
                    </div>

                    <label className="field-wrap">
                        <span>Company / Brand</span>
                        <div className="premium-input">
                            <input type="text" placeholder="Company name" />
                        </div>
                    </label>

                    <label className="field-wrap">
                        <span>Campaign Interest</span>
                        <div className="premium-select">
                            <select defaultValue="">
                                <option value="" disabled>
                                    Select media type
                                </option>
                                <option>Digital Screens</option>
                                <option>Static Boards</option>
                                <option>Airport Branding</option>
                                <option>Full Airport Plan</option>
                            </select>
                        </div>
                    </label>

                    <label className="field-wrap">
                        <span>Message</span>
                        <div className="premium-input">
                            <textarea
                                rows={5}
                                placeholder="Tell us about your campaign, timeline, or budget range"
                            />
                        </div>
                    </label>

                    <button type="submit" className="contact-submit">
                        <span>Request Media Kit</span>
                        <b>→</b>
                    </button>
                </form>
            </div>
        </section>
    );
}