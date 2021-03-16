let fruitAndVegetableItems = [];
let bakeryItems = [];
let fridgeItems = [];
let frozenItems = [];

let fruitAndVegetable = 'Fruit and Vegetable';
let bakery = 'Bakery';
let fridge = 'Fridge';
let frozen = 'Frozen';

let mapInitialised = false;
let categoryToItemsMap = new Map();

/*
* Add item function is responsible for adding an item to the shopping list
*/
function addItem(item, category) {

	/* initialise the map once only. Structure is :
		Fruit and Vegetable -> fruitAndVegetableItems (list of fruit and vegatables)
		Bakery -> bakeryItems (list of bakery items)
		etc
	*/
    if (!mapInitialised) {
        categoryToItemsMap.set(fruitAndVegetable, fruitAndVegetableItems)
                            .set(bakery, bakeryItems)
                            .set(fridge, fridgeItems)
							.set(frozen, frozenItems);
        mapInitialised = true;
    }

	// add the item to the appropriate list based on the category
    switch (category) {
        case fruitAndVegetable:
            fruitAndVegetableItems.push(item);
            break;
        case bakery:
            bakeryItems.push(item);
            break;
        case fridge:
            fridgeItems.push(item);
            break;
        case frozen:
            frozenItems.push(item);
            break;			
    }

	// get the shopping list element
    var shoppingListDiv = document.getElementById("shoppingList");
	// clear any HTML inside the shopping list, we are going to regenerate the list every time
    shoppingListDiv.innerHTML = "";
	// iterate through the map 
    for (let key of categoryToItemsMap.keys()) {
        let items = categoryToItemsMap.get(key); // get all of the items for the category
		// Build up the elements dynamically
        var heading = document.createElement("h2");
        heading.innerHTML = key;
        var dlElement = document.createElement("dl");
        for (let item of items) {
            var dtElement = document.createElement("dt");
            dtElement.innerHTML = item;
            dlElement.appendChild(dtElement);
        }
        shoppingListDiv.appendChild(heading);
        shoppingListDiv.appendChild(dlElement);
    }   
}