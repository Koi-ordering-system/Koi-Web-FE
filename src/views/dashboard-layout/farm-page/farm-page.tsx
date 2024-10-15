import { FarmsResponse } from "@/domains/models/farms";
import FarmTable from "@/views/dashboard-layout/farm-page/components/farm-table";

const fakeFarmsResponse: FarmsResponse[] = [
  {
    id: "1",
    name: "Sunnydale Farm",
    owner: "John Doe",
    address: "123 Farm Lane, Sunnyville",
    description: "A beautiful organic farm with a variety of fresh produce.",
    rating: 4.8,
    farmImages: [
      {
        id: "img1",
        url: "https://example.com/images/farm1.jpg",
      },
      {
        id: "img2",
        url: "https://example.com/images/farm2.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "Green Valley Farm",
    owner: "Alice Smith",
    address: "456 Green Valley Road, Greendale",
    description:
      "A modern farm focused on sustainability and eco-friendly farming.",
    rating: 4.5,
    farmImages: [
      {
        id: "img3",
        url: "https://example.com/images/farm3.jpg",
      },
      {
        id: "img4",
        url: "https://example.com/images/farm4.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "Hilltop Farm",
    owner: "Michael Johnson",
    address: "789 Hilltop Drive, Hilltown",
    description: "A scenic farm located on a hilltop with breathtaking views.",
    rating: 4.9,
    farmImages: [
      {
        id: "img5",
        url: "https://example.com/images/farm5.jpg",
      },
      {
        id: "img6",
        url: "https://example.com/images/farm6.jpg",
      },
    ],
  },
];

const FarmPage = () => {
  return (
    <div className="px-5 py-10 mx-auto">
      <FarmTable data={fakeFarmsResponse} />
    </div>
  );
};

export default FarmPage;
