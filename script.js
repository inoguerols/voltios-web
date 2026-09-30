function setLang(l) {
  if (l !== "en") l = "es";
  document.documentElement.lang = l;
  document.body.classList.remove("lang-es", "lang-en");
  document.body.classList.add("lang-" + l);
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === l);
    b.setAttribute("aria-pressed", String(b.dataset.lang === l));
  });
  try { localStorage.setItem("voltios-lang", l); } catch (e) {}
}
document.addEventListener("DOMContentLoaded", function () {
  var l = (navigator.language || "es").slice(0, 2);
  try { l = localStorage.getItem("voltios-lang") || l; } catch (e) {}
  setLang(l);
});
