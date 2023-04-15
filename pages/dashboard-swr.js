import useSWR from "swr";

const DashboardSwr = () => {
  const fetcher = async () => {
    const response = await fetch("http://localhost:4000/dashboard");
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return <h1>error occured</h1>;

  if (!data) return <h1>Loading..</h1>;
  return (
    <>
      <h1>Dashboard</h1>
      <h2>{data?.likes}</h2>
    </>
  );
};

export default DashboardSwr;
