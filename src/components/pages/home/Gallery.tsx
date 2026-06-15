// import "./Home.css";

// const galleryItems = [
//     {
//         title: "Terminal Branding",
//         category: "Airport Media",
//         image: "/images/gallery/gallery-1.jpg",
//         size: "large",
//     },
//     {
//         title: "Digital Screen Network",
//         category: "DOOH",
//         image: "/images/gallery/gallery-2.jpg",
//         size: "small",
//     },
//     {
//         title: "Passenger Waiting Zone",
//         category: "Visibility",
//         image: "/images/gallery/gallery-3.jpg",
//         size: "small",
//     },
//     {
//         title: "Static Media Boards",
//         category: "OOH",
//         image: "/images/gallery/gallery-4.jpg",
//         size: "wide",
//     },
//     {
//         title: "Arrival Area Branding",
//         category: "Passenger Journey",
//         image: "/images/gallery/gallery-5.jpg",
//         size: "small",
//     },
//     {
//         title: "Premium Display Zone",
//         category: "Digital Media",
//         image: "/images/gallery/gallery-6.jpg",
//         size: "wide",
//     },
//     {
//         title: "Airport Movement Media",
//         category: "Brand Recall",
//         image: "/images/gallery/gallery-7.jpg",
//         size: "small",
//     },
// ];

// export default function Gallery() {
//     return (
//         <section className="gallery-premium" id="gallery">
//             <div className="container">
//                 <div className="gallery-premium-head">
//                     <div>
//                         <span>Gallery</span>
//                         <h2>
//                             Premium airport media spaces built for{" "}
//                             <em>high brand recall.</em>
//                         </h2>
//                     </div>

//                     <p>
//                         Visual references of airport advertising placements, passenger
//                         movement zones, digital media surfaces, and premium branding
//                         opportunities across Rajkot Airport.
//                     </p>
//                 </div>

//                 <div className="gallery-premium-grid">
//                     {galleryItems.map((item, index) => (
//                         <article
//                             key={`${item.title}-${index}`}
//                             className={`gallery-premium-card ${item.size}`}
//                         >
//                             <img src={item.image} alt={item.title} />

//                             <div className="gallery-premium-overlay">
//                                 <span>{item.category}</span>
//                                 <h3>{item.title}</h3>
//                             </div>

//                             <div className="gallery-premium-count">
//                                 {String(index + 1).padStart(2, "0")}
//                             </div>
//                         </article>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }










import "./Home.css";
import Image from "next/image";
import gal1 from '@/public/images/inventory/air1.png'
import gal2 from '@/public/images/inventory/air2.png'
import gal3 from '@/public/images/inventory/air3.png'
import gal4 from '@/public/images/inventory/air5.png'
import gal5 from '@/public/images/inventory/air6.png'
import gal6 from '@/public/images/inventory/air7.png'
import gal7 from '@/public/images/inventory/air8.png'



const galleryItems = [
    {
        title: "Terminal Branding",
        category: "Airport Media",
        image: gal1,
        gridClass: "type-tall", // Double height & width card on the left
    },
    {
        title: "Digital Screen Network",
        category: "DOOH",
        image: gal2,
        gridClass: "type-standard",
    },
    {
        title: "Passenger Waiting Zone",
        category: "Visibility",
        image: gal3,
        gridClass: "type-standard",
    },
    {
        title: "Static Media Boards",
        category: "OOH",
        image: gal4,
        gridClass: "type-wide", // Spans right under items 2 and 3
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal5,
        gridClass: "type-standard",
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal6,
        gridClass: "type-wide",
    },
    {
        title: "Arrival Area Branding",
        category: "Passenger Journey",
        image: gal7,
        gridClass: "type-standard",
    },
];

export default function Gallery() {
    return (
        <section className="gallery-premium" id="gallery">
            <div className="gallery-premium-head">
                <div className="tag-container">
                    <div className="tag-line"></div>
                    <span>Gallery</span>
                </div>
                <h2>
                    Premium airport media spaces built for <em>high brand recall.</em>
                </h2>
                <p>
                    Explore visual references of airport advertising placements, passenger
                    movement zones, digital media surfaces, and branding opportunities
                    across Rajkot Airport.
                </p>
            </div>

            <div className="gallery-premium-grid">
                {galleryItems.map((item, index) => (
                    <article
                        key={`${item.title}-${index}`}
                        className={`gallery-premium-card ${item.gridClass}`}
                    >
                        {/* <img src={item.image} alt={item.title} loading="lazy" /> */}
                        <Image
                            src={item.image}
                            alt=""
                            width={600}
                            height={400}
                        />

                        <div className="gallery-premium-overlay">
                            <span>{item.category}</span>
                            <h3>{item.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}