import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
    onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onChange }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleRatingChange = (newRating: number) => {
        onChange(newRating);
    };

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <label
                    key={index}
                    className="cursor-pointer mx-1"
                    onMouseEnter={() => setHoverRating(index + 1)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRatingChange(index + 1)}
                >
                    <input type="radio" name="rating" value={index + 1} className="hidden" />
                    <FaStar
                        className="inline-block text-yellow-400 w-5 h-5"
                        fill={index + 1 <= (hoverRating || rating) ? '#ffc107' : 'none'}
                    />
                </label>
            ))}
            <span className="ml-2">{rating}</span>
        </div>
    );
};

export default StarRating
