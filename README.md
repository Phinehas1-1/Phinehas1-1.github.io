Below is the detailed **README.md** file explaining each line of the code.

---

# Dynamic Elements Application

This project demonstrates a dynamic webpage that displays product information such as an image, title, and price. The content is dynamically created using HTML, CSS, and JavaScript.

## Files

- `index.html`: Structure of the webpage.
- `style.css`: Styling for the page elements.
- `script.js`: JavaScript code to dynamically create and populate product elements.

---

## `index.html`

```html
<html>
<head>
    <title>Dynamic Elements</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="container"></div>
    <script src="script.js"></script>
</body>
</html>
```

### Explanation:

1. **`<html>`**: Marks the beginning of the HTML document.
2. **`<head>`**: Contains metadata and links to external resources for the document.
3. **`<title>Dynamic Elements</title>`**: Sets the title of the webpage, which appears in the browser tab.
4. **`<link rel="stylesheet" href="style.css">`**: Links the external CSS file for styling the elements on the page.
5. **`<body>`**: Contains the main content visible on the webpage.
6. **`<div id="container"></div>`**: Empty container where the dynamically generated product cards will be added.
7. **`<script src="script.js"></script>`**: Links the external JavaScript file that generates the dynamic elements.

---

## `style.css`

```css
#container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px;
    width: 200px;
    text-align: center;
}

.card img {
    width: 100%;
}
```

### Explanation:

1. **`#container`**: Styles for the container element.
   - `display: flex;`: Enables a flexbox layout.
   - `flex-wrap: wrap;`: Allows items to wrap to the next line when there isn't enough space.
   - `justify-content: center;`: Centers the child elements horizontally.

2. **`.card`**: Styles for individual product cards.
   - `border: 1px solid #ccc;`: Adds a light gray border around each card.
   - `padding: 20px;`: Adds spacing inside the card.
   - `margin: 10px;`: Adds spacing between cards.
   - `width: 200px;`: Fixes the width of the card.
   - `text-align: center;`: Centers the text inside the card.

3. **`.card img`**: Styles for the image within the card.
   - `width: 100%;`: Ensures the image width fits the card.

---

## `script.js`

```javascript
const data = [
    {
        id: 1,
        title: "Book",
        image: "phone.jpeg",
        price: 499.99
    },
    {
        id: 2,
        title: "book",
        image: "book.jpg",
        price: 19.99
    }
];
```

### Explanation:

1. **`const data = [...]`**: Array of objects representing the product data. Each object has:
   - `id`: Unique identifier for the product.
   - `title`: Name of the product.
   - `image`: File path of the product image.
   - `price`: Price of the product.

---

```javascript
const container = document.getElementById('container');
```

2. **`document.getElementById('container')`**: Selects the `<div>` element with `id="container"` to append dynamic elements.

---

```javascript
data.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');
```

3. **`data.forEach(product => {...})`**: Loops through each product in the `data` array.
4. **`document.createElement('div')`**: Creates a new `<div>` element for the product card.
5. **`card.classList.add('card')`**: Adds the CSS class `card` to the newly created `<div>`.

---

```javascript
    const image = document.createElement('img');
    image.src = product.image;
    card.appendChild(image);
```

6. **`document.createElement('img')`**: Creates a new `<img>` element for the product image.
7. **`image.src = product.image`**: Sets the image source from the `product.image` property.
8. **`card.appendChild(image)`**: Adds the image element to the card.

---

```javascript
    const title = document.createElement('h3');
    title.textContent = product.title;
    card.appendChild(title);
```

9. **`document.createElement('h3')`**: Creates an `<h3>` element for the product title.
10. **`title.textContent = product.title`**: Sets the text content of the title element.
11. **`card.appendChild(title)`**: Adds the title element to the card.

---

```javascript
    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    card.appendChild(price);
```

12. **`document.createElement('p')`**: Creates a `<p>` element for the product price.
13. **`price.textContent = `$${product.price}``**: Sets the price text with a dollar sign.
14. **`card.appendChild(price)`**: Adds the price element to the card.

---

```javascript
    container.appendChild(card);
});
```

15. **`container.appendChild(card)`**: Adds the fully constructed card to the container.

