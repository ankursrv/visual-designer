
import { useState } from "react";
import Star from "../Star";

const StarRating = ({ totalStars = 5 }) => {
    const [rating, setRating] = useState(-1)
    const [tempRating, setTempRating] = useState(-1)

    return (
        <div className="flex">
            {
                Array.from({ length: totalStars }, (_, index) => (
                    <Star key={index}
                        full={(tempRating !== -1 ? tempRating : rating) >= index}
                        onClick={() => (setRating(index))}
                        onMouseEnter={()=>setTempRating(index) }
                        onMouseLeave={()=>setTempRating(-1)}
                    />
                ))
            }
        </div>
    );
}
export default StarRating