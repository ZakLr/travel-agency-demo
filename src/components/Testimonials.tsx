import React from "react";

const Testimonials = ({ testimonials }:{testimonials:any}) => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-white py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl text-center">
            What Our Customers Are Saying
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16  gap-6 sm:gap-8 lg:mt-20 lg:max-w-none flex flex-wrap items-center justify-center"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="max-w-lg mx-auto text-center bg-white p-6 rounded-2xl shadow-md shadow-primary ">
                <svg
                  className="w-10 h-10 mx-auto mb-3 text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className="text-2xl md:text-lg sm:text-md italic font-medium text-gray-900/60">
                    "{testimonial.text}"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500">
                    <cite className="pr-3 font-medium text-gray-900">
                      {testimonial.name}
                    </cite>
                    <cite className="pl-3 text-sm text-gray-500">
                      {testimonial.role}
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
