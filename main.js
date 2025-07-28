document.querySelectorAll('button[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const targetMenu = document.getElementById(targetId);
    
    // Hide all menus
    document.querySelectorAll('.menu-section').forEach(menu => {
      if (menu.id !== targetId) {
        menu.classList.remove('show');
      }
    });

    // Toggle clicked menu
    targetMenu.classList.toggle('show');
  });
});