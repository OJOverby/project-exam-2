import { useParams } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import {Card} from "../components/styled/card.js"
import {Container} from "../components/styled/container.js"



export function Venue() {
      let params = useParams();
  const productapi = api + "/" + params.id;
  const { data, isLoading, isError } = useApi(productapi);
  const apiresponse = data?.data ?? [];





  if (isLoading) {
    return <div>
      Loading placeholder
    </div>;
  }

  if (isError) {
    return (
      <div>
        Error message placeholder
      </div>
    );
  }

 const venue = data?.data;
  console.log(apiresponse);
  console.log("Venue" + venue)
  return (
    <Container>
        <Card key={venue?.id}>
           <img src={`${venue?.media[0]?.url }`} alt={`${venue?.media[0]?.alt}`}></img>
          <h2>{venue?.name}</h2>
        </Card>
    </Container>
   
  );
}
