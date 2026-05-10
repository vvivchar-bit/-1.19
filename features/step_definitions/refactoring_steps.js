const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");

let price;
let finalPrice;

let paymentType;
let paymentResult;

let orderNumber;
let notification;

function calculateFinalPrice(productPrice, discountPercent) {
    return productPrice - (productPrice * discountPercent / 100);
}

function processPayment(type) {
    if (type === "card") {
        return "Card payment completed";
    }

    if (type === "cash") {
        return "Cash payment completed";
    }

    return "Unknown payment type";
}

function completeOrder(number) {
    return `Order ${number} completed successfully`;
}

Given("the product price is {int}", function (value) {
    price = value;
});

When("the discount is {int} percent", function (discount) {
    finalPrice = calculateFinalPrice(price, discount);
});

Then("the final price should be {int}", function (expectedPrice) {
    assert.strictEqual(finalPrice, expectedPrice);
});

Given("the payment type is {string}", function (type) {
    paymentType = type;
});

When("the payment is processed", function () {
    paymentResult = processPayment(paymentType);
});

Then("the payment result should be {string}", function (expectedResult) {
    assert.strictEqual(paymentResult, expectedResult);
});

Given("the order number is {string}", function (number) {
    orderNumber = number;
});

When("the order is completed", function () {
    notification = completeOrder(orderNumber);
});

Then("the notification should be {string}", function (expectedNotification) {
    assert.strictEqual(notification, expectedNotification);
});
