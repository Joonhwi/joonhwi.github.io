document.addEventListener('DOMContentLoaded', function() {

  const arxivnumbers = [
    `2102.07063`,
    `2301.06203`,
    `2309.11886`,
    `2403.01837`,
    `2405.09518`,
    `2405.17056`,
    `2410.22988`,
    `2412.19611`,
    "2509.06058",
    "2509.23600",
    "2510.23080"
  ];
  function getArxivLink(no) {
    return `<a target="_blank" href="http://arxiv.org/abs/` + arxivnumbers[no-1] + `">` + no + `</a>`;
  };
  function getArxivRefs(...nums) {
    // map each index to its <a> tag, then join with commas
    const links = nums.map(n => getArxivLink(n)).join(",");
    return `<span class="ConsolasCond">[${links}]</span>`;
  }

  const images = [
    "/images/phys-cards/flying-discs_rendered.jpg",
    "/images/phys-cards/zig-bowtie-indigo.png",
    "/images/phys-cards/higher-pop.png",
    "/images/phys-cards/ck-tshirt-signed.png",
    // "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // "/images/phys-cards/test.jpg",
  ];

  const captions = [
    "Black Hole Zig-Zag Program",
    "Zig-Zag Twistor Particle Program",
    "Generalized Symmetry in Gravity",
    "Color-Kinematics Duality",
  ];

  const messages = [
      `<span class="EmphBI">Black Hole Zig-Zag Program</span>`
      + ` is a systematic study of four-dimensional black holes as “molecules” built out of self-dual and anti-self-dual Taub-NUT instantons.`
      // + ` [4]`
      + ` <span class="ConsolasCond">[`
        + getArxivLink(3) + `,`
        + getArxivLink(5) + `,`
        + getArxivLink(8)
      + `]</span>`
    ,
      `<span class="EmphBI">Zig-Zag Twistor Particle Program</span>`
      + ` <em>(Massive Twistor Theory)</em>`
      // + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry (“dubbed zig-zag structure”) of massive spinning particles.`
      // + ` aims to reboot twistor particle programme with an emphasis on the hidden Kähler geometry of massive spinning particles in four dimensions [1].`
      // + ` aims to reboot the twistor particle program with an emphasis on the hidden Kähler geometry of massive spinning particles in four dimensions.`
      // + ` aims to reboot the twistor particle program, with an emphasis on the Kähler geometry of the massive twistor space.`
      // + ` aims to reboot the twistor particle program, with an emphasis on the physical implications of the Kähler geometry of massive twistor space.`
      // + ` aims to reboot the twistor particle program, with an emphasis on the physical significance of the Kähler geometry of massive twistor space (nicknamed “zig-zag structure”).`
      // + ` aims to reboot the twistor particle program of the 70s, with an emphasis on the physical significance of the Kähler geometry of massive twistor space (nicknamed “zig-zag structure”).`
      // + ` aims to reboot the '70s twistor particle program, by putting emphasis on the Kähler geometry of massive twistor space (nicknamed “zig-zag structure”) and its physical significance.`
      // + ` is a reboot of the '70s twistor particle program with an emphasis on the physical significance of the Kähler geometry in massive twistor space (nicknamed “zig-zag structure”).`
      + ` reboots the '70s twistor particle program and extends its scope to astrophysical objects, yielding an all-orders-in-spin framework for post-Minkowskian gravity.`
      + ` <span class="ConsolasCond">[`
        + getArxivLink(1) + `,`
        + getArxivLink(2) + `,`
        + getArxivLink(3) + `,`
        + getArxivLink(6)
      + `]</span>`
    ,
      `<span class="EmphBI">Generalized Symmetry in Gravity</span>`
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
      // + ` offers an interesting reinterpretation of gravitational singularities as topological operators and sheds an intriguing insight on how fermions exist in our universe.`
      // + ` offers an interesting reinterpretation of gravitational singularities as topological operators and reveals a new symmetry in the standard model.`
      // + ` reveals a new symmetry in the standard model while offering an interesting reinterpretation of gravitational singularities as topological operators.`
      // + ` reveals new symmetries in our universe while offering reinterpretations of gravitational singularities as topological operators.`
      // + ` reveals new symmetries in the standard model while offering reinterpretations of gravitational singularities as topological operators.`
      + ` reveals new symmetries in the standard model while offering an interesting perspective on massless gravitational defects as topological operators.`
      // + ` [3]`
      + ` <span class="ConsolasCond">[`
        + getArxivLink(4)
      + `]</span>`
    ,
      `<span class="EmphBI">Color-Kinematics Duality</span>`
      // + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, somehow different than the diffeomorphism algebra.`
      // + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, which somehow isn't the diffeomorphism algebra.`
      // + ` suggests that there exists a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity, which somehow isn't simply the diffeomorphism algebra in spacetime.`
      + ` suggests that there lies a mystery infinite-dimensional Lie algebra at the heart of perturbative quantum gravity.`
      // + ` suggests that gravitons are gluons with a mystery infinite-dimensional Lie algebra.`
      + ` <span class="ConsolasCond">[`
        + getArxivLink(11)
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
