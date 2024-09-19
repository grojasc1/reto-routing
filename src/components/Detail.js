import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL = `https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json`;
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const mascota = data.find((m) => m.id === parseInt(mascotaId));
        setMascota(mascota);
      });
  }, [mascotaId]);

  if (!mascota) {
    return <h1>Loading...</h1>;
  }

 return (
   <div className="container mt-4">
      <h1>{mascota.nombre}</h1>
      <img src={mascota.foto} alt={mascota.descripcion} />
      <p>{mascota.descripcion}</p>

   </div>
 );
}