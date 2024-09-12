import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const handleFeedbackClick = useCallback(
    option => () => {
      onLeaveFeedback(option);
    },
    [onLeaveFeedback]
  );

  return (
    <div>
      {options.map(option => (
        <Button key={option} action={handleFeedbackClick(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
