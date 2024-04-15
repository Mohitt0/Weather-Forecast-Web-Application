import React from "react";
import { MdErrorOutline } from "react-icons/md";

const ErrorBox = (props) => {
  return (
    <div
      className={`flex justify-center items-center m-4 gap-[8px] w-auto p-4 sm:flex-col md:flex-row ${
        props.type === "info"
          ? "text-yellow-500 border-yellow-500 bg-yellow-100"
          : "text-red-500 border-red-500 bg-red-200"
      } border rounded-lg`}
    >
      <MdErrorOutline className="text-xl" />

      <h2
        className={`${
          props.type === "info" ? "text-xs sm:text-base" : "text-sm sm:text-lg"
        } font-poppins text-center`}
      >
        {props.errorMessage || "Internal error"}
      </h2>
    </div>
  );
};

export default ErrorBox;
