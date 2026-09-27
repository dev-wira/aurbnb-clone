export type Photo = { src: string; alt: string };

export const heroImages: Photo[] = [
  {
    src: "/images/listings/mirashya-ug10/living-room-2/01.png",
    alt: "Living room and jacuzzi",
  },
  {
    src: "/images/listings/mirashya-ug10/living-room-2/02.png",
    alt: "Jacuzzi",
  },
  {
    src: "/images/listings/mirashya-ug10/living-room-2/03.png",
    alt: "Living room seating",
  },
  { src: "/images/listings/mirashya-ug10/bedroom/01.png", alt: "Bedroom" },
  { src: "/images/listings/mirashya-ug10/exterior/01.png", alt: "Exterior" },
];

export type TourCategory = {
  title: string;
  tags?: string;
  hero: Photo;
  sub: Photo[];
};

export const tourCategories: TourCategory[] = [
  {
    title: "Living room 1",
    tags: "Sofa · Air conditioning · Ceiling fan · TV",
    hero: {
      src: "/images/listings/mirashya-ug10/living-room-1/01.png",
      alt: "Living room 1",
    },
    sub: [
      {
        src: "/images/listings/mirashya-ug10/living-room-1/02.png",
        alt: "Living room 1",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-1/03.png",
        alt: "Living room 1",
      },
    ],
  },
  {
    title: "Living room 2",
    tags: "Ceiling fan · Hot tub",
    hero: {
      src: "/images/listings/mirashya-ug10/living-room-2/01.png",
      alt: "Living room 2",
    },
    sub: [
      {
        src: "/images/listings/mirashya-ug10/living-room-2/02.png",
        alt: "Living room 2",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-2/03.png",
        alt: "Living room 2",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-2/04.png",
        alt: "Living room 2",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-2/05.png",
        alt: "Living room 2",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-2/06.png",
        alt: "Living room 2",
      },
      {
        src: "/images/listings/mirashya-ug10/living-room-2/07.png",
        alt: "Living room 2",
      },
    ],
  },
  {
    title: "Full kitchen",
    tags: "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    hero: {
      src: "/images/listings/mirashya-ug10/kitchen/01.png",
      alt: "Full kitchen",
    },
    sub: [
      {
        src: "/images/listings/mirashya-ug10/kitchen/02.png",
        alt: "Full kitchen",
      },
    ],
  },
  {
    title: "Bedroom",
    tags: "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    hero: {
      src: "/images/listings/mirashya-ug10/bedroom/01.png",
      alt: "Bedroom",
    },
    sub: [
      { src: "/images/listings/mirashya-ug10/bedroom/02.png", alt: "Bedroom" },
      { src: "/images/listings/mirashya-ug10/bedroom/03.png", alt: "Bedroom" },
      { src: "/images/listings/mirashya-ug10/bedroom/04.png", alt: "Bedroom" },
      { src: "/images/listings/mirashya-ug10/bedroom/05.png", alt: "Bedroom" },
      { src: "/images/listings/mirashya-ug10/bedroom/06.png", alt: "Bedroom" },
      { src: "/images/listings/mirashya-ug10/bedroom/07.png", alt: "Bedroom" },
    ],
  },
  {
    title: "Full bathroom",
    tags: "Hairdryer · Hot water · Shampoo · Shower gel",
    hero: {
      src: "/images/listings/mirashya-ug10/bathroom/01.png",
      alt: "Full bathroom",
    },
    sub: [],
  },
  {
    title: "Gym",
    tags: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    hero: { src: "/images/listings/mirashya-ug10/gym/01.png", alt: "Gym" },
    sub: [
      { src: "/images/listings/mirashya-ug10/gym/02.png", alt: "Gym" },
      { src: "/images/listings/mirashya-ug10/gym/03.png", alt: "Gym" },
      { src: "/images/listings/mirashya-ug10/gym/04.png", alt: "Gym" },
      { src: "/images/listings/mirashya-ug10/gym/05.png", alt: "Gym" },
    ],
  },
  {
    title: "Exterior",
    hero: {
      src: "/images/listings/mirashya-ug10/exterior/01.png",
      alt: "Exterior",
    },
    sub: [
      {
        src: "/images/listings/mirashya-ug10/exterior/02.png",
        alt: "Exterior",
      },
      {
        src: "/images/listings/mirashya-ug10/exterior/03.png",
        alt: "Exterior",
      },
      {
        src: "/images/listings/mirashya-ug10/exterior/04.png",
        alt: "Exterior",
      },
      {
        src: "/images/listings/mirashya-ug10/exterior/05.png",
        alt: "Exterior",
      },
    ],
  },
  {
    title: "Pool",
    tags: "Pool",
    hero: { src: "/images/listings/mirashya-ug10/pool/01.png", alt: "Pool" },
    sub: [
      { src: "/images/listings/mirashya-ug10/pool/02.png", alt: "Pool" },
      { src: "/images/listings/mirashya-ug10/pool/03.png", alt: "Pool" },
    ],
  },
  {
    title: "Additional photos",
    hero: {
      src: "/images/listings/mirashya-ug10/additional-photos/01.png",
      alt: "Additional photos",
    },
    sub: [
      {
        src: "/images/listings/mirashya-ug10/additional-photos/02.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/03.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/04.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/05.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/06.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/07.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/08.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/09.png",
        alt: "Additional photos",
      },
      {
        src: "/images/listings/mirashya-ug10/additional-photos/10.png",
        alt: "Additional photos",
      },
    ],
  },
];

