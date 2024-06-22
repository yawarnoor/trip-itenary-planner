import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const planTrip = async (tripData) => {
  try {
    const response = await axios.post(`${API_URL}/trips`, tripData);
    return response.data;
  } catch (error) {
    console.error('Error planning trip:', error);
    throw error;
  }
};

// Add more API calls as needed