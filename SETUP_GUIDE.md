# Red Bus Project - Setup & Improvement Guide

## 🎯 Project Overview

This is a clone of the Red Bus ticket booking platform with both Bus Booking and Bus Hire features. The project has been updated with modern UI/UX improvements and is configured for local development.

---

## ✨ Recent Improvements Made

### Frontend UI/UX Enhancements
1. **Modern Material-UI Theme** (`src/theme.js`)
   - Professional red and orange color scheme
   - Custom gradients for buttons and headers
   - Enhanced typography and spacing
   - Smooth animations and transitions

2. **Improved Components**
   - **Navbar**: Modern gradient background, sticky positioning, better spacing
   - **LandingPage**: Beautiful hero banner with animated form, responsive design
   - **SelectBus**: Enhanced filtering sidebar, card-based layout
   - **Payment Page**: Grid-based layout, better form organization
   - **Global Styles**: Added animations, scrollbar styling, utility classes

3. **Responsive Design**
   - Mobile-optimized layouts (768px, 480px breakpoints)
   - Touch-friendly button sizes
   - Flexible grid layouts

4. **Color Palette**
   - Primary: #c80000 (Red Bus Red)
   - Secondary: #f39c12 (Warm Orange)
   - Background: #f5f5f5 (Light Gray)
   - Text: #333333 (Dark Gray)

### Backend Configuration
- MongoDB connection configured
- All API routes properly set up
- Stripe payment integration ready
- CORS enabled for frontend communication

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB connection (already configured with cloud DB)

### Step 1: Install Dependencies

```bash
# Install backend dependencies
cd back-end-redbus
npm install

# Install frontend dependencies  
cd ../front-end-redbus
npm install
```

### Step 2: Configure Environment

The project is pre-configured with:
- **Frontend**: `front-end-redbus/.env` → Backend URL: `http://localhost:3020`
- **Backend**: Uses MongoDB cloud database (no local setup needed)

### Step 3: Run the Project

**Terminal 1 - Start Backend:**
```bash
cd back-end-redbus
npm start
```
Backend will run on `http://localhost:3020`

**Terminal 2 - Start Frontend:**
```bash
cd front-end-redbus
npm start
```
Frontend will run on `http://localhost:3000`

### Step 4: Access the Application

Open your browser and go to: **http://localhost:3000**

---

## 📱 Features

### Bus Booking
1. **Search Buses** - Filter by source, destination, and date
2. **View Buses** - See available buses with ratings and fares
3. **Seat Selection** - Interactive seat map
4. **Passenger Details** - Enter passenger information
5. **Payment** - Secure Stripe payment integration
6. **Booking History** - View all your bookings in profile

### Bus Hire
1. **Bus Hire Search** - Filter by dates and requirements
2. **Bus Selection** - Choose from available buses
3. **Booking & Payment** - Secure booking process
4. **Hire History** - Track all hired buses

### User Features
1. **Google Login** - Sign in with Google account
2. **Profile** - View and manage bookings
3. **Booking Management** - View trip details

---

## 🗄️ Database Structure

### Collections
1. **Routes** - Bus routes between cities
2. **Buses** - Bus information and schedules
3. **Bookings** - Bus ticket bookings
4. **Customers** - User profiles
5. **BusServices** - Bus hire services
6. **BookingHires** - Bus hire bookings

### Available Cities (Configured)
- Lucknow
- Faizabad
- Allahabad
- Delhi

---

## 🔧 API Endpoints

### Routes
- `GET /v1/api/routes` - Get all available routes
- `GET /v1/api/routes/:departure/:arrival/:date` - Get buses for a route

### Bookings
- `POST /v1/api/booking` - Create new booking
- `GET /v1/api/booking/:id` - Get customer bookings

### Customers
- `POST /v1/api/customers` - Create/get customer

### Bus Services (Hire)
- `GET /v1/api/busservice` - Get all bus services
- `POST /v1/api/busservice` - Create bus service
- `GET /v1/api/busservice/:id` - Get specific bus service
- `DELETE /v1/api/busservice/:id` - Delete bus service

### Bus Hire Bookings
- `POST /v1/api/bookingHire` - Create hire booking
- `GET /v1/api/bookingHire/:email` - Get hire bookings by email

### Payments
- `POST /v1/api/stripe-payments` - Process Stripe payment

---

## 📋 Payment Testing

**Test Card Details:**
- Card Number: `4242 4242 4242 4242`
- Expiry: `12/25`
- CVV: `123`
- ZIP: Any 5 digits

---

## 🎨 Styling System

### Color Scheme
- **Primary Red**: `#c80000` - Main actions and highlights
- **Light Red**: `#e74c3c` - Gradients and hover states
- **Dark Red**: `#a00000` - Darker interactions
- **Orange Accent**: `#f39c12` - Secondary actions
- **Light Gray**: `#f5f5f5` - Backgrounds
- **Dark Text**: `#333333` - Primary text
- **Gray Text**: `#666666` - Secondary text

### Component Spacing
- Small (xs): 8px
- Medium (sm): 12px
- Large (md): 16px
- Extra Large (lg): 24px

### Border Radius
- Input fields: 4px
- Cards: 8px
- Pills: 20px

---

## 🐛 Troubleshooting

### Frontend won't connect to backend
1. Ensure backend is running on port 3020
2. Check `.env` file: `REACT_APP_BACKEND_URL=http://localhost:3020`
3. Clear browser cache and restart frontend

### Backend connection errors
1. Verify MongoDB URL in `app.js`
2. Check internet connection for cloud database
3. Ensure CORS is enabled

### Port already in use
```bash
# Kill process using port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Kill process using port 3020 (Windows)
netstat -ano | findstr :3020
taskkill /PID <PID> /F
```

---

## 📁 Project Structure

```
redbus-master/
├── back-end-redbus/
│   ├── controllers/     # Route handlers
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── app.js           # Main server file
│   └── package.json
├── front-end-redbus/
│   ├── src/
│   │   ├── Components/  # React components
│   │   ├── Redux/       # State management
│   │   ├── theme.js     # Material-UI theme
│   │   ├── App.js       # Main component
│   │   └── index.js     # Entry point
│   ├── .env             # Configuration
│   └── package.json
└── README.md
```

---

## 🚀 Next Steps & Enhancements

### Recommended Improvements
1. **Add Loading States** - Show spinners during API calls
2. **Error Handling** - Better error messages and validation
3. **Authentication** - Implement proper JWT-based auth
4. **Unit Tests** - Add Jest and React Testing Library
5. **Performance** - Lazy load components, optimize images
6. **SEO** - Add meta tags and sitemap

### Backend Enhancements
1. Add request validation middleware
2. Implement error handling middleware
3. Add logging system
4. Set up environment variables properly
5. Add API documentation with Swagger

### Frontend Enhancements
1. Add form validation
2. Implement proper error boundaries
3. Add offline support (PWA)
4. Optimize bundle size
5. Add accessibility features

---

## 📞 Support

### Common Issues & Solutions

**Issue**: React development server won't start
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

**Issue**: "Cannot find module" errors
**Solution**: Ensure all dependencies are installed with `npm install`

**Issue**: Styling not appearing
**Solution**: Ensure CSS modules are being imported correctly in components

---

## 📝 Notes

- The project uses Redux for state management
- Material-UI components are styled with a custom theme
- CSS Modules are used for component-specific styling
- Responsive design uses CSS Grid and Flexbox
- Environment variables are used for backend URL configuration

---

## 🎉 You're All Set!

The project is now optimized with modern UI/UX and ready for development. 

**Happy coding! 🚀**

For more information, check individual component files and the main README.md in the project root.
