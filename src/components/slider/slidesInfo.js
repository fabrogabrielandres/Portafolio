import s1 from "../../media/1.jpg"
import s2 from "../../media/2.jpg"
import s3 from "../../media/3.jpg"
import s4 from "../../media/4.jpg"
import s5 from "../../media/5.jpg"
import s6 from "../../media/s1.svg"


const slidesInfo = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
        alt: "react",
        desc: "react",
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        alt: "redux",
        desc: "redux",
    },
    {
        src: "",
        alt: "css",
        desc: "css",
    },
    {
        src: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        alt: "html",
        desc: "html",
    },
    {
        src: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        alt: "npm",
        desc: "npm",
    },
    {
        src: "https://avatars.githubusercontent.com/u/18133?s=200&v=4",
        alt: "git",
        desc: "git",
    }
]


export const Slides = slidesInfo.map((slide) => (
    <div>
        <img src={slide.src} />
        <div>
            <span>{slide.desc}</span>
        </div>
    </div>

))


