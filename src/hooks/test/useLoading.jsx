import { useEffect, useState } from "react";

export default function useLoading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setLoading(false), []);
  return loading;
}
