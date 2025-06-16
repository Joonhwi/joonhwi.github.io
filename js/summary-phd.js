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

const captions1 = [
  "Massive Twistor Theory",
  "Post-Minkowskian Gravity to All Orders in Spin",
  "Gravitational instantons and double copy",
  "Generalized symmetry in gravity",
];

const captions2 = [
  getArxivLink(1) + getArxivLink(2)  + getArxivLink(3) ,
  getArxivLink(1) + getArxivLink(2)  + getArxivLink(3) + getArxivLink(6)  + getArxivLink(7) ,
  getArxivLink(5) + getArxivLink(8) ,
  getArxivLink(4) ,
];

document.addEventListener("DOMContentLoaded", () => {
  const holder = document.getElementById("summary-phd");
  if (!holder) return;

  const html = captions1
    .map((c1, i) => {
      const c2 = captions2[i] || "";   // ← grab the matching “extra” HTML
      return `
        <hr style="visibility:hidden"/>
        &nbsp;&nbsp; » <em>${c1}</em>
        ${c2}
      `;
    })
    .join("");

  holder.innerHTML = html;
});