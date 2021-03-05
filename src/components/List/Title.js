import React, { useEffect, useState,useContext } from "react";
import { Typography, InputBase } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StoreApi from './../../utils/storeApi';

const useStyle = makeStyles((theme) =>({
    root: {
        width:'300px',
        backgroundColor:'#EBECF0',
        marginLeft:theme.spacing(1),
    },
    edittableTitle:{
       flexGrow:1,
       fontsize:'1.2rem',
       fontWeight:'bold'
    },
    edittableTitleContainer:{
        marginLeft:theme.spacing(1),
        display: 'flex',
    },
    input:{
        margin:theme.spacing(1),
        '&:focus':{
            background:'#ddd'
        }
    }
}))
function Title({title,listId}) {
  const [open, setOpen] = useState(false);
  const [newTitle,setNewTitle] = useState(title);
  const {updateListTitle}=useContext(StoreApi);
  const classes=useStyle();
  const handleOnChange =(e)=>{
    setNewTitle(e.target.value);
  };
  const handleOnBlur=()=>{
    updateListTitle(newTitle,listId)
    setOpen(!open);
  };
  return (
    <div>
      {open ? (
        <div>
          <InputBase 
          onChange={handleOnChange} 
          autoFocus 
          onBlur={handleOnBlur} 
          fullWidth value={newTitle} 
          inputProps={{className:classes.input,}} 
          />
        </div>
      ) : (
        <div className={classes.edittableTitleContainer}>
          <Typography className={classes.edittableTitle} onClick={()=>setOpen(!open)}>{newTitle}</Typography>
            <MoreHorizIcon/>
        </div>
      )}
    </div>
  );
}

export default Title;
