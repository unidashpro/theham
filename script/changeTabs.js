"use strict";
import { tabsWrapper, tabsContent } from "./variables.js";

export const changeTabs = () => {
  let prevTarget = tabsWrapper.children[0];
  prevTarget.classList?.add("active");
  tabsContent.children[0]?.classList.add("active");

  [...tabsWrapper.children].forEach((e, index) => {
    e.setAttribute("data-about", e.innerText);
    tabsContent.children[index].setAttribute("data-about", e.innerText);
  });

  tabsWrapper.addEventListener("click", (e) => {
    if (e.target.classList.contains("tabs-list")) {
      if (prevTarget !== e.target) {
        prevTarget?.classList.remove("active");
        [...tabsContent.children]
          .find((el) => el.dataset.about === prevTarget.dataset.about)
          .classList.remove("active");
        prevTarget = e.target;
      }
      e.target?.classList.add("active");
      [...tabsContent.children]
        .find((el) => el.dataset.about === prevTarget.dataset.about)
        .classList.add("active");
    }
  });
};
