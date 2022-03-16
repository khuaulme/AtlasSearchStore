import React from "react";

const CheckBox = ({ categories, setCategories }) => {
  const handleOnChange = (e) => {
    let { name, checked } = e.target;
    if (checked) {
      const newArray = [...categories, name]; // creates a new array from a copy of categories and adds name to the end
      //   console.log(newArray);
      setCategories(newArray);
      //    console.log("CATEGORIES: ", categories);
    } else {
      const copy = [...categories];
      const filteredArray = copy.filter((item) => item !== name);
      //    console.log("FILTERED: ", filteredArray);
      setCategories(filteredArray);
      //  console.log("CATEGORIES: ", categories);
    }
  };

  return (
    <div className="">
      <h1 className="mt-8 py-2 text-center bg-blue-900 text-white w-72 text-lg rounded-lg">
        Categories
      </h1>
      <ul className="my-4" onChange={handleOnChange}>
        {members.map(({ name, id, isChecked, value }) => {
          return (
            <li key={id}>
              <div className="left-section my-2">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${id}`}
                  name={name}
                  value={value}
                  defaultChecked={categories.includes(name)}
                />
                <label className="ml-6" htmlFor={`custom-checkbox-${id}`}>
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
  {
    id: 0,
    name: "Clothing",
    value: "Clothing",
    isChecked: false,
  },
  {
    id: 1,
    name: "Furniture",
    value: "Furniture",
    isChecked: false,
  },
  {
    id: 2,
    name: "Lighting & Ceiling Fans",
    value: "Lighting & Ceiling Fans",
    isChecked: false,
  },
  {
    id: 3,
    name: "Bedding",
    value: "Bedding",
    isChecked: false,
  },
  {
    id: 4,
    name: "Women",
    value: "Women",
    isChecked: false,
  },
  {
    id: 5,
    name: "Television & Video",
    value: "Television & Video",
    isChecked: false,
  },
];

export default CheckBox;
