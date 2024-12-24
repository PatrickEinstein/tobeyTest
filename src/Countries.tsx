import React from "react";

interface Country {
  name: {
    common: string;
  };
  capital: string;
}

const Countries = ({ countries }: { countries: Country[] }) => {
  return (
    <div>
      {countries.length > 1 &&
        countries.map(({ name: { common } }) => <div>{common}</div>)}
    </div>
  );
};

export default Countries;
