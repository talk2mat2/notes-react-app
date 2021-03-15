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
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { DraftRawContent } from "./draftRawContent";

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

const NewMeetingDraftPage = (props) => {
  const { notes, handleClickOpen, setNotesectionsVisoble } = props;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [titles, setTitles] = useState("");
  const [saving, setSaving] = useState(false);
  const token = currentUser && currentUser.token;
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });
  const draftrawContent = null;

  const onEditorStateChange = (editorState) => {
    setState({
      editorState,
    });
  };

  const HandleSaveNote = () => {
    setSaving(true);
    const contentState = state.editorState.getCurrentContent();

    const rawContent = JSON.stringify(convertToRaw(contentState));
    console.log(rawContent);
    const title = titles || "untitled";
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/notes/saveNotes`,
        { rawContent, title: title },
        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data);
        setSaving(false);
        props.savedSuccess();
        dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
      })
      .catch((err) => {
        setSaving(false);
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
  // const { notes } = props;
  // useEffect(() => {
  //   console.log(notes);
  //   const contentState = convertFromRaw(JSON.parse(notes.rawContent));
  //   console.log(contentState);
  //   const editorState = EditorState.createWithContent(contentState);
  //   setState({
  //     editorState,
  //   });
  //   setTitle(notes.title);
  // }, [notes]);

  useEffect(() => {
    const contentState = convertFromRaw(DraftRawContent);
    console.log(contentState);
    const editorState = EditorState.createWithContent(contentState);
    setState({
      editorState,
    });
  }, []);
  return (
    <Container>
      <EditNoteHeader>
        <IconDivsHeader>
          <AccessAlarmIcon size={20} style={{ color: "grey" }} />

          <StarBorderIcon size={20} style={{ color: "grey" }} />

          <InfoIcon size={20} style={{ color: "grey" }} />
          {/* <DeleteIcon
            onClick={props.handleClickOpen}
            size={20}
            style={{ color: "grey" }}
          /> */}
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
            save
          </button>
          <button
            style={{
              color: "white",
              backgroundColor: "#008080",
              borderRadius: "3px",
            }}
            onClick={() => {
              props.savedSuccess();
            }}
          >
            cancel
          </button>
          <AccessAlarmIcon size={20} />
        </IconDivsHeader>
      </EditNoteHeader>
      {saving ? (
        <div style={{ textAlign: "center", alignSelf: "center" }}>
          {" "}
          <CircularProgress
            size={80}
            color="primary"
            style={{ color: "#008080" }}
          />
          <p>saving...</p>
        </div>
      ) : (
        <>
          <Title
            placeholder="Title of your note"
            value={titles}
            onChange={(e) => {
              setTitles(e.target.value);
            }}
          />
          <Editor
            editorState={state.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </>
      )}
      ;
    </Container>
  );
};

export default NewMeetingDraftPage;
