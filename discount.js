document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('discount-row').addEventListener('click', (e) => {
        e.preventDefault();
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    });
});