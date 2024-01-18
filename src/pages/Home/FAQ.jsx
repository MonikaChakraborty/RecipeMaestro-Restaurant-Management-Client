import { Component } from "react";
import Faq from "react-faq-component";
import faq from "./FAQ.json";
import Lottie from "lottie-react";
const data = {
  title: (
    <div className="mb-8 text-3xl lg:text-4xl text-center font-bold text-yellow-900" >
      FAQs
    </div>
  ),
  rows: [
    {
      title: "What features does RestaurantMaestro offer?",
      content: (
        <div className="">
          Menu management: Create and manage your custom menu, including items,
          descriptions, prices, and images.
          <br />
          Recipe management: Store and manage your recipes, including
          ingredients, instructions, and nutritional information.
          <br />
          Inventory management: Track your inventory levels and ensure that you
          always have the ingredients you need.
          <br />
          Order management: Process orders quickly and efficiently, and provide
          your customers with a seamless dining experience.
          <br />
          Customer management: Manage your customer database, track customer
          orders, and send personalized marketing messages.
          <br />
          Reporting and analytics: Gain insights into your business performance
          with comprehensive reports and analytics.
        </div>
      ),
    },
    {
      title: "Is RestaurantMaestro easy to use?",
      content:
        "Yes, RestaurantMaestro is designed to be easy to use for restaurant owners and managers of all experience levels. Our platform is cloud-based, so you can access it from anywhere with an internetconnection. We also offer a variety of training resources and support options to help you get the most out of RestaurantMaestro.",
    },
    {
      title: "How much does RestaurantMaestro cost?",
      content:
        "RestaurantMaestro offers a variety of pricing plans to fit the needs of restaurants of all sizes. Our plans start at just $59 per month. We also offer a free trial, so you can try RestaurantMaestro before you commit to a paid plan.",
    },
  ],
};

export default class App extends Component {
  render() {
    return (
      <div className="max-w-screen-xl mx-auto lg:mt-24 mt-16">
        <div className="flex flex-col lg:flex-row">
     <div className="p-8" data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
     {data.title}
    <div className="lg:hidden flex justify-center -mt-20 -mb-16 mx-auto" data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
    <Lottie className="w-[300px]" animationData={faq}></Lottie>
    </div>
     <Faq
            data={{ ...data, title: null }}
            
            styles={{
              rowTitleColor: "rgb(113 63 18)",
              rowTitleTextSize: "large",
              rowTitleFontSize: "",
              rowContentColor: "#48484a",
              rowContentTextSize: "16px",
              rowContentPaddingTop: "10px",
              rowContentPaddingBottom: "10px",
              rowContentPaddingLeft: "10px",
              rowContentPaddingRight: "10px",
              arrowColor: "black",
            }}
          />
     </div>

          <div className="hidden lg:block " 
          >
          <Lottie className="" animationData={faq}></Lottie>
          </div>
        </div>
      </div>
    );
  }
}
