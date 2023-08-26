import React, { useState } from "react";

export const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Feedback submitted:", feedback);
    alert("Feedback submitted. Thank you!");
    setFeedback(""); // フィードバック内容をリセット
  };

  return (
    <div>
      <h3>Feedback Form for About Page</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Feedback:
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            cols={50}
            placeholder="Write your feedback here..."
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
