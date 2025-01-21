import React from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Reliable Product, Consistently Delivers.",
    name: "Stefanie Rashford",
    role: "Senior Manager",
    image:
      "https://demos.codezeel.com/wordpress/WCM06/WCM060147/wp-content/uploads/2024/01/user-1.jpg", // Replace with actual image URL
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-[15vh] px-4 sm:px-6 lg:px-8 md:px-[10vw] mb-[10vh]">
      <div className=" mx-auto text-center flex flex-col items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="relative w-full lg:w-[60%]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {testimonial.text}
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              There are many variations of passages of lorem toavailable but
              majority have suffered alteration some form by to injected humour
              or randomised words are going the passage ofwhich more don't look
              even slightly believable have suffered alteration the 1500s is
              reproduced below for those interested.
            </p>
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-24 h-24 my-4"
              />
              <div>
                <p className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </p>
                <p className="text-lg text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
