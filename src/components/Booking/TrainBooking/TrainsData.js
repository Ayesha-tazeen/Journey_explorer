
// const trainData = [
//   {
//     id: 1,
//     name: 'Shatabdi Express',
//     origin: 'Delhi',
//     destination: 'Mumbai',
//     classes: [
//       { className: 'AC Chair Car', price: '₹1200' },
//       { className: 'Executive Chair Car', price: '₹2500' }
//     ],
//     date: '2024-03-10'
//   },
//   {
//     id: 2,
//     name: 'Rajdhani Express',
//     origin: 'Mumbai',
//     destination: 'Kolkata',
//     classes: [
//       { className: 'AC 1st Class', price: '₹3500' },
//       { className: 'AC 2-Tier', price: '₹2000' }
//     ],
//     date: '2024-03-12'
//   },
//   {
//     id: 3,
//     name: 'Duronto Express',
//     origin: 'Kolkata',
//     destination: 'Chennai',
//     classes: [
//       { className: 'AC 3-Tier', price: '₹1500' },
//       { className: 'Sleeper', price: '₹800' }
//     ],
//     date: '2024-03-15'
//   },
//   {
//     id: 4,
//     name: 'Gatimaan Express',
//     origin: 'Delhi',
//     destination: 'Agra',
//     classes: [
//       { className: 'AC Chair Car', price: '₹750' },
//       { className: 'Executive Chair Car', price: '₹1500' }
//     ],
//     date: '2024-03-20'
//   },
//   {
//     id: 5,
//     name: 'Garib Rath Express',
//     origin: 'Kolkata',
//     destination: 'Delhi',
//     classes: [
//       { className: 'AC 3-Tier', price: '₹1000' },
//       { className: 'Sleeper', price: '₹500' }
//     ],
//     date: '2024-03-25'
//   },
  
//   {
//     id: 6,
//     name: 'Maharajas\' Express',
//     origin: 'Delhi',
//     destination: 'Jaipur',
//     classes: [
//       { className: 'Deluxe Cabin', price: '₹35000' },
//       { className: 'Presidential Suite', price: '₹60000' }
//     ],
//     date: '2024-03-30'
//   },
//   {
//     id: 7,
//     name: 'Palace on Wheels',
//     origin: 'Jaipur',
//     destination: 'Udaipur',
//     classes: [
//       { className: 'Deluxe Cabin', price: '₹30000' },
//       { className: 'Super Deluxe Cabin', price: '₹50000' }
//     ],
//     date: '2024-04-05'
//   },
//   {
//     id: 8,
//     name: 'Himalayan Queen',
//     origin: 'Kalka',
//     destination: 'Shimla',
//     classes: [
//       { className: 'Chair Car', price: '₹400' }
//     ],
//     date: '2024-04-10'
//   },
//   {
//     id: 9,
//     name: 'Darjeeling Himalayan Railway',
//     origin: 'New Jalpaiguri',
//     destination: 'Darjeeling',
//     classes: [
//       { className: 'First Class', price: '₹1500' },
//       { className: 'Second Class', price: '₹800' }
//     ],
//     date: '2024-04-15'
//   },
//   {
//     id: 10,
//     name: 'Mumbai Suburban Railway',
//     origin: 'Churchgate',
//     destination: 'Virar',
//     classes: [
//       { className: 'First Class', price: '₹60' },
//       { className: 'Second Class', price: '₹10' }
//     ],
//     date: '2024-04-20'
//   }
// ];

// export default trainData;















const trainData = [
  {
    id: 1,
    name: 'Shatabdi Express',
    origin: 'Delhi',
    destination: 'Mumbai',
    classes: [
      { className: 'AC Chair Car', price: '₹1200' },
      { className: 'Executive Chair Car', price: '₹2500' }
    ],
    time: '8:00 AM - 2:00 PM'
  },
  {
    id: 2,
    name: 'Rajdhani Express',
    origin: 'Mumbai',
    destination: 'Kolkata',
    classes: [
      { className: 'AC 1st Class', price: '₹3500' },
      { className: 'AC 2-Tier', price: '₹2000' }
    ],
    time: '10:00 AM - 5:00 PM'
  },
  {
    id: 3,
    name: 'Duronto Express',
    origin: 'Kolkata',
    destination: 'Chennai',
    classes: [
      { className: 'AC 3-Tier', price: '₹1500' },
      { className: 'Sleeper', price: '₹800' }
    ],
    time: '12:00 PM - 7:00 PM'
  },
  {
    id: 4,
    name: 'Gatimaan Express',
    origin: 'Delhi',
    destination: 'Agra',
    classes: [
      { className: 'AC Chair Car', price: '₹750' },
      { className: 'Executive Chair Car', price: '₹1500' }
    ],
    time: '2:00 PM - 5:00 PM'
  },
  {
    id: 5,
    name: 'Garib Rath Express',
    origin: 'Kolkata',
    destination: 'Delhi',
    classes: [
      { className: 'AC 3-Tier', price: '₹1000' },
      { className: 'Sleeper', price: '₹500' }
    ],
    time: '4:00 PM - 11:00 PM'
  },
  {
    id: 6,
    name: 'Maharajas\' Express',
    origin: 'Delhi',
    destination: 'Jaipur',
    classes: [
      { className: 'Deluxe Cabin', price: '₹35000' },
      { className: 'Presidential Suite', price: '₹60000' }
    ],
    time: '6:00 PM - 9:00 PM'
  },
  {
    id: 7,
    name: 'Palace on Wheels',
    origin: 'Jaipur',
    destination: 'Udaipur',
    classes: [
      { className: 'Deluxe Cabin', price: '₹30000' },
      { className: 'Super Deluxe Cabin', price: '₹50000' }
    ],
    time: '8:00 PM - 11:00 PM'
  },
  {
    id: 8,
    name: 'Himalayan Queen',
    origin: 'Kalka',
    destination: 'Shimla',
    classes: [
      { className: 'Chair Car', price: '₹400' }
    ],
    time: '10:00 AM - 1:00 PM'
  },
  {
    id: 9,
    name: 'Darjeeling Himalayan Railway',
    origin: 'New Jalpaiguri',
    destination: 'Darjeeling',
    classes: [
      { className: 'First Class', price: '₹1500' },
      { className: 'Second Class', price: '₹800' }
    ],
    time: '12:00 PM - 3:00 PM'
  },
  {
    id: 10,
    name: 'Mumbai Suburban Railway',
    origin: 'Churchgate',
    destination: 'Virar',
    classes: [
      { className: 'First Class', price: '₹60' },
      { className: 'Second Class', price: '₹10' }
    ],
    time: '6:00 AM - 10:00 AM'
  }
];

export default trainData;
