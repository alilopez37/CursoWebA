import ItemFlex from "../atoms/ItemFlex";
import '../../assets/styles/FlexContainer.css'

function FlexContainer({ itemFlex }) {
  return (
    <div className="flexbox-container">
      {itemFlex.map((item) => (
        <ItemFlex key={item} item={item} />
      ))}
    </div>
  );
}

export default FlexContainer;
