try {
  const hamburgerMenu = document.querySelector('.HamburgerMenu');
  body = document.body
  hamburgerMenu.addEventListener('click', () => {
    if (hamburgerMenu.className === 'HamburgerMenu hide') {
      hamburgerMenu.className = 'HamburgerMenu show';
      body.style.position = 'fixed'
      body.style.overflowY = 'hidden'
    } else {
    console.log(hamburgerMenu.className);
      hamburgerMenu.className = 'HamburgerMenu hide';
      body.style.position = 'unset'
      body.style.overflowY = 'unset'
      return
    }
  });
} catch (error) {
}

try {
  const projectButton = document.querySelector('.projectButton');
  const projectsFragment3 = document.querySelectorAll('.hideProject');

  projectButton.addEventListener('click', () => {
    projectsFragment3.forEach((e) => {
      e.className = e.className.split(' ')[0];
    });
    projectButton.style.display = 'none';
  });
} catch (error) {}
