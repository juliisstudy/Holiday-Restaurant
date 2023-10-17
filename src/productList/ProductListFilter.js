import ProductTable from "./ProductTable";

export default function ProductListFilter({dishes}){
    return (
        <div>
            <h1>Product</h1>
             <ProductTable products= {dishes}/> 
        </div>
    );
}