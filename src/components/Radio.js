import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const Radio = ({ categories, category, setCategory, title }) => {
  const [showCategory, setShowCategory] = useState(false);
  console.log("CATEGORY: ", category);
  let cName = "";
  if (title === "Category") {
    cName =
      "mt-8 py-2 text-center bg-purple-900 text-white w-72 text-lg rounded-lg";
  }
  if (title === "Price") {
    cName =
      "mt-8 py-2 text-center bg-blue-900 text-white w-72 text-lg rounded-lg";
  }
  if (title === "Average Review") {
    cName =
      "mt-8 py-2 text-center bg-green-900 text-white w-72 text-lg rounded-lg";
  }
  return (
    <RadioGroup value={category} onChange={setCategory}>
      <div className={cName} onClick={() => setShowCategory(!showCategory)}>
        {title}
      </div>
      {showCategory &&
        categories.map((category, idx) => (
          <div className="mt-2">
            <RadioGroup.Option value={category}>
              {({ checked }) => (
                <div
                  key={idx}
                  className={
                    checked
                      ? "bg-purple-200 py-2 px-6 rounded w-72 flex"
                      : "flex"
                  }
                >
                  {category}
                </div>
              )}
            </RadioGroup.Option>
          </div>
        ))}
    </RadioGroup>
  );
};

export default Radio;
