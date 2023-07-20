import Image from "next/image";

import LogoTipo from "../../assets/img/logo.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Image src={LogoTipo} alt="LogoTipo" className={`w-1/3 ${className}`} />
  );
}
