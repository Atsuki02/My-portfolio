import PortfolioContent from "./PortfolioContent";
import PortfolioImage from "./PortfolioImage";

function PortfolioItem(props) {
  const { bgColor1 } = props.item;

  return (
    <div
      className={`z-[5] flex items-center justify-center bg-slate-100 pb-16 pt-16 lg:pb-32 lg:pt-32`}
    >
      <div
        className={`relative mx-4 flex h-[410px] min-h-[350px] w-full min-w-[300px] items-end ${bgColor1} shadow-2xl lg:h-1/2 lg:min-h-[550px] lg:w-2/3 lg:min-w-[820px] lg:max-w-screen-2xl lg:items-center`}
      >
        <PortfolioContent item={props.item} />
        <PortfolioImage item={props.item} />
      </div>
    </div>
  );
}

export default PortfolioItem;
