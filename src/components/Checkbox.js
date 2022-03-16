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
        {members.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="left-section my-2">
                <input
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={name}
                  defaultChecked={categories.includes(name)}
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
  {
    name: "Bed & Bath",
  },
  {
    name: "Clothing & Shoes",
  },
  {
    name: "Computers & Accessories",
  },
  {
    name: "Furniture",
  },
  {
    name: "Home & Kitchen",
  },
  {
    name: "Lighting & Ceiling Fans",
  },
  {
    name: "Men",
  },
  {
    name: "Mobile Phones & Communication",
  },
  {
    name: "Women",
  },
  {
    name: "Television & Video",
  },
];

export default CheckBox;
