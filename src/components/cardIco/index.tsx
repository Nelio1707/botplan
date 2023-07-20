import Image, { StaticImageData } from "next/image";

interface CardIcoProps {
  icon: StaticImageData;
  text: string;
}

function CardIco({ icon, text }: CardIcoProps) {
  return (
    <div className="w-1/3 flex flex-col items-center">
      <Image className="w-[20%]" src={icon} alt="icon" />
      <p className="my-1 text-[#FFFFFF]">{text}</p>
    </div>
  );
}
export default CardIco;
