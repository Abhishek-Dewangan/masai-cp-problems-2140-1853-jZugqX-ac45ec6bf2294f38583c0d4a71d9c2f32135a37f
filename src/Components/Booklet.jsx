import { useState } from 'react';
import QuestionCard from './QuestionCard';

const Booklet = () => {
  const [data, setData] = useState([]);
  const [startExam, setStartExam] = useState(true);
  const [score, setScore] = useState(0);

  const getQuestions = () => {
    fetch(
      'https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz'
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((error) =>
        console.log({ message: 'Unable to fetch data', error })
      );
  };

  return (
    <div data-testid='Booklet'>
      {/* create a div with className="welcome-div" here*/}
      {startExam ? (
        <div className='welcome-div'>
          <h1>To begin the exam, click on the 'Start exam' button below</h1>
          <button
            onClick={() => {
              getQuestions();
              setStartExam(false);
            }}>
            Start Exam
          </button>
        </div>
      ) : (
        <div className='questions-container'>
          {/* Append score and question card components here */}
          <button onClick={() => setStartExam(true)}>End Exam</button>
          <h3>Score: {score}</h3>
          {data.length && <QuestionCard data={data} />}
        </div>
      )}
    </div>
  );
};

export default Booklet;
