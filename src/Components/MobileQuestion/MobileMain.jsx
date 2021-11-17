import MobHeader from "./MobHeader";
import MobileList from "./MobList";

function Mobiles(){
    return (
        <div>
            <MobHeader header="Mobile Operating System"/>
            <MobileList item="Android"/>
            <MobileList item="Blackberry"/>
            <MobileList item="iPhone"/>
            <MobileList item="Window's Phone"/>
            <MobHeader header="Mobile Manufacturers"/>
            <MobileList item="Samsung"/>
            <MobileList item="HTC"/>
            <MobileList item="Micromax"/>
            <MobileList item="Apple"/>
        </div>
    )
}

export default Mobiles