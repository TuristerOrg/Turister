window.onload = function () {
  document.getElementById('menu-btn').onclick = function () {
    const menu = document.getElementById('menu-container');
    const filtro = document.getElementById('filter-container');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      filtro.style.display = 'none';
      menu.style.display = 'block';
    }
  };

  document.getElementById('map').onclick = function () {
    const menu = document.getElementById('menu-container');
    menu.style.display = 'none';
    const filtro = document.getElementById('filter-container');
    filtro.style.display = 'none';
  };

  document.getElementById('filter-btn').onclick = function () {
    const menu = document.getElementById('filter-container');
    const filtro = document.getElementById('menu-container');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      filtro.style.display = 'none';
      menu.style.display = 'flex';
    }
  };
};
