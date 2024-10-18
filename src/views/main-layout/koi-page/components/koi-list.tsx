import { Loading } from "@/components/common";
import { Card, CardHeader } from "@/components/ui";
import { KoisResponse } from "@/domains/models/kois";
import { KoisApi } from "@/domains/services/kois/kois.service";
import { useKoiQuery } from "@/domains/stores/hooks/kois/use-koi";
import { useEffect, useState } from "react";

const KoiList = () => {
  const [kois, setKois] = useState<KoisResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [hasPreviousPage, setHasPreviousPage] = useState<boolean>(false);
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);

  const pageSize = 8;

  useEffect(() => {
    const fetchFarms = async () => {
      const response = await KoisApi.getKoisList({ pageIndex, pageSize });

      if (response) {
        setKois(response.data.items);
        setTotalPages(response.data.totalPages);
        setHasPreviousPage(response.data.hasPreviousPage);
        setHasNextPage(response.data.hasNextPage);
      }
    };

    fetchFarms();
  }, [pageIndex]);

  const searchedKois = kois.filter((koi) =>
    koi.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
      {kois.map((koi) => (
        <Card>
          <CardHeader>
            {koi.name}
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default KoiList;
