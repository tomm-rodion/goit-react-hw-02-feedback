import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  calcPercentagePositivFeedback() {
    return Math.round((this.state.good / this.onTotalFeedback()) * 100);
  }

  onTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  onInformationFeedback = value => {
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.onTotalFeedback();
    const positivePercentage = this.calcPercentagePositivFeedback();
    return (
      <>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onInformationFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {TotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={TotalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
