import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

// Define a TypeScript interface for the card props
interface CardProps {
  cards: CardData[]; // Array of card data
}

const ReusableCards: React.FC<CardProps> = ({ cards }) => {
  return (
    <div className="max-w-[1000px] mx-auto gap-7 grid grid-cols-1 sm:grid-cols-3 px-2">
      {cards.map((card) => (
        <Card
          key={card.id}
          isFooterBlurred
          className="w-full h-[300px] col-span-1 my-4"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {card.headerText}
            </p>
            <h4 className="text-white/90 font-medium text-xl">{card.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={card.backgroundImage}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="App icon"
                className="rounded-full w-10 h-11 bg-black"
                src={card.iconImage}
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">{card.appName}</p>
                <p className="text-tiny text-white/60">{card.appDescription}</p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Shop Now &rarr;
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ReusableCards;
