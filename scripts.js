document.addEventListener('DOMContentLoaded', () => {
    const bullishTokens = [
        'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        'https://cryptologos.cc/logos/ethereum-eth-logo.png',
        'https://cryptologos.cc/logos/ripple-xrp-logo.png',
        'https://cryptologos.cc/logos/litecoin-ltc-logo.png',
        'https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png',
        'https://cryptologos.cc/logos/cardano-ada-logo.png',
        'https://cryptologos.cc/logos/polkadot-dot-logo.png',
        'https://cryptologos.cc/logos/binance-coin-bnb-logo.png',
        'https://cryptologos.cc/logos/stellar-xlm-logo.png',
        'https://cryptologos.cc/logos/chainlink-link-logo.png'
    ];

    const bearishTokens = [
        'https://cryptologos.cc/logos/monero-xmr-logo.png',
        'https://cryptologos.cc/logos/tezos-xtz-logo.png',
        'https://cryptologos.cc/logos/eos-eos-logo.png',
        'https://cryptologos.cc/logos/tron-trx-logo.png',
        'https://cryptologos.cc/logos/iota-miota-logo.png',
        'https://cryptologos.cc/logos/neo-neo-logo.png',
        'https://cryptologos.cc/logos/dash-dash-logo.png',
        'https://cryptologos.cc/logos/zilliqa-zil-logo.png',
        'https://cryptologos.cc/logos/nano-nano-logo.png',
        'https://cryptologos.cc/logos/vechain-vet-logo.png'
    ];

    const grid = document.querySelector('.background-grid');
    let showingBullish = true;

    function getRandomPosition() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
    }

    function createTokenGrid(tokens) {
        grid.innerHTML = '';
        tokens.forEach(token => {
            const img = document.createElement('img');
            img.src = token;
            const { x, y } = getRandomPosition();
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            grid.appendChild(img);
        });
    }

    function changeBackgroundTokens() {
        if (showingBullish) {
            createTokenGrid(bullishTokens);
        } else {
            createTokenGrid(bearishTokens);
        }
        showingBullish = !showingBullish;
    }

    // Initial token grid
    changeBackgroundTokens();

    // Change background tokens every 5 seconds
    setInterval(changeBackgroundTokens, 5000);

    // Update token positions on resize
    window.addEventListener('resize', changeBackgroundTokens);
});
