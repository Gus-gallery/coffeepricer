
const API_KEY = import.meta.env.API_ACCESS_KEY;
const BASE_URL = "https://www.alphavantage.co/query";

export async function fetchCoffeePrice() {
    const url = `${BASE_URL}?function=COFFEE&interval=monthly&apikey=${API_KEY}`;

    const res = await fetch(url, {
        headers: { "User-agent": "request" }
    });
  
    if (!res.ok) {
      throw new Error("Could not fetch coffee price");
    }

    const data = await res.json()

    if (!data.data || !Array.isArray(data.data) || data.data.length === 0) {
        throw new Error("No coffee price data available");
      }

    const latest = data.data[0];

    return {
        date: latest.date,
        pricePerKg: parseFloat(latest.value) * 2.20462 
    }
  }
  