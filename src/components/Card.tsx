interface BoxProps {
  title: string;
}

const Card = ({ title }: BoxProps) => {
  return (
    <div className="p-10 grid place-content-center border border-white rounded-md">
      <h1>{title}</h1>
    </div>
  );
};

export default Card;
