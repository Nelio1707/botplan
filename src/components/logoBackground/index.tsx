import Image from "next/image";
import Background from "../../assets/img/background.png";
import "./style.css";

export default function LogoBackground() {
  return (
    <div>
      <div className="explosao w-[30vw] h-[30vw] opacity-60 absolute -top-[15vw] -z-10 rounded-full left-[37vw] bg-[#676e8f]"></div>
      <div className="explosao-2 w-[30vw] h-[30vw] opacity-60 absolute -top-[15vw] -z-10 rounded-full left-[37vw] bg-[#676e8f]"></div>

      <div className="explosao w-[30vw] h-[30vw] opacity-60 absolute top-[10vw] -z-10 rounded-full -left-[15vw] bg-[#676e8f]"></div>
      <div className="explosao-2 w-[30vw] h-[30vw] opacity-60 absolute top-[10vw] -z-10 rounded-full -left-[15vw] bg-[#676e8f]"></div>

      <div className="explosao w-[30vw] h-[30vw] opacity-60 absolute top-[10vw] -z-10 rounded-full right-[15vw] bg-[#676e8f]"></div>
      <div className="explosao-2 w-[30vw] h-[30vw] opacity-60 absolute top-[10vw] -z-10 rounded-full -right-[15vw] bg-[#676e8f]"></div>

      
    </div>
  );
}
