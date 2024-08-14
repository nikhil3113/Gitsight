import { atom } from "recoil";

export const username = atom({
    key: "username",
    default: "nikhil3113"
})

export const userProfileAtom = atom({
    key: "userProfileAtom",
    default: {
        name: "",
        login: "",
        location: "",
        repository: "",
        bio: "",
        follower: "",
        following: "",
        twitter: "",
        email: "",
        avatar:"",
        blog: ""
    }
});

export const loadingAtom = atom({
    key: "loadingAtom",
    default: true
}) 