// import all images from assets/images directory
import { collection, addDoc } from 'firebase/firestore';
// importă configurația Firebase
import { db } from '../firebase'; // Importă corect 'db'

import { storage } from '../firebase'; // Importă corect 'storage'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Importă funcțiile necesare

import img03 from '../assets/all-images/cars-img/bmw-offer.png';

import img06 from '../assets/all-images/cars-img/mercedes-offer.png';
import img3333 from '../assets/all-images/cars-img/img3333.jpg';
import img08 from '../assets/all-images/cars-img/mercedes-offer.png';
import img122 from '../assets/all-images/cars-img/img122.jpg';
import img123 from '../assets/all-images/cars-img/img123.jpg';
import img124 from '../assets/all-images/cars-img/img124.webp';
import img1299 from '../assets/all-images/img1299.jpg';
import img1999 from '../assets/all-images/cars-img/img1999.jpg';

const carData = [
  {
    id: 1,
    brand: 'Hyundai',
    rating: 112,
    carName: 'Hyundai i30',
    imgUrl: img1299,
    model: 'Model 3',
    price: 50,
    speed: '160km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Hyundai i30 is a versatile and reliable choice for your car rental needs. With its sleek design, comfortable interior, and advanced features, the i30 offers a smooth and enjoyable driving experience for both short trips and long journeys. Equipped with modern technology and safety features, this compact car ensures a safe and convenient ride for you and your passengers. Whether you are exploring the city or embarking on a road trip, the Hyundai i30 delivers a perfect balance of performance, comfort, and style.',
  },

  {
    id: 2,
    brand: 'Toyota',
    rating: 102,
    carName: 'Toyota Corolla',
    imgUrl: img124,
    model: '2022 Model',
    price: 50,
    speed: '180km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Toyota Corolla is a reliable and popular compact car known for its durability, fuel efficiency, and practicality. With a sleek and modern design, the Corolla offers a comfortable and spacious interior that is well-suited for both daily commutes and longer journeys. Equipped with advanced safety features and cutting-edge technology, this vehicle ensures a secure and convenient driving experience for its passengers. Whether navigating city streets or cruising on the highway, the Toyota Corolla delivers a smooth and efficient ride that caters to the needs of drivers seeking a dependable and versatile vehicle.',
  },

  {
    id: 3,
    brand: 'BMW',
    rating: 132,
    carName: 'BMW 3Series ',
    imgUrl: img03,
    model: 'Coupe 2022',
    price: 80,
    speed: '240km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The BMW 3 Series Coupe is a stylish and sophisticated vehicle that embodies the perfect balance of luxury and performance. With its sleek design, iconic kidney grille, and sporty silhouette, the 3 Series Coupe exudes elegance and class. The interior is meticulously crafted with premium materials and cutting-edge technology, providing both comfort and convenience for the driver and passengers. The powerful engine options deliver impressive performance, making every drive a thrilling experience. Overall, the BMW 3 Series Coupe is a symbol of refinement and driving pleasure, offering a perfect combination of style, comfort, and dynamic performance.',
  },

  {
    id: 4,
    brand: 'Nissan',
    rating: 102,
    carName: 'Nissan Qashqai',
    imgUrl: img123,
    model: '2023',
    price: 70,
    speed: '170km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Nissan Qashqai is a versatile and practical crossover SUV that offers a perfect balance of style, comfort, and functionality. With its bold and modern design, the Qashqai stands out on the road while providing ample space for both passengers and cargo. The interior is well-appointed with premium materials and advanced technology features, ensuring a comfortable and connected driving experience. The efficient engine options deliver a smooth and responsive performance, making it ideal for both city driving and long road trips. Overall, the Nissan Qashqai is a reliable and stylish choice for those seeking a versatile and capable crossover SUV.',
  },

  {
    id: 5,
    brand: 'Lamborghini',
    rating: 94,
    carName: 'Lamborghini Urus',
    imgUrl: img122,
    model: '2023',
    price: 150,
    speed: '280km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Lamborghini Urus is a high-performance luxury SUV that combines the iconic Lamborghini styling with the practicality of an SUV. With its aggressive lines, muscular stance, and signature Lamborghini design elements, the Urus is a true head-turner on the road. The interior is crafted with the finest materials and features cutting-edge technology, providing a luxurious and comfortable driving experience. Powered by a powerful engine, the Urus delivers exhilarating performance and dynamic handling, making it a thrill to drive in any situation. Overall, the Lamborghini Urus is a perfect blend of luxury, performance, and versatility, setting a new standard for high-performance SUVs.',
  },

  {
    id: 6,
    brand: 'Mercedes',
    rating: 119,
    carName: 'Mercedes Benz C350',
    imgUrl: img06,
    model: '2021',
    price: 85,
    speed: '210km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Mercedes C350 Coupe is a sophisticated blend of luxury, performance, and style, embodying the essence of the Mercedes-Benz brand. With its sleek, aerodynamic design, the C350 Coupe features a bold front grille, elegant lines, and a sporty silhouette that commands attention on the road. Under the hood, it is powered by a robust engine that delivers impressive acceleration and a smooth driving experience, making it a joy to drive. Inside, the cabin is adorned with high-quality materials, advanced technology, and comfortable seating, providing an inviting atmosphere for both the driver and passengers. The C350 Coupe also boasts a range of innovative features, including a state-of-the-art infotainment system and advanced safety technologies, ensuring a connected and secure journey. Overall, the Mercedes C350 Coupe is a remarkable vehicle that combines performance and luxury, making it an ideal choice for those who appreciate the finer things in life.',
  },

  {
    id: 7,
    brand: 'Audi',
    rating: 82,
    carName: 'Audi a5',
    imgUrl: img1999,
    model: 'Model 2024',
    price: 95,
    speed: '240km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      ' The Audi A5 is a stunning representation of luxury and performance, seamlessly blending elegant design with cutting-edge technology. Its sleek, coupe-like silhouette is accentuated by bold lines and a distinctive Singleframe grille, giving it a sporty yet sophisticated presence on the road. Under the hood, the A5 offers a range of powerful engine options that deliver exhilarating performance and responsive handling, making every drive a thrilling experience. Inside, the cabin is meticulously crafted with high-quality materials, featuring comfortable seating and an array of advanced technology, including the intuitive MMI infotainment system. With its emphasis on both style and functionality, the Audi A5 provides a refined driving experience, complemented by a suite of safety features that ensure peace of mind. Whether navigating city streets or cruising on the highway, the Audi A5 stands out as a perfect blend of luxury, performance, and practicality.',
  },

  {
    id: 8,
    brand: 'Rolls Royce',
    rating: 252,
    carName: 'Rolls Royce ghost',
    imgUrl: img3333,
    model: 'Model 3',
    price: 250,
    speed: '260km/h',
    gps: 'GPS Navigation',
    seatType: 'Heated seats',
    automatic: 'Automatic',
    description:
      " The Rolls-Royce Ghost is the epitome of automotive luxury, representing a harmonious blend of timeless elegance and cutting-edge engineering. With its commanding presence, the Ghost features a stately silhouette characterized by a long hood, graceful lines, and the iconic Spirit of Ecstasy ornament that graces its front. Inside, the cabin is a sanctuary of opulence, meticulously crafted with the finest materials, including sumptuous leather, exquisite wood veneers, and bespoke detailing that can be tailored to the owner's specifications. The advanced technology seamlessly integrates with the luxurious environment, offering a state-of-the-art infotainment system and a host of comfort features designed to enhance the driving experience. Powered by a formidable V12 engine, the Ghost delivers a smooth and powerful ride, effortlessly gliding over any terrain. With its unparalleled attention to detail and commitment to craftsmanship, the Rolls-Royce Ghost is not just a car; it is a statement of prestige and sophistication, designed for those who demand the very best in life.",
  },
];

const uploadImageAndGetUrl = async imageUrl => {
  const storageRef = ref(storage, `car-images/${Date.now()}`);
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  const uploadTask = uploadBytesResumable(storageRef, blob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      null,
      error => reject(error),
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};

const addCarsToFirebase = async () => {
  const carsCollection = collection(db, 'cars'); // Colecția 'cars' în Firestore

  try {
    for (const car of carData) {
      const imgUrl = await uploadImageAndGetUrl(car.imgUrl); // Încarcă imaginea în Firebase Storage

      await addDoc(carsCollection, {
        brand: car.brand,
        rating: car.rating,
        carName: car.carName,
        imgUrl: imgUrl, // Utilizăm URL-ul imaginii din Firebase Storage
        model: car.model,
        price: car.price,
        speed: car.speed,
        gps: car.gps,
        seatType: car.seatType,
        automatic: car.automatic,
        description: car.description,
      });
    }
    console.log('Mașinile au fost adăugate cu succes!');
  } catch (e) {
    console.error('Eroare la adăugarea mașinilor: ', e);
  }
};

// Apelarea funcției pentru a adăuga mașinile în Firestore
addCarsToFirebase();
export default carData;
