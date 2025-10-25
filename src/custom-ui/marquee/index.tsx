import { default as M } from "react-fast-marquee";
import "./styles.css";
import Image from "next/image";
import chichi from "../../assets/chi-chi-range.jpg";
import laGolf from "../../assets/la-golf.jpg";
import scimera from "../../assets/scimera.png";
import shotmaker from "../../assets/shotmaker.jpg";

export const Marquee = () => {
  return (
    <section className="root full-bleed">
      <M autoFill gradient speed={30}>
        <div style={{ marginInline: 24 }}>
          <Image src={chichi} alt="chi chi range" width={100} height={48} />
        </div>
        <div style={{ marginInline: 24 }}>
          <Image src={laGolf} alt="chi chi range" width={100} height={48} />
        </div>
        <div style={{ marginInline: 24 }}>
          <Image src={scimera} alt="chi chi range" width={100} height={48} />
        </div>
        <div style={{ marginInline: 24 }}>
          <Image src={shotmaker} alt="chi chi range" width={100} height={48} />
        </div>
      </M>
    </section>
  );
};
