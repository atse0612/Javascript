// creating an empty list for inventory
const inventories = [];

//check availability
export const addItem = (inventory) =>
    {
        items.push(inventory);
        console.log(`Item added: ${inventory}`);
    };
    export const removeItem = (inventory) =>
    {
        let isRemoved = false; //see if it is available
    
        for (let i = 0; i < inventories.length; i++)
        {
            if (inventories[i] === inventory)
            {
                isRemoved = true;
                inventories.splice(i, 1);
                i--;
            }
        }
    
        if (isRemoved)
        {
            console.log(`Item in inventory removed: ${inventory}`);
        }
        else
        {
            console.log(`Item does not exist in the inventory: ${inventory}`);
        }
    };
    export const listings = () =>
    {
        console.log(`Listing all items:`);
    
        for (const inventory of inventories)
        {
            console.log(`* ${inventory}`);
        }
    };
    