import React, { useState } from "react";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { GETUSERNOTESSUCCESS } from "../../redux/action";
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

const DraftPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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

  //   const contentState = convertFromRaw(JSON.parse(rawContent));

  //   const editorState = EditorState.createWithContent(blocks);

  return (
    <Container>
      <button
        style={{ color: "white", backgroundColor: "#008080" }}
        onClick={() => HandleSaveNote()}
      >
        save
      </button>
      <button
        onClick={() => {
          //   console.log(UserNotes);
        }}
      >
        click me
      </button>
      <Title placeholder="Title" />
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
