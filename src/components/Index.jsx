import React from 'react'
import { useEffect, useState } from 'react'
import { fetchCoffeePrice } from '../api/coffee'

export default function Index() {
    const [coffee, setCoffee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const data = await fetchCoffeePrice();
                setCoffee(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    if (loading) return <p className="text-md font-regular">Getting coffee price...</p>;
    if (error) return <p className="text-md font-regular text-red-500">Error: {error}</p>;

  return (
    <div className="bg-backgroundthird border-2 border-border p-4 rounded-md font-extrabold text-4xl w-full mt-4">
        <div className="flex flex-col items-center justify-center">
            <p>
                <strong>{coffee.pricePerKg.toFixed(2)} $ per kg </strong>
            </p>
            <p className="text-xs font-regular mt-4 text-third">As of: {new Date(coffee.date).toLocaleDateString()}</p>
        </div>
    </div>
  )
}