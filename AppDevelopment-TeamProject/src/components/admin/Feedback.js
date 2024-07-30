import React from 'react';
import './Feedback.css';

const FeedbackSection = () => {
    const feedbacks = [
        { id: 1, name: 'Alice Johnson', message: 'Great service! Very satisfied with the support.', date: '2024-07-28' },
        { id: 2, name: 'Bob Lee', message: 'The app could use some improvements in UI.', date: '2024-07-27' },
        { id: 3, name: 'Carol Brown', message: 'Fast delivery and excellent customer service.', date: '2024-07-26' },
        { id: 4, name: 'David Smith', message: 'The tracking system is very helpful.', date: '2024-07-25' },
        { id: 5, name: 'Emily Davis', message: 'Had some issues with order management.', date: '2024-07-24' },
    ];

    return (
        <div className="feedback-section">
            <h1>Feedback</h1>
            <div className="feedback-list">
                {feedbacks.map(feedback => (
                    <div key={feedback.id} className="feedback-item">
                        <h3 className="feedback-name">{feedback.name}</h3>
                        <p className="feedback-message">{feedback.message}</p>
                        <p className="feedback-date">{feedback.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedbackSection;
