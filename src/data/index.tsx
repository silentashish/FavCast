const DollorImage = require('../assets/100dollor.jpg');
const DobrikImage = require('../assets/dobrik-nash.jpg');
const JoeRoganImage = require('../assets/joe-rogan.jpg');
const MindsetImage = require('../assets/mindset.jpg');
const TimeImage = require('../assets/timferris.jpg');
const ImpluseImage = require('../assets/download.jpg');
const stringData: any = [
  {
    id: 1,
    title: 'Joe Rogan',
    age: '53',
    details:
      "The Joe Rogan Experience is a Spotify-exclusive audio and video podcast hosted by American comedian and television host Joe Rogan. It was originally launched on December 24, 2009, by Rogan and comedian Brian Redban, who is also a producer and co-host. Jamie Vernon took over Brian Redban's role as the co-host and producer in 2013. By 2015, it was one of the world's most popular podcasts, regularly receiving millions of views per episode,[2] also including a wide array of guests. Since December 1, 2020, all episodes have been exclusively licensed to Spotify.",
    image: JoeRoganImage,
    subscriber: '10.4M ',
    videos: [
      'https://www.youtube.com/watch?v=RcYjXbSJBN8',

      'https://www.youtube.com/watch?v=BEWz4SXfyCQ',

      'https://www.youtube.com/watch?v=vGc4mg5pul4',

      'https://www.youtube.com/watch?v=wieRZoJSVtw',

      'https://www.youtube.com/watch?v=Hc6pbG4wICA',
    ],
    country: 'United State',
    type: 'Sports-Liffestyle',
  },
  {
    id: 2,
    title: 'Mindset Mentor',
    age: '23',
    details:
      'Learn how to overcome your self-limiting beliefs. Gain insight and clarity on your life’s purpose and vision. I’ll guide you through strategies for achieving your goals. You’ll find you can get the most out of everyday activities by listening to The Mindset & Motivation Podcast during your drive time or workout. Pick an episode from my extensive collection.',
    image: MindsetImage,
    subscriber: '70.9k ',
    videos: [
      'https://www.youtube.com/watch?v=svh8yRL9K3M',

      'https://www.youtube.com/watch?v=AupnH3j3514',

      'https://www.youtube.com/watch?v=BRVXP0hwnMA',

      'https://www.youtube.com/watch?v=BRVXP0hwnMA',

      'https://www.youtube.com/watch?v=Qtqp50pryLU',
    ],
    country: 'United State',
    type: 'Motivation',
  },
  {
    id: 3,
    title: '100$ MBA Show',
    age: '24',
    details:
      'At some point in your business, this becomes a fact. You have to recognize it. Embrace it. As your momentum builds, more and more opportunities will come your way.',
    image: DollorImage,
    subscriber: 'unknown ',
    videos: [
      'https://www.youtube.com/watch?v=b_JsHa0ZMtU',

      'https://www.youtube.com/watch?v=Dm8JOaTf1L0',

      'https://www.youtube.com/watch?v=SLaZGoiyUe0',

      'https://www.youtube.com/watch?v=M_J2faLhe80',

      'https://www.youtube.com/watch?v=hmY3jcXBDQA',
    ],
    country: 'Canada',
    type: 'Business Motivation',
  },
  {
    id: 4,
    title: 'Tim Ferris',
    age: '43',
    details:
      'Timothy Ferriss is an American entrepreneur, investor, author, and podcaster.The Tim Ferriss Show is often the #1 business podcast on all of Apple Podcasts, and it’s been ranked #1 out of 500,000+ podcasts on many occasions. It is the first business/interview podcast to pass 100,000,000 downloads, it has been selected as “Best of” Apple Podcasts for three years running, and readers of Fortune Magazine‘s Term Sheet recently selected The Tim Ferriss Show as their top business podcast. It has now surpassed 600M downloads.',
    image: TimeImage,
    subscriber: '788k ',
    videos: [
      'https://www.youtube.com/watch?v=5J6jAC6XxAI',

      'https://www.youtube.com/watch?v=TK2mxvHR9zA',

      'https://www.youtube.com/watch?v=YF6lQkpxmVUI',

      'https://www.youtube.com/watch?v=vEJ-HpBMBn8',

      'https://www.youtube.com/watch?v=kMcgWK6LYyc',
    ],
    country: 'United States',
    type: 'LifeStyle / Vlogging',
  },
];

export {stringData};
