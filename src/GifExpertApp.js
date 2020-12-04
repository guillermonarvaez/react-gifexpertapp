import React ,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


export const GiftExpertApp = ()=>{
    // const categories = ["One Punch","Samurai X","Dragon Ball"];
    const [categories, setCategories] = useState(["One Punch"])
    // const handleAdd = ()=>{
    //     //setCategories(["HunterXHunter",...categories])
    //     setCategories((cats)=>{
    //         return [...cats,"HunterXHunter"]
    //     })
    //     console.log(categories)
    // }
    console.log(categories)
    return (
            <>
            <h2>GiftExperApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr></hr>
           
            <ol>
                { 
                categories.map((category)=>(
                    <GiftGrid 
                    key = {category}
                    category= { category} />
                    ))
                }
            </ol>
            </>
        );
}


