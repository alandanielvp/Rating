import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  return (
    <div className="StarRating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= rating ? "active" : ""}
            onClick={() => handleStarClick(index)}
          >
            *
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
