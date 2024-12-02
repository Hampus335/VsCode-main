function toggleContent(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden'); // Visa innehållet
    } else {
      element.classList.add('hidden'); // Dölj innehållet
    }
  }