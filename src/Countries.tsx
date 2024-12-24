import React from "react";

const Countries = ({ countries }: { countries: any }) => {
  return (
    <div>
      {countries.length > 1 &&
        countries.map(({ name: { common } }) => <div>{common}</div>)}
    </div>
  );
};

export default Countries;
