const axios = require('axios');

const generateItinerary = async (destination, duration, preferences) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: "You are a helpful travel planner."
      }, {
        role: "user",
        content: `Create a ${duration}-day itinerary for ${destination}. Preferences: ${preferences.join(', ')}`
      }],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.AI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error calling AI API:', error);
    throw error;
  }
};

module.exports = { generateItinerary };