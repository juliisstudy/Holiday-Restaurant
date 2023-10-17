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

export default function ProductTable({products}){
    
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
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
            <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}