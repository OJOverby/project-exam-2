
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";



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
  return (
    <div>
         {apiresponse.map((venue) => (
        <div key={venue.id}>
           <img src={`${venue.media[0]?.url }`} alt={`${venue.media[0]?.alt}`}></img> */
          <h2>{venue.name}</h2>
    
        </div>
      ))}
    </div>
   
  );
}
