// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const GitHub = () => {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Soubhagya-Nayak")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <>
      <div className="bg-orange-600 text-white p-4 text-center text-3xl m-4">
        GitHub followers: {data.followers}
        <img src={data.avtar_url} alt="profile_pic" width={300} />
      </div>
    </>
  );
};


export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Soubhagya-Nayak')
    return response.json()
}