try {
  const listLanguage = document.querySelector('.langChange');
  listLanguage.addEventListener('click', () => {
    if (listLanguage.className === 'langChange langHide') {
      listLanguage.className = 'langChange langShow';
    } else {
      listLanguage.className = 'langChange langHide';
    }
    console.log(listLanguage.className);
  });
} catch (error) {}
