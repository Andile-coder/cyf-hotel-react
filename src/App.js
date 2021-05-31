import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Header from "./heading";
import TouristInfoCards from "./TouristsCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards
        href="https://peoplemakeglasgow.com/"
        src="https://peoplemakeglasgow.com/images/Top_Reasons_To_Visit/Scotland_Street_School_Glasgow.jpg"
      />
      <TouristInfoCards
        href="https://visitmanchester.com/"
        src="https://www.newcollegegroup.com/app/uploads/2018/07/shutterstock_90268330.jpg"
      />
      <TouristInfoCards
        href="https://visitlondon.com/"
        src="https://www.planetware.com/photos-large/ENG/london-top-attractions-tower-of-london.jpg"
      />
      <Bookings />
      <Restaurant />
      <Footer
        arr={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
