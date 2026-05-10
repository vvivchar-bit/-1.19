Feature: Refactoring behavior check

  Scenario: Calculate discount before and after refactoring
    Given the product price is 1000
    When the discount is 10 percent
    Then the final price should be 900

  Scenario: Choose payment method
    Given the payment type is "card"
    When the payment is processed
    Then the payment result should be "Card payment completed"

  Scenario: Complete order notification
    Given the order number is "ORD-101"
    When the order is completed
    Then the notification should be "Order ORD-101 completed successfully"
