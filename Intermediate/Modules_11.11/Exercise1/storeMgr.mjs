import {addItem, removeItem, listItems} from "./inventory.mjs"; //picking up from the previous file

//selecting these few items from the example
addItem("Notepad"); 
addItem("Marker");
addItem("Backpack");
listItems();

removeItem("Marker");
listItems();
