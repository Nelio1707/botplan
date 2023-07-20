import Logo from "../logo";

export default function PresentationText() {
  return (
    <div className="flex flex-col w-1/2 min-w-[300px] -top-5 relative text-center items-center justify-center ">
      <Logo />
      <h1 className="text-[#FFF] text-[40px] font-light mt-3">
      BotPlan , Chatbot avançado e inteligente
      </h1>
      <h1 className="text-[#FFF] text-[40px] font-black mb-4">
       AUTOMATIZE SEUS AGENDAMENTOS AGORA
      </h1>
      <p className="text-[#FFF] text-[20px] font-black">
        Potencialize seu tempo! <br />Deixe que o nosso chatbot se encarregue de todo seu agendamento, Você terá um assistente virtual inteligente e eficiente que cuidará de tarefas complexas, como agendamentos, atendimento ao cliente e respostas a perguntas comuns
      </p>
    </div>
  );
}
