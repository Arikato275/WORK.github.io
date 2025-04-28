document.addEventListener('DOMContentLoaded', function() {
    const nextPageButton = document.getElementById('nextPageButton');

    nextPageButton.addEventListener('click', function() {
        window.location.href = 'nextpage.html';
    });
});