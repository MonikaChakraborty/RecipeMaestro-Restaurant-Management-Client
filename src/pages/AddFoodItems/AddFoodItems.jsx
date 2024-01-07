// import useAuth from "../../hooks/useAuth";

// const AddFoodItems = () => {
//   const { user } = useAuth();

//   return (
//     <div className="">
//       <h1 className="text-5xl text-center mt-10 mb-6">Add a Food Item</h1>

//       <div className="">
//         <form>
//           <div className="max-w-6xl mx-auto">
//           <div className="flex lg:flex-row flex-col justify-center gap-6 lg:gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Food Name</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Name"
//                   className="input input-bordered"
//                   name="foodName"
//                   id=""
//                 />
//               </label>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Food Image</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Image"
//                   className="input input-bordered"
//                   name="foodImage"
//                   id=""
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex lg:flex-row flex-col justify-center gap-6 lg:gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Food Category</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Name"
//                   className="input input-bordered"
//                   name="foodCategory"
//                   id=""
//                 />
//               </label>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Quantity</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Image"
//                   className="input input-bordered"
//                   name="quantity"
//                   id=""
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex lg:flex-row flex-col justify-center gap-6 lg:gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Added By- Name:</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   defaultValue={user?.displayName}
//                   readOnly
//                   className="input input-bordered"
//                   name="name"
//                   id=""
//                 />
//               </label>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Added By- Email:</span>
//               </label>

//               <label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   defaultValue={user?.email}
//                   readOnly
//                   className="input input-bordered"
//                   name="email"
//                   id=""
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="flex lg:flex-row flex-col justify-center gap-6 lg:gap-10">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Food Origin</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Name"
//                   className="input input-bordered"
//                   name=""
//                   id=""
//                 />
//               </label>
//             </div>

//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Description</span>
//               </label>

//               <label>
//                 <input
//                   type="text"
//                   placeholder="Food Image"
//                   className="input input-bordered"
//                   name=""
//                   id=""
//                 />
//               </label>
//             </div>
//           </div>
//           </div>

//           <input className="btn" type="submit" value="Add Food Item" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddFoodItems;

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar";
import useOrderedFoodItems from "../../hooks/useOrderedFoodItems";

const AddFoodItems = () => {
  const { user } = useAuth();

  const handleAddFoodItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodCategory = form.foodCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const count = form.count.value;
    const email = user?.email;
    const name = user?.displayName;
    const foodOrigin = form.foodOrigin.value;
    const description = form.description.value;

    const foodItem = {
      foodName,
      foodImage,
      foodCategory,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      count: parseInt(count),
      madeBy: email,
      foodOrigin,
      description,
    };

    console.log(foodItem);

    // send to server
    fetch(
      "https://restaurant-management-system-server-kappa.vercel.app/addFoodItems",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(foodItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Item Added Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          
        }
        form.reset();
      });
     
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-4xl mx-auto p-8 bg-gray-100 rounded shadow-lg">
        <h1 className="text-4xl text-center mb-6 mt-20 font-bold">
          Add a Food Item
        </h1>

        <form onSubmit={handleAddFoodItem} className="space-y-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <input
                type="text"
                placeholder="Food Name"
                required
                className="input input-bordered"
                name="foodName"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Image</span>
              </label>
              <input
                type="text"
                placeholder="Food Image"
                required
                className="input input-bordered"
                name="foodImage"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Category</span>
              </label>
              <input
                type="text"
                placeholder="Food Category"
                required
                className="input input-bordered"
                name="foodCategory"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                required
                className="input input-bordered"
                name="price"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Added By- Name:</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                name="name"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Added By- Email:</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                name="email"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Food Origin</span>
              </label>
              <input
                type="text"
                placeholder="Food Origin"
                required
                className="input input-bordered"
                name="foodOrigin"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                required
                className="input input-bordered"
                name="description"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Count</span>
              </label>
              <input
                type="text"
                placeholder="Count"
                required
                className="input input-bordered"
                name="count"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                placeholder="Quantity"
                required
                className="input input-bordered"
                name="quantity"
              />
            </div>
          </div>

          <button
            className="btn bg-yellow-800 text-white hover:bg-yellow-900"
            type="submit"
          >
            Add Food Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItems;
