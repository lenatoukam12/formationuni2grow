function myFunction() {
  let myInternalVariable;
  const getMyInternalVariable = () => {
    return myInternalVariable;
  };

  const changeInternalVariable = (newValue) => {
    myInternalVariable = newValue;
  };
  return { changeInternalVariable, getMyInternalVariable };
}

const result = myFunction();
result.changeInternalVariable(10);
console.log(result.getMyInternalVariable());
