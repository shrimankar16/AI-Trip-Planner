# 🌍 AI Trip Planner

An intelligent travel planning application powered by Google Gemini AI that generates personalized trip itineraries based on your destination, budget, travel style, and duration.

![AI Trip Planner](https://img.shields.io/badge/React-19.2-blue)
![Vite](https://img.shields.io/badge/Vite-8.3-purple)
![Firebase](https://img.shields.io/badge/Firebase-12.7-orange)
![Gemini AI](https://img.shields.io/badge/Gemini-3.7--Flash-green)

## 🌐 Live Demo

**🚀 [View Live Application](https://trippy-planner-three.vercel.app/)**

Experience the AI-powered trip planner in action! Generate personalized travel itineraries with hotel recommendations and day-by-day activities without any login required.

## ✨ Features

- 🤖 **AI-Powered Trip Generation** - Uses Google Gemini 3.7 Flash to create comprehensive travel plans
- 🏨 **Hotel Recommendations** - Get curated hotel options with pricing, ratings, and locations
- 📅 **Day-by-Day Itinerary** - Detailed daily activities with timing, travel duration, and ticket prices
- 📍 **Interactive Maps** - Integration with Google Places API for location search and photos
- 🚀 **No Login Required** - Generate and view trips instantly without authentication
- 💾 **Trip Storage** - All trips are automatically saved and accessible
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with Tailwind CSS and Radix UI components

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (React)                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │   Pages    │  │ Components │  │      Services      │   │
│  │            │  │            │  │                    │   │
│  │ • Home     │  │ • Header   │  │ • aiModel.js       │   │
│  │ • Create   │  │ • Hero     │  │ • authApi.js       │   │
│  │ • MyTrips  │  │ • Hotels   │  │ • firebaseConfig   │   │
│  │ • Details  │  │ • Itinerary│  │ • placePhotoApi    │   │
│  └────────────┘  └────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────┼───────────────────┐
        ↓                   ↓                   ↓
┌───────────────┐   ┌──────────────┐   ┌──────────────┐
│  Google       │   │   Firebase   │   │   Google     │
│  Gemini AI    │   │   Firestore  │   │   Places     │
│               │   │              │   │     API      │
│ • Trip Gen    │   │ • User Data  │   │ • Location   │
│ • Itinerary   │   │ • Trip Save  │   │ • Photos     │
└───────────────┘   └──────────────┘   └──────────────┘
```

### Technology Stack

#### Frontend
- **React 19.2** - UI library with latest features
- **Vite 8.3** - Lightning-fast build tool
- **React Router 7.18** - Client-side routing
- **Tailwind CSS 4.3** - Utility-first CSS framework

#### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications
- **Embla Carousel** - Smooth carousel functionality

#### Backend Services
- **Google Gemini AI 3.7 Flash** - AI content generation
- **Firebase Firestore** - NoSQL database for trip storage
- **Google OAuth** - Secure authentication
- **Google Places API** - Location data and photos

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** version 20 or higher
- **npm** or **yarn** package manager
- Google Cloud account (for API keys)
- Firebase account

### Required API Keys

You'll need to obtain the following API keys:

1. **Google Gemini API Key** - [Get from AI Studio](https://aistudio.google.com/app/apikey)
2. **Google OAuth Client ID** - [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
3. **Google Places API Key** - [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
4. **Firebase Configuration** - [Firebase Console](https://console.firebase.google.com/)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-trip-planner.git
cd ai-trip-planner
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Google Places API Key
VITE_GOOGLE_PLACES_API_KEY=your_places_api_key_here

# Google Gemini API Key
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Google OAuth Client ID
VITE_GOOGLE_AUTH_CLIENT_ID=your_oauth_client_id_here
```

### 4. Configure Firebase

Update `src/services/firebaseConfig.js` with your Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔧 Configuration Guide

### Google Gemini API Setup

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API key"**
4. Copy the API key (starts with `AQ.`)
5. Add to `.env.local` as `VITE_GEMINI_API_KEY`

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services → Credentials**
4. Click **"Create Credentials" → "OAuth client ID"**
5. Configure OAuth consent screen
6. Add authorized origins:
   - `http://localhost:5173` (development)
   - Your production domain
7. Copy the **Client ID** (ends with `.apps.googleusercontent.com`)
8. Add to `.env.local` as `VITE_GOOGLE_AUTH_CLIENT_ID`

### Google Places API Setup

1. In Google Cloud Console, go to **APIs & Services → Library**
2. Search for "Places API"
3. Enable the API
4. Go to **Credentials** and create an API key
5. Restrict the key to **Places API**
6. Add to `.env.local` as `VITE_GOOGLE_PLACES_API_KEY`

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web app to your project
4. Enable **Firestore Database**:
   - Go to **Build → Firestore Database**
   - Create database in production mode
5. Create a collection named `trips-ai`
6. Copy the configuration and add to `src/services/firebaseConfig.js`

---

## 📁 Project Structure

```
ai-trip-planner/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   └── data.jsx              # Static data (budget/traveler options)
│   ├── components/
│   │   ├── shared/
│   │   │   ├── Header.jsx        # Navigation header
│   │   │   ├── Hero.jsx          # Landing page hero
│   │   │   ├── HotelCard.jsx     # Hotel display card
│   │   │   ├── ActivityCard.jsx  # Activity display card
│   │   │   ├── Itinerary.jsx     # Day-by-day itinerary
│   │   │   ├── MyTripCard.jsx    # Saved trip card
│   │   │   └── LoginDialog.jsx   # Authentication modal
│   │   └── ui/                   # Radix UI components
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   ├── CreateTrip.jsx        # Trip generation form
│   │   ├── TripDetails.jsx       # Individual trip view
│   │   └── MyTrip.jsx            # User's saved trips
│   ├── services/
│   │   ├── aiModel.js            # Gemini AI integration
│   │   ├── authApi.js            # Google OAuth
│   │   ├── firebaseConfig.js     # Firebase setup
│   │   └── placePhotoApi.js      # Google Places integration
│   ├── lib/
│   │   └── utils.js              # Utility functions
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── .env.local                    # Environment variables (create this)
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎯 Usage

### Creating a Trip

1. **Navigate to Create Trip** - Click "Create Trip" or the + button
2. **Fill Trip Details**:
   - **Step 1**: Select destination using Google Places autocomplete
   - **Step 2**: Choose number of days (1-5) and budget (Budget, Moderate, Luxury)
   - **Step 3**: Select traveler type (Solo, Couple, Family, Friends)
3. **Generate Trip** - Click "Generate Trip" and wait for AI to create your itinerary
4. **View & Explore** - Your trip is automatically saved and displayed with full details

### Viewing Trips

- **My Trips** - Click "My Trips" in the header to see all generated trips
- **Trip Details** - Click any trip card to view:
  - Trip summary with destination, budget, and duration
  - 3 recommended hotels with details
  - Day-by-day itinerary with activities, timings, and costs

---

## 🔒 Security Considerations

⚠️ **Important**: Never commit sensitive information to version control

- Add `.env.local` to `.gitignore`
- Keep API keys secure and rotate them regularly
- Use environment-specific keys for development and production
- Implement Firebase security rules:

```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /trips-ai/{tripId} {
      allow read: if request.auth != null && 
                     resource.data.userEmail == request.auth.token.email;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && 
                               resource.data.userEmail == request.auth.token.email;
    }
  }
}
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: `Cannot find module '@google/generative-ai'`
```bash
Solution: npm install @google/generative-ai --legacy-peer-deps
```

**Issue**: Google OAuth error "invalid_client"
```
Solution: Verify your Client ID is correct and authorized origins are set
```

**Issue**: Gemini API 402 error (payment required)
```
Solution: API key quota exhausted. Create a new API key or wait for quota reset
```

**Issue**: Firebase permission denied
```
Solution: Check Firestore security rules and ensure user is authenticated
```

**Issue**: Places API not working
```
Solution: Ensure Places API is enabled in Google Cloud Console
```

---

## 📊 API Usage & Costs

### Free Tier Limits

- **Gemini API**: 15 requests per minute (RPM), 1500 per day
- **Google Places API**: $200 monthly credit
- **Firebase Firestore**: 50K reads, 20K writes per day

### Cost Optimization Tips

- Implement request caching
- Use retry logic with exponential backoff
- Monitor API usage in respective dashboards
- Consider rate limiting on frontend

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Environment Variables

Don't forget to set environment variables in your hosting platform:
- `VITE_GOOGLE_PLACES_API_KEY`
- `VITE_GEMINI_API_KEY`
- `VITE_GOOGLE_AUTH_CLIENT_ID`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Google Gemini AI for powerful language models
- Firebase for seamless backend services
- Radix UI for accessible components
- Tailwind CSS for beautiful styling
- React community for amazing tools and libraries

---

## 📧 Support

For support, email shrimankar16102004@gmail.com or open an issue in the repository.

---

Made with ❤️ using React and Google Gemini AI
