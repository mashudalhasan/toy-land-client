import { useEffect, useState } from "react";

const useShop = () => {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://toy-land-server-dusky.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        setLoading(false);
      });
  }, []);

  return [shops, setShops, loading];
};

export default useShop;
