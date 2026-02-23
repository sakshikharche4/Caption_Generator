import { useState } from "react";
import captions from "../caption.json";

const Card = () => {
  const [category, setCategory] = useState("");
  const [caption, setCaption] = useState([]);

  const generateCaption = () => {
    if (!category) {
      alert("Please select a category first!");
      return;
    }

    const CategoryCaption = captions[category];

    if (!CategoryCaption || CategoryCaption.length === 0) return;

    const random1 = Math.floor(
      Math.random() * CategoryCaption.length
    );

    setCaption([CategoryCaption[random1]]);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">

      {/* Gradient Border Wrapper */}
      <div className="p-1 rounded-2xl bg-linear-to-r from-purple-600 to-indigo-600">

        {/* Card Content */}
        <div className="bg-white rounded-2xl p-10 w-175 shadow-xl">

          <div className="flex flex-col space-y-10 items-center">

            <div className="w-full text-center">
              <h2 className="font-semibold text-2xl pb-5">
                Select Category
              </h2>

              <select
                onChange={(e) => setCategory(e.target.value)}
                className="w-full font-medium text-slate-800 text-lg capitalize px-6 py-3 border border-slate-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">-- Select --</option>
                <option value="funny">Funny</option>
                <option value="motivational">Motivational</option>
                <option value="love">Love</option>
                <option value="sad">Sad</option>
                <option value="attitude">Attitude</option>
              </select>
            </div>

            <button
              onClick={generateCaption}
              className="px-16 py-4 rounded-xl bg-linear-to-r from-purple-700 to-indigo-700 text-white text-xl font-semibold tracking-wide hover:scale-105 transition duration-300"
            >
              Generate
            </button>

            <div className="text-center min-h-15">
              {caption.map((cap, index) => (
                <p
                  key={index}
                  className="mt-4 text-xl font-medium text-slate-700"
                >
                  {cap}
                </p>
              ))}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Card;