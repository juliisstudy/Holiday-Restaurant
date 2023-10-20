import { useState } from "react";
import ProductTable from "./ProductTable";

export default function ProductListFilter({dishes}){
    const [filterText, setFilterText] = useState('');
    const [isAvailable, setAvailable] = useState(false);

    return (
        <div className="">
            <h2>Product</h2>
            <SearchBar filterText={filterText}
                        isAvailable={isAvailable}
                        onFilterTextChange={setFilterText}
                        onIsAvailableChange={setAvailable}/>
             <ProductTable products= {dishes} filterText={filterText} isAvailable={isAvailable}/> 
        </div>
    );
}

function SearchBar({
    filterText,
    isAvailable,
    onFilterTextChange,
    onIsAvailableChange
}){
    return(
        <form>
            <input
            type = "text" value = {filterText} placeholder="Search..."
            onChange={(e)=>onFilterTextChange(e.target.value)}/>
            <br/>

        <lable>
            <div class="input-group"><input  
                type = "checkbox"
                checked={isAvailable}
                onChange = {(e)=>onIsAvailableChange(e.target.checked)}/>
                <p  className="text-description">Show available dishes</p>
                </div>
        </lable>
        </form>
    );
}