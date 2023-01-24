var products = [
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


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}