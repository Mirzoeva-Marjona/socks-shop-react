import React, {Component} from "react";

class Basket extends Component {
    render() {
        return <div id="basketComponent">
                <div class="modal _basket _scroll js-hidden">
                    <div class="basket-content">
                        <div class="basket-content__header">
                            <div data-modal="open-basket" class="basket-content__header-title _font">
                                <div>
                                    <span>Выбранные товары</span>
                                </div>
                            </div>
                            <div class="basket-content__close-button" (click)="closeBasketClick()">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125L21.9875 6.25Z"
                                  fill="#333333"/>
                        </svg>
                    </div>
                </div>
                <div *ngFor="let item of purchase">
                <app-basket-row [purchase]="item" (deleteRow)="deleteBasketRow($event)" (productRowChanged)="productRowChanged($event)"></app-basket-row>
    </div>
        <div class="basket-content__total _font">
            <span>{{totalPrice | rub}}</span>
        </div>
    </div>
    </div>
    </div>
    }
}
