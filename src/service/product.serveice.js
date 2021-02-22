export function addPurchase(id, size) {
    let idSize = id + "_" + size;
    let purchaseMap = getPurchases();
    let purchase = purchaseMap.get(idSize);
    if (purchase) {
        purchase.count++;
    } else {
        purchaseMap.set(idSize,{id: id, count: 1})
    }
    savePurchases(purchaseMap);
}

function savePurchases (purchaseMap) {
    let json = JSON.stringify(Array.from(purchaseMap.entries()));
    localStorage.setItem("purchases", json);
}

function getPurchases() {
    let purchases = localStorage.getItem("purchases");
    if (purchases) {
        return new Map(JSON.parse(purchases));
    }
    return new Map();
}
