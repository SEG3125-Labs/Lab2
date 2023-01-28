const products = [
	{
		name: "Steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 14.99
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 5.99
	},
	{
		name: "Coffee Beans",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 10.99
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.50
	},
	{
		name: "Strawberries",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "Apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "Pasta",
		vegetarian: true,
		glutenFree: false,
		organic: false,
		price: 9.50
	},
	{
		name: "Tomatoes",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.90
	},
	{
		name: "Salad",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 6.49
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		organic: false,
		price: 9.99
	},
	{
		name: "Beans",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 5.99
	}
];
let selected = []

function openTab(evt, tabName) {
	var tabcontent = document.getElementsByClassName("tabcontent");
	for (var i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	var tablinks = document.getElementsByClassName("tablinks");
	for (var i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}


	let elm = document.getElementById(tabName)
	elm.style.display = "block";

	evt.target.className += " active"


	// document.getElementById(tabName).style.display = "block";
	// document.getElementById(tabName).className += " active";

	if (tabName == "Products") {
		// Sort the products based on price
		products.sort((a, b) => (b.price - a.price));

		updateProductList()
	}
}

function updateProductList() {
	var productList = document.getElementById("productList");

	productList.innerHTML = "";

	var typeOfFood = document.getElementById("type-of-food");

	for (var i = 0; i < products.length; i++) {
		if (document.getElementById("Vegitarian").checked && !products[i].vegetarian) {
			console.log(1)
			continue;
		} else if (document.getElementById("GlutenFree").checked && !products[i].glutenFree) {
			console.log(2)
			continue;
		} else if (typeOfFood.options[typeOfFood.selectedIndex].text == "Organic" && !products[i].organic) {
			console.log(3)
			continue;
		} else if (typeOfFood.options[typeOfFood.selectedIndex].text == "Non-Organic" && products[i].organic) {
			console.log(4)
			continue;
		}
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = products[i].name;

		if (selected.includes(products[i].name)) {
			checkbox.checked = true;
		}

		productList.appendChild(checkbox);

		var label = document.createElement('label')
		label.htmlFor = products.name;
		label.appendChild(document.createTextNode(products[i].name + " $" + products[i].price));
		productList.appendChild(label);

		productList.appendChild(document.createElement("br"));
	}
}


function addToCart() {

	selected = []
	let total = 0;

	let prods = document.getElementsByName("product");
	for (let i = 0; i < prods.length; i++) {
		if (prods[i].checked) {
			selected.push(prods[i].value)
		}
	}

	var d = document.createElement("div");

	d.innerHTML = "You selected : <br><br>";

	selected.forEach((e) => {
		const product = products.find((e2) => {
			return e2.name === e;

		});
		item = document.createElement("div");
		item.className = "item"

		item.innerHTML = e
		
		d.appendChild(item)
		d.appendChild(document.createElement("br"))
		total += product.price

	})


	let c = document.getElementById('CartContent');
	c.innerHTML = "";

	c.appendChild(d);

	c.append("The total price is: " + total);

}