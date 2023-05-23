import { FC } from 'react';
import { Channel } from '../models';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import Chip from './shared/Chip';

interface IProps {
    channel: Channel
}

const ChannelCard: FC<IProps> = ({ channel }) => {
    return <div className="card flex">
        <div className="grow flex flex-wrap items-start p-3 gap-x-5">
            <h3 className="text-gray text-lg w-full">{ channel.name }</h3>
            <Chip title="Description" value={channel.description || ""} />
            <Chip title="Created" value={DateTime.fromISO(channel.createdAt).toLocaleString(DateTime.DATE_MED)} />
        </div>
        <div className="shadow-0 p-5 flex justify-center items-center">
            <Link to={channel.id} className="card__link">
            </Link>
        </div>
    </div>
}

export default ChannelCard;