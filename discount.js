document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('discount-row').addEventListener('click', (e) => {
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
        }
    });
});