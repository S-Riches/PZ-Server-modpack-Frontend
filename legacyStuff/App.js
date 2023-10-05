import "./index.css";
import Card from "./Card";
import Input from "./Input";
import { useState } from "react";
import ProcessChoices from "./ProcessChoices";
function App() {
  // create an array to use to set the data via array
  const [apiData, setApiData] = useState([]);
  // array of choices to be worked out once button is clicked.
  let modIDChoices = [];
  // send the link to the api

  function addDataToObject(dataToAdd) {
    if (modIDChoices.find(dataToAdd)) {
      modIDChoices.splice(modIDChoices.indexOf(dataToAdd));
    }
    modIDChoices.push(dataToAdd);
    console.log(modIDChoices);
  }
  async function getCardDataFromApi(submittedLink) {
    if (submittedLink !== "") {
      const formattedID = String(await submittedLink).match(/[0-9]+/g);
      console.log(formattedID);
      const requestOptions = {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        // prettier-ignore
        body: JSON.stringify({ "link": formattedID }),
      };
      const response = await fetch(
        "http://localhost:9999/collection",
        requestOptions,
      );
      setApiData(await response.json());
    }
  }
  return (
    <div className="App">
      <Input callBackFunction={getCardDataFromApi} />
      {/* TODO change this to only create holder when there is need for one - simpler debugging */}
      {apiData.map((cardData) => (
        <div className="holder" key={apiData.indexOf(cardData)}>
          <Card cardData={cardData} addDataToObject={addDataToObject} />
        </div>
      ))}
      {apiData.length != 0 && <ProcessChoices modChoices={modIDChoices} />}
    </div>
  );
}

export default App;
