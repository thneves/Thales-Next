import TriTracker from "../public/static/images/react-tri.png"
import F1Catalogue from "../public/static/images/react-f1.png";
import LetMeAsk from "../public/static/images/ts-let.png";
import Surfriends from "../public/static/images/rails-surf.png";
import LocalHero from "../public/static/images/js-local-hero.png";
import CityWeather from "../public/static/images/js-city-weather.png";
import WSL from "../public/static/images/ruby-wsl.png";
import TSH from "../public/static/images/html-css-tsh.png"; 

export const projects = [
  {
    title: "Tri Tracker",
    description:
      "Tracking app for triathlon activities. Records of distance, moving time, date and pace. Graphic chart of progress provided and authentication.",
    tags: ["react", "redux", "chartjs", "jest", "axios", "heroku"],
    live: "https://tri-tracker.herokuapp.com",
    source: "https://github.com/thneves/tri-tracker-client",
    image: "../public/static/images/react-tri.png",
  },
  {
    title: "F1 Catalogue",
    description:
      "Check Formula One information about seasons ranking, circuits, drivers and more with a modern dark UI. Fetching data from external API.",
    tags: ["react", "redux", "api", "ui-design", "axios", "netlify"],
    live: "https://f1catalogue.netlify.app/",
    source: "https://github.com/thneves/FormulaOne-Catalogue",
    image: "../public/static/images/react-f1.png",
  },
  {
    title: "Let Me Ask",
    description:
      "Platform for content creators create Q&A rooms for their audience in a democratic way. Hosted by Firebase.",
    tags: ["typescript", "react", "firebase", "google auth"],
    live: "https://let-me-ask-f210b.firebaseapp.com/",
    source: "https://github.com/thneves/Let-Me-Ask",
    image: "../public/static/images/ts-let.png"
  },
  {
    title: "Surfriends",
    description:
      "Social media web app based on twitter. Users can follow other users, create posts, and more.",
    tags: ["rails", "rspec", "cloudinary", "tdd", "heroku"],
    live: "https://surfriends.herokuapp.com",
    source: "https://github.com/thneves/SurFriends",
    image: "../public/static/images/rails-surf.png"
  },
  {
    title: "Local Hero",
    description:
      "2D game, shoot your enemies on the sea from your boat. Ranking available and sound options.",
    tags: ["javascript", "phaser 3", "jest", "shooter game"],
    live: "https://thneves.github.io/Local-Hero/",
    source: "https://github.com/thneves/Local-Hero",
    image: "../public/static/images/js-local-hero.png"
  },
  {
    title: "City Weather",
    description:
      "Find out the current weather, date and time, wind speed and humidity levels of any city, with a simple yet beautiful UI.",
    tags: ["javascript", "webpack", "api", "bootstrap"],
    live: "https://thneves.github.io/City-Weather/",
    source: "https://github.com/thneves/City-Weather",
    image: "../public/static/images/js-city-weather.png"
  },
  {
    title: "WSL Scraper",
    description:
      "Web scraper program created with Ruby. It checks for the next events and the current surfers on the top ranking from a chosen country. Info from World Surf League.",
    tags: ["ruby", "nokogiri", "web scraper", "api"],
    live: "https://replit.com/@ThalesNeves/WSL-scraper#bin/main.rb",
    source: "https://github.com/thneves/WSL-scraper",
    image: "../public/static/images/ruby-wsl.png"
  },
  {
    title: "The Search House",
    description:
      "Front end prototype of a search engine. Project created to practice the basics, responsiviness and design guidelines.",
    tags: ["html", "css", "plain css", "responsive"],
    live: "https://thneves.github.io/Capstone/",
    source: "https://github.com/thneves/Capstone",
    image: "../public/static/images/html-css-tsh.png" 
  },
];
