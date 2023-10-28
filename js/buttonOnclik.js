try {
  const hamburgerMenu = document.querySelector('.HamburgerMenu');
  hamburgerMenu.addEventListener('click', () => {
    if (hamburgerMenu.className === 'HamburgerMenu hide') {
      hamburgerMenu.className = 'HamburgerMenu show';
    } else {
    console.log(hamburgerMenu.className);
      hamburgerMenu.className = 'HamburgerMenu hide';
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
