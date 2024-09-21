import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".7mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".4mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".3mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },

    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, explicabo..",
      filesize: ".6mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-10 p-6"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
