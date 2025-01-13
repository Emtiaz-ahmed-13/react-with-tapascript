import CarsCol from "./CarsCol";
import CheckBox from "./CheckBox";
import Header from "./Header";
import Search from "./Search";

export default function TapaScriptCars() {
  return (
    <>
      <Header />
      <div className="flex items-center  px-3 py-2">
        <div className="w-1/3">

          <Search />
        </div>
        <div className="ml-2">
          <CheckBox />
        </div>
      </div>
      <CarsCol />
    </>
  );
}
