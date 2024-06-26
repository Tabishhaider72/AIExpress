import React from "react";

// Define the type for the props
interface ItemProps {
  Links: Array<{ name: string; link: string }>; // Adjusted to match the structure of your Links
  title: string;
}

// Apply the type to the component
const Item: React.FC<ItemProps> = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
