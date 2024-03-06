const places = [
    {
        id: 1,
        name: "Goa",
        desc: "Hello, welcome to Goa! Explore the beautiful beaches, vibrant culture, and indulge in thrilling water sports. Goa is famous for its lively nightlife, delicious seafood, and Portuguese architecture. Don't miss the chance to visit popular attractions like Baga Beach, Dudhsagar Falls, and Fort Aguada.",
        cost: "10,000 INR",
        imageSrc: "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="
    },
    {
        id: 2,
        name: "Mount Everest",
        desc: "Embark on the ultimate adventure to Mount Everest, the highest peak in the world. Experience the breathtaking views from the top of Mount Everest, surrounded by majestic Himalayan peaks. The journey to Everest Base Camp offers a unique blend of natural beauty, challenging trekking trails, and encounters with the Sherpa culture.",
        cost: "50,000 INR",
        imageSrc: "https://images.chinahighlights.com/allpicture/2019/01/ab8ec09b99d14895b9a837b5_cut_800x500_70.jpg"
    },
    {
        id: 3,
        name: "Jaipur",
        desc: "Discover the vibrant city of Jaipur, also known as the Pink City of India. Explore magnificent palaces, forts, and temples that showcase the rich history and architecture of Rajasthan. Don't miss the opportunity to visit iconic landmarks like the Hawa Mahal, Amber Fort, and City Palace.",
        cost: "15,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo="
    },
    {
        id: 4,
        name: "Kerala",
        desc: "Experience the serene backwaters and lush greenery of Kerala, known as 'God's Own Country.' Cruise along the tranquil backwaters in a traditional houseboat, explore spice plantations, and witness captivating cultural performances. Kerala also offers opportunities for wildlife safaris, trekking in the Western Ghats, and rejuvenating Ayurvedic treatments.",
        cost: "20,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1246366598/photo/a-scenic-view-of-boats-under-a-blue-sky-in-backwaters-situated-in-allepey-town-located-in.jpg?s=612x612&w=0&k=20&c=YBv_3nP-6YjvN9JRhaNsBmq8ke4azCgvGLS5h3r9jSk="
    },
    {
        id: 5,
        name: "Leh Ladakh",
        desc: "Embark on an adventurous journey to Leh Ladakh, a region renowned for its stark landscapes, ancient monasteries, and adventurous activities. Explore high-altitude lakes like Pangong Tso and Tso Moriri, ride through dramatic mountain passes, and witness the unique cultural heritage of Ladakh. Don't miss the chance to indulge in trekking, river rafting, and camping amidst breathtaking scenery.",
        cost: "25,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA="
    },
    {
        id: 6,
        name: "Agra",
        desc: "Visit the iconic city of Agra and witness the breathtaking beauty of the Taj Mahal, one of the Seven Wonders of the World. Explore the grandeur of Agra Fort, stroll through the lush gardens of Mehtab Bagh, and discover the rich heritage of Mughal architecture. Agra offers a fascinating glimpse into India's history and cultural heritage.",
        cost: "12,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
    },
    {
        id: 7,
        name: "Mumbai",
        desc: "Explore the bustling metropolis of Mumbai, often referred to as the 'City of Dreams.' Experience the vibrant street life, visit iconic landmarks like the Gateway of India and Marine Drive, and immerse yourself in the Bollywood film industry. Mumbai is also known for its diverse culinary scene, lively nightlife, and historic colonial architecture.",
        cost: "18,000 INR",
        imageSrc: "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg"
    },
    {
        id: 8,
        name: "Varanasi",
        desc: "Experience the spiritual ambiance of Varanasi, one of the oldest continuously inhabited cities in the world. Witness the mesmerizing Ganga Aarti ceremony along the ghats of the Ganges River, explore ancient temples and narrow alleyways, and partake in boat rides on the sacred river. Varanasi offers a unique blend of spirituality, culture, and traditional rituals.",
        cost: "14,000 INR",
        imageSrc: "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg"
    },
    {
        id: 9,
        name: "Udaipur",
        desc: "Discover the enchanting city of Udaipur, often referred to as the 'Venice of the East.' Explore magnificent palaces, serene lakes, and vibrant bazaars that showcase the rich cultural heritage of Rajasthan. Don't miss the chance to visit iconic landmarks like the City Palace, Lake Pichola, and Jag Mandir.",
        cost: "16,000 INR",
        imageSrc: "https://t4.ftcdn.net/jpg/00/85/61/27/360_F_85612737_veoCTufAsIuYJC8rjs06CA4HrLw30r8l.jpg"
    },
    {
        id: 10,
        name: "Paris",
        desc: "Experience the romantic charm of Paris, the 'City of Love.' Explore iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Take leisurely walks along the Seine River, indulge in French cuisine at sidewalk cafes, and immerse yourself in the vibrant art and culture scene. Paris is a timeless destination that captivates visitors with its beauty and allure.",
        cost: "1,00,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1463219631/photo/eiffel-tower-skyline.webp?b=1&s=170667a&w=0&k=20&c=4ZlZ-Tliycy9WAVuMb1EbV1Mg_Bz2mf02tOr0KQ_EqE="
    },
    {
        id: 11,
        name: "New York City",
        desc: "Explore the vibrant energy of New York City, the cultural and financial capital of the world. Marvel at iconic skyscrapers like the Empire State Building and One World Trade Center, stroll through Central Park, and visit renowned museums like the Metropolitan Museum of Art. Experience the diverse neighborhoods, Broadway shows, and culinary delights that make NYC a truly unforgettable destination.",
        cost: "1,50,000 INR",
        imageSrc: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=612x612&w=0&k=20&c=yZJXNdzq3d5bKgvVzPBahBujpbVUXFyjyl9FN9L7esM="
    }
  
];
export default places