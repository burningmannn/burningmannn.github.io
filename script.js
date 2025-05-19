const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd';

async function fetchTonPrice() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const tonPrice = data['the-open-network'].usd.toFixed(2);
    const tonPriceElement = document.getElementById('eth-price');
    tonPriceElement.textContent = `TON Price: $${tonPrice}`;
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}
fetchTonPrice();

function copyAddress() {
    const address = document.getElementById('eth-address').textContent;
    navigator.clipboard.writeText(address)
    .then(() => {
        alert('Address copied to clipboard!');
    })
    .catch(err => {
        console.error('Failed to copy: ', err);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const firstName = { en: "Daniil" };
    const lastName = { en: "Shutkin" };
    const content = {
        en: { 
            home: "About", 
            donate: "Donate",
            about: "About",
            donate_me: "Donate <span class='main-gradient'>Me</span>",
            toncoin: "TONCOIN",
            ton_price_loading: "TON Price: Loading...",
            main_greeting: "Hi, I'm a <span class='main-gradient'>developer</span>",
            firstName: "Daniil",
            lastName: "Shutkin"
        }
    };
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-theme', currentTheme === 'light');
    updateContent();
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const newTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
        });
    }
    function updateContent() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (content.en[key]) {
                element.innerHTML = content.en[key];
            }
        });
        const toncoin = document.querySelector('.donate-card h2');
        if (toncoin) toncoin.textContent = content.en.toncoin;
        const tonPrice = document.getElementById('eth-price');
        if (tonPrice && tonPrice.textContent.includes('Loading')) {
            tonPrice.textContent = content.en.ton_price_loading;
        }
        const headerH1 = document.querySelector('.header-container h1');
        if (headerH1) {
            headerH1.classList.remove('small-header');
        }
    }
});