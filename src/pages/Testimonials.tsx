import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Chen',
    role: 'Computer Science Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
    content: 'The networking laboratory provided me with hands-on experience that was crucial for landing my dream internship. The equipment and guidance from professors are top-notch.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James Wilson',
    role: 'Research Assistant',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop',
    content: 'Working in the robotics lab has been transformative. The advanced equipment and collaborative environment have helped me develop practical skills that are invaluable in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Martinez',
    role: 'Graduate Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1890&auto=format&fit=crop',
    content: "The digital systems laboratory is equipped with state-of-the-art technology. It's been instrumental in my research work and understanding of complex systems.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-12">
      {/* Testimonials Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Student Testimonials</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Hear from our students about their experiences in our laboratories and how it has impacted their academic journey.
          </p>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative">
                <Quote className="h-8 w-8 text-gray-200 absolute -top-4 -left-2" />
                <p className="text-gray-600 relative z-10 pl-6">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#00B4D8] text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience It Yourself</h2>
          <p className="text-xl mb-8">
            Join our community and gain access to state-of-the-art facilities and expert guidance.
          </p>
          <button className="bg-white text-[#00B4D8] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;