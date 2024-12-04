

// eslint-disable-next-line react/prop-types, no-unused-vars
const TableRow = ({prod, idx}) => {

const {name,email,item, category,price,customization,description,stock,photo,rating,delivery} = prod ;

    return (
        <tr className=" h-[50px]">
        <th>{idx+1}</th>
        <td>{item}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>{rating}</td>
        <td>{delivery}</td>
        <td>{price}</td>
        <td>
            <button>View Details</button>
        </td>
      </tr>
    );
};

export default TableRow;