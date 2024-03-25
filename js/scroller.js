document.addEventListener('DOMContentLoaded', function() {
  const images = [
    "/images/phys-cards/lcdx.png",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // "/images/phys-cards/test.jpg",
    "/images/phys-cards/zig-bowtie.png",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // "/images/phys-cards/int1-real_cut.jpg",
    "/images/phys-cards/flying-discs.jpg",
    // "/images/phys-cards/test.jpg",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
  ];

  const captions = [
    "Spinspacetime",
    "Zig-Zag Theory of Massive Spinning Particles",
    "Zig-Zag Approach to Spinning Black Holes",
  ];

  const messages = [
      `<b><i>Spinspacetime</i></b>`
      + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, concretely realizing Newman's curious ideas in the 70s.`
      + ` [2]`
    ,
      `<b><i>Zig-zag theory of massive spinning particles</i></b>`
      // + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry (“dubbed zig-zag structure”) of massive spinning particles.`
      + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry of massive spinning particles.`
      + ` [1], [0,2]`
    ,
      `<b><i>Zig-zag approach to spinning black holes</i></b>`
      // + `proposes to study spinning black holes in four dimensions from the angle of their factorization into chiral dyons in the chiral sectors.`
      // + `proposes to study spinning black holes in four dimensions with their “factorized” form, into chiral dyons in chiral sectors.`
      // + `proposes to study the dynamics of spinning black holes in four dimensions with their factorization into chiral dyons.`
      + ` proposes that chiral dyons should be used as elementary building blocks for studying the dynamics of spinning black holes in four dimensions.`
      + ` `
    ,
  ];

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
  // message.textContent = '(Click cards to see descriptions)';
  message.innerHTML = '(Click cards to see descriptions)';

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
    if (!event.target.closest('.scr-thumbnail')) {
      // message.textContent = '(Click cards to see descriptions)';
      message.innerHTML = '(Click cards to see descriptions)';
    }
  });

});
