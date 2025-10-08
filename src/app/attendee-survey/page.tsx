"use client";

import React, { useState } from "react";

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
    email: "",
    name: "",
    howDidYouHear: "",
    isFirstEvent: "",
    favoriteTalk: "",
    rating: 5,
    feedback: "",
    joinNextEdition: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const finalValue = name === "rating" ? parseInt(value, 10) : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Survey Form Data:", formData);
    alert("Thank you for your feedback!");
  };

  return (
    <section className="py-16 bg-[#000000] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 uppercase">
          <span className="text-[#FFFFFF]">ATTENDEE</span>{" "}
          <span className="text-[#E62B1E]">SURVEY</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#000000] p-8 rounded-lg shadow-lg space-y-6 border border-[#E62B1E]"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#6D6D6D] rounded-md bg-[#000000] text-white focus:outline-none focus:ring-2 focus:ring-[#E62B1E]"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#6D6D6D] rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#E62B1E]"
              required
            />
          </div>

          {/* How Did You Hear Field */}
          <div>
            <label
              htmlFor="howDidYouHear"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              How did you hear about this event?
            </label>
            <input
              type="text"
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#6D6D6D] rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#E62B1E]"
            />
          </div>

          {/* Is this your first TEDx event? */}
          <div className="flex flex-col">
            <label className="block text-[#F5F5F5] font-semibold mb-2">
              Is this your first TEDx event?
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="isFirstEvent"
                  value="Yes"
                  onChange={handleChange}
                  className="mr-2 accent-[#E62B1E]"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isFirstEvent"
                  value="No"
                  onChange={handleChange}
                  className="mr-2 accent-[#E62B1E]"
                />
                No
              </label>
            </div>
          </div>

          {/* Which talk you liked the most? */}
          <div>
            <label
              htmlFor="favoriteTalk"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              Which talk you liked the most?
            </label>
            <input
              type="text"
              id="favoriteTalk"
              name="favoriteTalk"
              value={formData.favoriteTalk}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#6D6D6D] rounded-md bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#E62B1E]"
            />
          </div>

          {/* Rate the event */}
          <div>
            <label
              htmlFor="rating"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              Rate the event (1=Poor, 10=Excellent)
            </label>
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
                className="w-full h-2 bg-[#333333] rounded-lg appearance-none cursor-pointer accent-[#E62B1E]"
              />
              <span>10</span>
              <span className="font-bold text-[#E62B1E] w-8 text-center">
                {formData.rating}
              </span>
            </div>
          </div>

          {/* Overall Feedback */}
          <div>
            <label
              htmlFor="feedback"
              className="block text-[#F5F5F5] font-semibold mb-2"
            >
              Overall Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows={4}
              value={formData.feedback}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#6D6D6D] rounded-md bg-[#000000] text-white focus:outline-none focus:ring-2 focus:ring-[#E62B1E] resize-none"
            ></textarea>
          </div>

          {/* Would you like to join us in the next edition? */}
          <div className="flex flex-col">
            <label className="block text-[#F5F5F5] font-semibold mb-2">
              Would you like to join us in the next edition of TEDxVSSUT?
            </label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="joinNextEdition"
                  value="Yes"
                  onChange={handleChange}
                  className="mr-2 accent-[#E62B1E]"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="joinNextEdition"
                  value="No"
                  onChange={handleChange}
                  className="mr-2 accent-[#E62B1E]"
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#E62B1E] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#B22222] transition duration-300"
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