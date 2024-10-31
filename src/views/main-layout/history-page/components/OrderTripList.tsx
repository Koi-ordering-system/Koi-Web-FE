import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui";
import { useOrderPersonalQuery } from "@/domains/stores/hooks/orders/use-order-query";

export default function OrderTripList() {
    const { data, isLoading, error } = useOrderPersonalQuery({
        options: {
            pageIndex: 1,
            pageSize: 10,
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No data</div>;
    }

    const dataOrderKoiFiltered = data.data?.items.filter(
        (order) => order.trip === null && order.kois.length > 0
    );

    const dataOrderTripFiltered = data.data?.items.filter(
        (order) => order.trip !== null && order.kois.length === 0
    );

    if (!dataOrderKoiFiltered || !dataOrderTripFiltered) {
        return <div>No data</div>;
    }

    return (
        <div className="w-full ">
            <Card className="w-full text-xl font-semibold ">
                <CardHeader>Order Trips</CardHeader>
                <CardContent>
                    {/* <OrderTable data={dataOrderTripFiltered} /> */}
                </CardContent>
                <CardFooter>
                    {/* <Button>
            <span>Approve</span>
          </Button> */}
                </CardFooter>
            </Card>
            <div className="flex items-center justify-between mt-6">
                <div></div>
                {/* <Pagination
                    totalPages={data?.data.totalPages ?? 0}
                    currentPage={data?.data.pageNumber ?? 0}
                    onPageChange={(page) => updatePageIndex("travel", page)}
                />

                <Select
                    onValueChange={(value) => {
                        updatePageSize("travel", Number(value));
                        updatePageIndex("travel", 1);
                    }}
                >
                    <SelectTrigger className="w-36">
                        <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Page</SelectLabel>
                            {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                                <SelectItem
                                    key={pageSize}
                                    value={pageSize.toString()}
                                    onSelect={() => {
                                        updatePageSize("travel", pageSize);
                                    }}
                                >
                                    {pageSize} rows
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select> */}
            </div>
        </div >
    )
}
