import { useLocation, useNavigate } from 'react-router-dom';
import { Rate, Input, Button, notification } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../redux/booksReducer';
import type { RootState, AppDispatch } from '../store';
import '../styles/BookDetail.less';
import { LocationState } from "../types"

const { TextArea } = Input;

const BookDetail: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation() as LocationState;
    const book = location.state;

    const dispatch = useDispatch<AppDispatch>();
    const existingReview = useSelector((state: RootState) =>
        book?.id ? state.books.reviews[book.id] : undefined
    );

    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>('');

    useEffect(() => {
        if (existingReview) {
            setRating(existingReview.rating);
            setReview(existingReview.review);
        }
    }, [existingReview]);

    const handleSubmit = () => {
        if (rating === 0 || review.trim() === '') {
            notification.error({
                message: 'Submission Failed',
                description: 'Please provide both a rating and a review.',
            });
            return;
        }
        dispatch(addReview({ bookId: book.id, rating, review }));
        notification.success({
            message: 'Review Submitted',
            description: 'Your rating and review have been saved.',
        });
    };

    return (
        <div className="book-detail-container">
            <h2>{book.volumeInfo.title}</h2>
            <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ') || 'N/A'}</p>
            <p><strong>Categories:</strong> {book.volumeInfo.categories?.join(', ') || 'N/A'}</p>
            <p className="book-detail-description"><strong>Description:</strong> {book.volumeInfo.description || 'No description available.'}</p>

            <hr />

            <h3>Rate & Review</h3>
            <Rate value={rating} onChange={setRating} />
            <TextArea
                rows={4}
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="book-detail-description"
            />
            <div className="book-detail-buttons">
                <Button type="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button onClick={() => navigate(-1)}>
                    Go Back
                </Button>
            </div>
        </div>
    );
};

export default BookDetail;
