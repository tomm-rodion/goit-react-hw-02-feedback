import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button
      key={option}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </Button>
  ));
}