export const allPhotos: (Photo & { title: string })[] = tourCategories.flatMap(
  (c) => [
    { ...c.hero, title: c.title },
    ...c.sub.map((s) => ({ ...s, title: c.title })),
  ],
);

export const highlights = [
  {
    icon: "tent",
    title: "Outdoor entertainment",
    body: "The pool and alfresco dining are great for summer trips.",
  },
  {
    icon: "fan",
    title: "Designed for staying cool",
    body: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    icon: "door",
    title: "Self check-in",
    body: "You can check in with the building staff.",
  },
];

export const amenities: { icon: string; label: string; available: boolean }[] =
  [
    { icon: "kitchen", label: "Kitchen", available: true },
    { icon: "desk", label: "Dedicated workspace", available: true },
    { icon: "pool", label: "Pool", available: true },
    { icon: "pets", label: "Pets allowed", available: true },
    { icon: "co", label: "Carbon monoxide alarm", available: false },
    { icon: "wifi", label: "Wifi", available: true },
    { icon: "car", label: "Free parking on premises", available: true },
    { icon: "hottub", label: "Hot tub", available: true },
    {
      icon: "camera",
      label: "Exterior security cameras on property",
      available: true,
    },
    { icon: "smoke", label: "Smoke alarm", available: false },
  ];

export const amenityGroups = [
  {
    title: "Bathroom",
    items: [
      { icon: "hairdryer", label: "Hairdryer" },
      { icon: "cleaning", label: "Cleaning products" },
      { icon: "shampoo", label: "Shampoo" },
      { icon: "hot-water", label: "Hot water" },
      { icon: "shower", label: "Shower gel" },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { icon: "washer", label: "Washing machine" },
      { icon: "hanger", label: "Hangers" },
      { icon: "bed", label: "Bed linen" },
      { icon: "blinds", label: "Room-darkening blinds" },
      { icon: "iron", label: "Iron" },
      { icon: "storage", label: "Clothes storage" },
      { icon: "cot", label: "Cot" },
    ],
  },
  { title: "Entertainment", items: [{ icon: "tv", label: "TV" }] },
  { title: "Family", items: [{ icon: "cot", label: "Cot" }] },
  {
    title: "Heating and cooling",
    items: [
      { icon: "air-conditioning", label: "Air conditioning" },
      { icon: "fan", label: "Ceiling fan" },
    ],
  },
  {
    title: "Home safety",
    items: [
      { icon: "camera", label: "Exterior security cameras on property" },
      { icon: "co", label: "Carbon monoxide alarm", available: false },
      { icon: "smoke", label: "Smoke alarm", available: false },
    ],
  },
  {
    title: "Internet and office",
    items: [
      { icon: "wifi", label: "Wifi" },
      { icon: "desk", label: "Dedicated workspace" },
    ],
  },
  {
    title: "Kitchen and dining",
    items: [
      { icon: "kitchen", label: "Kitchen" },
      { icon: "fridge", label: "Fridge" },
      { icon: "freezer", label: "Freezer" },
      { icon: "microwave", label: "Microwave" },
      { icon: "cooking", label: "Cooking basics" },
      { icon: "cutlery", label: "Crockery and cutlery" },
      { icon: "kettle", label: "Kettle" },
      { icon: "coffee", label: "Coffee" },
      { icon: "wine", label: "Wine glasses" },
      { icon: "toaster", label: "Toaster" },
      { icon: "blender", label: "Blender" },
      { icon: "cooker", label: "Cooker" },
    ],
  },
  {
    title: "Location features",
    items: [{ icon: "entrance", label: "Private entrance" }],
  },
  {
    title: "Outdoor",
    items: [
      { icon: "patio", label: "Patio or balcony" },
      { icon: "dining", label: "Outdoor dining area" },
    ],
  },
  {
    title: "Parking and facilities",
    items: [
      { icon: "car", label: "Free parking on premises" },
      { icon: "pool", label: "Pool" },
      { icon: "hottub", label: "Hot tub" },
      { icon: "gym", label: "Gym" },
    ],
  },
  {
    title: "Services",
    items: [
      { icon: "pets", label: "Pets allowed" },
      { icon: "cleaning", label: "Cleaning available during stay" },
      { icon: "long-stay", label: "Long-term stays allowed" },
      { icon: "self-check-in", label: "Self check-in" },
    ],
  },
];

