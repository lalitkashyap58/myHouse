import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="container mx-auto p-4">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && <p className="text-center my-7 text-2xl">Something went wrong!</p>}
      {listing && !loading && !error && (
        <div>
          <div className="flex flex-wrap -mx-4">
            {listing.imageUrls.map((url, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
                <div
                  className="h-[200px] bg-cover bg-center rounded"
                  style={{ backgroundImage: `url(${url})` }}
                ></div>
              </div>
            ))}
          </div>
          {/* Additional details can be added here */}
        </div>
      )}
    </main>
  );
}
