
// Get the button element
const addButton = document.getElementById('addItem');

// Register the button as an event listener, i.e. every time the button is clicked, the below code will be invoked
addButton.addEventListener('click', function() {
	// get the value of the product from the text box
    var itemName = document.getElementById('id_product').value;
	// get the drop down box element followed by the text set within the drop down element
    var categoryDropDown = document.getElementById('categories-drop-down');
    var categoryName = categoryDropDown.options[categoryDropDown.selectedIndex].textContent;
	// add the item to the shopping list
    addItem(itemName, categoryName);
});