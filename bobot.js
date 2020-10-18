const bobot = (iterations = 5000) => {
  const MENU_BUTTON_SEARCH_STR = '.ytd-playlist-video-list-renderer button#button';
  const DELETE_BUTTON_SEARCH_STR = 'paper-item.ytd-menu-service-item-renderer';

  const elements = document.querySelectorAll(MENU_BUTTON_SEARCH_STR);

  if (iterations < 1 || elements.length === 0) {
    console.log('stopping bobot, ran out of iterations or elements');
    return;
  } else {
    const toUseSlowMode = elements.length < 6;
    toUseSlowMode && console.log('bobot running out of elements to remove, using slow mode');
    const waitTime = toUseSlowMode ? 5000 : 0;

    setTimeout(() => document.querySelector(MENU_BUTTON_SEARCH_STR).click(), waitTime);
    setTimeout(() => {
      Array.from(document.querySelectorAll(DELETE_BUTTON_SEARCH_STR))
        .filter((el) => el.textContent.includes('Remove from Watch later'))[0].click()
      console.log('bobot iteration', iterations, 'success');
      bobot(iterations - 1);
    }, waitTime);
  }
};
