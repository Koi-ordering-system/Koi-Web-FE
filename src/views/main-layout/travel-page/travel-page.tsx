
import TravelBreadcumb from "./components/travel-breadcumb";
import TravelSideFilter from "./components/travel-side-filter";
import TravelList from "./components/travel-list";

const TravelPageUser = () => {
  return (
    <section className="container mx-auto p-10">
      <TravelBreadcumb/>
      {/* <TravelTopFilter/> */}        
      <main className="grid grid-cols-8 mt-10 gap-7">
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

export default TravelPageUser;
