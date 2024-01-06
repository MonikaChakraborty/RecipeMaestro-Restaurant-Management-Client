import Navbar from "../Shared/Navbar";
import { MdEmail } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const OurLocation = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 lg:pt-36 mb-16 max-w-screen-xl mx-auto flex lg:flex-row flex-col gap-8">
        {/* map */}
        <div className="w-full lg:w-3/4 shadow-lg rounded-xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.6913536224897!2d91.81232339999998!3d22.327509700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd9832c9d5cd7%3A0xb7d71d6fd944d7f!2sAgrabad%20More%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1704474970449!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* get in touch */}
        <div className="flex flex-col bg-amber-200 justify-center px-12 lg:px-4  gap-4 rounded-xl shadow-lg w-full lg:w-1/4 ">
          <ContactInfo
            icon={<FaLocationDot />}
            title="Agrabad"
            info="Chattogram, Bangladesh"
          />
          <ContactInfo
            icon={<MdEmail />}
            title="Mail Us On"
            info="heymaestro@gmail.com"
            mailto="mailto:mchakraborty7516@gmail.com"
          />
          <ContactInfo
            icon={<BsFillClockFill />}
            title="Opening Hour"
            info="Sat-Thurs: 09-11 pm"
          />
          <ContactInfo
            icon={<BsFillTelephoneFill />}
            title="Make a call"
            info="+8801234567891"
            tel="tel:+8801234567891"
          />
          
        </div>

      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, info, mailto, tel }) => (
  <div className="flex items-center gap-4 py-2" >
    {/* <span className="rounded-full p-2 bg-yellow-600 text-white text-2xl cursor-pointer">{icon}</span> */}
    {tel ? (
        <a href={tel} className="rounded-full p-2 bg-yellow-600 text-white text-2xl cursor-pointer">
          {icon}
        </a>
      ) : mailto ? (
        <a href={mailto} className="rounded-full p-2 bg-yellow-600 text-white text-2xl cursor-pointer">
          {icon}
        </a>
      ) : (
        <p className="rounded-full p-2 bg-yellow-600 text-white text-2xl cursor-pointer">{icon}</p>
      )}
    <div>
      <h1 className="text-lg font-semibold">{title}</h1>
      {tel ? (
        <a href={tel} className="text-gray-700 hover:underline">
          {info}
        </a>
      ) : mailto ? (
        <a href={mailto} className="text-gray-700 hover:underline">
          {info}
        </a>
      ) : (
        <p className="text-gray-700">{info}</p>
      )}
      {/* <p className="text-gray-700">{info}</p> */}
    </div>
  </div>
);

export default OurLocation;
