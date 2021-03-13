import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToRaw, convertFromRaw } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { GETUSERNOTESSUCCESS } from "../../redux/action";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Title = styled.input`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: none;
  color: #008080;
  font-size: 30px;
  background-color: white;
  &:focus {
    outline: none;
  }
`;
const EditNoteHeader = styled.div`
  msx-width: 100px;
  height: 70px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 0.2px solid #f1f0f0;
`;
const IconDivsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  * {
    cursor: pointer;
    margin-left: 10px;
  }
`;

const DraftPage = (props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [title, setTitle] = useState("");
  const token = currentUser && currentUser.token;
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  const onEditorStateChange = (editorState) => {
    setState({
      editorState,
    });
  };

  const HandleSaveNote = () => {
    const contentState = state.editorState.getCurrentContent();
    const rawContent = JSON.stringify(convertToRaw(contentState));
    console.log(rawContent);
    const title = "" || "untitled";
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/notes/saveNotes`,
        { rawContent, title: title },
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
    //dispatch to axios
  };

  //   Then to convert rawContent back to editorState:

  //   import {
  //     convertFromRaw,
  //     EditorState,
  //   } from 'draft-js';

  //   const rawContent = /* get this value from db */;

  //   const editorState = EditorState.createWithContent(blocks);
  const { notes } = props;
  useEffect(() => {
    console.log(notes);
    const contentState = convertFromRaw(JSON.parse(notes.rawContent));
    console.log(contentState);
    const editorState = EditorState.createWithContent(contentState);
    setState({
      editorState,
    });
    setTitle(notes.title);
  }, [notes]);
  return (
    <Container>
      <EditNoteHeader>
        <IconDivsHeader>
          <AccessAlarmIcon size={20} style={{ color: "grey" }} />

          <StarBorderIcon size={20} style={{ color: "grey" }} />

          <InfoIcon size={20} style={{ color: "grey" }} />
          <DeleteIcon size={20} style={{ color: "grey" }} />
        </IconDivsHeader>
        <IconDivsHeader>
          <button
            style={{
              color: "white",
              backgroundColor: "#008080",
              borderRadius: "3px",
            }}
            onClick={() => HandleSaveNote()}
          >
            update
          </button>
          <button
            onClick={() => {
              //   console.log(UserNotes);
            }}
          >
            click me
          </button>
          <AccessAlarmIcon size={20} />
        </IconDivsHeader>
      </EditNoteHeader>
      <Title placeholder="Title of your note" defaultValue={title} />
      <Editor
        editorState={state.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      ;
    </Container>
  );
};

export default DraftPage;
