import React from "react";

const CheckBox = ({ categories, setCategories }) => {
  const handleOnChange = (e) => {
    let { name, checked } = e.target;
    if (checked) {
      setCategories((prevCategories) => [...prevCategories, name]);
    }
    if (checked === false) {
      let categoryArray = categories.filter((item) => item !== name);
      setCategories(categoryArray);
    }
    console.log("CATEGORY ARRAY: ", categories);
  };

  return (
    <div className="">
      <h1 className="mt-8 py-2 text-center bg-blue-900 text-white w-72 text-lg rounded-lg">
        Categories
      </h1>
      <ul className="my-4" onChange={handleOnChange}>
        {members.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="left-section my-2">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  defaultChecked={categories.includes({ name })}
                />
                <label className="ml-6" htmlFor={`custom-checkbox-${index}`}>
                  {name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const members = [
  { name: "Clothing" },
  { name: "Furniture" },
  { name: "Lighting & Ceiling Fans" },
  { name: "Bedding" },
  { name: "Women" },
  { name: "Television & Video" },
];
export default CheckBox;
