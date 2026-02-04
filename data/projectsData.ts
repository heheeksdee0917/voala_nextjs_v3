export interface Project {
  id: string;
  name: string;
  description: string;
  overview?: string;
  location: string;
  type: 'commercial' | 'residential';
  image: string;
  imageAlt?: string;
  category: string;
  year: string;
  size: string;
  galleryImages: Array<{
    src: string;
  }>;
}

export const projectsData: Project[] = [
  //Aria - The Bear House
  {
    id: 'the-bear-house',
    name: 'The BEAR HOUSE',
    description: 'Bold. Dark. Unforgettable.',
    location: 'Aria Luxury Residence, KLCC',
    type: 'residential',
    image: '/Voala/ProjectSource/Award-Winning-Projects/Aria/AriaCoverPhoto.avif',
    imageAlt: 'The Bear House - Award winning residential project',
    category: 'Award-Winning',
    year: '2022',
    size: '1,502 sq ft',
    overview: 'Unapologetically bold, <b>The Bear House</b> is a moody masterpiece designed for the modern collector. Cloaked in rich shades of black, this home defies convention — wrapping its inhabitants in a cocoon of sophistication, intimacy, and edge.<br /><br />Inside, a curated universe of <b>Bearbricks and luxury art toys</b> takes centre stage, each piece adding personality, playfulness, and a subtle sense of rebellion. Every corner feels like a gallery, yet every room is built to be lived in — blending style and comfort in perfect balance.<br /><br />It\'s not just a home — it\'s a statement. A celebration of individuality, design freedom, and heartwork that\'s anything but ordinary.',
    galleryImages: [
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/1.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/2.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/3.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/4.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/5.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/6.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/7.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/8.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/9.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/10.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/11.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/12.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/13.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/14.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/15.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/16.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/Aria/17.avif' }
    ]
  },
  //The Edge
  {
    id: 'the-edge',
    name: 'The EDGE',
    description: 'Modern Zen in the Heart of KL.',
    location: 'The Edge OF U-Thant, Taman U-Thant',
    type: 'residential',
    image: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/TheEdgeCoverPhoto.avif',
    imageAlt: 'The Edge - Modern Zen residential project',
    category: 'Award-Winning',
    year: '2022',
    size: '5,640 sq ft',
    overview: 'Tucked within one of the city\'s most exclusive enclaves, The <b>Edge of U-Thant</b> redefines semi-detached living with a quiet confidence. This serene sanctuary marries the clean lines of modern design with the calming philosophy of Zen — offering a refined escape in the midst of Kuala Lumpur\'s urban rhythm.<br /><br /> Every space within this home is thoughtfully curated to evoke balance, clarity, and calm. Natural materials, soft lighting, and minimalist aesthetics create an atmosphere where every detail serves a purpose — and every moment feels intentional.',
    galleryImages: [
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/1.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/2.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/3.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/4.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/5.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/6.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/7.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/8.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/9.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/10.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/11.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/12.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/13.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/14.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/15.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/17.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/18.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/19.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/20.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/21.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/22.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/24.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/25.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/27.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/28.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/29.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/30.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/31.avif' },
      { src: '/Voala/ProjectSource/Award-Winning-Projects/TheEdge/32.avif' }
    ]
  },
  //The Pinkground 1F - Emhub
  {
    id: 'the-pinkground-1f',
    name: 'The PINKGROUND (1F)',
    description: 'A dynamic community space for learning, gathering, and growing together.',
    location: 'Unique Aesthetics Sdn Bhd, Kompleks Emhub',
    type: 'commercial',
    image: '/Voala/ProjectSource/Signature-Projects/Emhub1F/Emhub1FCoverPhoto.avif',
    imageAlt: 'The Pinkground 1F - Award winning commercial project',
    category: 'Award-Winning',
    year: '2023',
    size: '1,760 sq ft',
    overview: 'More than just an extension, the first floor is our vibrant community deck. This multi-functional space adapts to every occasion—from training sessions and team meetings to casual coffee chats and full-scale events.<br> It\'s where culture thrives, ideas are shared, and people come together to grow, connect, and celebrate.',
    galleryImages: [
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/1.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/2.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/3.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/4.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/5.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/6.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/7.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/8.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/9.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/10.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/11.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/12.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/13.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/14.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/15.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/16.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/17.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/18.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/19.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/20.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/21.avif' },
      { src: '/Voala/ProjectSource/Signature-Projects/Emhub1F/22.avif' }
    ]
  },
  // Add more projects here...
];