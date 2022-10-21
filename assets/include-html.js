document.addEventListener("DOMContentLoaded", (e) => {
  const includeHTML = async (el, url) => {
    let ajax = await fetch(`${url}`),
      res = await ajax.text();

    el.outerHTML = res;
  };

  document.querySelectorAll("[data-include]").forEach(async (el) => {
    includeHTML(el, el.getAttribute("data-include"));
  });
});
