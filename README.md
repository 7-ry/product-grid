# 🛍️ Product Grid App

This is a responsive product grid UI built with Angular standalone components and SCSS.  
It mimics an e-commerce-style layout where each product is displayed as a card containing an image, name, price, and an "Add to Cart" button.

---

## 🚀 Features

- Display a list of products using `*ngFor`
- Responsive grid layout with `CSS Grid`
- Product cards with:
  - Image
  - Title
  - Price
  - Description
  - Action button ("Add to Cart")
- Clean hover effects and consistent styling
- Mobile-first responsive design
- Add products to a cart using a dynamic button
- View cart contents with item name and price
- Remove items from the cart
- Display total price based on cart contents

---

## 🛠 Technologies Used

- Angular (v17+) with `standalone: true` components
- TypeScript
- SCSS (Sass)
- CSS Grid & Flexbox

---

## 📚 What I Learned

- Managing application state inside a component (cart system)
- Using `(click)` event binding to trigger cart actions
- Leveraging `*ngIf` and `*ngFor` with `let i = index` for list rendering and actions
- Calculating dynamic values (total price) using component methods
- Styling layout with SCSS for a clean and responsive cart UI

---

## ▶️ How to Run

```bash
npm install
ng serve