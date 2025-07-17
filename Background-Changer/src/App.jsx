// Without Using useState() BG-Changer. //

// export const App = () => {

//   const colors = [
//     { name: "Red", class: "bg-red-700" },
//     { name: "Green", class: "bg-green-700" },
//     { name: "Blue", class: "bg-blue-700" },
//     { name: "Brown", class: "bg-yellow-950" },
//     { name: "Gray", class: "bg-gray-600" },
//     { name: "Yellow", class: "bg-yellow-300" },
//     { name: "Pink", class: "bg-pink-500" },
//     { name: "Purple", class: "bg-purple-700" },
//     { name: "Lavender", class: "bg-blue-200" },
//     { name: "White", class: "bg-white" },
//     { name: "Black", class: "bg-black text-white" },
//   ];

//   const bgChanger = (color) => {
//     document.body.style.backgroundColor = color;
//   }

//   return (
//     <div className="fixed bottom-10 left-10 right-10 bg-white p-4 rounded-full flex flex-wrap justify-between font-extrabold border-4 border-black">
//       {
//         colors.map((color, index) => (
//           <button
//             key={index}
//             onClick={() => bgChanger(color.name.toLowerCase())}
//             className={`${color.class} px-8 py-5 rounded-full border-2 border-black`}
//           >
//             {color.name}
//           </button>
//         ))
//       }
//     </div>
//   )
// }



// Using useState() BG-Chanegr. (Recomanded) //

import { useState } from "react"

export const App = () => {
  const [color, setColor] = useState("bg-green");

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

  return (
    <div className={`${color} min-h-screen transition-all duration-300`}>
      <div className='fixed bg-white rounded-full left-10 right-10 bottom-10 border border-3 border-black p-4 flex flex-wrap justify-between font-extrabold'>

        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setColor(color.class)}
            className={`${color.class} px-8 py-5 rounded-full border-2 border-black`}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  )
}