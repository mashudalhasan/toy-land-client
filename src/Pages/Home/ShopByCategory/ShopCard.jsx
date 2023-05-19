const ShopCard = ({ shop }) => {
  const { name, picture, price, rating } = shop;

  return (
    <div>
      <h2>{name}</h2>
      <img src={picture} alt={name} style={{ width: "200px" }} />
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default ShopCard;
