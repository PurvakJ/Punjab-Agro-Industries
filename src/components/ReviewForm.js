import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import emailjs from "emailjs-com";
import './ReviewForm.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const ReviewForm = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [comment, setComment] = useState('');

  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      rating: currentValue,
      comment: comment,
      to_email: 'sahilsingla1002@gmail.com'
    };

    // Debugging logs
    console.log("Template Params: ", templateParams);

    emailjs.send(
      'service_ioq2lni', // Replace with your EmailJS service ID
      'template_2c051ru', // Replace with your EmailJS template ID
      templateParams,
      'DVqkghOUYqdZHgNda' // Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Thank you for your feedback!');
      setCurrentValue(0);
      setComment('');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send feedback. Please try again.');
    });
  };

  return (
    <div className="review-container">
    <h2>Rate Your Experience</h2>
    <div className="review-stars">
        {stars.map((_, index) => (
        <FaStar
            key={index}
            size={24}
            onClick={() => handleClick(index + 1)}
            onMouseOver={() => handleMouseOver(index + 1)}
            onMouseLeave={handleMouseLeave}
            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
            style={{ marginRight: 10, cursor: "pointer" }}
        />
        ))}
    </div>
    <textarea
        className="review-textarea"
        placeholder="Share your experience"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
    />
    <button className="review-button" onClick={handleSubmit}>
        Submit
    </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    maxWidth: "500px",
    margin: "0 auto"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    margin: "10px 0"
  },
  textarea: {
    border: "1px solid rgba(0, 49, 57, 1)",
    borderRadius: '20px',
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: "100%",
    maxWidth: "300px",
    textAlign: 'start',
    fontWeight: 'normal'
  },
  button: {
    border: "1px solid rgba(0, 49, 57, 1)",
    borderRadius: 10,
    width: "100%",
    maxWidth: "300px",
    height: 50,
    color: 'rgba(0, 49, 57, 1)',
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    contentAlign: 'center',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};

export default ReviewForm;