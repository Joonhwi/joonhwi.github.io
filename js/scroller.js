document.addEventListener('DOMContentLoaded', function() {
  const images = [
    "/images/phys-cards/higher-pop.png",
    "/images/phys-cards/lcdx.png",
    "/images/phys-cards/zig-bowtie-indigo.png",
    "/images/phys-cards/flying-discs_rendered.jpg",
    "/images/phys-cards/ck-tshirt-signed.png",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // "/images/phys-cards/test.jpg",
  ];

  const captions = [
    "Spinspacetime",
    "Zig-Zag Theory of Massive Spinning Particles",
    "Zig-Zag Approach to Spinning Black Holes",
    "Color-Kinematics Duality",
    "Generalized Symmetry in Gravity",
  ];

  const messages = [
      `<b><i>Spinspacetime</i></b>`
      // + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, concretely realizing Newman's curious ideas in the 70s.`
      + ` opens up a new chapter in relativity by unifying spacetime and spin into a complex geometry, finally realizing Ezra Ted Newman's lost dream in the 70s.`
      // + ` [2,5]`
      + ` [2,3]`
    ,
      // `<b><i>Zig-zag theory of massive spinning particles</i></b>`
      `<b><i>Zig-zag twistor particle program</i></b>`
      // + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry (“dubbed zig-zag structure”) of massive spinning particles.`
      // + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry of massive spinning particles in four dimensions [1].`
      + ` aims to reboot the twistor particle program with an emphasis on the hidden Kähler geometry of massive spinning particles in four dimensions.`
      // + ` [0,1,2,5]`
      + ` [1,2,3,6]`
    ,
      `<b><i>Zig-zag program for spinning black holes</i></b>`
      // + `proposes to study spinning black holes in four dimensions from the angle of their factorization into chiral dyons in the chiral sectors.`
      // + `proposes to study spinning black holes in four dimensions with their “factorized” form, into chiral dyons in chiral sectors.`
      // + `proposes to study the dynamics of spinning black holes in four dimensions with their factorization into chiral dyons.`
      + ` proposes that chiral dyons (Taub-NUT instantons, dubbed “zig” and “zag”) should be used as elementary building blocks for studying the dynamics of spinning black holes in four dimensions.`
      // + ` [4]`
      + ` [3,5]`
    ,
      `<b><i>Color-Kinematics Duality</i></b>`
      // + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, somehow different than the diffeomorphism algebra.`
      // + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, which somehow isn't the diffeomorphism algebra.`
      + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, which somehow isn't simply the diffeomorphism algebra in spacetime.`
      + ` `
    ,
      `<b><i>Generalized Symmetry in Gravity</i></b>`
      // `<b><i>Higher-Form Symmetry in Gravity</i></b>`
      // + `proposes to study spinning black holes in four dimensions from the angle of their factorization into chiral dyons in the chiral sectors.`
      // + `proposes to study spinning black holes in four dimensions with their “factorized” form, into chiral dyons in chiral sectors.`
      // + `proposes to study the dynamics of spinning black holes in four dimensions with their factorization into chiral dyons.`
      // + ` reveals new symmetry in nature and explores a novel interpretation of gravitational singularities as topological operators.`
      // + ` reveals new symmetry in nature that could explain why fermions exist and also a novel interpretation of gravitational singularities as topological operators.`
      // + ` has taught us why fermions exist in our universe and revealed a novel interpretation of gravitational singularities as topological operators.`
      // + ` has shed an interesting insight on why fermions exist and revealed a novel interpretation of gravitational singularities as topological operators.`
      // + ` reveals a new symmetry in our universe below the scale of the lightest neutrino and also illuminates a novel interpretation of gravitational singularities as topological operators.`
      // + ` offers an explanation of why fermions exist in our universe and reveals a novel interpretation of gravitational singularities as topological operators.`
      // + ` has offered an interesting angle on why fermions exist and revealed an intriguing interpretation of gravitational singularities as topological operators.`
      // + ` reveals an intriguing interpretation of gravitational singularities as topological operators while also offering new insights on the standard model.`
      // + ` reinterprets gravitational singularities as topological operators and sheds new insights on the standard model.`
      + ` offers and intriguing reinterpretation of gravitational singularities as topological operators and sheds new physical insights on how fermions exist in our universe.`
      // + ` [3]`
      + ` [4]`
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
  // message.innerHTML = '(Click cards to see descriptions)';

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
      // message.innerHTML = '(Click cards to see descriptions)';
    }
  });

});
