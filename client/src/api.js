const API_URL = import.meta.env.VITE_API_URL;

export const getProperties = async () => {
  const response = await fetch(`${API_URL}/properties`);

  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }

  return response.json();
};