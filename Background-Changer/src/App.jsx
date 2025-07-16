import { useState } from "react";

export const App = () => {
  const [color, setColor] = useState("olive");

  const colors = [
    { name: "Red", class: "bg-red-700" },
    { name: "Green", class: "bg-green-700" },
    { name: "Blue", class: "bg-blue-700" },
    { name: "Brown", class: "bg-yellow-950" },
    { name: "Gray", class: "bg-gray-600" },
    { name: "Yellow", class: "bg-yellow-300" },
    { name: "Pink", class: "bg-pink-500" },
    { name: "Purple", class: "bg-purple-700" },
    { name: "Lavender", class: "bg-blue-200" },
    { name: "White", class: "bg-white" },
    { name: "Black", class: "bg-black text-white" },
  ];

  const bgChanger = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <div className="fixed bottom-10 left-10 right-10 bg-white p-5 rounded-full flex flex-wrap justify-between font-extrabold border-4 border-black">
      {
        colors.map((color, index) => (
          <button
            key={index}
            onClick={() => bgChanger(color.name.toLowerCase())}
            className={`${color.class} px-11 py-5 rounded-full border-2 border-black`}
          >
            {color.name}
          </button>
        ))
      }
    </div>
  )
}