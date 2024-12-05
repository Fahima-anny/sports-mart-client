/* eslint-disable react/prop-types */


const ClientsCard = ({data}) => {

const {name, rating, review, img} = data ;

    return (
        <div>
                        <div className="card bg-base-100 w-80 m-5 shadow-md shadow-base-300">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center py-3 h-[190px]">
    <h2 className="card-title">{name}</h2>
    <p>{review}</p>
   <div>{rating}</div>
  </div>
</div>
        </div>
    );
};

export default ClientsCard;