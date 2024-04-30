var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

const mainEl = document.querySelector('main');

if(mainEl) {
  mainEl.style.backgroundColor = 'var(--main-bg)';
  mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
  mainEl.classList.add('flex-ctr');
} else {
  console.error("Couldn't find a main element on this page.");

}

const topMenuEl = document.querySelector('nav#top-menu');

if (topMenuEl) {
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
}
 else {
console.error("Couldn't find a nav element with id 'top-menu' on this page.");
}

if (topMenuEl) {

  for (const link of menuLinks) {
const menuLinkEl = document.createElement('a');
menuLinkEl.href = link.href;
menuLinkEl.textContent = link.text;
topMenuEl.appendChild(menuLinkEl);
  }

} else {
  console.error("Couldn't find a nav element with id 'top-menu' on this page.");
}


const subMenuEl = document.querySelector('nav#top-menu');

 if (subMenuEl) {
    
    subMenuEl.style.position = 'absolute';
    subMenuEl.style.top = '0';
    subMenuEl.style.height = '100%'; 
    subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
    subMenuEl.classList.add('flex-around');
  } else {
    console.error("Couldn't find a nav element with id 'sub-menu' on this page.");
  }


  
  for (const link of menuLinks) {
    const menuLinkEl = document.createElement('a');
    menuLinkEl.href = link.href;
    menuLinkEl.textContent = link.text;

    
    if (link.subLinks) {
      const subMenuEl = document.createElement('nav');
      subMenuEl.classList.add('sub-menu');

      
      for (const subLink of link.subLinks) {
        const subLinkEl = document.createElement('a');
        subLinkEl.href = subLink.href;
        subLinkEl.textContent = subLink.text;
        subMenuEl.appendChild(subLinkEl);
      }

      topMenuEl.appendChild(subMenuEl);
    }

    topMenuEl.appendChild(menuLinkEl);
  }

  // Attach click event listener (delegated)
  topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();

    if (!event.target.matches('a')) return;

    const clickedLink = event.target;
    console.log("Clicked top menu link:", clickedLink.textContent);
    
    const parentMenu = clickedLink.parentNode;

    // Toggle submenu visibility (basic example)
    if (parentMenu.classList.contains('sub-menu')) {
      parentMenu.classList.toggle('active');
    } 
  });








