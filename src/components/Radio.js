import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const Radio = ({ options, option, setOption, title }) => {
  let cName = "";
  if (title === "Marketplace") {
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
    <RadioGroup value={option} onChange={setOption}>
      <div className={cName} onClick={() => setOption("")}>
        {title}
      </div>
      {options.map((option, idx) => (
        <div className="mt-2 ml-6" key={idx}>
          <RadioGroup.Option value={option}>
            {({ checked }) => (
              <div
                className={
                  checked ? "bg-purple-200 py-2 px-6 rounded w-72 flex" : "flex"
                }
              >
                {option}
              </div>
            )}
          </RadioGroup.Option>
        </div>
      ))}
    </RadioGroup>
  );
};

export default Radio;
