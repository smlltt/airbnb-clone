import {
  FaCampground,
  FaCity,
  FaFire,
  FaGem,
  FaGlassMartini,
  FaMountain,
  FaPalette,
  FaParachuteBox,
  FaSkiing,
  FaSpaceShuttle,
  FaTree,
  FaUmbrellaBeach,
  FaVolleyballBall,
} from "react-icons/fa";

export const REQUIRED_FIELD = "This field is required";

export const DEFAULT_ERROR = "Something went wrong";

export const CATEGORIES = [
  {
    label: "Beach",
    icon: FaUmbrellaBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing facilities!",
  },
  {
    label: "Sport",
    icon: FaVolleyballBall,
    description: "This property has sports facilities!",
  },
  {
    label: "Nature",
    icon: FaTree,
    description: "This property is close to a national park!",
  },
  {
    label: "Extreme sports",
    icon: FaParachuteBox,
    description: "This property has extreme sports facilities",
  },
  {
    label: "Mountains",
    icon: FaMountain,
    description: "This property is in the mountains!",
  },
  {
    label: "Trending",
    icon: FaFire,
    description: "This property is trending!",
  },
  {
    label: "OMG!",
    icon: FaSpaceShuttle,
    description: "This property will amaze you!",
  },
  {
    label: "City",
    icon: FaCity,
    description: "This property is in a big city!",
  },
  {
    label: "Creative spaces",
    icon: FaPalette,
    description: "This property will amaze you!",
  },
  {
    label: "Luxury",
    icon: FaGem,
    description: "This property will amaze you!",
  },
  {
    label: "Camping",
    icon: FaCampground,
    description: "This property will amaze you!",
  },
  {
    label: "Party",
    icon: FaGlassMartini,
    description: "This property will amaze you!",
  },
];
