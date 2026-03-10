document.getElementById('exploreBtn').addEventListener('click', function() {
    const details = document.getElementById('detailsSection');
    
    // Bölümü görünür yap
    details.classList.remove('hidden');
    
    // Yumuşak geçiş efekti
    setTimeout(() => {
        details.style.opacity = "1";
        details.style.transition = "opacity 1s ease-in-out";
        
        // Detaylar bölümüne yumuşak kaydır
        details.scrollIntoView({ behavior: 'smooth' });
    }, 10);

    // Buton metnini değiştir veya gizle
    this.innerText = "Sistem Aktif";
    this.style.borderColor = "#4caf50";
    this.style.color = "#4caf50";
});
