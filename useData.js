import React from 'react';
import d3 from 'd3';

const csvUrl =
  "https://gist.githubusercontent.com/blessedaim/194e3ffc1852220dcd762edf4d9768c0/raw/49bc369907064b312e0c235f112162d9dc9f31b0/UN_Population_2019.csv";

export const useData = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const row = (d) => {
      d.Population = +d["2020"];
      return d;
    };
    d3.csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);
  return data;
}
