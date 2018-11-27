window.onload = function () {
  document.getElementById('menu-btn').onclick = function () {
    const menu = document.getElementById('menu-container');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  };
};
