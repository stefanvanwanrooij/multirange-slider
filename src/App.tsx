
import MultiRangeSlider from "./components/MultiRangeSlider/MultiRangeSlider";

import "./App.scss";
const App = () => {
  return (
    <main className="container">
      <MultiRangeSlider
        min={0}
        max={100}
        step={10}
        onChange={({ min, max }: { min: number; max: number }) =>
          console.log(`min = ${min}, max = ${max}`)
          //console log data voor nu
        }
      />
    </main>
  );
};

export default App;
