const FAQ = () => {
  return (
    <div className="lg:mb-24 mb-16 max-w-5xl mx-auto">
      <h1 className="text-center font-bold text-4xl lg:mt-24 mt-16 text-yellow-900">
        FAQs
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What features does RestaurantMaestro offer?
        </div>
        <div className="collapse-content">
          <p>
            Menu management: Create and manage your custom menu, including
            items, descriptions, prices, and images. <br />
            Recipe management: Store and manage your recipes, including
            ingredients, instructions, and nutritional information.
            <br />
            Inventory management: Track your inventory levels and ensure that
            you always have the ingredients you need.
            <br />
            Order management: Process orders quickly and efficiently, and
            provide your customers with a seamless dining experience.
            <br />
            Customer management: Manage your customer database, track customer
            orders, and send personalized marketing messages. Reporting and
            analytics: Gain insights into your business performance with
            comprehensive reports and analytics.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Is RestaurantMaestro easy to use?
        </div>
        <div className="collapse-content">
          <p>
            Yes, RestaurantMaestro is designed to be easy to use for restaurant
            owners and managers of all experience levels. Our platform is
            cloud-based, so you can access it from anywhere with an internet
            connection. We also offer a variety of training resources and
            support options to help you get the most out of RestaurantMaestro.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How much does RestaurantMaestro cost?
        </div>
        <div className="collapse-content">
          <p>
            RestaurantMaestro offers a variety of pricing plans to fit the needs
            of restaurants of all sizes. Our plans start at just $59 per month.
            We also offer a free trial, so you can try RestaurantMaestro before
            you commit to a paid plan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
