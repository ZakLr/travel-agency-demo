import dashboard from "../images/dashboard.png";
import memoryimg from "../images/memory.png";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/img1.webp";
import place2 from "../images/img2.webp";
import place3 from "../images/img3.webp";
import place4 from "../images/img4.webp";
import place5 from "../images/img5.jpg";
import place6 from "../images/img6.webp";
import place7 from "../images/img7.webp";
import place8 from "../images/img8.webp";
import place9 from "../images/img9.webp";
import place10 from "../images/img10.webp";
import place11 from "../images/Maya+Bay+Thailand.jpg"
import place12 from "../images/hallstatt-village-and-hallstatter-see-lake-in-royalty-free-image-1578000553.jpg"
import place13 from "../images/iStock-539167007.webp"
import place14 from "../images/lake-como-MOSTBEAUTIFUL0921-cb08f3beff1041e4beefc67b5e956b23.jpg"

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import youtube from "../images/youtube.svg";

import banner from "../images/banner.webp";

const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

const navlinks = [
  { link: "Home", id: "#home" },
  { link: "Values", id: "#memory" },
  { link: "Explore", id: "#explore" },
  { link: "Testimonials", id: "#testimonials" },
];

const hero = {
  title: "Explore the world with us",
  subtitle: "Then, Go Explore",
  text: "We provide you always your dream places. We always make our customer happy by providing many choices.",
  btn1: "Who We Are",
  btn2: "Reach Us",
  img: dashboard,
};

const memory = {
  title: "Sweet Memories",
  subtitle: "Come To Life Again",
  text: "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  img: memoryimg,
  experience: [
    { number: "10", title: "Year Experience" },
    { number: "400", title: "Year Collaboration" },
    { number: "30k+", title: "Happy Customer" },
  ],
};

const placesAPI = [
  {
    placeImg: place1,
    location: "Lahore",
    distance: "3.0 hour drive",
    price: "$150",
    duration: "1 hour",
    flightNumber: "LH123",
    airline: "PIA",
    description: "Lahore, the cultural capital of Pakistan, is known for its vibrant festivals, historical sites, and delectable food."
  },
  {
    placeImg: place2,
    location: "Faisalabad",
    distance: "2.5 hour drive",
    price: "$120",
    duration: "45 minutes",
    flightNumber: "FA456",
    airline: "AirBlue",
    description: "Faisalabad is a major industrial center in Pakistan, famous for its textile industry and lively bazaars."
  },
  {
    placeImg: place3,
    location: "Multan",
    distance: "4.7 hour drive",
    price: "$170",
    duration: "1.5 hours",
    flightNumber: "MT789",
    airline: "Serene Air",
    description: "Multan, known as the City of Saints, boasts numerous shrines and a rich history dating back to ancient times."
  },
  {
    placeImg: place4,
    location: "Rawalpindi",
    distance: "4 hour drive",
    price: "$130",
    duration: "1 hour",
    flightNumber: "RP101",
    airline: "PIA",
    description: "Rawalpindi, adjacent to Islamabad, is known for its bustling markets, historical landmarks, and vibrant street life."
  },
  {
    placeImg: place5,
    location: "Islamabad",
    distance: "4.9 hour drive",
    price: "$140",
    duration: "1.2 hours",
    flightNumber: "IS102",
    airline: "AirBlue",
    description: "Islamabad, the capital city of Pakistan, is known for its modern architecture, greenery, and scenic views."
  },
  {
    placeImg: place6,
    location: "Muree",
    distance: "4.5 hour drive",
    price: "$160",
    duration: "1.5 hours",
    flightNumber: "MR103",
    airline: "PIA",
    description: "Murree, a hill station near Islamabad, offers stunning views, cool weather, and a peaceful retreat from the city."
  },
  {
    placeImg: place7,
    location: "Nathia Gali",
    distance: "5.5 hour drive",
    price: "$180",
    duration: "1.7 hours",
    flightNumber: "NG104",
    airline: "Serene Air",
    description: "Nathia Gali is a popular tourist destination known for its hiking trails, natural beauty, and pleasant climate."
  },
  {
    placeImg: place8,
    location: "Ayubia Gali",
    distance: "5.1 hour drive",
    price: "$175",
    duration: "1.6 hours",
    flightNumber: "AG105",
    airline: "AirBlue",
    description: "Ayubia Gali, part of the Ayubia National Park, is famous for its lush green landscapes, wildlife, and hiking trails."
  },
  {
    placeImg: place9,
    location: "Bhurban",
    distance: "5.1 hour drive",
    price: "$165",
    duration: "1.5 hours",
    flightNumber: "BH106",
    airline: "PIA",
    description: "Bhurban is a small town known for its luxurious resorts, beautiful landscapes, and a serene environment."
  },
  {
    placeImg: place10,
    location: "Gilgit",
    distance: "5.1 hour drive",
    price: "$200",
    duration: "2 hours",
    flightNumber: "GG107",
    airline: "Serene Air",
    description: "Gilgit, located in the northern areas of Pakistan, is famous for its breathtaking landscapes, trekking opportunities, and cultural heritage."
  }
];

