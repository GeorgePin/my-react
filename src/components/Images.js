// import React, { useEffect, useState } from "react";

// export default function Images() {
//   const [images, setImages] = useState([
//     "https://images.unsplash.com/photo-1543933720-b55c838bb109?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "https://images.unsplash.com/photo-1661006117027-2f6480e4fa10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1913&q=80",
//     "https://images.unsplash.com/photo-1661017137820-963182a93100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//     "https://images.unsplash.com/photo-1661068791384-c2f5d470505a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   ]);

//   const [newImageUrl, setNewImageUrl] = useState("");

//   function ShowImage() {
//     return images.map((image) => {
//       return (
//         <div className="w-1/3 my-4">
//           <img src={image} width="150" />
//         </div>
//       );
//     });
//   }

//   function handleAdd() {
//     setImages([newImageUrl, ...images]);
//     setNewImageUrl("");
//   }

//   function handleChange(event) {
//     setNewImageUrl(event.target.value);
//   }

//   return (
//     <section>
//       <div className="flex flex-wrap justify-center">
//         <ShowImage />
//       </div>
//       <div className="flex justify-between my-5">
//         <div className="w-full">
//           <input
//             type="text"
//             className="p-2 border border-gray-800 shadow rounded"
//             //   value={newImageUrl}
//             onChange={handleChange}
//           />{" "}
//         </div>
//         <button
//   disabled={newImageUrl === ""}
//   className={`p-2 text-white ${
// newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
//   }`}
//   onClick={newImageUrl !== "" ? handleAdd : null}
//   onClick={handleAdd}
//         >
//           Add New
//         </button>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useState } from "react";
export default function Images() {
  const [images, setimages] = useState([
    "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80",
    "https://images.unsplash.com/photo-1547111962-50a04ac74d73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1506882741710-98761c574b48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1487537177666-94b1f521631a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  ]);
  const [newImageUrl, setNewImageUrl] = useState("");
  function ShowImage() {
    return images.map((image) => {
      return (
        <div className="w-1/3 my-4 flex justify-center">
          <img src={image} width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setimages([newImageUrl, ...images]);
      setNewImageUrl("");
    }
  }

  function handleChange(event) {
    setNewImageUrl(event.target.value);
  }
  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>
      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <button
            disabled={newImageUrl === ""}
            className={`p-2 text-white ml-2 ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
