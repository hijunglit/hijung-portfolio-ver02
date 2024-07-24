import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: false,
})
export const isSelectedAtom = atom({
    key: "isSelected",
    default: false
})