import ProcessTypes from "../ts-types/enums/ProcessTypes";

const formatProcessTypeForDisplay = (process: ProcessTypes | string | undefined) => {
  if(process === undefined){
    return ''
  }

  const displayText = process
    .toString()
    .split("_")
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");

  return displayText;
};

const isClosingDateInThePast = (closingDate: string | undefined) => {
  if (closingDate === undefined) {
    return false;
  }
  return new Date(closingDate) < new Date();
}

export {
    formatProcessTypeForDisplay,
    isClosingDateInThePast
}