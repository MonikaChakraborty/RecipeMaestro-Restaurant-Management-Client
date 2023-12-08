import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAddedFoodItems = () => {
  const addedFoodItem = useLoaderData();

  const {
    _id,
    foodImage,
    foodName,
    foodOrigin,
    foodCategory,
    price,
    description,
    quantity,
  } = addedFoodItem;

  const handleUpdateFoodItem = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodOrigin = form.foodOrigin.value;
    const foodCategory = form.foodCategory.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedFoodItem = {
      foodName,
      foodImage,
      foodOrigin,
      foodCategory,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      description,
    };

    console.log(updatedFoodItem);

    // send to server
    fetch(`http://localhost:5000/addedFoodItems/updateAddedFoodItems/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedFoodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Item Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-gray-100 rounded shadow-lg">
      <h1 className="text-4xl text-center mb-6 font-bold">
        Update Food Item: {foodName}
      </h1>

      <form onSubmit={handleUpdateFoodItem} className="space-y-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              placeholder="Food Name"
              className="input input-bordered"
              name="foodName"
              defaultValue={foodName}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <input
              type="text"
              placeholder="Food Image"
              className="input input-bordered"
              name="foodImage"
              defaultValue={foodImage}
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
              className="input input-bordered"
              name="foodOrigin"
              defaultValue={foodOrigin}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Category</span>
            </label>
            <input
              type="text"
              placeholder="Food Category"
              className="input input-bordered"
              name="foodCategory"
              defaultValue={foodCategory}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered"
              name="price"
              defaultValue={price}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Quantity"
              className="input input-bordered"
              name="quantity"
              defaultValue={quantity}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered"
            name="description"
            defaultValue={description}
          />
        </div>

        <button
          className="btn bg-yellow-800 text-white hover:bg-yellow-900"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateAddedFoodItems;
