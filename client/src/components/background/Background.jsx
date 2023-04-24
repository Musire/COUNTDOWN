import { GrFacebook as Facebook, GrPinterest as Pinterest, GrInstagram as Instagram  } from "react-icons/gr";

const Background = () => {
    const linkStyle = 'mobile:w-8 mobile:h-8 desktop:w-7 desktop:h-7 fill-grayblue hover:fill-softred easy-transition'
    
    return ( 
        <div className="background-stars" >
            <div className="background-hills">
                <div className="z-50 w-40 spaced">
                    <Facebook className={linkStyle} />
                    <Pinterest className={linkStyle} />
                    <Instagram className={linkStyle} />
                </div>
            </div>
        </div>
     );
}
 
export default Background;