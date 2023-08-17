"use client"
import React from 'react';

//my logoes
import NotesIcon from '@mui/icons-material/LightbulbOutlined';
import ReminderIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import ArchiveIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { connect } from "react-redux"



function MenuBar({ open, openDisc, setTypeOfNotes,dispatch }) {
   
    const theme = useTheme();
    const [menuData, setmenuData] = React.useState(false);

    return (
        <Box sx={{ display: 'flex', mr: 3, }} onClick={openDisc}
        >
            <List sx={{ width: open ? 280 : 60, }} className='[90vh]' >
                {/* item1 */}
                <ListItem key={'Notes'} onClick={() => dispatch({ type: "Notes" })} disablePadding sx={{ display: 'block', backgroundColor: !open && ' #ffcc80 ', ml: 1, borderRadius: 100 }} 
                
                    className='hover:rounded-xl hover:bg-orange-200'>
                    <ListItemButton
                        onClick={() => setTypeOfNotes('Notes')}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                ml: open ? 'auto' : 4,
                                justifyContent: 'center',
                            }}
                        >
                            <NotesIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notes' sx={{ opacity: open ? 1 : 0, ml: 4, }} />
                    </ListItemButton>
                </ListItem>
                {/* item2 */}
                <ListItem key={'Reminder'} onClick={() => dispatch({ type: "Reminder" })} disablePadding sx={{ display: 'block', ml: 1, }}
                   
                    className='hover:rounded-xl hover:bg-orange-200'>
                    <ListItemButton
                        onClick={() => setTypeOfNotes('Reminder')}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,

                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                ml: open ? 'auto' : 4,
                                justifyContent: 'center',
                            }}
                        >
                            <ReminderIcon />
                        </ListItemIcon>
                        <ListItemText primary='Reminder' sx={{ opacity: open ? 1 : 0, ml: 4, }} />
                    </ListItemButton>
                </ListItem>
                {/* item3 */}
                <ListItem key={'Edit'} onClick={() => dispatch({ type: "Edit" })} disablePadding sx={{ display: 'block', ml: 1, }}
                    //  onClick={() => { setwriteNote("EditIcon") }}
                    className='hover:rounded-xl hover:bg-orange-200'>
                    <ListItemButton
                        onClick={() => setTypeOfNotes('Edit')}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                ml: open ? 'auto' : 4,
                                justifyContent: 'center',
                            }}
                        >
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit' sx={{ opacity: open ? 1 : 0, ml: 4, }} />
                    </ListItemButton>
                </ListItem>
                {/* item4 */}
                <ListItem key={'Archive'} onClick={() => dispatch({ type: "Archive" })} disablePadding sx={{ display: 'block', ml: 1, }}
                    
                    className='hover:rounded-xl hover:bg-orange-200'>
                    <ListItemButton
                        onClick={() => setTypeOfNotes('Archive')}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                ml: open ? 'auto' : 4,
                                justifyContent: 'center',
                            }}
                        >
                            <ArchiveIcon />
                        </ListItemIcon>
                        <ListItemText primary='Archive' sx={{ opacity: open ? 1 : 0, ml: 4, }} />
                    </ListItemButton>
                </ListItem>
                {/* item5 */}
                <ListItem key={'Trash'} onClick={() => dispatch({ type: "Trash" })} disablePadding sx={{ display: 'block', ml: 1, }}
                    className='hover:rounded-xl hover:bg-orange-200'>
                    <ListItemButton
                        onClick={() => setTypeOfNotes('Trash')}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 1 : 'auto',
                                ml: open ? 'auto' : 4,
                                justifyContent: 'center',
                            }}
                        >            <DeleteIcon />

                        </ListItemIcon>
                        <ListItemText primary='Trash' sx={{ opacity: open ? 1 : 0, ml: 4, }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
}
export default connect()(MenuBar)