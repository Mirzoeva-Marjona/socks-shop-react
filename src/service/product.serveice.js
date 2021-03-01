import {products} from './../data/products.data';
import {get} from "react-hook-form";

export function addPurchase(id, size) {
    let idSize = id + "_" + size;
    let purchaseMap = getPurchases();
    let purchase = purchaseMap.get(idSize);
    if (purchase) {
        purchase.count++;
    } else {
        purchaseMap.set(idSize,{id: id, count: 1, size: size});
    }
    savePurchases(purchaseMap);
}

export function savePurchases (purchaseMap) {
    let json = JSON.stringify(Array.from(purchaseMap.entries()));
    localStorage.setItem("purchases", json);
}

export function getPurchases() {
    let purchases = localStorage.getItem("purchases");
    if (purchases) {
        return new Map(JSON.parse(purchases));
    }
    return new Map();
}

export function getPurchase(idSize) {
    return getPurchases().get(idSize);
}

export function getProduct(id) {
    return products.filter((product) => product.id == id)[0];
}
