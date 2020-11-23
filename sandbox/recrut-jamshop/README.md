# JAMSHOP Concept

## Project outline

Proof of concept build on gatsby with a basic e-shop functionality.

## Assets

**Designs**: [Figma](https://www.figma.com/file/pbpZgKb1KmVvG8gT3ILQ0A/Recrut-example?node-id=10%3A2)

## TODO

- [ ] add product list section to homepage
- [ ] cart component
- [ ] add "add product to cart" functionality
- [ ] add details page for each product

## Detailed requirements

### Designs & visuals

- All elements should match designs pixel-perfect
- Sections should be adjusted to mobiles, as it's a proof-of-concept, we were given only desktop version, hence no strict rules about mobile views, except needs to look good and be usable
- Please add some sort of transitions, hover effects to elements

### Product list section:**

- as it's a proof-of-concept, please render all products from src/data/products/
- "+" button should add product to cart
- clicking on a card (except + button) should redirect user to product page
- there should be visible max 4 cards on screen, arrows should move cards by one
- content for section title and lead should come from src/pages/product/index.md

### Product card:**

- After adding a product to a card, number in badge (cart icon on top nav) should match number of products in card
- user should be able to open product card only if there is at least 1 product added
- if product card is open, user should be able to hide it clicking on every other place on screen

### Other Requirements

- new code should be consistent with project linting and formatting rules
