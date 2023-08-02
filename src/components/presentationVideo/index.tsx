import Logo from "../logo";

export default function PresentationVideo() {
  return (
    <div className="flex flex-col w-1/2 min-w-[300px] items-center justify-center">
      <iframe
      className="rounded-lg"
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/Ut3TKhtr4Qc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
