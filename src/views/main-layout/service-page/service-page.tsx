
import ServiceBreadcumb from "./components/service-breadcumb";
import ServiceSideFilter from "./components/service-side-filter";
import ServiceList from "./components/service-list";
import ServiceTopFilter from "./components/service-top-filter";

const ServicePage = () => {
  return (
    <section className="container my-10">
      <ServiceBreadcumb/>
      <ServiceTopFilter/>
      <main className="grid grid-cols-8 mt-10">
        <div className="col-span-2 ">
          <ServiceSideFilter/>
        </div>
        <div className="col-span-6">
          <ServiceList/>
        </div>
      </main>
    </section>
  );
};

export default ServicePage;
