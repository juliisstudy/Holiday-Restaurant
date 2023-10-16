export default ProductTable({dishes}){
    const rows = [];
    
    dishes.forEach((dish)=>{
        if(dish.categroy!==null){
            rows.push(
                <CategroyRow/>
            );
        }
        rows.push(
            <DishRow/>
        )
    }
    )

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
    )
}

function CategroyRow({categroy}){
    return(
        <tr>
            <th>{categroy}</th>
        </tr>
    )
}

function DishRow({dish}){
    const name = dish.stocked? dish.name:
    <del>{dish.name}</del>
    return(
        <tr>
            <td>{name}</td>
            <td>{dish.price}</td>
        </tr>
    )
}