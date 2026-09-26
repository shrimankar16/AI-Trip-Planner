import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
// Initialize the Chat session with history to enforce the JSON schema
const chat = ai.chats.create({
  model: "gemini-3.5-flash",
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a travel plan for Location: New York for 2 days for a couple traveler on economy budget. Return the result strictly as a single JSON object using camelCase keys, the travel plan with trip note and must feature hotelsOptions array, each hotel with hotelName, hotelAddress, priceRange, imageUrl, rating, description, and a coordinates, alongside an itinerary array of daily plans. Each day must include a dayNumber, theme, and an activities array, where each activity contains activityName, description, imageUrl, ticketPrice, timeRange, timeToTravel and coordinates",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify({
            tripNote:
              "This 2-day New York City itinerary is designed for a couple traveling on an economy budget, focusing on iconic landmarks, vibrant neighborhoods, and free or low-cost activities. Public transportation (subway/bus) is recommended for getting around, as it is efficient and economical. Be prepared for a lot of walking!",
            hotelsOptions: [
              {
                hotelName: "The Jane Hotel",
                hotelAddress: "113 Jane Street, New York, NY 10014",
                priceRange:
                  "$150 - $250 per night (for a private room, prices can vary)",
                imageUrl: "https://example.com/the-jane-hotel.jpg",
                rating: 7.8,
                description:
                  "A charming boutique hotel in the West Village, offering unique, ship cabin-inspired rooms. It provides an economical yet stylish stay with easy access to various attractions and complimentary bicycles for guests. Some rooms may feature shared bathrooms for budget-conscious travelers.",
                coordinates: {
                  latitude: 40.73833,
                  longitude: -74.00944,
                },
              },
              {
                hotelName: "Pod 51 Hotel",
                hotelAddress: "230 E 51st St, New York, NY 10022",
                priceRange: "$200 - $350 per night (prices can vary)",
                imageUrl: "https://example.com/pod51-hotel.jpg",
                rating: 8.1,
                description:
                  "Located in Midtown East, Pod 51 offers modern and compact rooms designed for efficiency and comfort. It features a rooftop garden, an on-site lounge, and provides free WiFi, making it a popular choice for budget-conscious travelers seeking a central location.",
                coordinates: {
                  latitude: 40.7561,
                  longitude: -73.966,
                },
              },
              {
                hotelName: "HI NYC Hostel",
                hotelAddress: "891 Amsterdam Avenue, New York, NY 10025",
                priceRange:
                  "$70 - $150 per night (for a private room, dorms are cheaper; prices can vary)",
                imageUrl: "https://example.com/hi-nyc-hostel.jpg",
                rating: 8.6,
                description:
                  "A well-regarded hostel on the Upper West Side offering private rooms, free Wi-Fi, a guest kitchen, and organized free activities like walking tours. It's an excellent option for couples looking for a social atmosphere and easy access to Central Park.",
                coordinates: {
                  latitude: 40.79875,
                  longitude: -73.966805,
                },
              },
            ],
            itinerary: [
              {
                dayNumber: 1,
                theme: "Iconic Landmarks & Central Park Charm",
                activities: [
                  {
                    activityName: "Explore Central Park",
                    description:
                      "Begin your day with a leisurely stroll through Central Park. Discover the beautiful Bethesda Terrace and Fountain, find peace at Strawberry Fields (John Lennon Memorial), and walk along The Mall and Literary Walk. Enjoy the vast green spaces and iconic scenery.",
                    imageUrl: "https://example.com/central-park.jpg",
                    ticketPrice: "Free",
                    timeRange: "9:00 AM - 12:00 PM",
                    timeToTravel:
                      "15-20 minutes by subway/bus (depending on hotel location)",
                    coordinates: {
                      latitude: 40.7799,
                      longitude: -73.971,
                    },
                  },
                  {
                    activityName: "Lunch near Central Park",
                    description:
                      "Grab a quick and affordable lunch from a street vendor or a casual eatery around Central Park. Many delis and food carts offer budget-friendly options.",
                    imageUrl: "https://example.com/nyc-food-cart.jpg",
                    ticketPrice: "Varies ($10-20 per couple)",
                    timeRange: "12:00 PM - 1:00 PM",
                    timeToTravel: "Walk within the park/nearby streets",
                    coordinates: {
                      latitude: 40.7678,
                      longitude: -73.973,
                    },
                  },
                  {
                    activityName: "Experience the Vibrancy of Times Square",
                    description:
                      "Immerse yourselves in the dazzling lights and kinetic energy of Times Square. Spend time people-watching from the famous red steps, marvel at the enormous billboards, and enjoy the various street performers.",
                    imageUrl: "https://example.com/times-square.jpg",
                    ticketPrice: "Free (tips for street performers optional)",
                    timeRange: "1:30 PM - 3:30 PM",
                    timeToTravel:
                      "10-15 minutes by subway from Central Park South",
                    coordinates: {
                      latitude: 40.7577,
                      longitude: -73.9857,
                    },
                  },
                  {
                    activityName: "Sunset Staten Island Ferry Ride",
                    description:
                      "Head to the Whitehall Terminal for a free ride on the Staten Island Ferry. This round trip offers breathtaking panoramic views of the Lower Manhattan skyline, the Statue of Liberty, and Ellis Island, especially stunning during sunset.",
                    imageUrl:
                      "https://example.com/staten-island-ferry-sunset.jpg",
                    ticketPrice: "Free",
                    timeRange: "4:30 PM - 6:30 PM",
                    timeToTravel:
                      "15-20 minutes by subway from Times Square to Whitehall Terminal",
                    coordinates: {
                      latitude: 40.701409,
                      longitude: -74.013131,
                    },
                  },
                  {
                    activityName: "Dinner in Lower Manhattan",
                    description:
                      "Explore the diverse and affordable food options in Lower Manhattan after your ferry ride, from casual eateries to ethnic cuisine.",
                    imageUrl: "https://example.com/lower-manhattan-dinner.jpg",
                    ticketPrice: "Varies ($30-50 per couple)",
                    timeRange: "7:00 PM - 8:30 PM",
                    timeToTravel: "Walk from Whitehall Terminal",
                    coordinates: {
                      latitude: 40.705,
                      longitude: -74.009,
                    },
                  },
                ],
              },
              {
                dayNumber: 2,
                theme: "Brooklyn Bridge & Greenwich Village Exploration",
                activities: [
                  {
                    activityName: "Walk the Brooklyn Bridge and Explore DUMBO",
                    description:
                      "Start your day by walking across the iconic Brooklyn Bridge from the Manhattan side to Brooklyn, capturing magnificent views of both skylines and the East River. After crossing, explore the charming DUMBO (Down Under the Manhattan Bridge Overpass) neighborhood, known for its cobblestone streets, waterfront parks (Brooklyn Bridge Park), and the famous Washington Street photo spot with the Manhattan Bridge in the background.",
                    imageUrl: "https://example.com/brooklyn-bridge-dumbo.jpg",
                    ticketPrice: "Free",
                    timeRange: "9:30 AM - 1:00 PM",
                    timeToTravel:
                      "10-15 minutes by subway to Brooklyn Bridge Manhattan Entrance (near City Hall)",
                    coordinates: {
                      latitude: 40.71,
                      longitude: -74.004,
                    },
                  },
                  {
                    activityName: "Lunch in DUMBO",
                    description:
                      "Enjoy an affordable lunch in DUMBO. Options include grabbing a slice of famous Brooklyn pizza or exploring the diverse vendors at Time Out Market (while keeping to an economy budget, perhaps choosing a cheaper stand or sharing).",
                    imageUrl: "https://example.com/dumbo-pizza.jpg",
                    ticketPrice: "Varies ($20-40 per couple)",
                    timeRange: "1:00 PM - 2:00 PM",
                    timeToTravel: "Walk within DUMBO",
                    coordinates: {
                      latitude: 40.702,
                      longitude: -73.989,
                    },
                  },
                  {
                    activityName:
                      "Greenwich Village Charm and Washington Square Park",
                    description:
                      "Head to Greenwich Village and wander through its historic, tree-lined streets, known for their bohemian past and unique architecture. Conclude your exploration at Washington Square Park, a vibrant hub where you can relax, observe street performers, chess players, and admire the majestic Washington Square Arch.",
                    imageUrl: "https://example.com/washington-square-park.jpg",
                    ticketPrice: "Free",
                    timeRange: "2:30 PM - 5:30 PM",
                    timeToTravel:
                      "20-25 minutes by subway from DUMBO to Washington Square Park",
                    coordinates: {
                      latitude: 40.730824,
                      longitude: -73.99733,
                    },
                  },
                  {
                    activityName: "Evening in Greenwich Village",
                    description:
                      "Enjoy the evening atmosphere of Greenwich Village. You can find many affordable and charming restaurants, cafes, or simply enjoy a leisurely walk through the lively streets.",
                    imageUrl:
                      "https://example.com/greenwich-village-evening.jpg",
                    ticketPrice: "Varies ($30-60 per couple)",
                    timeRange: "6:00 PM onwards",
                    timeToTravel: "Walk within Greenwich Village",
                    coordinates: {
                      latitude: 40.73,
                      longitude: -74.002,
                    },
                  },
                ],
              },
            ],
          }),
        },
      ],
    },
  ],
});
//  Main function to generate the trip
export async function generateTripWithAI(DYNAMIC_PROMPT){
  try {
    const response = await chat.sendMessage({
      message: DYNAMIC_PROMPT,
    });

    const textResponse = response.text;
    // CLEANING THE STRING: Remove Markdown JSON formatting if the AI includes it
    const cleanJson = textResponse.replace(/```json|```/g, "").trim()
    // console.log("Clean json", cleanJson);
    return JSON.parse(cleanJson);
    
  } catch (error) {
    console.error("Error generating trip:", error);
    throw error;
  }
}

