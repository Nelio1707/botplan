import "./styles.css";

function FooterComponents() {
  return (
    <footer
    className="flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#515151",
        textAlign: "center",
        color: "white",
        height: "150px",
      }}
    >
      <p className="text-[18px]">
        &copy; {new Date().getFullYear()} BotPlan. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export default FooterComponents;
