import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SpeciesKoiEdit = () => {
  const { id } = useParams<{ id: string }>();
  const { state: FarmState } = useLocation();
  const [images, setImages] = useState<string[]>([]);

  return <div>SpeciesKoiEdit</div>;
};

export default SpeciesKoiEdit;
