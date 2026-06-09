const serviceImages = {
  hairCut: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
  hairSpa: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
  facial: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  massage: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1",
  beardTrim: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186",
  hairColor: "https://images.unsplash.com/photo-1560869713-da86a9ec94a4",
  keratin: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
  wash: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  cleanup: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
  threading: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  waxing: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4"
};


const salons = [
  {
    id: 1,
    name: "Velvet Luxe Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
    location: "Anna Nagar",
    rating: 4.9,
  services: [
  {
    id: 1,
    name: "Hair Cut",
    price: 500,
    image: serviceImages.hairCut
  },
  {
    id: 2,
    name: "Hair Spa",
    price: 1500,
    image: serviceImages.hairSpa
  },
  {
    id: 3,
    name: "Facial",
    price: 1200,
    image: serviceImages.facial
  },
  {
    id: 4,
    name: "Massage",
    price: 1800,
    image: serviceImages.massage
  },
  {
    id: 5,
    name: "Beard Trim",
    price: 300,
    image: serviceImages.beardTrim
  }
]
  },
  {
    id: 2,
    name: "Royal Crown Salon",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
    location: "T Nagar",
    rating: 4.8,
    services: [
  {
    id: 1,
    name: "Hair Color",
    price: 2000,
    image: serviceImages.hairColor

  },
  {
    id: 2,
    name: "Keratin",
    price: 3500,
    image: serviceImages.keratin
  },
  {
    id: 3,
    name: "Spa",
    price: 1600,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Hair Cut",
    price: 400,
    image: serviceImages.hairCut
  },
  {
    id: 5,
    name: "Wash",
    price: 250,
    image: serviceImages.wash
  }
]
  },
  {
    id: 3,
    name: "Glow Beauty Lounge",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    location: "Velachery",
    rating: 4.7,
services: [
  {
    id: 1,
    name: "Facial",
    price: 1000,
    image: serviceImages.facial
  },
  {
    id: 2,
    name: "Cleanup",
    price: 900,
    image: serviceImages.cleanup
  },
  {
    id: 3,
    name: "Hair Spa",
    price: 1400,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Threading",
    price: 200,
    image: serviceImages.threading
  },
  {
    id: 5,
    name: "Waxing",
    price: 800,
    image: serviceImages.waxing
  }
]
  },

  {
    id: 4,
    name: "Elite Style Studio",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f",
    location: "Adyar",
    rating: 4.6,
    services: [
  {
    id: 1,
    name: "Hair Cut",
    price: 450,
    image: serviceImages.hairCut
  },
  {
    id: 2,
    name: "Beard Style",
    price: 300,
    image: serviceImages.beardTrim
  },
  {
    id: 3,
    name: "Spa",
    price: 1300,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Hair Wash",
    price: 200,
    image: serviceImages.wash
  },
  {
    id: 5,
    name: "Facial",
    price: 1100,
    image: serviceImages.facial
  }
]
  },

  {
    id: 5,
    name: "Diamond Hair Studio",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
    location: "OMR",
    rating: 4.8,
  services: [
  {
    id: 1,
    name: "Keratin",
    price: 3000,
    image: serviceImages.keratin
  },
  {
    id: 2,
    name: "Hair Spa",
    price: 1500,
    image: serviceImages.hairSpa
  },
  {
    id: 3,
    name: "Hair Cut",
    price: 500,
    image: serviceImages.hairCut
  },
  {
    id: 4,
    name: "Beard Trim",
    price: 300,
    image: serviceImages.beardTrim
  },
  {
    id: 5,
    name: "Wash",
    price: 250,
    image: serviceImages.wash
  }
]
  },

  {
    id: 6,
    name: "Urban Glow Salon",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250",
    location: "Kodambakkam",
    rating: 4.5,
   services: [
  {
    id: 1,
    name: "Hair Cut",
    price: 400,
    image: serviceImages.hairCut
  },
  {
    id: 2,
    name: "Spa",
    price: 1200,
    image: serviceImages.hairSpa
  },
  {
    id: 3,
    name: "Cleanup",
    price: 900,
    image: serviceImages.cleanup
  },
  {
    id: 4,
    name: "Beard Trim",
    price: 250,
    image: serviceImages.beardTrim
  },
  {
    id: 5,
    name: "Wash",
    price: 200,
    image: serviceImages.wash
  }
]
  },

  {
    id: 7,
    name: "Silk Touch Spa",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    location: "Porur",
    rating: 4.9,
    services: [
  {
    id: 1,
    name: "Luxury Facial",
    price: 2500,
    image: serviceImages.facial
  },
  {
    id: 2,
    name: "Massage",
    price: 2000,
    image: serviceImages.massage
  },
  {
    id: 3,
    name: "Hair Spa",
    price: 1500,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Hair Cut",
    price: 500,
    image: serviceImages.hairCut
  },
  {
    id: 5,
    name: "Wash",
    price: 250,
    image: serviceImages.wash
  }
]
  },

  {
    id: 8,
    name: "Nova Beauty Studio",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388",
    location: "Guindy",
    rating: 4.7,
    services: [
  {
    id: 1,
    name: "Skin Glow",
    price: 1800,
    image: serviceImages.facial
  },
  {
    id: 2,
    name: "Facial",
    price: 1200,
    image: serviceImages.facial
  },
  {
    id: 3,
    name: "Hair Cut",
    price: 400,
    image: serviceImages.hairCut
  },
  {
    id: 4,
    name: "Threading",
    price: 150,
    image: serviceImages.threading
  },
  {
    id: 5,
    name: "Cleanup",
    price: 900,
    image: serviceImages.cleanup
  }
]
  },

  {
    id: 9,
    name: "Platinum Salon",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
    location: "Perungudi",
    rating: 4.6,
 services: [
  {
    id: 1,
    name: "Hair Styling",
    price: 800,
    image: serviceImages.hairCut
  },
  {
    id: 2,
    name: "Spa",
    price: 1400,
    image: serviceImages.hairSpa
  },
  {
    id: 3,
    name: "Hair Cut",
    price: 450,
    image: serviceImages.hairCut
  },
  {
    id: 4,
    name: "Wash",
    price: 200,
    image: serviceImages.wash
  },
  {
    id: 5,
    name: "Beard Trim",
    price: 300,
    image: serviceImages.beardTrim
  }
]
  },

  {
    id: 10,
    name: "Aura Luxury Salon",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948",
    location: "Tambaram",
    rating: 4.8,
    services: [
  {
    id: 1,
    name: "Keratin",
    price: 3200,
    image: serviceImages.keratin
  },
  {
    id: 2,
    name: "Facial",
    price: 1500,
    image: serviceImages.facial
  },
  {
    id: 3,
    name: "Hair Spa",
    price: 1400,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Hair Cut",
    price: 500,
    image: serviceImages.hairCut
  },
  {
    id: 5,
    name: "Wash",
    price: 250,
    image: serviceImages.wash
  }
]
  },

  {
    id: 11,
    name: "Royal Elegance Spa",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    location: "Nungambakkam",
    rating: 4.9,
  services: [
  {
    id: 1,
    name: "Premium Facial",
    price: 3000,
    image: serviceImages.facial
  },
  {
    id: 2,
    name: "Massage",
    price: 2500,
    image: serviceImages.massage
  },
  {
    id: 3,
    name: "Hair Spa",
    price: 1600,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Hair Cut",
    price: 500,
    image: serviceImages.hairCut
  },
  {
    id: 5,
    name: "Beard Trim",
    price: 300,
    image: serviceImages.beardTrim
  }
]
  },

  {
    id: 12,
    name: "Grand Luxe Studio",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
    location: "Sholinganallur",
    rating: 4.8,
 services: [
  {
    id: 1,
    name: "Hair Styling",
    price: 900,
    image: serviceImages.hairCut
  },
  {
    id: 2,
    name: "Keratin",
    price: 3500,
    image: serviceImages.keratin
  },
  {
    id: 3,
    name: "Spa",
    price: 1500,
    image: serviceImages.hairSpa
  },
  {
    id: 4,
    name: "Facial",
    price: 2000,
    image: serviceImages.facial
  },
  {
    id: 5,
    name: "Wash",
    price: 250,
    image: serviceImages.wash
  }
]
  }
];

export default salons;