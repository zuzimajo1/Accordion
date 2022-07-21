import React from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export const Accordionmain = ({ id, title, description }) => {
      const [click, SetClick] = React.useState(false);
    //   const [show,setShow] = React.useState('');
  return (
    <section key={id}>
      <div className="listcontainer">
        <div className="wrapper2">
          <h2>{title}</h2>
          <button onClick={() => SetClick(!click)}>
            {click ? <BiMinus /> : <BsPlus />}
          </button>
        </div>
        <div className="wrapper3">
          <h3 className="description">{click && description}</h3>
        </div>
      </div>
    </section>
  );
};
