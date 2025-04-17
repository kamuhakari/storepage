// toggle kelas aktif

const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// clik diluar slidebar = close navbar

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});


document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Format the WhatsApp URL
    const whatsappUrl = `https://wa.me/6285138457149?text=
        Nama: ${encodeURIComponent(name)}%0A
        No HP: ${encodeURIComponent(phone)}%0A
        Pesan: ${encodeURIComponent(message)}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});


const typed = new Typed('#typed-text', {
    strings: ["undangan", "kartu ucapan", "surat"],
    typeSpeed: 100,
    backSpeed: 50,
    fadeOut: true,
    loop: true
}); 
    const text = new Typed('#new-text', {
    strings: ["mudah", "murah", "mantap"],
    typeSpeed: 0,
    backSpeed: 0,
    cursorChar: '',
    shuffle: true,
    smartBackspace: false,
    loop: true
    })

    // script.js
document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Ignore clicks on buttons to avoid conflict
        if (!e.target.classList.contains('select-btn')) {
            document.querySelectorAll('.theme-card').forEach(c => {
                c.classList.remove('selected');
            });
            card.classList.add('selected');
        }
    });
});

// Handle "Pilih Tema" button clicks
document.querySelectorAll('.select-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const themeName = btn.closest('.theme-card').dataset.theme;
        alert(`Anda akan melihat contoh: ${themeName}`);
        // Add logic to proceed (e.g., redirect to checkout)
    });
});