import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { FaTshirt } from "react-icons/fa";
import { GiUnderwearShorts } from "react-icons/gi";
import { MdMasks } from "react-icons/md";

const CategoryRadio = () => {
  let [plan, setPlan] = useState("");
  return (
    <RadioGroup value={plan} onChange={setPlan}>
      <div
        className="mt-8 py-2 text-center bg-purple-900 text-white w-72 text-lg rounded-lg"
        onClick={() => setPlan("")}
      >
        Categories
      </div>
      {categories.map((category) => (
        <div className="mt-2">
          <RadioGroup.Option value={category.text}>
            {({ checked }) => (
              <div
                className={
                  checked ? "bg-purple-200 py-2 px-6 rounded w-72 flex" : "flex"
                }
              >
                <span className="mx-4">{category.icon}</span>

                {category.text}
              </div>
            )}
          </RadioGroup.Option>
        </div>
      ))}
    </RadioGroup>
  );
};

const categories = [
  {
    id: 1,
    text: "Tops",
    icon: <FaTshirt />,
  },
  {
    id: 2,
    text: "Pants",
    icon: <GiUnderwearShorts />,
  },
  {
    id: 3,
    text: "Accessories",
    icon: <MdMasks />,
  },
];

export default CategoryRadio;
