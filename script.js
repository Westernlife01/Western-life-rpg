function showSections() {
    document.getElementById('about').classList.remove('hidden');
    document.getElementById('discord').classList.remove('hidden');
    document.getElementById('tiktok').classList.remove('hidden');
}
let count = 0;

function markAsRead() {
    count++;
    const reactionText = document.getElementById('reaction-text');
    const countText = document.getElementById('count');
    
    reactionText.textContent = "Elolvastad a szabályzatot! Köszönjük!";
    reactionText.style.color = "green"; // A szöveg zöldre változik
    countText.textContent = ` (${count} ember fogadta el a szabályzatot)`;
}
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
