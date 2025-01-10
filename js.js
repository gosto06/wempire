let plants = {
    saksi1: { isWatered: false, size: 100 },
    saksi2: { isWatered: false, size: 100 }
};

let canBuySeed = true;

function buySeed() {
    if (canBuySeed) {
        alert("Tohum satın alındı!");
        canBuySeed = false; // Tohum bir kez alındıktan sonra tekrar alınamaz
    } else {
        alert("Zaten bir tohum aldınız!");
    }
}

function waterPlant(saksiId) {
    let plant = document.querySelector(`#${saksiId} .plant`);
    let saksi = plants[saksiId];

    if (!saksi.isWatered) {
        alert(`${saksiId} bitkisine su verdin!`);
        saksi.isWatered = true;
        startGrowing(saksiId);
    } else {
        alert("Bu bitki zaten sulandı!");
    }
}

function startGrowing(saksiId) {
    let plant = document.querySelector(`#${saksiId} .plant`);
    let saksi = plants[saksiId];

    if (saksi.isWatered) {
        saksi.size += 50; // Her sulama sonrası bitki boyutunu artır
        plant.style.height = saksi.size + "px";
        plant.style.width = saksi.size + "px";
        plant.style.bottom = 20 + "px"; // Bitki yukarı doğru büyüdükçe biraz yükselir
    }
}
