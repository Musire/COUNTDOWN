import { GrFacebook as Facebook, GrPinterest as Pinterest, GrInstagram as Instagram  } from "react-icons/gr";

const Background = () => {
    return ( 
        <div className="background-stars" >
            <div className="background-hills">
                <div className="w-40 spaced">
                    <Facebook className="mobile:h-8 mobile:w-8 desktop:w-7 desktop:h-7 fill-grayblue" />
                    <Pinterest className="mobile:w-8 mobile:h-8 desktop:w-7 desktop:h-7 fill-grayblue" />
                    <Instagram className="mobile:w-8 mobile:h-8 desktop:w-7 desktop:h-7 fill-grayblue" />
                </div>
            </div>
        </div>
     );
}
 
export default Background;