import React, { useState, useEffect } from "react";

import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import { Editor } from "react-draft-wysiwyg";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToRaw, convertFromRaw } from "draft-js";
import { useDispatch, useSelector } from "react-redux";
import { GETUSERNOTESSUCCESS } from "../../redux/action";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import axios from "axios";
import { RestoreOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Input = styled.input`
  //   border: none;
  //   height: 70px;
  //   width: 80%;
  //   font-size: 50px;
  //   color: silver;
  padding: 10px;
  box-sizing: border-box;
  width: 70%;
  height: 40px;
  border: none;
  border-bottom: 1px solid silver;
  color: #008080;
  font-size: 30px;
  background-color: white;
  &:focus {
    outline: none;
    border-bottom: 1px solid #008080;
  }
`;
const BigText = styled.p`
  font-size: 40px;
  color: grey;
  font-weight: 600;
  @media (max-width: 1100px) {
    font-size: 20px;
  }
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

const SerchListing = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;

  li {
    cursor: pointer;
  }
`;

const SearchPage = (props) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchText, setSearchText] = useState();
  const [searchResults, setsearchResults] = useState([]);
  const { handleSearchNoteDetails } = props;

  const token = currentUser && currentUser.token;
  //   const HandleUpdateNote = () => {
  //     setSaving(true);
  //     const contentState = state.editorState.getCurrentContent();
  //     const rawContent = JSON.stringify(convertToRaw(contentState));
  //     console.log(rawContent);
  //     // const title = tit;
  //     axios
  //       .post(
  //         `${process.env.REACT_APP_API_URL}/notes/UpdateNotes`,
  //         { rawContent, title: title, noteId: notes._id },
  //         { headers: { authorization: token } }
  //       )
  //       .then((res) => {
  //         setSaving(false);
  //         console.log(res.data);
  //         dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
  //       })
  //       .catch((err) => {
  //         setSaving(false);
  //         if (err.response) {
  //           console.log(err.response.data.message);
  //         }
  //         console.log(err);
  //       });
  //     //dispatch to axios
  //   };
  const NoteCard = (props) => {
    const { notes, handleSearchNoteDetails } = props;
    const TextPreview = JSON.parse(notes.rawContent);
    const textprev = TextPreview.blocks[0].text.slice(0, 200);
    return (
      <li
        onClick={handleSearchNoteDetails.bind(this, notes)}
        style={{ width: "100%" }}
      >
        <h4>{notes.title}</h4>
        <small>{textprev}</small>
      </li>
    );
  };
  const handleSearch = async (value) => {
    setSearchText(value);
    console.log("search axios called");
    // SearchNotes
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/notes/SearchNotes?search=${value}`,

        { headers: { authorization: token } }
      )
      .then((res) => {
        let resultArray = res.data.searchResults;
        console.log(resultArray);
        setsearchResults(resultArray);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  const mapSearchResults = () => {
    return (
      searchResults &&
      searchResults.length > 0 &&
      searchResults.map((note) => {
        return (
          <NoteCard
            notes={note}
            key={note._id}
            handleSearchNoteDetails={handleSearchNoteDetails}
            //   handleClickOpen={handleClickOpen.bind(this, note._id)}
            //   handleDeleteNotes={handleDeleteNotes}
            //   handdleDetailsnotes={handdleDetailsnotes}
          />
        );
      })
    );
  };

  return (
    <Container>
      <BigText>Search Notes</BigText>
      <SearchIcon
        fontSize="large"
        style={{ color: "grey", fontSize: "70px" }}
      />
      <Input
        value={searchText}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />

      <SerchListing>{mapSearchResults()}</SerchListing>
    </Container>
  );
};

export default SearchPage;
