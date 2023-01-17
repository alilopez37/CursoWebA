import FlexContainer from "../components/organism/FlexContainer";

function Flexbox() {
  const itemFlex = [1, 2, 3, 4, 5];
  return (
    <>
      <FlexContainer itemFlex={itemFlex} />
    </>
  );
}

export default Flexbox;
