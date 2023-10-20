function CategoryRow({ category }) {
  return (
    <tr>
      <th>
        {category}
      </th>
    </tr>
  );
}

function DishRow({ dish }) {
  return (
    <tr>
      <td>{dish.name}</td>
      <td>{dish.price}</td>
    </tr>
  );
}

export default function ProductTable({products,filterText,isAvailable}){
    
    const rows = [];
    let lastCategory = null;
    
    products.forEach((product)=>{
      if(product.name.toLowerCase().indexOf(filterText.toLowerCase())===-1){
        return;
      }
      if(isAvailable && !product.stocked){
        return;
      }
         if(product.category!== lastCategory){
             rows.push(
                 <CategoryRow category={product.category} key={product.category}/>
            );
         }
        rows.push(
            <DishRow dish={product} key={product.name}/>
        );
        lastCategory = product.category;
    });

    return(
        <div>
            <table class="table">
          
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}

