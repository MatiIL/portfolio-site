export const projectsArray = [
  {
    key: 1,
    imageSrc: "../payNroll.png",
    name: "payNroll",
    shortDescription:
      "Fantasy Basketball gaming platform, used by me and 10 other league members.",
    codeImage: "../payNroll-code.png",
    fullInfo: [
      {
        id: 1,
        title:"Project Overview",
        text: "payNroll is a fantasy NBA keepers league that I invented and created its rules. It uses the Yahoo Fantasy API to bring data from the platform on which the league is actually being played, to give users important information for their long-term planning.",
      },
      {
        id: 2,
        title:"User Manual",
        text: "There's a quick-guide link via the homepage, and a fully-detailed guide page via the navigation bar. On the 'example roster & payroll' page, hover over a player's salary number in 2024/25 for extra info. You can try the AI-powered Team Name Generator on the signup modal, by entering this signup code: payNroll2023/24!",
      },
      {
        id: 3,
        title:"Code Snapshot Explained",
        text: "Here the user's inputs from the name-form component are used to build prompts for OpenAI's Product Name Generator. The content for the 'System Message' is: 'You will be provided with name description and seed words to generate creative NBA fantasy team names'.",
      }
    ],
    technologicalStack: [
      { key: 1, name: "Angular (v16.1)" },
      { key: 2, name: "Apollo Client" },
      { key: 3, name: "GraphQL" },
      { key: 4, name: "NestJS" },
      { key: 5, name: "MongoDB" },
      { key: 6, name: "Bootstrap" },
      { key: 7, name: "Angular Material" },
    ],
    siteUrl: "https://pay-n-roll.vercel.app/",
    githubRepo: "https://github.com/MatiIL/payNRoll",
  },
  {
    key: 2,
    imageSrc: "../weather-app.png",
    name: "Weather App",
    shortDescription:
      "A web app for fetching current weather and daily forecast, based on the AccuWeather API",
    codeImage: "../weather-app-code.png",
    fullInfo: [
      {
        id: 1,
        title:"Project Overview",
        text: "This app fetches current weather data (from the AccuWeather API), along with a 5-days forecast, for the user's current or searched location. The user can save a city to favorites, but only locally for a given session, since I did not create a server and a database for the purpose of this exercise.",
      },
      {
        id: 2,
        title:"User Manual",
        text: "Click on the search bar for either allowing access to your current location, or manually typing your desired location. You can change the temparature units from Celsius to Fahrenheit and vice versa. Once you save a city to favorites, you can navigate to the favorites page and click on any city to recieve its current weather and 5-day forecast.",
      },
      {
        id: 3,
        title:"Code Snapshot Explained",
        text: "In order to use the Geolocation API, that is, prompt the users to grant the app permission to their location, most browsers require that the request would follow some kind of user's gesture. It is bad practice anyway to present such a request just as the app renders, since it makes users suspicious. The useEffect hook on lines 30 to 44 depends on such 'user gesture' for the execution of the conditional fetchLocationDetails function that it contains. userGesture is a boolean initialized as 'false' in one of the app's wrapping contexts. What sets its value to 'true' is the user's click on the search field.",
      }
    ],
    technologicalStack: [
      { key: 1, name: "React" },
      { key: 2, name: "Redux" },
      { key: 3, name: "TypeScript" },
      { key: 4, name: "Bootstrap" },
    ],
    siteUrl: "https://mati-weather-app-matiil.vercel.app/",
    githubRepo: "https://github.com/MatiIL/Weather-App",
  },
  {
    key: 3,
    imageSrc: "../gallery-app.png",
    name: "Infinity Gallery",
    shortDescription:
      "a React web application that fetches & displays a photo gallery in a responsive grid layout",
      codeImage: "../gallery-code.png",
      fullInfo: [
        {
          id: 1,
          title:"Project Overview",
          text: "The goal of this exercise was to build an app that fetches a significant amount of photos from an API and displays them in a responsive grid layout. Consider this my attempt to understand Instagram under the hood :)",
        },
        {
          id: 2,
          title:"User Manual",
          text: "You can click any photo thumbnail to select it, or select all photos currently rendered on the page via the 'Edit' toggle button on the navigation bar, from which it's also possible to delete the selected photo(s), unselect them, or to add a new one. For the latter operation, paste a link to an online photo.",
        },
        {
          id: 3,
          title:"Code Snapshot Explained",
          text: "Lines 199 to 125 demonstrate the use of useMemo. This React hook is used to memoize the result of a function and recompute it only if one of the dependencies has changed. This is useful for computationally expensive functions that produce the same result for the same inputs. The memoized function in the code maps over the images array, extracting the src, width, and height properties for each image and creating a new array of objects. This expensive operation of mapping over the images array and creating a new array of objects only happens when the images array changes.",
        }
      ],
    technologicalStack: [
      { key: 1, name: "React" },
      { key: 2, name: "TypeScript" },
      { key: 3, name: "Bootstrap" },
    ],
    siteUrl: "https://photo-gallery-app-swart.vercel.app/",
    githubRepo: "https://github.com/MatiIL/Photo-Gallery-App",
  },
  {
    key: 4,
    imageSrc: "../pet-app.png",
    name: "Pet Adoption Center",
    shortDescription:
      "My first-ever fullstack and deployed project! developed during ITC's Fullstack Dev Bootcamp",
      codeImage: "../pet-app-code.png",
      fullInfo: [
        {
          id: 1,
          title:"Project Overview",
          text: "Developed during the later stage of Israel Tech Challenge Fullstack Development Bootcamp, this app is an exercise in building a server with various endpoints, connecting it to a database, and implementing the incoming data on the client-side along with multiple UI functionalities.",
        },
        {
          id: 2,
          title:"User Manual",
          text: "You can search for pets without signing up first, but you'll need to in order to check out the 'foster, adopt & return pet' functionalities, and for saving pets to favorites. To try the admin functionalities, log in with 'adming@yahoo.com' and 'petappadmin2024'.",
        },
        {
          id: 3,
          title:"Code Snapshot Explained",
          text: "Lines 92 to 111 show an important middleware for the 'edit user' route. If the user's email was changed while updating his profile settings, the middleware checks whether such an email already exists in the database.",
        }
      ],
    technologicalStack: [
      { key: 1, name: "React" },
      { key: 2, name: "Bootstrap" },
      { key: 3, name: "NodeJS" },
      { key: 4, name: "Express.js" },
      { key: 5, name: "MongoDB" },
    ],
    siteUrl: "https://pet-adoption-client.onrender.com/",
    githubRepo: "https://github.com/MatiIL/Pet-Adoption-Project-FE",
  },
];
