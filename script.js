function setLang(l) {
  document.body.className = "lang-" + l;
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === l);
  });
  try { localStorage.setItem("voltios-lang", l); } catch (e) {}
}
document.addEventListener("DOMContentLoaded", function () {
  var l = "es";
  try { l = localStorage.getItem("voltios-lang") || (navigator.language || "es").slice(0, 2); } catch (e) {}
  if (l !== "en") l = "es";
  setLang(l);
});
