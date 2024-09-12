import React, { useState, useMemo } from 'react';
import styles from './App.module.css';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section/Section';
import Notification from './Notification';

//cod refacut cu hooks
const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleIncrement = option => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPecentage = useMemo(() => {
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  }, [good, totalFeedback]);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics:">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback ^_^" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPecentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
