import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

type Props = {};

const Row1 = (props: Props) => {
  //This is the hook for the API call
  //"data" is the result from the API call
  const { data } = useGetKpisQuery();

  return (
    //Enclose in react empty fragments since components need atleast one parent element
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
      <DashboardBox gridArea="g"></DashboardBox>
    </>
  );
};

export default Row1;
