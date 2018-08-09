import { FETCH_SPACES } from './spacesActions';

const initialState = [
  {
    id: "001",
    name: "In5",
    description:
      "In5 is a platform that gives designers, entrepreneurs and professionals of all design, tech and media disciplines and career levels access to a comprehensive suite of benefits for promotion, talent development, business support in addition to workspace, facilities and equipment.",
    coords: { lat: 25.0359, lng: 55.1816 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Wifi", "Pet-friendly", "Good Music"]
  },
  {
    id: "002",
    name: "Impact Hub",
    description:
      "Impact Hub Dubai is one of UAE’s largest community of entrepreneurs, creatives and techies. ",
    coords: { lat: 25.2028, lng: 55.276 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  },
  {
    id: "003",
    name: "Nest",
    description:
      "NEST is one of the world’s first fully integrated co-working spaces within a worldwide branded hotel.",
    coords: { lat: 25.0974, lng: 55.1744 },
    mainImage: "https://source.unsplash.com/random/",
    tags: ["Free Coffee", "Pet-friendly", "Good Music"]
  }
];

const spacesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPACES:
      return state;
    default:
      return state;
  }
}

export default spacesReducer;