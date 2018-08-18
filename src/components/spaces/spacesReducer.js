import { FETCH_SPACES, CREATE_SPACE, UPDATE_DISTANCE_DATA } from './spacesActions';


const initialState = [
  {
    id: "001",
    name: "The Bureau Dubai",
    description:
      "The Bureau Dubai is a Co-Working space located in Souk Al Bahar Downtown Dubai. We offer a complete one stop solution to setting up your company in Dubai by either sponsoring or partnering with you, obtaining a license and all within our trendy furnished offices and facilities on affordable payment terms.",
    location: {
      address: "Sahaa Offices, Souk Al Bahar, Dubai, United Arab Emirates",
      coordinates: { lat: 25.1935, lng: 55.2767 }
    },
    contactInfo: {
      email: "info@coworking.ae",
      contactNumber: "+971 4 427 2100",
      siteLink: "http://www.thebureaudubai.com/"
    },
    amenities: ["Free WiFi", "Free Printer", "Free Coffee"],
    spaceHighlights: [
      {
        field: "highlight-0",
        value:
          "Great Location - Since it is located in Jumeirah, it has direct connectivity from the metro station."
      },
      {
        field: "highlight-1",
        value: "High Speed Wifi - Wifi speeds reaching upto 5GB"
      }
    ],
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Wifi", "Pet-friendly", "Good Music"]
  },
  {
    id: "002",
    name: "Dubai Technology Entrepreneur Centre",
    description:
      "Dubai Technology Entrepreneur Centre (Dtec) is a vibrant technology coworking space situated in the heart of Dubai. With more than 5000 sqm space Dtec is home to 800+ companies from more than 70 nationalities. Not just a co-working space Dtec is a one stop shop for starting your business. As Dtec is a government entity we can not only provide you with a desk to sit but also your visa and service license to allow you to start your business in the UAE.",
    location: {
      address:
        "TechnoHub 1 and 2, Dubai Silicon Oasis Authority, Dubai Silicon Oasis, Dubai, UAE",
      coordinates: { lat: 25.1216, lng: 55.3774 }
    },
    contactInfo: {
      email: "dtec@dso.ae",
      contactNumber: "+971 4 501 3905",
      siteLink: "https://dtec.ae/"
    },
    amenities: [
      "Personal Lockers",
      "Photocopier",
      "Printer",
      "Scanner",
      "Free Coffee",
      "Kitchen"
    ],
    spaceHighlights: [
      {
        field: "highlight-0",
        value:
          "Great Location - Since it is located in Jumeirah, it has direct connectivity from the metro station."
      },
      {
        field: "highlight-1",
        value: "High Speed Wifi - Wifi speeds reaching upto 10GB"
      }
    ],
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  },
  {
    id: "003",
    name: "Nest",
    description:
      "NEST is one of the world’s first fully integrated co-working spaces within a worldwide branded hotel.",
    location: {
      address: "",
      coordinates: { lat: 25.0974, lng: 55.1744 }
    },
    contactInfo: {
      email: "",
      contactNumber: "",
      siteLink: ""
    },
    amenities: ["Free WiFi", "Free Printer", "Free Coffee"],
    spaceHighlights: [
      {
        field: "highlight-0",
        value:
          "Great Location - Since it is located in Jumeirah, it has direct connectivity from the metro station."
      },
      {
        field: "highlight-1",
        value: "High Speed Wifi - Wifi speeds reaching upto 10GB"
      }
    ],
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  }
];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES:
      return state;
    case CREATE_SPACE:
      return [...state, action.payload];
    case UPDATE_DISTANCE_DATA:
      return action.payload; 
    default:
      return state;
  }
}

export default spacesReducer;