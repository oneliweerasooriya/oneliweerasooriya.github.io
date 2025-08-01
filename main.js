
// Show a fancy modal message instead of alert
function showMessage() {
    // Create modal elements
    const modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <h2>🎉 Welcome!</h2>
        <p>Thanks for getting started with this extravagant frontend!<br>Enjoy exploring and building 🚀</p>
        <button class="button close-modal">Close</button>
    `;
    modalBg.appendChild(modal);
    document.body.appendChild(modalBg);

    // Animate modal
    setTimeout(() => modal.classList.add('show'), 10);

    // Close modal on button click or background click
    modalBg.addEventListener('click', (e) => {
        if (e.target === modalBg || e.target.classList.contains('close-modal')) {
            modal.classList.remove('show');
            setTimeout(() => document.body.removeChild(modalBg), 300);
        }
    });
}

// Add modal styles dynamically for demo purposes
const style = document.createElement('style');
style.innerHTML = `
.modal-bg {
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.35); display: flex; align-items: center; justify-content: center;
    z-index: 1000;
}
.modal {
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.18);
    padding: 36px 32px 28px 32px;
    text-align: center;
    max-width: 350px;
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    transition: all 0.3s cubic-bezier(.23,1.01,.32,1);
}
.modal.show {
    opacity: 1;
    transform: translateY(0) scale(1);
}
.modal h2 {
    margin-top: 0;
    color: #007BFF;
}
.modal .button {
    margin-top: 18px;
}
`;
document.head.appendChild(style);

// Show the message modal
showMessage();