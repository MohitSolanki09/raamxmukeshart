
// "use client";

// import { FormEvent, useEffect, useState } from "react";

// type InventoryCategory = "Digital" | "Static" | "Journey";

// type InventoryItem = {
//     code: string;
//     category: InventoryCategory;
//     title: string;
//     summary: string;
//     leadLine: string;
//     image: string;
//     imageNight?: string;
//     gallery: string[];
//     unitCount: string;
//     format: string;
//     location: string;
//     unitRefs: string[];
// };

// const INVENTORY: InventoryItem[] = [
//     {
//         code: "DIG-01",
//         category: "Digital",
//         title: "Digital Screen Network",
//         summary: "High-impact digital displays across premium passenger zones.",
//         leadLine: "Best for product launches, festive campaigns, and brand recall.",
//         image: "/images/inventory/digital-1.jpg",
//         gallery: [
//             "/images/inventory/digital-1.jpg",
//             "/images/inventory/digital-2.jpg",
//             "/images/inventory/digital-3.jpg",
//             "/images/inventory/digital-4.jpg",
//         ],
//         unitCount: "Multiple Units",
//         format: "LED / Digital Display",
//         location: "Terminal movement zones",
//         unitRefs: ["D1", "D2", "D3"],
//     },
//     {
//         code: "STA-01",
//         category: "Static",
//         title: "Premium Static Branding",
//         summary: "Clean static branding placements for long-term visibility.",
//         leadLine: "Best for premium positioning and regional brand trust.",
//         image: "/images/inventory/static-1.jpg",
//         gallery: [
//             "/images/inventory/static-1.jpg",
//             "/images/inventory/static-2.jpg",
//             "/images/inventory/static-3.jpg",
//         ],
//         unitCount: "Selected Units",
//         format: "Backlit / Frontlit Board",
//         location: "Departure and arrival zones",
//         unitRefs: ["S1", "S2"],
//     },
//     {
//         code: "JRN-01",
//         category: "Journey",
//         title: "Passenger Journey Media",
//         summary: "A full airport journey plan from entry to boarding visibility.",
//         leadLine: "Best for full-funnel airport campaign presence.",
//         image: "/images/inventory/journey-1.jpg",
//         gallery: [
//             "/images/inventory/journey-1.jpg",
//             "/images/inventory/journey-2.jpg",
//             "/images/inventory/journey-3.jpg",
//         ],
//         unitCount: "Custom Plan",
//         format: "Mixed Media",
//         location: "Entry, check-in, waiting and arrival zones",
//         unitRefs: ["J1", "J2", "J3"],
//     },
// ];

// const FILTERS: ("All" | InventoryCategory)[] = [
//     "All",
//     "Digital",
//     "Static",
//     "Journey",
// ];

// export default function MediaInventory() {
//     const [filter, setFilter] = useState<"All" | InventoryCategory>("All");
//     const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

//     const visible =
//         filter === "All"
//             ? INVENTORY
//             : INVENTORY.filter((item) => item.category === filter);

//     return (
//         <>
//             <section className="section reveal-section" id="inventory">
//                 <div className="container">
//                     <div className="section-head">
//                         <div>
//                             <span className="eyebrow">Media Inventory</span>
//                             <h2 className="h-section">
//                                 Airport media presented like <em>a premium portfolio</em>.
//                             </h2>
//                         </div>

//                         <p className="section-head-right">
//                             Explore Rajkot Airport media options across digital screens,
//                             static boards, and passenger journey placements.
//                         </p>
//                     </div>

//                     <div className="inv-filter">
//                         <div className="chips" role="tablist">
//                             {FILTERS.map((f) => (
//                                 <button
//                                     key={f}
//                                     type="button"
//                                     className={`chip ${filter === f ? "active" : ""}`}
//                                     onClick={() => setFilter(f)}
//                                 >
//                                     {f}
//                                 </button>
//                             ))}
//                         </div>

//                         <span className="inv-count">
//                             <b>{visible.length}</b> units shown
//                         </span>
//                     </div>

//                     <div className="inv-grid">
//                         {visible.map((item, i) => (
//                             <div
//                                 className={`inv-cell ${filter === "All" && i === 0 ? "span-2" : ""
//                                     }`}
//                                 key={item.code}
//                             >
//                                 <InventoryCard item={item} onOpen={() => setActiveItem(item)} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {activeItem && (
//                 <InventoryModal item={activeItem} onClose={() => setActiveItem(null)} />
//             )}
//         </>
//     );
// }

// function InventoryCard({
//     item,
//     onOpen,
// }: {
//     item: InventoryItem;
//     onOpen: () => void;
// }) {
//     return (
//         <button type="button" className="inv-card" onClick={onOpen}>
//             <div className="inv-photo">
//                 <div
//                     className="inv-photo-img inv-photo-day"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                 />

//                 <div
//                     className="inv-photo-img inv-photo-night"
//                     style={{ backgroundImage: `url(${item.imageNight ?? item.image})` }}
//                 />

