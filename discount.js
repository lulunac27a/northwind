document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('discount-row').addEventListener('click', function (e) {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
    document.getElementById('discount-row').addEventListener('keydown', function (e) {
        if (e.key == 'Escape') {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    })
});