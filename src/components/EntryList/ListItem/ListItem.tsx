import { useDispatch, useSelector } from 'react-redux';

import { activationEntry, clearActive, removeEntry } from '../../../redux/actions/actionCreators';
import { TEntryObject } from '../../../types/TEntryObject';

import './ListItem.css';

export default function ListItem({ obj }: {obj: TEntryObject}) {
    const { id, text, price } = obj;

    const activeEntry = useSelector((state) => state.activeEntry);
    const dispatch = useDispatch();

    const handleRemove = () => {
        if (activeEntry.id) dispatch(clearActive());
        id && dispatch(removeEntry(id))
    }

    const handleEdit = () => id && text && price && dispatch(activationEntry(id, text, price));

    return (
        <li className="list_item">
            <p className="item_text">{text}</p>
            <p className="item_text">{price}</p>
            <button onClick={() => handleEdit()} type="button" className="btn_edit btn_item">edit</button>
            <button onClick={() => handleRemove()} type="button" className="btn_edit btn_item">del</button>
        </li>
    )
}