//                 <span className="inv-badge">
//                     {item.code} - {item.category}
//                 </span>

//                 <span className="inv-fan" aria-hidden="true">
//                     {item.gallery.slice(0, 4).map((src) => (
//                         <i key={src} style={{ backgroundImage: `url(${src})` }} />
//                     ))}
//                 </span>

//                 <span className="inv-fan-count">
//                     {item.gallery.length} site stills
//                 </span>
//             </div>

//             <div className="inv-body">
//                 <span className="inv-code">
//                     {item.code} - {item.unitCount}
//                 </span>

//                 <h3 className="inv-title">{item.title}</h3>
//                 <p className="inv-summary">{item.summary}</p>
//                 <p className="inv-lead">{item.leadLine}</p>

//                 <span className="inv-open">
//                     View details
//                     <svg viewBox="0 0 24 24">
//                         <path
//                             d="M5 12h12M12 6l7 6-7 6"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="1.7"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </span>
//             </div>
//         </button>
//     );
// }

// function InventoryModal({
//     item,
//     onClose,
// }: {
//     item: InventoryItem;
//     onClose: () => void;
// }) {
//     useEffect(() => {
//         const onKey = (event: KeyboardEvent) => {
//             if (event.key === "Escape") onClose();
//         };

//         document.addEventListener("keydown", onKey);
//         const oldOverflow = document.body.style.overflow;
//         document.body.style.overflow = "hidden";

//         return () => {
//             document.removeEventListener("keydown", onKey);
//             document.body.style.overflow = oldOverflow;
//         };
//     }, [onClose]);

//     function submitLead(event: FormEvent<HTMLFormElement>) {
//         event.preventDefault();
//     }

//     return (
//         <div
//             className="modal-scrim open"
//             onMouseDown={(event) => {
//                 if (event.target === event.currentTarget) onClose();
//             }}
//         >
//             <div className="inventory-modal" role="dialog" aria-modal="true">
//                 <button type="button" className="modal-close" onClick={onClose}>
//                     ×
//                 </button>

//                 <div className="modal-media">
//                     <div
//                         className="modal-media-img"
//                         style={{ backgroundImage: `url(${item.image})` }}
//                     />

//                     <span className="inv-badge">
//                         {item.code} - {item.category}
//                     </span>

//                     <div className="modal-media-cap">
//                         <span>{item.category}</span>
//                         <h4>{item.title}</h4>
//                     </div>
//                 </div>

//                 <div className="modal-side">
//                     <span className="modal-code">
//                         {item.code} - {item.unitCount}
//                     </span>

//                     <h3 className="modal-title">{item.title}</h3>
//                     <p className="modal-summary">{item.summary}</p>

//                     <div className="modal-locked">
//                         <span className="unlock-ok">Unlocked - full specification</span>

//                         <dl className="spec-list">
//                             {[
//                                 ["Format", item.format],
//                                 ["Units", item.unitCount],
//                                 ["Location", item.location],
//                                 ["References", item.unitRefs.join(", ")],
//                                 ["Best use", item.leadLine],
//                             ].map(([label, value]) => (
//                                 <div className="row" key={label}>
//                                     <dt>{label}</dt>
//                                     <dd>{value}</dd>
//                                 </div>
//                             ))}
//                         </dl>

//                         <form className="modal-form" onSubmit={submitLead}>
//                             <label className="wide">
//                                 <span>Name</span>
//                                 <input placeholder="Your name" />
//                             </label>

//                             <label>
//                                 <span>Phone</span>
//                                 <input placeholder="Phone number" />
//                             </label>

//                             <label>
//                                 <span>Company</span>
//                                 <input placeholder="Brand / agency" />
//                             </label>

//                             <button type="submit" className="btn-primary">
//                                 Request campaign plan
//                             </button>
//                         </form>

//                         <div className="modal-actions">
//                             <a href="#contact" className="btn-ghost" onClick={onClose}>
//                                 Talk to team
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





































"use client";