export const ratingBreakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 0.5 },
  { stars: 1, pct: 0.5 },
];

export const ratingCategories = [
  { key: "Cleanliness", icon: "spray", value: 5.0 },
  { key: "Accuracy", icon: "check", value: 5.0 },
  { key: "Check-in", icon: "key", value: 5.0 },
  { key: "Communication", icon: "chat", value: 5.0 },
  { key: "Location", icon: "map", value: 4.8 },
  { key: "Value", icon: "tag", value: 4.8 },
];

export type Review = {
  name: string;
  tenure: string;
  stars: number;
  date: string;
  text: string;
  long?: boolean;
  src?: string;
  avatarColor?: string;
  avatarLock?: number;
};

export const reviews: Review[] = [
  {
    name: "Amit",
    tenure: "2 months on Airbnb",
    stars: 5,
    date: "1 week ago",
    text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
    avatarColor: "#f5c56b",
  },
  {
    name: "Aheesh",
    tenure: "3 years on Airbnb",
    stars: 5,
    date: "2 weeks ago",
    text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    long: true,
    src: "/images/reviews/aheesh.jpg",
    avatarLock: 201,
  },
  {
    name: "Samiksha",
    tenure: "8 months on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "the host nitish was really great help",
    src: "/images/reviews/samiksha.jpg",
    avatarLock: 202,
  },
  {
    name: "Vedant",
    tenure: "4 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    long: true,
    avatarColor: "#c9b8f0",
  },
  {
    name: "Vaibhav S",
    tenure: "3 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "Great great experience living out there , can't expect more , will always look for it in the future and will recommend my friends too.",
    src: "/images/reviews/vaibhav-s.jpg",
    avatarLock: 203,
  },
  {
    name: "Mohd",
    tenure: "5 years on Airbnb",
    stars: 5,
    date: "May 2026",
    text: "Great place. Exactly as described in the listing.",
    avatarLock: 204,
  },
];

export const coHosts: {
  name: string;
  src?: string;
  lock?: number;
  initial?: string;
  color?: string;
}[] = [
  {
    name: "Sharath",
    src: "/images/hosts/co-hosts/sharath.jpg",
  },
  {
    name: "Aman Dev Pahwa",
    src: "/images/hosts/co-hosts/aman-dev-pahwa.jpg",
  },
  {
    name: "Maria Karen Priyanka",
    src: "/images/hosts/co-hosts/maria-karen-priyanka.jpg",
  },
  { name: "Simran", src: "/images/hosts/co-hosts/simran.jpg" },
  { name: "Pallavi", src: "/images/hosts/co-hosts/pallavi.jpg" },
  { name: "Sanyukta", src: "/images/hosts/co-hosts/sanyukta.jpg" },
  { name: "Shruti", initial: "S", color: "#f4c6d1" },
  { name: "Amisha", initial: "A", color: "#c9d9f4" },
];

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  subtitle: "Entire serviced apartment in Candolim, India",
  guestsInfo: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
  price: 28499,
  nights: 5,
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guestsSelected: "2 guests",
  cancellationDate: "17 October",
  host: {
    name: "Mirashya Homes",
    tenure: "2 years hosting",
    avatarLock: 210,
    reviews: 1463,
    rating: 4.68,
    yearsHosting: 2,
    bornDecade: "Born in the 80s",
    school: "Where I went to school: NICMAR GOA",
    responseRate: "Response rate: 100%",
    responseTime: "Responds within an hour",
  },
  description:
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴",
  location: "Candolim, Goa, India",
  neighbourhoodHighlight:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
  thingsToKnow: {
    cancellation:
      "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.",
    houseRules: [
      "Check-in after 2:00 pm",
      "Checkout before 11:00 am",
      "3 guests maximum",
    ],
    safety: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
};
