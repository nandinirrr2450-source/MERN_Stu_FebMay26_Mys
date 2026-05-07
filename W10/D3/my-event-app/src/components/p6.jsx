//Event Delegation in React
//Instead of attaching a separting click handler to every element we attach one handler to the parent

import { useState } from "react";

export function EventDeligation(){
    const [selectedItem, setSelectedItem] = useState('None')

    //Parent click handler
    const handleListClick=(event)=>{
        const clickedItem = event.target.closest('li[data-item]')
        //closest('li[data-item]') => used to check recent data of the item in list
        if(!clickedItem) return
        const itemName=clickedItem.dataset.item
        //clickedItem.dataset.item=> it identifies which item is clicked 
        console.log('Clicked item: ',itemName)
        setSelectedItem(itemName)
    }
    return(
        <section>
            <h2>Event Delegation</h2>
            <ul onClick={handleListClick}>
                <li data-item="Laptop">Laptop</li>
                <li data-item="Mobile">Mobile</li>
                <li data-item="Car">Car</li>
                <li data-item="Scooty">Scooty</li>
            </ul>
            <p>Selected: {selectedItem}</p>
        </section>
    )
}