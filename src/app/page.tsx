"use client";

import Card from "@/components/Card";

const Values = [
  {
    title: "Onions",
    quantity: 12,
  },
  {
    title: "Tomatoes",
    quantity: 6,
  },
  {
    title: "Potatoes",
    quantity: 8,
  },
  {
    title: "Carrots",
    quantity: 4,
  },
  {
    title: "Cucumbers",
    quantity: 2,
  },
  {
    title: "Peppers",
    quantity: 4,
  },
  {
    title: "Garlic",
    quantity: 5,
  },
  {
    title: "Ginger",
    quantity: 2,
  },
  {
    title: "Lettuce",
    quantity: 9,
  },
];

export default function Home() {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <main className="p-10 h-screen">
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-10">
        {Values.map((value, index) => (
          <Card key={index} title={value.title} quantity={value.quantity} />
        ))}
      </div>
      <div
        onClick={handleClick}
        className="absolute right-10 bottom-10 bg-primary text-background py-3 px-4 rounded-lg text-2xl hover:cursor-pointer"
      >
        +
      </div>
    </main>
  );
}
