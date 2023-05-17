import "./style.css";

type Maybe<T> = T | null;

const start = () => {
  const recentWorkImages = [
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1616046146424-dcf7164a098f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1600494448655-ae58f58bb945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1616486645825-5f8cf98b4053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1616137356540-b13b2a04a507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
    "https://images.unsplash.com/photo-1552475157-a68a1826ddb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80",
  ];

  const packageImages = [
    "https://images.unsplash.com/photo-1512916194211-3f2b7f5f7de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=450&q=80",
    "https://images.unsplash.com/photo-1616486232086-81d47190669a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80",
    "https://images.unsplash.com/photo-1628745423035-0211f4d95596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&q=80",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80",
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80",
    "https://images.unsplash.com/photo-1512918580421-b2feee3b85a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&q=80",
    "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=450&q=80",
    "https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80",
    "https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=600&q=80",
  ];

  let recentWorkIndex = 3;
  let packageImageIndex = 3;

  const benefits = document.querySelector("#benefits");
  const benefitButtons: NodeListOf<HTMLButtonElement> | undefined =
    benefits?.querySelectorAll("button");

  const nextRecent = document.querySelector("#next-recent");
  const recentA: Maybe<HTMLElement> = document.querySelector("#recent-work-a");
  const recentB: Maybe<HTMLElement> = document.querySelector("#recent-work-b");
  const recentC: Maybe<HTMLElement> = document.querySelector("#recent-work-c");

  const nextPackage = document.querySelector("#next-package");
  const packageA: Maybe<HTMLElement> = document.querySelector("#package-a");
  const packageB: Maybe<HTMLElement> = document.querySelector("#package-b");
  const packageC: Maybe<HTMLElement> = document.querySelector("#package-c");

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

  const onNextRecentClick = () => {
    if (!recentA || !recentB || !recentC) {
      return;
    }
    recentA.style.backgroundImage = `url(${recentWorkImages?.[recentWorkIndex]})`;
    recentB.style.backgroundImage = `url(${
      recentWorkImages?.[recentWorkIndex + 1]
    })`;
    recentC.style.backgroundImage = `url(${
      recentWorkImages?.[recentWorkIndex + 2]
    })`;
    recentWorkIndex += 3;
    recentWorkIndex %= recentWorkImages.length;
  };

  const onNextPackageClick = () => {
    if (!packageA || !packageB || !packageC) {
      return;
    }
    packageA.style.backgroundImage = `url(${packageImages?.[packageImageIndex]})`;
    packageB.style.backgroundImage = `url(${
      packageImages?.[packageImageIndex + 1]
    })`;
    packageC.style.backgroundImage = `url(${
      packageImages?.[packageImageIndex + 2]
    })`;
    packageImageIndex += 3;
    packageImageIndex %= packageImages.length;
  };

  benefitButtons?.forEach((btn) =>
    btn.addEventListener("click", onBenefitClick)
  );
  nextRecent?.addEventListener("click", onNextRecentClick);
  nextPackage?.addEventListener("click", onNextPackageClick);
};
start();
