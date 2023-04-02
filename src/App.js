import "./index.css";
import Card from "./Card";
import Input from "./Input";
import { useState } from "react";
function App() {
    // create an array to use to set the data via array
    const [data, setData] = useState([]);
    // send the link to the api
    async function getCardDataFromApi(submittedLink) {
        if (submittedLink !== "") {
            const requestOptions = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
                // prettier-ignore
                body: JSON.stringify({ "link": submittedLink }),
            };
            const response = await fetch(
                "http://localhost:9999/collection",
                requestOptions
            );
            setData(await response.json());
        }
    }
    return (
        <div className="App">
            <Input callBackFunction={getCardDataFromApi} />
            {data.map((cardData) => (
                <div className="holder" key={data.indexOf(cardData)}>
                    <Card cardData={cardData} />
                </div>
            ))}
        </div>
    );
}

export default App;
