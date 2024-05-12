import React from "react";
import Img1 from "../../assets/biryani2.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Chicken Biryani",
    description:
      "Chicken biryani is a delectable rice dish layered with fragrant spices and tender chicken, cherished for its irresistible aroma and rich flavors, perfect for festive occasions and everyday indulgence.",
  },
  {
    id: 2,
    img: Img1,
    name: "Veg Biriyani",
    description:
      "Vegetable biryani is a fragrant rice dish packed with a medley of colorful vegetables, infused with aromatic spices, and cooked to perfection, offering a satisfying and flavorful vegetarian alternative to the classic meat-based biryani.",
  },
  {
    id: 3,
    img: Img1,
    name: "Hyderabadi Biryani",
    description:
      " Originating from Hyderabad, India, this biryani is characterized by its aromatic basmati rice layered with marinated meat (usually chicken or mutton) and cooked with a blend of spices, saffron, and fried onions.",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Welcome to Foodie-zone, where culinary excellence meets
              exceptional service. Explore our enticing menu featuring a
              delectable array of dishes crafted with care and passion. Join us
              for special events throughout the year, indulge in our catering
              services for your next gathering, or reserve our intimate spaces
              for private dining or events. Convenient online ordering and
              reservation options are available for your ease, with delivery and
              takeout services ensuring our flavors come to you. Delight in the
              experiences shared by our satisfied patrons, and don't hesitate to
              reach out for more information. We look forward to serving you!"
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="w:2/3 block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2 mt-16">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
