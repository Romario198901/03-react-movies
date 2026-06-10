# React Movies

A modern React application for searching and discovering movies using The Movie Database (TMDB) API.

## Features

- 🔍 **Movie Search**: Search for movies by title in real-time
- 📱 **Responsive Design**: Mobile-friendly interface with CSS Modules
- ⚡ **Fast Loading**: Built with Vite for optimized performance
- 🎬 **Movie Details**: View detailed information about selected movies in a modal
- 🔔 **Notifications**: User-friendly toast notifications for feedback
- ✅ **Type-Safe**: Full TypeScript support for better code quality
- 🎨 **Modern Stack**: React 19 with latest development practices

## Tech Stack

- **React** 19.2.0 - UI library
- **TypeScript** ~5.9.3 - Type safety
- **Vite** 7.2.4 - Build tool and dev server
- **Axios** 1.13.2 - HTTP client for API requests
- **React Hot Toast** 2.6.0 - Notification system
- **ESLint** - Code quality and linting
- **Modern Normalize** - CSS normalization

## Project Structure

```
src/
├── components/
│   ├── App/              # Main application component
│   ├── SearchBar/        # Movie search input
│   ├── MovieGrid/        # Grid display of movies
│   ├── MovieModal/       # Movie details modal
│   ├── Loader/           # Loading spinner
│   └── ErrorMessage/     # Error display component
├── services/
│   └── movieService.ts   # TMDB API service
├── types/
│   └── movie.ts          # TypeScript types
└── main.tsx              # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- TMDB API key (get it from [themoviedb.org](https://www.themoviedb.org/settings/api))

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your TMDB API key:
   ```
   VITE_TMDB_KEY=your_api_key_here
   ```

### Running the Project

**Development Server**
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

**Build for Production**
```bash
npm run build
```
Compiles TypeScript and creates an optimized production build

**Preview Production Build**
```bash
npm run preview
```
Preview the production build locally

**Linting**
```bash
npm run lint
```
Check code quality with ESLint

## How to Use

1. **Start the development server** with `npm run dev`
2. **Enter a movie title** in the search bar
3. **Browse results** in the grid display
4. **Click a movie** to view detailed information in the modal
5. **Close the modal** to return to search results

## API Integration

The app uses The Movie Database (TMDB) API for movie data. The `movieService.ts` handles all API communication with proper error handling and loading states.

To get your API key:
1. Visit [themoviedb.org](https://www.themoviedb.org/)
2. Create an account and go to Account Settings
3. Navigate to API section
4. Generate an API key
5. Add it to your `.env.local` file as `VITE_TMDB_KEY`

## Code Quality

- ESLint configured for React and TypeScript
- TypeScript strict mode enabled
- Type-safe API responses
- Proper error handling throughout the app

## Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_TMDB_KEY` | Your TMDB API Bearer token |

## Browser Support

- Modern browsers supporting ES2020+
- Chrome, Firefox, Safari, Edge (latest versions)

## License

This project is part of the GoIt learning curriculum.

## Author

Created as a learning project for React and TypeScript development.
