import './App.css';

import React, { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/Feedback";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToGood = () => {
    this.setState((prev) => ({
      good: prev.good+1,
    }));
  };

  addToNeutral = () => {
    this.setState((prev) => ({
      neutral: prev.neutral+1,
    }));
  };

  addToBad = () => {
    this.setState((prev) => ({
      bad: prev.bad+1,
    }));
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
        (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions
                addToGood={this.addToGood}
                addToNeutral={this.addToNeutral}
                addToBad={this.addToBad}
            />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() ? (
                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback}
                    positivePercentage={this.countPositiveFeedbackPercentage}
                />
            ) : (
                <Notification message="No feedback given" />
            )}
          </Section>
        </>
    );
  }
}

export default App;