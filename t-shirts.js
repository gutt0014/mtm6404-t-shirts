const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

function renderTShirts() {
  document.body.innerHTML = ''; 
  tshirts.forEach((tshirt, index) => {
    const card = document.createElement('div');
    card.className = 'tshirt-card';

    const title = document.createElement('h3');
    title.textContent = tshirt.title;

    const img = document.createElement('img');
    img.src = tshirt.image;
    img.alt = tshirt.title;
    img.className = 'tshirt-image';

    const price = document.createElement('p');
    price.textContent = `Price: $${tshirt.price.toFixed(2)}`;

    const stock = document.createElement('p');
    if (tshirt.stock > 0) {
      stock.textContent = `Stock: ${tshirt.stock}`;
    } else {
      stock.textContent = 'Out of Stock';
      stock.className = 'out-of-stock';
    }

    card.appendChild(title);
    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(stock);

    if (tshirt.stock > 0) {
      const quantitySelect = document.createElement('select');
      for (let i = 1; i <= tshirt.stock; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        quantitySelect.appendChild(option);
      }

      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy';

      buyButton.addEventListener('click', () => {
        const selectedQuantity = parseInt(quantitySelect.value);
        tshirt.stock -= selectedQuantity;
        renderTShirts();
      });

      card.appendChild(quantitySelect);
      card.appendChild(buyButton);
    }

    document.body.appendChild(card);
  });
}

renderTShirts();
