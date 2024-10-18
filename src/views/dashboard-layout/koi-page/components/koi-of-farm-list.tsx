import { Farm } from "@/domains/models/kois";

interface KoiFarmsProps {
  farms: Farm[];
}

const KoiFarms: React.FC<KoiFarmsProps> = ({ farms }) => {
  return (
    <div className="mt-4">
      <h3 className="font-semibold">Available at:</h3>
      <ul>
        {farms.map((farm) => (
          <li key={farm.farmKoiId}>{farm.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KoiFarms;
