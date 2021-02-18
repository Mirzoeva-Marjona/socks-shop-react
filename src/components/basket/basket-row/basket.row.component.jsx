import React, {Component} from "react";

class BasketRow extends Component {
    render() {
        return <div id="productItemRow">
            <div class="product-row _font">
                <div>
                    <img class="product-row__image" src="{{purchase.img}}" alt="Изображение не найдено">
                </div>
                <div>{{purchase.name}}</div>
                <div>{{purchase.socksSize}}</div>
                <app-counter [count]="purchase.count" (changeCount)="updateBasketRow($event)"></app-counter>
            <div>{{purchase.price | price: purchase.count | rub}}</div>
            <div (click)="deleteBasketRow()">
            <svg class="product-row__remove-button" width="30" height="30" viewBox="0 0 30 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
            <path d="M21.25 27.5H8.75C7.36929 27.5 6.25 26.3807 6.25 25V8.75H3.75V6.25H8.75V5C8.75 3.61929 9.86929 2.5 11.25 2.5H18.75C20.1307 2.5 21.25 3.61929 21.25 5V6.25H26.25V8.75H23.75V25C23.75 26.3807 22.6307 27.5 21.25 27.5ZM8.75 8.75V25H21.25V8.75H8.75ZM11.25 5V6.25H18.75V5H11.25ZM18.75 22.5H16.25V11.25H18.75V22.5ZM13.75 22.5H11.25V11.25H13.75V22.5Z"
                  fill="#333333"/>
        </svg>
    </div>
    </div>
    </div>
    }
}
