import { StaticImageData } from "next/image";
import image1 from "../../assets/img/rendimento/1.jpeg";
import image2 from "../../assets/img/rendimento/2.jpeg";
import image3 from "../../assets/img/rendimento/3.jpeg";
import image4 from "../../assets/img/rendimento/4.jpeg";
import image5 from "../../assets/img/rendimento/5.jpeg";
import image6 from "../../assets/img/rendimento/6.jpeg";
import image7 from "../../assets/img/rendimento/7.jpeg";
import image8 from "../../assets/img/rendimento/8.jpeg";
import image9 from "../../assets/img/rendimento/9.jpeg";
import image10 from "../../assets/img/rendimento/10.jpeg";
import image11 from "../../assets/img/rendimento/11.jpeg";
import image12 from "../../assets/img/rendimento/12.jpeg";
import image13 from "../../assets/img/rendimento/13.jpeg";
import image14 from "../../assets/img/rendimento/14.jpeg";
import image15 from "../../assets/img/rendimento/15.jpeg";
import image16 from "../../assets/img/rendimento/16.jpeg";

export const images: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  // image5,
  image6,
  image7,
  // image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

const imageByIndex = (index: number): StaticImageData =>
  images[index % images.length];

export default imageByIndex;
