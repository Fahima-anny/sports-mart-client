import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const TableRow = ({prod, idx}) => {

// eslint-disable-next-line react/prop-types
const {_id,item, category,price,stock,rating,delivery} = prod ;

    return (
        <tr className=" h-[50px] font-medium">
        <th>{idx+1}</th>
        <td>{item}</td>
        <td>{category}</td>
        <td>{stock}</td>
        <td>{rating}</td>
        <td>{delivery}</td>
        <td>${price}</td>
        <td className="hover:underline flex justify-center">
            <Link to={`/productDetails/${_id}`} className="flex gap-1 hover:underline items-center pt-2">View Details <MdKeyboardDoubleArrowRight className="text-2xl" /></Link>
        </td>
      </tr>
    );
};

export default TableRow;