import { useCallback, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import type { StaticImageData } from "next/image";
import "./Home.css";

import air7 from "@/public/images/inventory/air7.png";
import air8 from "@/public/images/inventory/air8.png";
import air9 from "@/public/images/inventory/air5.png";
import air6 from "@/public/images/inventory/air6.png";
import air1 from "@/public/images/inventory/air1.png";
import air2 from "@/public/images/inventory/air2.png";




type InventoryImage = StaticImageData | string;

type InventoryItem = {
    code: string;
    category: string;
    title: string;
    summary: string;
    leadLine: string;
    image: InventoryImage;
    gallery: InventoryImage[];
    units: string;
};

function getImageUrl(image: InventoryImage) {
    return typeof image === "string" ? image : image.src;
}

const inventoryItems: InventoryItem[] = [
    {
        code: "PKG-01",
        category: "Digital Packages",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air7,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-02",
        category: "Digital Packages",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air9,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-03",
        category: "Static Boards",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air6,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-04",
        category: "Static Boards",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air2,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
    {
        code: "PKG-05",
        category: "Custom Plans",
        title: "Arrival + SHA Digital Loop",
        summary:
            "Broad digital coverage across arrival and waiting zones where passengers naturally slow down.",
        leadLine:
            "Good for recall campaigns, local premium launches, real estate, jewellery, education, and auto.",
        image: air1,
        gallery: [air8, air9, air7],
        units: "18 Units",
    },
];

const filters = [
    "All",
    "Digital Packages",
    "Static Boards",
    "Passenger Journey",
    "Custom Plans",
];

export default function InventoryPackages() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [activeItem, setActiveItem] = useState<InventoryItem | null>(null);

    const visibleItems =
        activeFilter === "All"
            ? inventoryItems
            : inventoryItems.filter((item) => item.category === activeFilter);

    return (
        <>
            <section className="inventory-portfolio" id="inventory" data-animate>
                <div className="container">
                    <div className="inventory-head">
                        <div>
                            <span className="inventory-eyebrow">Inventory Portfolio</span>
                            <h2>
                                Inventory presented like <em>a body of work.</em>
                            </h2>
                        </div>

                        <p>
                            Buyers see the range first. Full references, availability, and
                            commercial discussion unlock when the campaign intent is real.
                        </p>
                    </div>

                    <div className="inventory-filter-row">
                        <div className="inventory-chips">
                            {filters.map((filter) => (
                                <button
                                    key={filter}
                                    type="button"
                                    className={activeFilter === filter ? "active" : ""}
                                    onClick={() => setActiveFilter(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <span className="inventory-count">
                            <b>{visibleItems.length}</b> units shown
                        </span>
                    </div>

                    <div className="inventory-masonry">
                        {visibleItems.map((item, index) => (
                            <button
                                type="button"
                                className={`inventory-work ${index === 0 ? "large" : ""}`}
                                key={item.code}
                                onClick={() => setActiveItem(item)}
                            >
                                <div className="inventory-work-image">
                                    <img src={getImageUrl(item.image)} alt={item.title} />

                                    <span className="inventory-badge">
                                        {item.code} - {item.category}
                                    </span>

                                    <div className="inventory-gallery-stack" aria-hidden="true">
                                        {item.gallery.slice(0, 3).map((img, index) => (
                                            <i
                                                key={`${item.code}-${index}`}
                                                className="gallery-card"
                                                style={
                                                    {
                                                        backgroundImage: `url(${getImageUrl(img)})`,
                                                        "--i": index,
                                                    } as React.CSSProperties
                                                }
                                            />
                                        ))}
                                    </div>

                                    <b className="inventory-site-count">
                                        {item.gallery.length} Site Stills
                                    </b>
                                </div>

                                <div className="inventory-work-body">
                                    <small>
                                        {item.code} - {item.units}
                                    </small>

                                    <h3>{item.title}</h3>
                                    <p>{item.summary}</p>
                                    <blockquote>{item.leadLine}</blockquote>

                                    {/* <strong>
                                        View details
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M5 12h12M12 6l7 6-7 6"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </strong> */}
                                    <strong>
                                        <span>View details</span>
                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M5 12h12M12 6l7 6-7 6"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.7"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </strong>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {activeItem && (
                <InventoryModal item={activeItem} onClose={() => setActiveItem(null)} />
            )}
        </>
    );
}

function InventoryModal({
    item,
    onClose,
}: {
    item: InventoryItem;
    onClose: () => void;
}) {
    const [closing, setClosing] = useState(false);

    const handleClose = useCallback(() => {
        if (closing) return;

        setClosing(true);

        setTimeout(() => {
            onClose();
        }, 500);
    }, [closing, onClose]);

    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose();
        };

        document.addEventListener("keydown", onKey);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [handleClose]);

    return (
        <div
            className={`inventory-modal-overlay ${closing ? "closing" : "opening"}`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) handleClose();
            }}
        >
            <div className={`inventory-popup ${closing ? "closing" : "opening"}`}>
                <button
                    type="button"
                    className="inventory-popup-close"
                    onClick={handleClose}
                    aria-label="Close inventory modal"
                >
                    ×
                </button>

                <div className="inventory-popup-media">
                    <img src={getImageUrl(item.image)} alt={item.title} />
                    <span>
                        {item.code} - {item.category}
                    </span>
                </div>

                <div className="inventory-popup-side">
                    <small>
                        {item.code} - {item.units}
                    </small>

                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>

                    <hr />

                    <form className="inventory-popup-form">
                        <label>
                            <span>Name *</span>
                            <input placeholder="Marketing lead name" />
                        </label>

                        <label>
                            <span>Phone / WhatsApp *</span>
                            <input placeholder="99999 99999" />
                        </label>

                        <div className="form-two">
                            <label>
                                <span>Company / Brand</span>
                                <input placeholder="Brand / agency" />
                            </label>

                            <label>
                                <span>Designation</span>
                                <input placeholder="Marketing manager" />
                            </label>
                        </div>

                        <button type="button">Unlock full details</button>
                    </form>
                </div>
            </div>
        </div>
    );
}