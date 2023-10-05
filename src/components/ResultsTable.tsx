interface dataBlock {
  modName: string;
  imageCDNLink: string;
  modIds: string[];
}
const testBlock: dataBlock = {
  modName: "test",
  imageCDNLink: "#",
  modIds: ["1234", "1234", "123142"],
};
const ResultsTable = () => {
  return (
    <div className="Results table">
      <h1>placeholder</h1>
    </div>
  );
};

export default ResultsTable;
