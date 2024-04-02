import { useSelector } from "react-redux";

import ListItem from "./ListItem/ListItem";

import { TEntryObject } from "../../types/TEntryObject";
import './EntryList.css';

export default function EntryList() {
    const entryList = useSelector((state) => state.entryList);
    const filtrationValue = useSelector((state) => state.filtrationValue);

    return (
        <ul className="entry_list">
            {!filtrationValue && entryList.map((item: TEntryObject) => <ListItem key={item.id} obj={item} />)}
            {filtrationValue && entryList
                .filter((i: TEntryObject) => i.text && i.text.search(filtrationValue) >= 0)
                .map((item: TEntryObject) => <ListItem key={item.id} obj={item} />)}
        </ul>
        
    )
}
