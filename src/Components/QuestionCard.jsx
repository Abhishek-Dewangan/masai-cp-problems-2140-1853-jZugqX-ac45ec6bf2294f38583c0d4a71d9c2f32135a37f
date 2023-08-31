const QuestionCard = ({ data }) => {
  console.log(data);
  return (
    <div className='question-card'>
      {/* add question here */}
      {data.map((elem) => {
        return (
          <div key={elem.id}>
            <h3>{elem.question}</h3>

            <div className='options'>
              {elem.options.map((el, i) => {
                return (
                  <button
                    className={
                      elem.correctOptionIndex == i ? 'bgGreen' : 'bgRed'
                    }>
                    {el}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className='show-ans'></div>
    </div>
  );
};

export default QuestionCard;
