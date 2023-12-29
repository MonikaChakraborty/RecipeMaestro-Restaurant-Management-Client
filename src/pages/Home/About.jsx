// import img from "../../assets/restaurant-interior.jpg";
// const About = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto h-[70vh] bg-gray-400">
//       {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="">
//           <h1 className="font-bold text-4xl lg:mb-16 mb-5">About Us</h1>
//           <p className="font-medium text-lg text-gray-700">
//             RestaurantMaestro is a comprehensive restaurant management platform
//             that helps restaurants of all sizes succeed. From menu planning and
//             recipe management to inventory control and order processing,
//             RestaurantMaestro has the tools you need to streamline your
//             operations and improve your bottom line.
//           </p>


//         </div>
//         <div>
//           <img src={img} alt="" />
//         </div>
//       </div> */}

//       <div className="border grid grid-cols-3 gap-24">

//        <div className="flex frame-1 w-[420px] flex-col text-white">
//        <div className="grid grid-cols-2 h-[30vh] border bg-blue-400 ">
//           <p className="border bg-purple-400 flex justify-center items-center">box 1</p>
//           <p className="border bg-purple-700 flex justify-center items-center">box 2</p>
//         </div>

//         <div className="h-[40vh] border bg-black grid grid-cols-3">
//           <p className="border bg-orange-400 col-span-2">box 3</p>
//           <p className="border bg-orange-600 ">box 4</p>
//         </div>
//        </div>


//        <div className="w-[420px] frame-2 grid border bg-red-500 text-white">
//      <div className="">box middle</div>

//       </div>

//       <div className="w-[400px] frame-3 border text-white">

//         <div className="grid grid-cols-2">
//           <div className="h-[70vh] bg-orange-500 border">
//             <p>Box 5</p>
//           </div>

//           <div className="bg-blue-700">
//             <div className="h-[35vh] bg-amber-400">Box 6</div>
//             <div className="h-[35vh] bg-amber-800">Box 7</div>
//           </div>
//         </div>

//       </div>


//       </div>

    
//     </div>
//   );
// };

// export default About;

import box3 from '../../assets/box3.jpg'
import box5 from '../../assets/box-5.jpg'

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto h-[80vh] bg-gray-400">
      <div className="border flex">
        {/* Left Frame */}
        <div className="flex flex-col w-[30%] frame-1 text-white">
          <div className="grid grid-cols-2 h-[35vh] border bg-blue-400">
            <p className="border bg-purple-400 flex justify-center items-center">box 1</p>
            <p className="border bg-purple-700 flex justify-center items-center">box 2</p>
          </div>

          <div className="h-[45vh] border bg-black grid grid-cols-3">
            {/* <p className="border bg-orange-400 col-span-2">box 3</p> */}
            <div className='col-span-2 h-[45vh]'>
            <img className='h-[45vh] object-cover' src={box3} alt="" />
            </div>
            <p className="border bg-orange-600">box 4</p>
          </div>
        </div>

        {/* Middle Frame */}
        <div className="w-[40%] frame-2 grid border bg-red-500 text-white">
          <div className="">box middle</div>
        </div>

        {/* Right Frame */}
        <div className="w-[30%] frame-3 border text-white">
          <div className="grid grid-cols-2">
            <div className="h-[80vh] bg-orange-500 border">
              {/* <p>Box 5</p> */}
              <img className='h-[80vh] object-cover' src={box5} alt="" />
            </div>

            <div className="bg-blue-700">
              <div className="h-[40vh] bg-amber-400">Box 6</div>
              <div className="h-[40vh] bg-amber-800">Box 7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
