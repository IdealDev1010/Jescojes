/* Product Page */

// Function to check if an element is empty or contains only whitespace
  function isEmpty(element) {
      return !element.textContent.trim();
  }
  
  // Function to check if an element contains an image
  function hasImage(element) {
      return element.querySelector('img') !== null;
  }
  
  // Select all elements with the class .cc-kiks-collage-meta
  var collageMetaElements = document.querySelectorAll(".cc-kiks-collage-meta");
  
  collageMetaElements.forEach(function(collageMeta) {
      var tabHeaders = collageMeta.querySelectorAll(".tab-collage.tab-collage .grid__item li.tab-collage__item p.tabHeaders");
      var tabImages = collageMeta.querySelectorAll(".tab-collage.tab-collage .grid__item .tab-collage__card .media-wrapper");
  
      // Check if any tabHeader has text
      var hasNonEmptyHeader = Array.from(tabHeaders).some(header => !isEmpty(header));
  
      // Check if any tabImage contains an image
      var hasValidImage = Array.from(tabImages).some(image => hasImage(image));
  
      // Hide the .cc-kiks-collage-meta element if no headers have text and no images are found
      if (!hasNonEmptyHeader && !hasValidImage) {
          collageMeta.style.display = 'none';
      } else {
          collageMeta.style.display = ''; // Remove display: none
      }
  });


/* app */
// tidio-chat
setTimeout(() => {
  document.querySelector("div#tidio-chat iframe#tidio-chat-iframe").style.zIndex = '9';
}, 5000);
 



// Function to truncate reviews and show read more buttons
// function truncateReviews() {
//     var reviewBodies = document.querySelectorAll('.jdgm-rev-widg__body .jdgm-rev-widg__reviews .jdgm-rev__body p');

//     reviewBodies.forEach(function (reviewBody) {
//         var words = reviewBody.innerText.split(' ');
//         if (words.length >= 50) {
//             // Clear existing read-more buttons and content
//             var readMoreButton = reviewBody.querySelector('.read-more-button');
//             var readMoreContent = reviewBody.querySelector('.read-more-content');
//             if (readMoreButton) {
//                 readMoreButton.remove();
//             }
//             if (readMoreContent) {
//                 readMoreContent.remove();
//             }

//             var halfPoint = Math.ceil(words.length / 2);
//             var visibleText = words.slice(0, halfPoint).join(' ');
//             var hiddenText = words.slice(halfPoint).join(' ');

//             // Create read-more content initially hidden
//             readMoreContent = document.createElement('span');
//             readMoreContent.className = 'read-more-content';
//             readMoreContent.innerText = ' ' + hiddenText;
//             readMoreContent.style.display = 'none'; // Initially hide

//             // Create read-more button
//             readMoreButton = document.createElement('span');
//             readMoreButton.className = 'read-more-button';
//             readMoreButton.innerText = ' Read more';
//             readMoreButton.addEventListener('click', function () {
//                 if (readMoreContent.style.display === 'none') {
//                     readMoreContent.style.display = 'inline'; // Show hidden text
//                     readMoreButton.innerText = ' Read less';
//                 } else {
//                     readMoreContent.style.display = 'none'; // Hide hidden text
//                     readMoreButton.innerText = ' Read more';
//                 }
//             });

//             // Set the initial visible text
//             reviewBody.innerText = visibleText;

//             // Append read-more content and button
//             reviewBody.appendChild(readMoreContent);
//             reviewBody.appendChild(readMoreButton);
//         }
//     });
// }

// // Apply truncation initially
// truncateReviews();

// // Function to handle dropdown change
// function handleDropdownChange() {
//     truncateReviews();
// }

// // Event delegation for .jdgm-row-actions
// document.addEventListener('change', function (event) {
//     var dropdown = event.target.closest('.jdgm-row-actions').querySelector('.jdgm-sort-dropdown');
//     if (dropdown) {
//         handleDropdownChange();
//     } else {
//         console.error('Dropdown element not found.');
//     }
// });

// // Event delegation for select.jdgm-sort-dropdown
// document.addEventListener('change', function (event) {
//     if (event.target.matches('select.jdgm-sort-dropdown')) {
//         handleDropdownChange();
//     }
// });





