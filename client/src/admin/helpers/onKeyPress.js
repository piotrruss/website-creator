const onKeyPress = (e) => {
  if (e.charCode === 13 || e.charCode === 32) {
    e.target.click();
  }
}

export default onKeyPress;
