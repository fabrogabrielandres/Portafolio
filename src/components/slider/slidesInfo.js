
import s1 from "./s1.svg"
import s2 from "./s2.svg"
import s3 from "./s3.svg"
import s4 from "./s4.svg"
import s5 from "./s5.svg"
import s6 from "./s6.svg"


const slidesInfo = [
    {
        src: s1,
        alt: "react",
        desc: "react",
    },
    {
        src: s2,
        alt: "redux",
        desc: "redux",
    },
    {
        src: s3,
        alt: "css",
        desc: "css",
    },
    {
        src: s4,
        alt: "html",
        desc: "html",
    },
    {
        src: s5,
        alt: "npm",
        desc: "npm",
    },
    {
        src: s6,
        alt: "git",
        desc: "git",
    }
]


export const Slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>

))


