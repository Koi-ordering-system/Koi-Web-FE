import { useSearchStore } from "@/domains/stores/zustand/search/use-search-store";
import KoiBreadcumb from "@/views/main-layout/koi-page/components/koi-breadcumb";
import KoiFilter from "@/views/main-layout/koi-page/components/koi-filter";
import KoiList from "@/views/main-layout/koi-page/components/koi-list";

const KoiPage = () => {
  const { search } = useSearchStore();

  console.log("search", search);

  return (
    <section className="container my-10">
      <KoiBreadcumb />
      <main className="grid grid-cols-8 mt-10">
        <div className="col-span-2 ">
          <KoiFilter />
        </div>
        <div className="col-span-6">
          <KoiList />
        </div>
      </main>
    </section>
  );
};

export default KoiPage;
