import React from "react";

const TitleSection = ({contents}) => {
  return (
    <div className="mb-11 mt-11 flex gap-4 text-xl items-center">
      <img src="/images/icons/puzzle.svg" height={35} width={35} alt="puzzle" />
      <p className="font-semibold">{contents}</p>
    </div>
  );
};

export default TitleSection;
