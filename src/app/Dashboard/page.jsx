"use client";
import React from "react";
import { Box } from "@mui/material";
import Header1 from "../Component/Header";
import MenuBar from "../Component/MenuBar";
import TakeNoteOne from "../Component/TakeNoteOne";
import TakeNoteTwo from "../Component/TakeNoteTwo";
import NotesCol from "../Component/TakeNoteThree/NotesCol";
import NotesRow from "../Component/TakeNoteThree/NotesRow";
import { getNotes } from "@/Services/DataServices";

function Dashboard() {
  // open side bar
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };
  // change notes grid to col
  const [gridFlex, setgridFlex] = React.useState(true);
  const ChangeFlex = () => {
    setgridFlex(!gridFlex);
  };
  // change TakeNoteOne to TakeNoteTwo
  const [onetwo, setonetwo] = React.useState(true);
  const openDesc = () => {
    setonetwo(!onetwo);
  };
  const closeDesc = () => {
    setonetwo(!onetwo);
  };

  //fetch data
  const [info, setInfo] = React.useState([]);

  const [typeOfNotes, setTypeOfNotes] = React.useState("Notes");

  const getData = async () => {
    let response = await getNotes();
    let arr = response.data.data.data;

    if (typeOfNotes === "Notes") {
      let newArr = arr.filter(
        (note) => note.isArchived === false && note.isDeleted === false
      );
      setInfo(newArr);
    } else if (typeOfNotes === "Archive") {
      let newArr = arr.filter(
        (note) => note.isArchived === true && note.isDeleted === false
      );
      setInfo(newArr);
    } else if (typeOfNotes === "Trash") {
      let newArr = arr.filter(
        (note) => note.isArchived === false && note.isDeleted === true
      );
      setInfo(newArr);
    }
  };
  const updatecolor = () => {
    getData();
  };

  React.useEffect(() => {
    getData();
  }, [typeOfNotes]);
  return (
    <div className="relative">
      <Header1 handleDrawer={handleDrawer} ChangeFlex={ChangeFlex} />
      <MenuBar
        handleDrawer={handleDrawer}
        open={open}
        setTypeOfNotes={setTypeOfNotes}
      />
      <Box
        className="absolute top-20 right-0 flex flex-col"
        sx={{ width: open ? ["76vw"] : ["80vw"] }}
      >
        {onetwo ? (
          <TakeNoteOne openDesc={openDesc} />
        ) : (
          <TakeNoteTwo closeDesc={closeDesc} getData={getData} />
        )}
        {gridFlex ? (
          info.map((notes) => (
            <div>
              <NotesCol
                notes={notes}
                updatecolor={updatecolor}
                getData={getData}
              />
            </div>
          ))
        ) : (
          <div className="w-full flex gap-4 flex-wrap ">
            {info.map((notes) => (
              <div>
                <NotesRow
                  notes={notes}
                  updatecolor={updatecolor}
                  getData={getData}
                />
              </div>
            ))}
          </div>
        )}
      </Box>
    </div>
  );
}

export default Dashboard;
