import { TEntryObject } from "./TEntryObject"

export type TAction = {
    type: string,
    payload?: TEntryObject
}