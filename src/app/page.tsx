"use client";

import CardIco from "src/components/cardIco";
import LogoBackground from "src/components/logoBackground";
import PresentationText from "src/components/presentationText";
import PresentationVideo from "src/components/presentationVideo";
import CardModule, { CardModuleProps } from "src/components/cardModule";
import Image from "next/image";
import Carrossel from "src/components/carrossel";
import { EmblaOptionsType } from "embla-carousel-react";
import ControlledAccordions, { Accordionprops } from "src/components/accordion";
import FooterComponents from "../components/footer";

import Garantia from "../assets/ico/garantia.webp";
import Pagamento from "../assets/ico/pagamento.webp";
import Play from "../assets/ico/play.webp";
import Telegram from "../assets/ico/telegram.webp";
import Segredo from "src/assets/ico/segredo.webp";
import Trader from "src/assets/ico/trader.webp";
import Lucro from "src/assets/ico/lucro.webp";
import Saque from "src/assets/ico/saque.webp";
import Fundo3 from "src/assets/img/fundo3.png";
import Logo from "src/components/logo";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const url = "https://chat.whatsapp.com/LQHrIJfTWO775wfU0qgdeU";

  const cards = [
    {
      img: Saque,
      module: "Modulo 1",
      title: "Agendamentos",
      text: "Seja você um profissional autônomo, médico, terapeuta ou prestador de serviços, o BotPlan é a ferramenta perfeita para otimizar sua agenda e aumentar sua produtividade. Deixe que nosso chatbot cuide dos agendamentos para você, enquanto você se concentra no que faz de melhor!",
    },
    {
      img: Segredo,
      module: "Modulo 2",
      title: "Pagamento",
      text: "O BotPlan é seguro e confiável. Utilizamos tecnologias avançadas de criptografia para garantir a segurança dos dados dos seus clientes. Além disso, o chatbot é construído com base nas melhores práticas de segurança cibernética, garantindo a proteção das informações sensíveis.",
    },
    {
      img: Lucro,
      module: "Modulo 3",
      title: "Personalizável",
      text: "Você terá total controle sobre a aparência e a linguagem utilizada pelo chatbot, permitindo que ele se torne uma extensão autêntica do seu negócio.",
    },
    {
      img: Trader,
      module: "Modulo 4",
      title: "Facilidade",
      text: "Além de desfrutar dos agendamentos automáticos, você também terá acesso a um painel de usuário exclusivo que se tornará sua ferramenta principal , O painel do BotPlan é a solução completa para o gerenciamento dos horários dos seus clientes. Chega de se preocupar em responder WhatsApp o tempo todo! ",
    },
  ] as CardModuleProps[];

  const perguntas = [
    {
      key: "1",
      pergunta: "O que é o BotPlan?",
      resposta:
        "O BotPlan é um chatbot avançado e inteligente, projetado para simplificar a comunicação e melhorar a produtividade de empresas e profissionais. Ele oferece uma série de funcionalidades, incluindo agendamentos automáticos, atendimento ao cliente, respostas rápidas a perguntas comuns e muito mais.",
    },
    {
      key: "2",
      pergunta: "Como o BotPlan pode me ajudar??",
      resposta:
        "O BotPlan pode te ajudar de diversas maneiras! Seu ponto forte é a automação dos agendamentos, permitindo que seus clientes ou pacientes marquem e confirmem suas consultas ou compromissos sem que você precise responder manualmente. Além disso, o chatbot funciona 24/7, estando disponível a qualquer momento para atender às necessidades dos seus clientes.",
    },
    {
      key: "3",
      pergunta: "É fácil de configurar e utilizar o BotPlan?",
      resposta:
        "Sim, a configuração e utilização do BotPlan são muito simples e intuitivas. Nossa equipe fornecerá o suporte necessário para que você possa configurar o chatbot de acordo com suas preferências e necessidades específicas. Você não precisa de conhecimentos técnicos avançados para começar a utilizar o BotPlan.",
    },
    {
      key: "4",
      pergunta: " O BotPlan é seguro e confiável?",
      resposta:
        "Sim, o BotPlan é seguro e confiável. Utilizamos tecnologias avançadas de criptografia para garantir a segurança dos dados dos seus clientes. Além disso, o chatbot é construído com base nas melhores práticas de segurança cibernética, garantindo a proteção das informações sensíveis.",
    },
    {
      key: "5",
      pergunta: "Posso personalizar o BotPlan para a minha marca?",
      resposta:
        "Com certeza! O BotPlan é totalmente personalizável para se adequar à sua marca. Você pode definir as respostas, criando uma experiência de atendimento única e alinhada com a identidade da sua empresa.",
    },
    {
      key: "6",
      pergunta: "Como posso começar a utilizar o BotPlan? ",
      resposta:
        "É fácil começar! Entre em contato conosco através do nosso whatsapp, e nossa equipe entrará em contato para fornecer mais informações sobre o BotPlan e como você pode começar a utilizá-lo em seu negócio. Estamos ansiosos para ajudá-lo a otimizar sua rotina e alcançar novos patamares de produtividade!",
    },
  ] as Accordionprops[];

  // const redirect = () => {
  //   router.
  // }

  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 16;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="flex flex-col ">
      <div className="flex flex-row flex-wrap items-center justify-center min-h-[100vh] h-fit px-4">
        <LogoBackground />
        <PresentationText />
        <PresentationVideo />
      </div>
      <div>
        <div className="w-10/12 rounded-xl mx-auto bg-primaryColor h-32 opacity-50 relative -mt-10 p-5 flex flex-row justify-center items-center">
          <CardIco text="Pagamento Seguro" icon={Pagamento} />
          <CardIco text="Acesso Imediato" icon={Play} />
          <CardIco text="Online 24/7" icon={Garantia} />
        </div>
      </div>
      <div className="flex flex-col p-5">
        <div className="mt-24 w-screen text-center">
          <h2 className="text-[#FFFFFF] text-[36px] font-light">
          Algoritmos avançados, agendamentos rápidos e precisos <b className="font-medium"></b>
          </h2>
        </div>
        <div className="w-full flex-wrap h-fit flex flex-row justify-center mt-5">
          {cards &&
            cards.map((card) => (
              <CardModule
                img={card.img}
                module={card.module}
                text={card.text}
                title={card.title}
              />
            ))}
        </div>
      </div>
      <div className="w-screen h-fit mb-3">
        <Image src={Fundo3} alt="Fundo3" />
      </div>
      <div className="w-screen h-fit flex flex-col">
        <h2 className="text-[#FFFFFF] text-center w-screen text-[36px] font-medium mt-12 mb-5">
          Confira abaixo alguns comportamentos do BotPlan
        </h2>
        <Carrossel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="flex flex-col w-screen h-fit">
        <h1 className="text-[#FFFFFF] text-center w-screen text-[36px] font-semibold mt-12 mb-5">
          DÚVIDAS FREQUENTES
        </h1>
        <div className="mb-8">
          {perguntas &&
            perguntas.map((pergunta) => (
              <ControlledAccordions
                key={pergunta.key}
                pergunta={pergunta.pergunta}
                resposta={pergunta.resposta}
              />
            ))}
        </div>
      </div>
      <div className="w-screen h-fit flex flex-col justify-center items-center my-4">
        <h1 className="text-[#FFF] text-[36px] font-medium">
          Acesse nosso Whatsapp
        </h1>
        <span className="text-[#FFF]"></span>
        <Logo className="relative w-72" />
        <Link href={url} target="_blank" passHref={true}>
          <Button style={{ display: "flex", flexDirection: "column" }}>
            <Image width={80} alt="telegram" src={Telegram} />
            <span className=" text-[#00FF00]" >Contato Whatsapp</span>
          </Button>
        </Link>
      </div>
      <FooterComponents />
    </div>
  );
}
