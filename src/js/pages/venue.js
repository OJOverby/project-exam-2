import { useParams } from "react-router-dom";
import { useApi } from "../api/useApi.js";
import { api } from "../api/api.js";
import { apiBookings } from "../api/apiBookings.js";
import {Container} from "../components/styled/container.js"
import { VenueCard } from "../components/styled/venueCard.js";
import { StarSVG } from "../components/svg/star.js";
import { useAuthStore } from "../store/authStore.js";
import { Link } from "react-router-dom";


export function Venue() {
    const user = useAuthStore((state) => state.user);
      let params = useParams();
  const productapi = api + "/" + params.id;
  const { data, isLoading, isError } = useApi(productapi);
  const apiresponse = data?.data ?? [];
  const bookings = useApi(apiBookings)

function Stars({ rating, max = 5 }) {
  const filled = Math.round(Number(rating) || 0);
  return (
    <span style={{ display: "inline-flex", gap: 4 }}>
      {Array.from({ length: max }).map((_, i) => (
        <StarSVG key={i} fillPercent={i < filled ? 100 : 0} size={18} />
      ))}
    </span>
  );
}

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
  console.log(bookings)
  console.log("Venue" + venue)
  return (
    <Container>
        <VenueCard key={venue?.id}>
           <img src={`${venue?.media[0]?.url }`} alt={`${venue?.media[0]?.alt}`}></img>
          <h2>{venue?.name}</h2>
                <p>{venue?.location.city}, {venue?.location.country}</p>
            <p><Stars rating={venue?.rating} /></p>
            <p>{venue?.description}</p>
             <p>Price: {venue?.price}</p>
             <h3>Facilities:</h3>
             <p>
  Parking:
  {venue?.meta?.parking ? (
    <span className="greencheckmark">✔</span>
  ) : (
    <span className="redx">✖</span>
  )}
</p>
<p>
  Breakfast:
  {venue?.meta?.breakfast ? (
    <span className="greencheckmark">✔</span>
  ) : (
    <span className="redx">✖</span>
  )}
</p>
<p>
  Wifi:
  {venue?.meta?.wifi ? (
    <span className="greencheckmark">✔</span>
  ) : (
    <span className="redx">✖</span>
  )}
</p>
<p>
  Pets allowed:
  {venue?.meta?.pets ? (
    <span className="greencheckmark">✔</span>
  ) : (
    <span className="redx">✖</span>
  )}
</p>

            {user ? (
             
                <Link to={`/booking/${venue?.id}`}>
                   <button>Book this venue</button>
                </Link>
            ) : (
              <>
              <Link to="/login">
               <button>Log inn to book this venue</button>
               </Link>
              </>
            )}
        </VenueCard>
    </Container>
   
  );
}
