import { KoisResponse } from "@/domains/models/kois";

interface KoiInfoProps {
  koi: KoisResponse;
}

const KoiInfo: React.FC<KoiInfoProps> = ({ koi }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">{koi.name}</h2>
      <p>{koi.description}</p>
      <p>Price: {koi.price} JPY</p>
      <p>Species: {koi.speciesName}</p>
      <p>Gender: {koi.isMale ? "Male" : "Female"}</p>
      <p>
        Size: {koi.minSize} - {koi.maxSize} cm
      </p>
      <h3 className="mt-4 font-semibold">Colors:</h3>
      <ul>
        {koi.colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default KoiInfo;
