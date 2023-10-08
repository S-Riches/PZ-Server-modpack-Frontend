interface dataBlock {
    modName: string;
    imageCDNLink: string;
    modIds: string[];
}
const testBlock: dataBlock = {
    modName: "test",
    imageCDNLink: "#",
    modIds: ["1234", "123412312", "123142"],
};
const dupeArr: dataBlock[] = [testBlock, testBlock, testBlock];
const ResultsTable = () => {
    return (
        <div className="Results table">
            <h1>placeholder</h1>
            {dupeArr.map((block, index) => (
                <div key={index}>
                    <h4>{block.modName}</h4>
                    <img src={block.imageCDNLink} alt="mod pack"></img>
                    <div className="blockOptions">
                        {block.modIds.map((modId, index) => (
                            <button key={index}>{modId}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ResultsTable;
