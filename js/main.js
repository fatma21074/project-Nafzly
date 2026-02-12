  const offcanvasRightEl = document.getElementById('offcanvasRight');
  const offcanvasRight = new bootstrap.Offcanvas(offcanvasRightEl);

  const offcanvasTopEl = document.getElementById('offcanvasTop');
  const offcanvasTop = new bootstrap.Offcanvas(offcanvasTopEl);


 // Search icon click
  document.getElementById('searchToggle')
    .addEventListener('click', function () {
      offcanvasTop.show();
    });

  // Menu icon click
  document.getElementById('menuToggle')
    .addEventListener('click', function () {
      offcanvasRight.show();
    });
