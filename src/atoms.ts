import { atom } from "recoil";

export const isDarkAtom = atom({
    key: "isDark",
    default: true,
})
export const isSelectedAtom = atom({
    key: "isSelected",
    default: false
})