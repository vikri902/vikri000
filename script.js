document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Silakan masukkan nama Anda! 💕");
        return;
    }
    
    // Tampilkan halaman romantis
    document.getElementById("loginSection").classList.add("hidden");
    document.getElementById("displaySection").classList.remove("hidden");
    document.getElementById("userDisplay").textContent = username;

    let wordsBox = document.getElementById("wordsBox");
    let romanticWords = [
        "🌹 Cintaku padamu seperti bunga yang selalu mekar. 🌸",
        "💖 Kehadiranmu seperti sinar matahari di pagi hari. ☀",
        "🌷 Seperti kelopak mawar, cintaku selalu lembut dan indah. 💕",
        "💑 Kamu dan aku adalah takdir yang ditulis di bintang-bintang. ✨",
        "💞 Setiap detik bersamamu adalah keajaiban cinta. 🕰",
        "🌺 Hatiku berbunga-bunga setiap kali melihat senyummu. 😍"
    ];

    let index = 0;
    
    function showWords() {
        if (index < romanticWords.length) {
            let newWord = document.createElement("p");
            newWord.innerHTML = romanticWords[index];
            wordsBox.innerHTML = ""; // Hapus kata sebelumnya
            wordsBox.appendChild(newWord);
            
            setTimeout(() => {
                newWord.style.opacity = "1";
                newWord.style.transform = "translateY(0)";
            }, 100);
            
            index++;
            setTimeout(showWords, 3000);
        }
    }

    showWords();
});