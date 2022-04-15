
import roomsInfo from '../../RoomsInfo/roomInfo.json';
import CommonFrame from '../CommonFrame/CommonFrame';
import { shuffle } from '../../Hooks/Shuffle';
import './Rooms.css';

const Rooms = () => {
    const shuffleRooms = shuffle(roomsInfo)

    return (
        <div className=' container py-5'>
            <div className='common-conttainer'>
            {
                shuffleRooms.slice(0, 12).map(room => <CommonFrame info={room}></CommonFrame>)
            }
            </div>
            
        </div>
    );
};

export default Rooms;