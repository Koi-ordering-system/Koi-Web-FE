
import TravelBreadcumb from "./components/travel-breadcumb";
import TravelSideFilter from "./components/travel-side-filter";
import TravelList from "./components/travel-list";
import TravelTopFilter from "./components/travel-top-filter";

const TravelPage = () => {
  return (
    <section className="container my-10">
      <TravelBreadcumb/>
      <TravelTopFilter/>
      <main className="grid grid-cols-8 mt-10">
        <div className="col-span-2 ">
          <TravelSideFilter/>
        </div>
        <div className="col-span-6">
          <TravelList/>
        </div>
      </main>
    </section>
  );
};

export default TravelPage;
