document.addEventListener('DOMContentLoaded', function() {
  const images = [
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    "https://media.gcflearnfree.org/ctassets/topics/246/share_size_large.jpg",
    // Add more image URLs as needed
  ];

  const captions = [
    "Caption for the first image",
    "Caption for the second image",
    // Add more captions as needed
  ];

  const messages = [
    "Message for the first card",
    "Message for the second card",
    // Add more messages for each card as needed
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
    back.textContent = captions[index]; // Set the caption text from the captions array

    front.appendChild(img);
    card.appendChild(front);
    card.appendChild(back);
    thumbnail.appendChild(card);
    gallery.appendChild(thumbnail);
  });


  const thumbnails = document.querySelectorAll('.scr-thumbnail');
  const message = document.getElementById('message');
  let activeThumbnail = null;

  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
      if (activeThumbnail !== thumbnail) {
        // Hide message if another thumbnail is clicked
        message.style.display = 'none';
        activeThumbnail = thumbnail;
      }
      message.textContent = messages[index];
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
      message.textContent = 'Click card to see description';
    }
  });
});
