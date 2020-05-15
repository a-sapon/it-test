import React from 'react';
import "./FeedbackPage.css";
import FeedbackBoard from './FeedbackBoard/FeedbackBoard';
import ContactCard from './ContactCard/ContactCard';



const FeedbackPage = () => {
    return (
        <div className="feedback-page">
        <FeedbackBoard />
        <ContactCard />
        </div>
    );
}

export default FeedbackPage;