import "./style.css";

const start = () => {
  const benefits = document.querySelector("#benefits");
  const benefitButtons: NodeListOf<HTMLButtonElement> | undefined =
    benefits?.querySelectorAll("button");
  const onBenefitClick = (ev: MouseEvent) => {
    benefitButtons?.forEach((btn) => {
      btn?.classList?.remove("w-4/12");
      btn?.classList?.add("w-2/12");
      const text = btn?.querySelector("p");
      text?.classList?.remove("opacity-90");
      text?.classList?.add("opacity-0");
    });

    (ev.target as HTMLButtonElement)?.classList?.remove("w-2/12");
    (ev.target as HTMLButtonElement)?.classList?.add("w-4/12");
    const text = (ev.target as HTMLButtonElement)?.querySelector("p");
    text?.classList.remove("opacity-0");
    text?.classList.add("opacity-90");
  };
  benefitButtons?.forEach((btn) =>
    btn.addEventListener("click", onBenefitClick)
  );
};
start();
