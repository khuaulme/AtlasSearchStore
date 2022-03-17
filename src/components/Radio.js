import { RadioGroup } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Radio = ({ options, option, setOption, title }) => {
  const [showCode, setShowCode] = useState(false);
  const [marketObject, setMarketObject] = useState({});

  let marketString = JSON.stringify(marketObject, null, 2);

  useEffect(() => {
    if (option === "") {
      setShowCode(false);
      return;
    }
    setMarketObject({
      text: {
        query: option,
        path: "marketplace",
      },
    });
    setShowCode(true);
    // eslint-disable-next-line
  }, [option]);
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
      {showCode && (
        <div
          onClick={() => {
            setShowCode(false);
          }}
        >
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {marketString}
          </SyntaxHighlighter>
        </div>
      )}
    </RadioGroup>
  );
};

export default Radio;
