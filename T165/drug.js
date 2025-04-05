function traceTransaction() {
    const input = document.getElementById("inputField").value;
    const graphContainer = document.getElementById("graphContainer");
    graphContainer.innerHTML = "";
  
    const transactionTrail = [
      { step: 1, address: "0xABC123...", service: "Binance", amount: "2 BTC" },
      { step: 2, address: "0xDEF456...", service: "Mixer", amount: "1.9 BTC" },
      { step: 3, address: "0xGHI789...", service: "Bridge", amount: "1.85 BTC" },
      { step: 4, address: "0xREALUSER...", service: "Exchange Wallet", amount: "1.8 BTC" },
    ];
  
    transactionTrail.forEach((tx) => {
      const card = document.createElement("div");
      card.className = "transaction-card";
      card.innerHTML = `
        <h3>Step ${tx.step}</h3>
        <p><strong>Wallet Address:</strong> ${tx.address}</p>
        <p><strong>Service Type:</strong> ${tx.service}</p>
        <p><strong>Amount:</strong> ${tx.amount}</p>
      `;
      graphContainer.appendChild(card);
    });
  }
  