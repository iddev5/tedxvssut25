

'use client';

import React, { useState } from 'react';

interface IFormData {
  email: string;
  name: string;
  howDidYouHear: string;
  isFirstEvent: string;
  favoriteTalk: string;
  rating: number;
  feedback: string;
  joinNextEdition: string;
}

const SurveyForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: '',
    name: '',
    howDidYouHear: '',
    isFirstEvent: '',
    favoriteTalk: '',
    rating: 5,
    feedback: '',
    joinNextEdition: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Rating ko string se number mein convert karne ke liye special handling
    const finalValue = name === 'rating' ? parseInt(value, 10) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Survey Form Data:', formData);
    alert('Thank you for your feedback!');
    // Yahan par aap data ko backend API par bhej sakte hain
  };

  return (
    // Section ka background dark red-black gradient jaisa banaya
    <section className="py-16 bg-gradient-to-b from-black via-red-950 to-black text-white"> 
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">Attendee Survey</h2> {/* Title red */}
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg space-y-6 border border-red-800" // Form background dark, border red
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-200 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500" // Input fields dark, white text
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-200 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* How Did You Hear Field */}
          <div>
            <label htmlFor="howDidYouHear" className="block text-gray-200 font-semibold mb-2">How did you hear about this event?</label>
            <input
              type="text"
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Is this your first TEDx event? */}
          <div className="flex flex-col">
            <label className="block text-gray-200 font-semibold mb-2">Is this your first TEDx event?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="isFirstEvent" value="Yes" onChange={handleChange} className="mr-2 accent-red-500"/>Yes</label> {/* Radio buttons red accent */}
              <label><input type="radio" name="isFirstEvent" value="No" onChange={handleChange} className="mr-2 accent-red-500"/>No</label>
            </div>
          </div>

          {/* Which talk you liked the most? */}
          <div>
            <label htmlFor="favoriteTalk" className="block text-gray-200 font-semibold mb-2">Which talk you liked the most?</label>
            <input
              type="text"
              id="favoriteTalk"
              name="favoriteTalk"
              value={formData.favoriteTalk}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Rate the event */}
          <div>
            <label htmlFor="rating" className="block text-gray-200 font-semibold mb-2">Rate the event (1=Poor, 10=Excellent)</label>
            <div className="flex items-center gap-4">
              <span>1</span>
              <input
                type="range"
                id="rating"
                name="rating"
                min="1"
                max="10"
                value={formData.rating}
                onChange={handleChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-600" // Slider background dark, accent red
              />
              <span>10</span>
              <span className="font-bold text-red-500 w-8 text-center">{formData.rating}</span> {/* Rating value red */}
            </div>
          </div>
          
          {/* Overall Feedback */}
          <div>
            <label htmlFor="feedback" className="block text-gray-200 font-semibold mb-2">Overall Feedback</label>
            <textarea
              id="feedback"
              name="feedback"
              rows={4}
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

           {/* Would you like to join us in the next edition? */}
           <div className="flex flex-col">
            <label className="block text-gray-200 font-semibold mb-2">Would you like to join us in the next edition of TEDxVSSUT?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="joinNextEdition" value="Yes" onChange={handleChange} className="mr-2 accent-red-500"/>Yes</label>
              <label><input type="radio" name="joinNextEdition" value="No" onChange={handleChange} className="mr-2 accent-red-500"/>No</label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300" // Button red
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SurveyForm;