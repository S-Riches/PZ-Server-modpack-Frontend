import Header from "../components/Header";
import ResultsTable from "../components/ResultsTable";
import SearchBox from "../components/SearchBox";
const MainPageLayout = () => {
  return (
    <div>
      <Header />
      <SearchBox />
      <ResultsTable />
    </div>
  );
};

export default MainPageLayout;
