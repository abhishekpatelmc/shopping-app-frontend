"use client";

import Card from "@/components/Card";

const Values = [
  {
    title: "Onions",
  },
  {
    title: "Tomatoes",
  },
  {
    title: "Potatoes",
  },
  {
    title: "Carrots",
  },
  {
    title: "Cucumbers",
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
          <Card key={index} title={value.title} />
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
