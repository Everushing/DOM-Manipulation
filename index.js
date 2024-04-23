// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


// main element
const mainEl = document.querySelector('main');

// Check if main element exists
if (mainEl) {

  // Set background color using CSS variable
  mainEl.style.backgroundColor = 'var(--main-bg)';

  // Set content using innerHTML
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

  // Add class to the main 
  mainEl.classList.add('flex-ctr');
} else {
  console.error("Couldn't find a main element on this page.");
}

// nav element with id "top-menu"
const topMenuEl = document.querySelector('nav#top-menu');

// Check if topMenuEl exists
if (topMenuEl) {

  // Set height of topMenuEl to 100%
  topMenuEl.style.height = '100%';

  // Set background color using CSS variable
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

  // Add class "flex-around" to topMenuEl
  topMenuEl.classList.add('flex-around');
  
} else {
  console.error("Couldn't find a nav element with id 'top-menu' on this page.");
}

if (topMenuEl) {

    // Loop through menuLinks array
    for (const link of menuLinks) {
      // Create an anchor element
      const menuLinkEl = document.createElement('a');
  
      // Set href attribute of the anchor element
      menuLinkEl.href = link.href;
  
      // Set content of the anchor element
      menuLinkEl.textContent = link.text;
  
      // Append the anchor element to topMenuEl
      topMenuEl.appendChild(menuLinkEl);
    }
  
  } else {
    console.error("Couldn't find a nav element with id 'top-menu' on this page.");
  }

  
  

