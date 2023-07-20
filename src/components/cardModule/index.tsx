import Image, { StaticImageData } from "next/image";

export interface CardModuleProps {
  img: string | StaticImageData;
  module: string;
  title: string;
  text: string;
}

export default function CardModule({
  img,
  module,
  title,
  text,
}: CardModuleProps) {
  return (
    <div className="max-w-[350px] min-w-[350px] h-96 border border-solid rounded border-t-0 border-l-0 border-lines bg-linear-gradient from-FromPrimaryGradientCard to-ToPrimaryGradientCard m-5 mt-7">
      <Image src={img} alt="logo" className="relative -top-7 w-12 left-4 " />
      <div className="flex flex-col w-full h-full p-6 pt-0">
        <span className="text-lines text-[17px] font-thin mb-2">{module}</span>
        <h1 className="text-[#FFF] text-[25px] font-medium ">{title}</h1>
        <span className="text-[#FFF] text-[17px] font-thin mt-4">{text}</span>
      </div>
    </div>
  );
}
