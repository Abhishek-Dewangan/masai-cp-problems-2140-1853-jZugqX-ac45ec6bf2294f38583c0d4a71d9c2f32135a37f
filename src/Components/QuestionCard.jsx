import { useState } from 'react';
import Option from './Option';

const QuestionCard = ({ data }) => {
  // console.log(data);
  const [showAns, setShowAns] = useState(false);
  return (
    <div className='question-card'>
      {/* add question here */}
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <h3>{elem.question}</h3>

            <div className='options'>
              <Option
                options={elem.options}
                index={elem.correctOptionIndex}
              />
            </div>
            <div className='show-ans'>
              {!showAns ? (
                <button onClick={() => setShowAns(true)}>Show Answer</button>
              ) : (
                <button onClick={() => setShowAns(false)}>Hide Answer</button>
              )}
              <br />
              {showAns && elem.options[elem.correctOptionIndex]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionCard;
