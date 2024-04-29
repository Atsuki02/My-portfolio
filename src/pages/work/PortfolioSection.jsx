import { portfolioItems } from "../../Portfolio";
import PortfolioItem from "./PortfolioItem";

function PortfolioSection() {
  return (
    <section id='portfolio' className='bg-slate-100 pb-16 lg:pb-32'>
      {portfolioItems.map((item) => {
        return <PortfolioItem item={item} key={item.index} />;
      })}
    </section>
  );
}

export default PortfolioSection;
