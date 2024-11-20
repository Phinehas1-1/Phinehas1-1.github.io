**Project: Dynamic Product Display**

This project demonstrates how to dynamically generate product cards on a webpage using HTML, CSS, and JavaScript.

**Structure:**

- `index.html`: Defines the basic HTML structure of the page.
- `style.css`: Contains CSS styles for the product cards and container.
- `script.js`:  Handles the creation and population of product cards using JavaScript.

**index.html (Line-by-Line Breakdown):**

```html
<!DOCTYPE html>
<html lang="en">
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

- `<!DOCTYPE html>`: Declares the document type as HTML.
- `<html lang="en">`: Defines the root element of the HTML document and specifies the language attribute as English.
- `<head>`: Contains meta information about the document, including the title.
    - `<title>Dynamic Elements</title>`: Sets the title of the webpage displayed in the browser tab.
- `<link rel="stylesheet" href="style.css">`: Links the external CSS file (`style.css`) to the HTML document for styling.
- `<body>`: Contains the visible content of the webpage.
    - `<div id="container"></div>`: Creates a `div` element with an ID of "container" to hold the dynamically generated product cards.
- `<script src="script.js"></script>`: Links the external JavaScript file (`script.js`) to the HTML document, which handles the dynamic content creation.

**style.css (Line-by-Line Breakdown):**

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

- `#container { ... }`: Defines styles for the element with the ID "container".
    - `display: flex;`: Makes the container a flexbox container, allowing for flexible arrangement of child elements.
    - `flex-wrap: wrap;`: Wraps child elements to the next line when the container becomes full.
    - `justify-content: center;`: Horizontally centers child elements within the container.
- `.card { ... }`: Defines styles for elements with the class name "card" (these are the product cards).
    - `border: 1px solid #ccc;`: Adds a 1px solid border with a light gray color (#ccc) to the cards.
    - `padding: 20px;`: Adds 20px of padding around the content inside the cards.
    - `margin: 10px;`: Adds 10px of margin around each card, creating space between them.
    - `width: 200px;`: Sets the width of each card to 200px.
    - `text-align: center;`: Horizontally centers the content within each card.
- `.card img { ... }`: Defines styles for images inside the cards (`.card` element with a child `img` element).
    - `width: 100%;`: Sets the width of the image to 100% of the card's width, making it fill the available space.

**script.js (Line-by-Line Breakdown):**

```javascript
const data = [
    {
        id: 1,
        title: "Book",
        image: "phone.jpeg", // Replace with the actual image path for book
        price: 499.99
    },
    {
        id: 2,
        title: "book", // Consider making titles consistent (uppercase or lowercase)
        image: "book.jpg", // Replace with the actual image path for book
        price: 19.99
    }
];

const container = document.getElementById('container');

data.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
