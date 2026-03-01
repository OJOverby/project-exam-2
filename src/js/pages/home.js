
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import {Card} from "../components/styled/card.js"
import { Container } from "../components/styled/container.js";
import { Carousel } from "../components/styled/carousel.js";
import { Hero } from "../components/styled/hero.js";



export function Home() {
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

   const topRated = [...apiresponse]
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 10);
  return (
    <div>
      <Hero>
        <div className="text-container"><h2>Find your hidden paradise</h2></div>
      </Hero>
      <h2>Top rated venues</h2>
    <Carousel>
         {topRated.map((venue) => (
        <Card key={venue.id}>
           <img src={`${venue.media[0]?.url }`} alt={`${venue.media[0]?.alt}`}></img>
          <h2>{venue.name}</h2>
          <p>Rating: {venue.rating}</p>
          <p>Price: {venue.price}</p>
    
        </Card>
      ))}
      </Carousel>
    </div>
   
  );
}
