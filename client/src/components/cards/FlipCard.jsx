import useAnimation from "../../hooks/useAnimation"

const FlipCard = ({variant}) => {
    const { top, bottom , display} = useAnimation(variant, 'animate-topcard ontop', 'animate-bottomcard' )

    const time = display + 1
    const less = time === 0 ? 59 : time - 1
    

    return (
        <div className="flex flex-col mobile:p-2 desktop:p-8 mobile:space-y-4 desktop:space-y-8">
          <div className="relative desktop:h-[9.5rem] font-extrabold bg-blackblue card-container text-softred">
            <div className="card-container ontop ">
              <div className="ontop top-card ">
                {less}
              </div>
              <div className="onbottom bottom-card ">{time}</div>
            </div>
            <div className="z-30 card-container ontop">
              <div className={`top-card ${top}`}>{time}</div>
              <div className={`onbottom bottom-card ${bottom}`}>{less}</div>
            </div>
          </div>
          <h2 className="mobile:text-sm desktop:text-md text-grayblue tracking-[.3em] uppercase">
            {variant}
          </h2>
        </div>
        
     );
}
 
export default FlipCard;