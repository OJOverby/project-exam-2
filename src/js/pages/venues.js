
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { Link } from "react-router-dom";
import {Card} from "../components/styled/card.js"
import {Container} from "../components/styled/container.js"



export function Venues() {
  const { data, isLoading, isError } = useApi(api);
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
 console.log(apiresponse);
  return (
    <Container>
         {apiresponse.map((venue) => (
        <Card key={venue.id}>
           <img src={`${venue.media[0]?.url }`} alt={`${venue.media[0]?.alt}`}></img>
              <Link to={`/venue/${venue.id}`}>
              <h2>{venue.name}</h2>
            </Link>
    
        </Card>
      ))}
    </Container>
   
  );
}
