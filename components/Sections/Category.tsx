import React from "react";
import ReusableCards from "../card1";
const cardDataArray = [
  {
    id: "1",
    headerText: "Your day your way",
    title: "Your checklist for better sleep",
    backgroundImage: "/home.png",
    iconImage: "/home.png",
    appName: "Breathing App",
    appDescription: "Get a good night's sleep.",
  },
  {
    id: "2",
    headerText: "Your day your way",
    title: "Your checklist for better sleep",
    backgroundImage: "/home.png",
    iconImage: "/home.png",
    appName: "Breathing App",
    appDescription: "Get a good night's sleep.",
  },
  {
    id: "3",
    headerText: "Your day your way",
    title: "Your checklist for better sleep",
    backgroundImage: "/home.png",
    iconImage: "/home.png",
    appName: "Breathing App",
    appDescription: "Get a good night's sleep.",
  },
  {
    id: "4",
    headerText: "Your day your way",
    title: "Your checklist for better sleep",
    backgroundImage: "/home.png",
    iconImage: "/home.png",
    appName: "Breathing App",
    appDescription: "Get a good night's sleep.",
  },
];
function Category() {
  return (
    <div>
      <ReusableCards cards={cardDataArray} />
    </div>
  );
}

export default Category;
