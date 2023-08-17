"use client"

const initialState = {
    title: "Notes"
}

const NavReducer = (state = initialState, action) => {

    switch (action?.type) {
        case "Notes": return { title: "Notes" }
        case "Reminder": return { title: "Reminder" }
        case "Edit": return { title: "Edit" }
        case "Archive": return { title: "Archive" }
        case "Trash": return { title: "Trash" }

        default: return state
    }
}

export default NavReducer