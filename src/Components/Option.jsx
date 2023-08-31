const Option = ({ options, index }) => {
  return (
    <div data-testid='option'>
      {/* create a button here */}
      {options.map((el, i) => {
        return (
          <button className={index == i ? 'bgGreen' : 'bgRed'}>{el}</button>
        );
      })}
    </div>
  );
};

export default Option;
