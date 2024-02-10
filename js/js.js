  function validateForm() {
            var username = document.getElementById('username').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var bankCard = document.getElementById('bankCard').value;
            var CVC = document.getElementById('CVC').value;
			
            if (username.length < 5) {
                alert('Ім`я користувача повинно мати не менше 5 символів.');
            } else if (!email.endsWith('@gmail.com')) {
                alert('Електронна пошта повинна закінчюватися на "@gmail.com".');
            } else if (!/^\+\d{10,12}$/.test(phone)) {
                alert('Номер телефону повинен починатися з "+" і мати від 10 до 12 цифр.');
            } else if (!/^\d{18}$/.test(bankCard)) {
                alert('Номер банківської картки повинен складатися з лише цифр та мати 18 символів');
            } else if (!/^\d{3}$/.test(CVC)) {
                alert('Код безпеки банківської картки повинен складатися з лише цифр та мати 3 символи');
            } else {
                alert('Покупка успішна!'); 
            }
        }
		
	let disc = 0;	
	function validateDis()
	{
		var discount2 = document.getElementById('discount').value;
		if (!/^\d{5}$/.test(discount2)) {
                alert('Код знижки повинен складатися з 5 цифр');
            }else {
                alert('знижка успішна!'); 
				disc = discount2.slice(-2);;
				//addToCart('lol', 0, 0);
            }
		updateCartItems();
			
	}

	document.getElementById('square1').addEventListener('mouseover', function (event) {
	  changeColor(event.target);
	});

	document.getElementById('square2').addEventListener('mouseover', function (event) {
	  changeColor(event.target);
	});

	document.getElementById('square3').addEventListener('mouseover', function (event) {
	  changeColor(event.target);
	});

	document.getElementById('square1').addEventListener('mouseout', function (event) {
	  resetColor(event.target);
	});

	document.getElementById('square2').addEventListener('mouseout', function (event) {
	  resetColor(event.target);
	});

	document.getElementById('square3').addEventListener('mouseout', function (event) {
	  resetColor(event.target);
	});
	
	function sorry() {alert('Вибачте робота над іншими мовами ще не закінчена')}
	
	
	// Функция для изменения цвета
	function changeColor(element) {
	  anime({
		targets: element,
		backgroundColor: '#9bd9ea',
		easing: 'linear',
		duration: 500,
		direction: 'alternate',
		loop: false,
	  });
	}

	// Функция для сброса цвета
	function resetColor(element) {
	  anime({
		targets: element,
		backgroundColor: '#90ee90',
		easing: 'linear',
		duration: 500,
		direction: 'normal',
		loop: false,
	  });
	}
	
	
	let index = 0;
	let aaaa = 10;
	displayImages();

	function plusSlides(n) {
		if(n>0 ){
		annihilateAaaa();}
		if(aaaa != 10){
		if(n<0){
		returnAaaa()}
		displayImages()
		}
	}

	function annihilateAaaa() {
	  aaaa = 0;
	}
	function returnAaaa() {
	  aaaa = 10;
	}

	function displayImages() {
	  if(aaaa > 5)
	  {
	  let i;
	  const images = document.getElementsByClassName("mySlides fade");
	  for (i = 0; i < images.length; i++) {
		images[i].style.display = "none";
	  }
	  index++;
	  if (index > images.length) {
		index = 1;
	  }
	  images[index-1].style.display = "block";
	  setTimeout(displayImages, 2000); 
	  }
	}
	
	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("openModalBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementById("closeModalBtn");

	// When the user clicks on the button, open the modal
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
  const imagePath = 'img/';
  const imageNames = [];

  for (let i = 0; i < 18; i++) {
    imageNames.push((i + 1) + ".jpg");
  }

  const tableBody = document.getElementById('imageTableBody');
  const cartItemsList = document.getElementById('cartItems');
  const cartDiv = document.getElementById('cartDiv');
  const totalPriceDiv = document.getElementById('totalPrice');

  let currentIndex = 0;
const cart = [];

function updateTable() {
  tableBody.innerHTML = '';

  for (let i = currentIndex; i < currentIndex + 8 && i < imageNames.length; i += 2) {
    const row = document.createElement('tr');

    for (let j = 0; j < 2; j++) {
      const cell = document.createElement('td');
      // Apply text-align: center to center content within the cell
      cell.style.textAlign = 'center';
	  cell.style.padding = '10px';
	  
      const imageIndex = i + j;

      if (imageIndex < imageNames.length) {
        const image = document.createElement('img');
        image.src = imagePath + imageNames[imageIndex];
        image.style.height = '220px'; 
        image.style.margin = 'auto';

        const price = Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;
		quantityInput.style.width = '60px';

        const addToCartDiv = document.createElement('div');
        addToCartDiv.className = 'addToCart';

        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Додати у кошик';
        addToCartButton.addEventListener('click', () => addToCart(imageNames[imageIndex], price, quantityInput.value));

        addToCartDiv.appendChild(document.createTextNode(`Ціна: ${price} | Кількість:`));
        addToCartDiv.appendChild(quantityInput);
        addToCartDiv.appendChild(addToCartButton);

        cell.appendChild(image);
        cell.appendChild(addToCartDiv);
      }

      row.appendChild(cell);
    }

    tableBody.appendChild(row);
  }
}

  function prevImages() {
    currentIndex = Math.max(0, currentIndex - 8);
    updateTable();
    scrollToTop();
  }

  function nextImages() {
    currentIndex = Math.min(imageNames.length - 1, currentIndex + 8);
    updateTable();
    scrollToTop();
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function addToCart(imageName, price, quantity) {
    const totalPrice = price * quantity;
    const cartItem = {
      name: imageName,
      price: price,
      quantity: quantity,
      total: totalPrice
    };
    cart.push(cartItem);
    updateCartItems();
  }

  function updateCartItems() {
    cartItemsList.innerHTML = '';
    let totalCartPrice = 0;
	let totalCartPrice2 = 0;
	let HMD = 0; 
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - Ціна: ${item.price}, Кількість: ${item.quantity}, Загальна вартість: ${item.total}`;
      cartItemsList.appendChild(listItem);
      totalCartPrice += item.total;
    });
	
	if (disc == 0){
	totalPriceDiv.textContent = `Кінцева сума: ${totalCartPrice}`;}
	else {
		totalCartPrice2 = (100- disc) * totalCartPrice / 100;
		HMD = totalCartPrice - totalCartPrice2;
		totalPriceDiv.textContent = `Кінцева сума: ${totalCartPrice2} (-${HMD})`;
		}
  }

  function showCart() {
    cartDiv.style.display = 'block';
  }

  function toggleCart() {
    cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
  }

  updateTable();
	
/*
var buttonIds = ['square1', 'square2', 'square3'];

buttonIds.forEach(function (id) {
    var button = document.getElementById(id);
    button.addEventListener('click', function (event) {
        addElement(event, button);
    });
});

function addElement(e, element) {
    var addDiv = document.createElement('div'),
        mValue = Math.max(element.clientWidth, element.clientHeight),
        rect = element.getBoundingClientRect(),
        sDiv = addDiv.style,
        px = 'px';

    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;
	
    addDiv.classList.add('pulse');
    element.appendChild(addDiv);
}*/
var buttons = document.getElementsByClassName('butt'),
    forEach = Array.prototype.forEach;

forEach.call(buttons, function (b) {
    b.addEventListener('click', addElement);
});

function addElement(e) {
    var addDiv  = document.createElement('div'),
        mValue  = Math.max(this.clientWidth, this.clientHeight),
        rect    = this.getBoundingClientRect();
        sDiv    = addDiv.style,
        px      = 'px';

    sDiv.width  = sDiv.height = mValue + px;
    sDiv.left  = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top   = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}
