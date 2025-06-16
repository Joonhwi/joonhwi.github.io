const arxivnumbers = [
  `2102.07063`,
  `2301.06203`,
  `2309.11886`,
  `2403.01837`,
  `2405.09518`,
  `2405.17056`,
  `2410.22988`,
  `2412.19611`,
];
function getArxivLink(no) {
  return `<a target="_blank" href="http://arxiv.org/abs/` + arxivnumbers[no-1] + `">` + no + `</a>`;
};

const captions = [
  "Massive Twistor Theory for Post-Minkowskian Gravity to All Orders in Spin",
  "Gravitational instantons and double copy",
  "Generalized symmetry in gravity",
];

document.addEventListener("DOMContentLoaded", () => {
  const holder = document.getElementById("summary-phd");

  // build each line (with the invisible <hr> + arrow + emphasized text)
  const html = captions
    .map(
      c =>
        `<hr style="visibility:hidden"/>&nbsp;&nbsp;` +
        `» <em>${c}</em>`
    )
    .join("");

  // inject into the placeholder
  holder.innerHTML = html;
});