const testimonialsData = [
  {
    id: 1,
    text: "Our trip to Bali was absolutely unforgettable thanks to this travel agency. Everything was perfectly organized and the accommodations were top-notch.",
    name: "Sheryl Berge",
    role: "Traveler",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 2,
    text: "As a frequent traveler, I've used many agencies, but this one stands out. Their attention to detail and customer service are unmatched. Highly recommend!",
    name: "Leland Kiehn",
    role: "Frequent Traveler",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 3,
    text: "The custom itinerary they provided for our European tour was amazing. We saw so much and had such a great time without any stress.",
    name: "Peter Renolds",
    role: "Tourist",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];


const pricingapi = {
  title: "Choose The Plan That Suits You",
  text: "Many attractive offers by becomming a premium member",
  btn1: "Monthly",
  btn2: "Yearly",
  plans: [
    {
      planicon: standardicon,
      title: "Standard Membership",
      text: "Suitable for all users",
      plantype: "Free / Year",
      plancontent: [
        { iconbox: checkbox, text: "Find Popular Destination" },
        { iconbox: checkbox, text: "Priority Booking Schedule" },
        { iconbox: checkbox, text: "Daily Destination News" },
        { iconbox: uncheckbox, text: "Invite Friends Feature" },
        { iconbox: uncheckbox, text: "Limited Travel Stats" },
        { iconbox: uncheckbox, text: "Invite Friends Feature" },
        { iconbox: uncheckbox, text: "No Ads & Tax" },
      ],
      buttonText: "Get Free",
    },
    {
      planicon: preminumicon,
      title: "Preminum Membership",
      text: "Suitable for enthusiast travelers",
      plantype: "$60 / Year",
      plancontent: [
        { iconbox: checkbox, text: "Find Popular Destination" },
        { iconbox: checkbox, text: "Priority Booking Schedule" },
        { iconbox: checkbox, text: "Daily Destination News" },
        { iconbox: checkbox, text: "Invite Friends Feature" },
        { iconbox: checkbox, text: "Advanced Travel Stats" },
        { iconbox: checkbox, text: "Invite Friends Feature" },
        { iconbox: checkbox, text: "No Ads & Tax" },
      ],
      buttonText: "Get Started",
    },
  ],
};

const bannerAPI = {
  title: "The Greet Outdoors",
  text: "Whislist Curated By Travigo.",
  imgSrc: banner,
  btnText: "Explore More",
};

const footerAPI = {
  titles: [{ title: "About" }, { title: "Company" }, { title: "Support" }],
  links: [
    [
      { link: "About US" },
      { link: "Features" },
      { link: "News" },
      { link: "Menu" },
    ],
    [
      { link: "Why Travigo?" },
      { link: "Partner with Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Account" },
      { link: "Support Center" },
      { link: "Feedback" },
      { link: "Contact Us" },
      { link: "Accesbility" },
    ],
  ],
  sociallinks: [
    { icon: facebook },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const carouselPlaces = [
  {
    placeImg: place11,
    location: "Thailand",
    distance: "3.0 hour drive",
    price: "$450",
    duration: "6 hours",
    flightNumber: "TH123",
    airline: "Thai Airways",
    description: "Thailand is known for its tropical beaches, opulent royal palaces, ancient ruins, and ornate temples displaying figures of Buddha."
  },
  {
    placeImg: place12,
    location: "Austria",
    distance: "2.5 hour drive",
    price: "$380",
    duration: "5.5 hours",
    flightNumber: "AU456",
    airline: "Austrian Airlines",
    description: "Austria, a country rich in history, beautiful places, traditions and activities that are distinct to the area, is one of the most popular tourist destinations in Europe."
  },
  {
    placeImg: place13,
    location: "Italy",
    distance: "4.7 hour drive",
    price: "$420",
    duration: "7 hours",
    flightNumber: "IT789",
    airline: "Alitalia",
    description: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine."
  },
  {
    placeImg: place14,
    location: "Switzerland",
    distance: "4 hour drive",
    price: "$500",
    duration: "7.5 hours",
    flightNumber: "SW101",
    airline: "Swiss International Air Lines",
    description: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps."
  },
  {
    placeImg: place1,
    location: "Switzerland",
    distance: "4 hour drive",
    price: "$500",
    duration: "7.5 hours",
    flightNumber: "SW101",
    airline: "Swiss International Air Lines",
    description: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps."
  },
  {
    placeImg: place2,
    location: "France",
    distance: "2 hour drive",
    price: "$300",
    duration: "5 hours",
    flightNumber: "FR202",
    airline: "Air France",
    description: "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches."
  },
  {
    placeImg: place3,
    location: "Italy",
    distance: "3 hour drive",
    price: "$400",
    duration: "6 hours",
    flightNumber: "IT303",
    airline: "Alitalia",
    description: "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine."
  },
  {
    placeImg: place4,
    location: "Germany",
    distance: "5 hour drive",
    price: "$450",
    duration: "8 hours",
    flightNumber: "DE404",
    airline: "Lufthansa",
    description: "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches."
  },
  
];



export {
  brands,
  navlinks,
  hero,
  memory,
  placesAPI,
  pricingapi,
  bannerAPI,
  carouselPlaces,
  footerAPI,
  testimonialsData,
};
