import { useEffect, useState } from "react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      setLoading(true);
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();

      setDashboardData(data);
      setLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <h2>{dashboardData?.likes}</h2>
    </>
  );
}
