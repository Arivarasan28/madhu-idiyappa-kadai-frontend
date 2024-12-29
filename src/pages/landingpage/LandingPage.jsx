// import React from "react";
// import "./LandingPage.css";

// const LandingPage = () => {
//   const foodItems = [
//     {
//       id: 1,
//       name: "idiyappam",
//       description: "A juicy idiyappam with spicy mayo and fresh veggies.",
//       image: "/public/foods/idi.jpg",
//     },
//     {
//       id: 2,
//       name: "dhosa",
//       description: "Crispy dhasa, jalapeños, and salsa.",
//       image: "/public/foods/dhosa.jpg",
//     },
//     {
//       id: 3,
//       name: "appam",
//       description: "A healthy wrap packed with fresh veggies and hummus.",
//       image: "/public/foods/appam.jpg",
//     },
//   ];

//   return (
//     <div className="landing-page">
//       <header className="hero">
//         <h1 className="hero-title">Welcome to [Your Food Truck Name]</h1>
//         <p className="hero-subtitle">
//           Fresh and flavorful meals crafted just for you.
//         </p>
//       </header>

//       <section className="food-gallery">
//         <h2>Our Delicious Foods</h2>
//         <div className="food-cards">
//           {foodItems.map((item) => (
//             <div key={item.id} className="food-card">
//               <img src={item.image} alt={item.name} className="food-image" />
//               <h3 className="food-name">{item.name}</h3>
//               <p className="food-description">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;


import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const foodItems = [
    {
      id: 1,
      name: "idiyappam",
      description: "A juicy idiyappam with spicy mayo and fresh veggies.",
      image: "/public/foods/idi.jpg",
    },
    {
      id: 2,
      name: "dhosa",
      description: "Crispy dhosa, jalapeños, and salsa.",
      image: "/public/foods/dhosa.jpg",
    },
    {
      id: 3,
      name: "appam",
      description: "A healthy wrap packed with fresh veggies and hummus.",
      image: "/public/foods/appam.jpg",
    },
  ];

  const truckImages = [
    "/public/trucks/truck1.jpg",
    "/public/trucks/truck2.jpg",
    "/public/trucks/truck3.jpg",
    "/public/trucks/truck4.jpg",
  ];

  return (
    <div className="landing-page">
      {/* First Part: Food Truck Images */}
      <header className="hero">
        <h1 className="hero-title">Welcome to MADHU IDIYAPPA KADAI</h1>
        <p className="hero-subtitle">
          Fresh and flavorful meals crafted just for you.
        </p>
        <div className="truck-gallery">
          {truckImages.map((image, index) => (
            <img key={index} src={image} alt={`Food Truck ${index + 1}`} className="truck-image" />
          ))}
        </div>
      </header>

      {/* Second Part: Food Details */}
      <section className="food-gallery">
        <h2>Our Delicious Foods</h2>
        <div className="food-cards">
          {foodItems.map((item) => (
            <div key={item.id} className="food-card">
              <img src={item.image} alt={item.name} className="food-image" />
              <h3 className="food-name">{item.name}</h3>
              <p className="food-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
