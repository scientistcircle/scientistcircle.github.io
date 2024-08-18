document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌕';
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌕';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌙';
    }
});
