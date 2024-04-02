import { useDispatch, useSelector } from 'react-redux';

import { addEntry, changeActivePrice, changeActiveText, clearActive, editEntry } from '../../redux/actions/actionCreators';

import './CreateEntry.css';

export default function CreateEntry() {
    const activeEntry = useSelector((state) => state.activeEntry);
    const dispatch = useDispatch();

    const handleChangeText = (text: string) => dispatch(changeActiveText(text));
    const handleChangePrice = (price: string) => dispatch(changeActivePrice(price));
    const handleCansel = () => dispatch(clearActive());

    const handleAddEntry = (text: string, price: string) => {
        if (!activeEntry.id) dispatch(addEntry(text, price));
        else dispatch(editEntry(activeEntry.id, activeEntry.text, activeEntry.price));

        dispatch(clearActive());
    };

    return (
        <div className="create_box">
            <input onChange={(e) => handleChangeText(e.target.value)} name="text" value={activeEntry.text} type="text" className="enter-value"/>
            <input onChange={(e) => handleChangePrice(e.target.value)} name="number" value={activeEntry.price} type="number" className="enter-value"/>
            <button onClick={() => handleAddEntry(activeEntry.text, activeEntry.price)} type="button" className="btn_save">SAVE</button>
            <button onClick={() => handleCansel()} type="button" className="btn_cancel">CANCEL</button>
        </div>
    )
}
