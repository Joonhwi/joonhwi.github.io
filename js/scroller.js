document.addEventListener('DOMContentLoaded', function() {

  const arxivnumbers = [
    `2102.07063`,
    `2301.06203`,
    `2309.11886`,
    `2403.01837`,
    `2405.09518`,
    `2405.17056`,
  ];
  function getArxivLink(no) {
    return `<a target="_blank" href="http://arxiv.org/abs/` + arxivnumbers[no-1] + `">` + no + `</a>`;
  };

  const images = [
    "/images/phys-cards/lcdx.png",
    "/images/phys-cards/zig-bowtie-indigo.png",
    "/images/phys-cards/flying-discs_rendered.jpg",
    "/images/phys-cards/ck-tshirt-signed.png",
    "/images/phys-cards/higher-pop.png",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // "/images/phys-cards/test.jpg",
  ];

  const captions = [
    "Spinspacetime",
    "Zig-zag Twistor Particle Program",
    "Black Hole Zig-Zag Program",
    "Color-Kinematics Duality",
    "Generalized Symmetry in Gravity",
  ];

  const messages = [
      `<span class="EmphBI">Spinspacetime</span>`
      // + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, concretely realizing Newman's curious ideas in the 70s.`
      // + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, which finally realizes Ezra Ted Newman's forgotten dream in the 70s.`
      // + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, finally realizing Ezra Ted Newman's forgotten dream in the 70s.`
      // + ` opens up a new chapter in relativity by realizing Ezra Ted Newman's forgotten dream of unifying spacetime and spin into a complex geometry.`
      // + ` realizes Ezra Ted Newman's dream of unifying spacetime and spin into a complex geometry and opens up a new chapter in relativity.`
      + ` opens up a new chapter in relativity, by realizing Ezra Ted Newman's dream of unifying spacetime and spin into a complex geometry.`
      + ` <span class="ConsolasCond">[`
        + getArxivLink(2) + `,`
        + getArxivLink(3)
      + `]</span>`
    ,
  ];

  //
  const scrollContainer = document.querySelector('.scr-thumbnails');

  scrollContainer.addEventListener('wheel', (event) => {
      event.preventDefault(); // Prevent vertical scroll
      scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally based on vertical scroll
  });
  //  
  
  const gallery = document.getElementById('gallery');

  images.forEach(function(imageSrc, index) {
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('scr-thumbnail');

    const card = document.createElement('div');
    card.classList.add('scr-card');

    const front = document.createElement('div');
    front.classList.add('scr-front');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = 'Image';
    img.classList.add('scr-thumbnail-image');

    const back = document.createElement('div');
    back.classList.add('back');
    // back.textContent = captions[index]; // Set the caption text from the captions array
    back.innerHTML = `<p class="scr-backtext">` + captions[index] +  `</p>`;
    // back.textContent = captions[index];

    front.appendChild(img);
    card.appendChild(front);
    card.appendChild(back);
    thumbnail.appendChild(card);
    gallery.appendChild(thumbnail);
  });


  const thumbnails = document.querySelectorAll('.scr-thumbnail');
  const message = document.getElementById('message');
  let activeThumbnail = null;
  // message.innerHTML = '(Click cards to see descriptions)';
  message.innerHTML = '';

  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
      if (activeThumbnail !== thumbnail) {
        // Hide message if another thumbnail is clicked
        message.style.display = 'none';
        activeThumbnail = thumbnail;
      }
      // message.textContent = messages[index];
      message.innerHTML = messages[index];
      message.style.display = 'block';
    });
  });

  // Polyfill for closest() function
  if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
      let el = this;
      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // Reset message when clicking outside of cards
  document.addEventListener('click', function(event) {
    if (!(event.target.closest('.scr-thumbnail') || event.target.closest('.scr-message'))) {
      // message.innerHTML = '(Click cards to see descriptions)';
      message.innerHTML = '';
    }
  });

});
