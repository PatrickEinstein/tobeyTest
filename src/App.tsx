import { useCallback, useEffect, useState } from "react";
import Countries from "./Countries";

const FILTERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
];

interface IName {
  common: string;
}
interface Capital {
  name: IName;
}
function App() {
  const BASE_URL = "https://restcountries.com/v3.1";

  const [allResponses, setAllResponses] = useState([]);
  const [foundCapital, setFoundCapital] = useState<Capital[]>([]);

  const findCapitals = async (chosenState: string) => {
    const fetchedRes = await fetch(`${BASE_URL}/capital/${chosenState}`, {
      method: "GET",
    });
    const res = await fetchedRes.json();
    setFoundCapital(res);
    console.log(`capital found==>`, res);
  };

  const findAllCountry = useCallback(async () => {
    const fetchedRes = await fetch(`${BASE_URL}/all`, {
      method: "GET",
    });
    const res = await fetchedRes.json();
    setAllResponses(res);
    console.log(res);
  }, []);

  useEffect(() => {
    findAllCountry();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Countries</h1>
        <Countries countries={allResponses} />
      </div>

      <div>
        <h1>Capitals (click any to item)</h1>
        {FILTERABLE_CAPITALS.map((obj) => (
          <h3 onClick={() => findCapitals(obj)}>{obj}</h3>
        ))}
      </div>

      <div>
        <h1>Filtered City</h1>
        <h1>{foundCapital[0].name.common}</h1>
      </div>
    </div>
  );
}

export default App;
