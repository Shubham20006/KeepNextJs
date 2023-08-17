import * as React from 'react';
import Box from '@mui/material/Box';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import Popper from '@mui/material/Popper';
import { UpdateColor } from '@/Services/DataServices';

export default function ColorPopper({action,Noteid,setData,updatecolor})  {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const selectColor = async(color) => {
    if(action==="create") {
        setData((prevState)=>({...prevState, color:color}))
    } else if(action==="edit") {
    let data={noteIdList:[Noteid],color:color}
        let response = await UpdateColor(data);
        updatecolor()     
        console.log(response);    
    }
    
  }
  const colors = ["#2ECC71", "#AF7AC5","#ffffff", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71"]

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
    <ColorLensIcon  onClick={handleClick}/>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex",justifyContent:"space-between", alignItems:"center", height:28,width:500 }}>
            {
                colors.map((color)=>(<div onClick={()=>selectColor(color)}  style={{backgroundColor:color, height:25, width : 25, margin: 5, borderRadius:50 }}></div>))
            }
        </Box>
      </Popper>
    </div>
  );
}