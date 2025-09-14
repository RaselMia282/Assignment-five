// ================= Heart Counter =================
const heartCounter = document.getElementById('heart-counter');
const heartBtn = document.getElementsByClassName('heart-btn');

for (let btn of heartBtn) {
  btn.addEventListener('click', function () {
    let current = parseInt(heartCounter.innerText);
    heartCounter.innerText = current + 1;
  });
}

// ================= Coin & Call History =================
const coinCounter = document.getElementById('coin-counter');
const callButtons = document.getElementsByClassName('call-btn');
const callHistory = document.getElementById('call-history');
const clearHistoryBtn = document.getElementById('clear-history');

for (let btn of callButtons) {
  btn.addEventListener('click', function () {
    let currentCoins = parseInt(coinCounter.innerText);

    // Coin check
    if (currentCoins < 20) {
      alert("Not enough coins");
      return;
    }

    // Coin deduct
    coinCounter.innerText = currentCoins - 20;

    
    const card = this.closest('div.p-4');
    const serviceName = card.querySelector('.service-name').innerText;
    const number = card.querySelector('.service-number').innerText;

    
    const time = new Date().toLocaleTimeString();

    // Call history entry
    const entry = document.createElement('div');
    entry.innerHTML = `
         <div class="flex items-center gap-4 justify-between p-4 bg-gray-100 rounded-2xl">
                <div>
                  <h4 class="text-lg font-bold">${serviceName}</h4>
                  <p class="text-sm text-gray-500">${number}</p>
                </div>
                <p>${time}</p>
          </div>
        `;
    callHistory.appendChild(entry);

    // Optional alert
    alert(`${serviceName}: ${number}`);
  });
}

// ================= Clear History =================
clearHistoryBtn.addEventListener('click', function () {
  callHistory.innerHTML = "";
});

// ================= Copy Button =================
const copyButtons = document.getElementsByClassName('copy-btn');

for (let btn of copyButtons) {
  btn.addEventListener('click', function () {
    const card = this.closest('div.p-4');
    const number = card.querySelector('.service-number').innerText;

    // Clipboard এ copy
    navigator.clipboard.writeText(number)
      .then(() => {
        alert("Number copied to clipboard!");

        
        const copyBtnNavbar = document.querySelector('button.bg-green-700'); // navbar copy button
        let currentText = copyBtnNavbar.innerText; 
        let currentCount = parseInt(currentText); 
        copyBtnNavbar.innerText = (currentCount + 1) + " Copy";
      })
      .catch(err => {
        alert("Failed to copy!");
      });
  });
}