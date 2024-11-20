const data = [
    {
        id: 1,
        title: "Phone",
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

const container = document.getElementById('container');

data.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = product.image;
    card.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement('p');
    price.textContent = `$${product.price}`;
    card.appendChild(price);

    container.appendChild(card);
});
