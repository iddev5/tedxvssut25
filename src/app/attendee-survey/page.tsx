"use client";

import React, { useState, useEffect } from "react";

// Saara CSS ab yahin hai, naye animations ke saath
const FormStyles = () => (
  <style>{`
    /* --- Modal Animation CSS --- */
    .modal-overlay {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(0, 0, 0, 0.7); display: flex;
      align-items: center; justify-content: center; z-index: 1000;
    }
    .modal-content {
      background-color: #000000; color: #FFFFFF; padding: 2rem;
      border-radius: 10px; border: 2px solid #E62B1E;
      text-align: center; width: 90%; max-width: 400px;
      box-shadow: 0 5px 15px rgba(230, 43, 30, 0.2);
      transform: scale(0.95); opacity: 0;
      animation: modal-pop-in 0.3s ease-out forwards;
    }
    @keyframes modal-pop-in {
      to { transform: scale(1); opacity: 1; }
    }
    .checkmark {
      width: 100px; height: 100px; border-radius: 50%; display: block;
      stroke-width: 2; stroke: #FFFFFF; stroke-miterlimit: 10;
      box-shadow: inset 0px 0px 0px #E62B1E;
      animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
      margin: 0 auto;
    }
    .checkmark-circle {
      stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2;
      stroke: #E62B1E; fill: #000000;
      animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }
    .checkmark-check {
      transform-origin: 50% 50%; stroke-dasharray: 48; stroke-dashoffset: 48; stroke: #FFFFFF;
      animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }
    @keyframes stroke { 100% { stroke-dashoffset: 0; } }
    @keyframes scale { 0%, 100% { transform: none; } 50% { transform: scale3d(1.1, 1.1, 1); } }
    @keyframes fill { 100% { box-shadow: inset 0px 0px 0px 60px #E62B1E; } }
    
    /* --- Form Entrance Animation --- */
    .form-container-animate {
      animation: fadeInSlideUp 0.7s 0.2s ease-out forwards;
      opacity: 0;
    }
    @keyframes fadeInSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* --- Floating Label CSS --- */
    .form-group { position: relative; }
    .form-label {
      position: absolute;
      left: 1rem; top: 0.8rem;
      color: #9CA3AF; /* Gray color for placeholder */
      background-color: #000000;
      padding: 0 0.25rem;
      transition: all 0.2s ease-out;
      pointer-events: none; /* Allows click through to input */
    }
    .form-input:focus + .form-label,
    .form-input:not(:placeholder-shown) + .form-label {
      top: -0.6rem;
      font-size: 0.8rem;
      color: #E62B1E;
    }
    /* Hide placeholder text when not empty */
    .form-input:not(:placeholder-shown) {
      color: #FFFFFF;
    }
    
    /* --- Submit Button Spinner --- */
    .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: #FFFFFF;
      animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}</style>
);


// Components (Modal, Spinner, etc.)
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="success-animation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mt-4">Thank You!</h3>
        <p>Your feedback has been submitted successfully.</p>
        <button onClick={onClose} className="mt-6 bg-[#E62B1E] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#B22222] transition duration-300">
          Close
        </button>
      </div>
    </div>
  );
};

const Spinner = () => <div className="spinner"></div>;

interface IFormData {
  email: string; name: string; howDidYouHear: string; isFirstEvent: string;
  favoriteTalk: string; rating: number; feedback: string; joinNextEdition: string;
}

// Main Survey Form Component
const SurveyForm: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({
    email: "", name: "", howDidYouHear: "", isFirstEvent: "",
    favoriteTalk: "", rating: 5, feedback: "", joinNextEdition: "",
  });
  
  // States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => setShowSuccessModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  const getRatingEmoji = (rating: number): string => {
    if (rating <= 2) return "😠"; if (rating <= 4) return "😕";
    if (rating <= 6) return "🙂"; if (rating <= 8) return "😊";
    return "🤩";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const finalValue = name === "rating" ? parseInt(value, 10) : value;
    setFormData((prevData) => ({ ...prevData, [name]: finalValue }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requiredFields: (keyof IFormData)[] = [
      'name', 'email', 'howDidYouHear', 'isFirstEvent', 
      'favoriteTalk', 'feedback', 'joinNextEdition'
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        setSubmitMessage(`Please fill out the "${field.replace(/([A-Z])/g, ' $1')}" field.`);
        return;
      }
    }
    setIsSubmitting(true);
    setSubmitMessage("");
    const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    try {
      const formBody = new FormData();
      for (const key in formData) {
        formBody.append(key, formData[key as keyof IFormData].toString());
      }
      await fetch(scriptURL as string, { method: "POST", body: formBody });
      setShowSuccessModal(true);
      setFormData({
        email: "", name: "", howDidYouHear: "", isFirstEvent: "",
        favoriteTalk: "", rating: 5, feedback: "", joinNextEdition: "",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormStyles />
      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
      <section className="py-16 bg-[#000000] text-white">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase">
            <span className="text-[#FFFFFF]">ATTENDEE</span>{" "}
            <span className="text-[#E62B1E]">SURVEY</span>
          </h2>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-[#000000] p-8 rounded-lg shadow-lg space-y-8 border border-[#E62B1E] form-container-animate"
          >
            {/* Name Field with Floating Label */}
            <div className="form-group">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input w-full px-4 py-3 border border-[#6D6D6D] rounded-md bg-transparent text-white focus:outline-none focus:border-[#E62B1E] transition-colors duration-300" required placeholder=" " />
              <label htmlFor="name" className="form-label">Name</label>
            </div>

            {/* Email Field with Floating Label */}
            <div className="form-group">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input w-full px-4 py-3 border border-[#6D6D6D] rounded-md bg-transparent text-white focus:outline-none focus:border-[#E62B1E] transition-colors duration-300" required placeholder=" " />
              <label htmlFor="email" className="form-label">Email Address</label>
            </div>

            {/* How Did You Hear Field with Floating Label */}
            <div className="form-group">
              <input type="text" id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} className="form-input w-full px-4 py-3 border border-[#6D6D6D] rounded-md bg-transparent text-white focus:outline-none focus:border-[#E62B1E] transition-colors duration-300" required placeholder=" " />
              <label htmlFor="howDidYouHear" className="form-label">How did you hear about this event?</label>
            </div>
            
            {/* --- Radio and Other Fields --- */}
            <div className="flex flex-col">
              <label className="block text-[#F5F5F5] font-semibold mb-3">Is this your first TEDx event?</label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer"><input type="radio" name="isFirstEvent" value="Yes" checked={formData.isFirstEvent === "Yes"} onChange={handleChange} className="mr-2 accent-[#E62B1E] w-5 h-5" required /> Yes</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="isFirstEvent" value="No" checked={formData.isFirstEvent === "No"} onChange={handleChange} className="mr-2 accent-[#E62B1E] w-5 h-5" /> No</label>
              </div>
            </div>

            <div className="form-group">
              <input type="text" id="favoriteTalk" name="favoriteTalk" value={formData.favoriteTalk} onChange={handleChange} className="form-input w-full px-4 py-3 border border-[#6D6D6D] rounded-md bg-transparent text-white focus:outline-none focus:border-[#E62B1E] transition-colors duration-300" required placeholder=" "/>
              <label htmlFor="favoriteTalk" className="form-label">Which talk you liked the most?</label>
            </div>
            
            <div>
              <label className="block text-[#F5F5F5] font-semibold mb-3">Rate the event (1=Poor, 10=Excellent)</label>
              <div className="flex items-center gap-4">
                <span className="text-3xl w-8 text-center">{getRatingEmoji(formData.rating)}</span>
                <input type="range" id="rating" name="rating" min="1" max="10" value={formData.rating} onChange={handleChange} className="w-full h-2 bg-[#333333] rounded-lg appearance-none cursor-pointer accent-[#E62B1E]" />
                <span className="font-bold text-[#E62B1E] w-8 text-center text-xl">{formData.rating}</span>
              </div>
            </div>

            <div className="form-group">
                <textarea id="feedback" name="feedback" rows={4} value={formData.feedback} onChange={handleChange} className="form-input w-full px-4 py-3 border border-[#6D6D6D] rounded-md bg-transparent text-white focus:outline-none focus:border-[#E62B1E] resize-none transition-colors duration-300" required placeholder=" "></textarea>
                <label htmlFor="feedback" className="form-label">Overall Feedback</label>
            </div>

            <div className="flex flex-col">
              <label className="block text-[#F5F5F5] font-semibold mb-3">Would you like to join us in the next edition?</label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer"><input type="radio" name="joinNextEdition" value="Yes" checked={formData.joinNextEdition === "Yes"} onChange={handleChange} className="mr-2 accent-[#E62B1E] w-5 h-5" required /> Yes</label>
                <label className="flex items-center cursor-pointer"><input type="radio" name="joinNextEdition" value="No" checked={formData.joinNextEdition === "No"} onChange={handleChange} className="mr-2 accent-[#E62B1E] w-5 h-5" /> No</label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center items-center gap-3 bg-[#E62B1E] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#B22222] active:scale-95 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                {isSubmitting && <Spinner />}
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
            {submitMessage && (
              <p className="text-center mt-4 text-red-400">{submitMessage}</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default SurveyForm;