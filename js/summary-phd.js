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

function getArxivRefs(...nums) {
  // map each index to its <a> tag, then join with commas
  const links = nums.map(n => getArxivLink(n)).join(",");
  return `<span class="ConsolasCond">[${links}]</span>`;
}

// 

const captions1 = [
  "Massive Twistor Theory",
  "Post-Minkowskian Gravity to All Orders in Spin",
  "Gravitational Instantons and Double Copy",
  "Generalized Symmetry in Gravity",
];

const captions2 = [
  getArxivRefs(1,2,3),
  getArxivRefs(1,2,3,6,7),
  getArxivRefs(5,8),
  getArxivRefs(4),
];

document.addEventListener("DOMContentLoaded", () => {
  const holder = document.getElementById("summary-phd");
  if (!holder) return;

  const html = captions1
    .map((c1, i) => {
      const c2 = captions2[i] || "";   // ← grab the matching “extra” HTML
      return `
        <hr style="visibility:hidden"/>
        &nbsp;&nbsp; » ${c1} ${c2}
      `;
    })
    .join("");

  holder.innerHTML = html;
});