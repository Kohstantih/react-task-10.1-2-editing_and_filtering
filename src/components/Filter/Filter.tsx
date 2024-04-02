import { useDispatch, useSelector } from 'react-redux';

import { filtrationListEntries } from '../../redux/actions/actionCreators';

import './Filter.css';

export default function Filter() {
    const filtrationValue = useSelector(state => state.filtrationValue);
    const dispatch = useDispatch();

    const handleChangeInput = (value: string) => dispatch(filtrationListEntries(value));

    return (
        <div className="filter_wrapper">
            <p className="filter_name">Фильтр: </p>
            <input onChange={(e) => handleChangeInput(e.target.value)} value={filtrationValue} type="text" name="filter" className="filter_input"/>
        </div>
    )
}
