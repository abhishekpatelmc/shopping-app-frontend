type BoxProps = {
  title: string;
  quantity: number;
};

const Card = ({ title, quantity }: BoxProps) => {
  return (
    <div className="py-3 text-center border border-white rounded-md">
      <h1>{title}</h1>
      <p className="mt-2 flex justify-end px-4">{quantity}</p>
    </div>
  );
};

export default Card;
