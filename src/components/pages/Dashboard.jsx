import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PostAddIcon from "@material-ui/icons/PostAdd";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import StarIcon from "@material-ui/icons/Star";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import Tooltip from "@material-ui/core/Tooltip";
import NoteIcon from "@material-ui/icons/Note";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import styled from "styled-components";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchPage from "./Search";
import { useDispatch, useSelector } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";
import { LOGINOUTUSER, GETUSERNOTESSUCCESS } from "../../redux/action";
import SettingsIcon from "@material-ui/icons/Settings";
import DraftPage from "./DraftPage";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
// import { HistoryOutlined, Search } from "@material-ui/icons";
import NewDraftPage from "./NewDraftPage";
import AlertDialog from "../Dialog";
import NewMeetingDraftPage from "./newMeetingDraftPage";

const Container = styled.div``;
const SideMenu = styled.div`
  height: 100vh;
  background-color: #f1f0f0;
  width: 70px;
  position: fixed;
  z-index: 3;
  left: 0;
  @media (max-width: 1100px) {
    width: 40px;
  }
`;

const UserListing = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;

  flex-direction: column;
  align-items: flex-start;

  width: 98%;
  li {
    font-size: 14px;
    color: grey;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
    &:hover {
      background-color: #008080;
      color: white;
    }
  }
`;
const Listing = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;

  flex-direction: column;
  align-items: center;
  width: 98%;
  li {
    display: flex;

    font-size: 16px;
    color: #008080;
    padding: 10px;
    box-sizing: border-box;
    &:hover {
      background-color: #008080;
      color: white;
    }
    // &:nth-child(1) {
    //   font-size: 20px;
    //   color: grey;
    // }
    // &:nth-child(2) {
    //   font-size: 30px;
    //   color: black;
    //   font-weight: 600;
    //   @media (max-width: 1100px) {
    //     font-size: 30px;
    //   }
    // }
    // &:nth-child(3) {
    //   font-size: 20px;
    //   color: grey;
    //   font-weight: 500;
    //   @media (max-width: 1100px) {
    //     font-size: 20px;
    //   }
    // }
  }

  * {
    cursor: pointer;
  }
`;
const Logo = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  cursor: pointer;
`;
const MainContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NoteSection = styled.div`
  margin-left: 70px;
  height: 100vh;
  width: 300px;
  // background-color: tomato;
  border: 0.2px solid #f1f0f0;
  @media (max-width: 1100px) {
    width: 80px;
    margin-left: 40px;
  }
`;
const NoteEditSection = styled.div`
  min-height: 100vh;
  transition: all 1.5s ease;
  // width: calc(100% - 370px);
  width: 100%;
  margin-left: ${({ NotesectionsVisoble }) =>
    NotesectionsVisoble ? null : "70px"};
  background-color: white;
  @media (max-width: 1100px) {
    width: calc(100% - 150px);
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
const NoteHeader = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  border-bottom: 0.2px solid #f1f0f0;
  height: 100px;
`;
const NoteBody = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 0.2px solid silver;
  height: calc(100vh - 100px);
  border: none;
  overflow: scroll;

  overflow-x: hidden;
`;
const BigTextnav = styled.p`
  font-size: 17px;
  color: grey;
`;
const MidTextnav = styled.p`
  font-size: 14px;
  color: grey;
`;
const UserMenu = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  left: 70px;
  bottom: 4px;
  padding: 5px;

  box-sizing: border-box;
  animation: apper 1.4s ease;
  @keyframes apper {
    from {
      opacity: 0;
    }
    to {
      top: 1;
    }
  }
  @media (max-width: 1100px) {
    width: 200px;
  }
  p {
    font-size: 11px;
    @media (max-width: 1100px) {
      font-size: 9px;
    }
  }
`;

const NotecardCaontainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 6px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;

  p {
    color: grey;
  }
  box-sizing: border-box;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008080;
    padding: 10px;
    * {
      color: white;
    }
  }
`;
const NoteCard = (props) => {
  const {
    notes,
    handdleDetailsnotes,
    handleDeleteNotes,
    handleClickOpen,
  } = props;

  const TextPreview = JSON.parse(notes.rawContent);
  const textprev = TextPreview.blocks[0].text.slice(0, 16);
  const handleDetails = () => {
    handdleDetailsnotes(notes);
  };
  return (
    <NotecardCaontainer style={{ position: "relative" }}>
      <div
        onClick={() => {
          handleDetails();
        }}
        style={{ width: "100%" }}
      >
        <BigTextnav style={{ fontWeight: "550" }}>
          {notes.title.slice(0, 16)}
        </BigTextnav>
        <p style={{ fontSize: "13px" }}>{textprev}....</p>
      </div>
      <IconDivsHeader style={{ position: "absolute", top: 0, right: 0 }}>
        <AccessAlarmIcon
          fontSize="small"
          size={10}
          style={{ color: "white" }}
        />

        <StarBorderIcon fontSize="small" size={14} style={{ color: "white" }} />

        <InfoIcon fontSize="small" size={14} style={{ color: "white" }} />
        <DeleteIcon
          // onClick={handleDeleteNotes.bind(this, notes._id)}
          onClick={handleClickOpen}
          fontSize="small"
          size={14}
          style={{ color: "white" }}
        />
      </IconDivsHeader>
      <div></div>
    </NotecardCaontainer>
  );
};

const Dashboard = (props) => {
  const [UserMenuVisible, setUserMenuVisible] = useState(false);
  const [UserNoteLoading, setUserNoteLoading] = useState(false);
  const [DialogOpen, setDialogOpen] = useState(false);
  const [deleteid, setdeleteid] = useState(null);
  const [NotesectionsVisoble, setNotesectionsVisoble] = useState(true);
  const [CurrentNoteDetails, setCurrentNoteDetails] = useState({
    Component: <></>,
  });
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const token = currentUser && currentUser.token;
  const UserNotes = useSelector((state) => state.notes.userNotes);
  const userdata =
    (currentUser && currentUser.token && currentUser.userdata) || {};

  const handleUserMenuVisible = () => {
    setUserMenuVisible(!UserMenuVisible);
  };
  const handleLogout = () => {
    dispatch(LOGINOUTUSER());
  };

  const handleDeleteNotes = () => {
    const id = deleteid;
    setUserNoteLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/notes/DeleteNote`,
        { noteId: id },

        { headers: { authorization: token } }
      )
      .then((res) => {
        setUserNoteLoading(false);
        console.log(res.data.notesData);
        dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
        setCurrentNoteDetails({
          // ...CurrentNoteDetails,
          Component: <></>,
        });
      })
      .catch((err) => {
        // setUserNoteLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  const GetUserNotes = () => {
    setUserNoteLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/notes/getUserNotes`,

        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data.notesData);
        dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
        setUserNoteLoading(false);
      })
      .catch((err) => {
        setUserNoteLoading(false);
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    GetUserNotes();
  }, []);
  const handdleDetailsnotes = (notes) => {
    setCurrentNoteDetails({
      // ...CurrentNoteDetails,
      Component: (
        <DraftPage
          notes={notes}
          handleClickOpen={handleClickOpen}
          NotesectionsVisoble={NotesectionsVisoble}
          setNotesectionsVisoble={setNotesectionsVisoble}
        />
      ),
    });
  };
  const handleSearchNoteDetails = (note) => {
    handdleDetailsnotes(note);
  };

  const handleSearchPage = () => {
    setNotesectionsVisoble(false);
    setCurrentNoteDetails({
      Component: (
        <SearchPage handleSearchNoteDetails={handleSearchNoteDetails} />
      ),
    });
    // SearchIcon
  };

  const savedSuccess = () => {
    setNotesectionsVisoble(true);
    setCurrentNoteDetails({
      Component: null,
    });
  };
  const handleCancel = () => {
    setNotesectionsVisoble(true);
    setCurrentNoteDetails({
      // ...CurrentNoteDetails,
      Component: null,
    });
  };

  const handdleNewDraftPage = () => {
    setNotesectionsVisoble(false);
    setCurrentNoteDetails({
      // ...CurrentNoteDetails,
      Component: (
        <NewDraftPage savedSuccess={savedSuccess} handleCancel={handleCancel} />
      ),
    });
  };
  const handleNewMeetingNotes = () => {
    setCurrentNoteDetails({
      Component: (
        <NewMeetingDraftPage
          savedSuccess={savedSuccess}
          handleCancel={handleCancel}
        />
      ),
    });
    // NewMeetingDraftPage
  };

  const MapUserNotes = () => {
    return (
      UserNotes &&
      UserNotes.length > 0 &&
      UserNotes.map((note) => {
        return (
          <NoteCard
            notes={note}
            key={note._id}
            handleClickOpen={handleClickOpen.bind(this, note._id)}
            handleDeleteNotes={handleDeleteNotes}
            handdleDetailsnotes={handdleDetailsnotes}
          />
        );
      })
    );
  };

  const handleClickOpen = (id) => {
    setdeleteid(id);

    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <MainContainer>
      <AlertDialog
        handleDeleteNotes={handleDeleteNotes}
        open={DialogOpen}
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
      />
      <SideMenu>
        <Listing>
          <li>
            <Logo src="/logo192.png" />
          </li>
          <li onClick={handdleNewDraftPage}>
            {/* <AddCircleOutlineIcon */}
            <Tooltip title="NEW NOTE">
              <AddCircleOutlineIcon
                color="#008080"
                fontSize="medium"
                // style={{ color: "#008080" }}
              />
            </Tooltip>
          </li>
          <li onClick={() => handleNewMeetingNotes()}>
            <Tooltip title="NEW MEETING NOTES">
              <PostAddIcon fontSize="medium" />
            </Tooltip>
          </li>
          <li onClick={() => handleSearchPage()}>
            <Tooltip title="SEARCH NOTES">
              <SearchIcon fontSize="medium" />
            </Tooltip>
          </li>
          <li>
            <RateReviewIcon fontSize="medium" />
          </li>
          <br />
          <br />
          <br />
          <br />
          <li>
            <Tooltip title="SHORTCUTS">
              <StarIcon fontSize="medium" />
            </Tooltip>
          </li>
          <li onClick={() => setNotesectionsVisoble(true)}>
            <Tooltip title="NOTES">
              <NoteIcon fontSize="medium" />
            </Tooltip>
          </li>
          <li>
            <MenuBookIcon fontSize="medium" />
          </li>
          <li>
            <LocalOfferIcon fontSize="medium" />
          </li>
          <br />
          <li
            onClick={() => {
              handleUserMenuVisible();
            }}
          >
            <Tooltip title="ACCOUNT">
              <Logo src="/logo192.png" />
            </Tooltip>
          </li>
        </Listing>
        {UserMenuVisible ? (
          <UserMenu onMouseLeave={() => setUserMenuVisible(false)}>
            <Button
              variant="contained"
              color="primary"
              style={{
                backgroundColor: "#008080",
                width: "98%",
                height: "30px",
                marginBottom: "10px",
              }}
            >
              <Link to="/plans">
                <p> Explore upgrade options</p>
              </Link>
            </Button>
            <Logo src="logo.jpg" />
            <MidTextnav>{userdata.Email}</MidTextnav>
            <UserListing>
              <li>
                <Link to="/settings">
                  <SettingsIcon
                    fontSize="small"
                    size={12}
                    style={{ marginRight: "3px" }}
                  />
                  settings
                </Link>
              </li>
              <li>
                <SystemUpdateAltIcon
                  fontSize="small"
                  size={12}
                  style={{ marginRight: "3px" }}
                />{" "}
                download Notes App
              </li>

              <li onClick={handleLogout}>
                <PowerSettingsNewIcon
                  fontSize="small"
                  size={12}
                  style={{ marginRight: "3px" }}
                />
                logout
              </li>
            </UserListing>
          </UserMenu>
        ) : null}
      </SideMenu>
      {NotesectionsVisoble ? (
        <NoteSection>
          <NoteHeader>
            <BigTextnav>NOTES</BigTextnav>
            <BigTextnav>{UserNotes && UserNotes.length} notes</BigTextnav>
          </NoteHeader>
          <NoteBody>
            <Listing>
              {/* <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard />
            <NoteCard /> */}

              {UserNoteLoading ? (
                <div style={{ textAlign: "center" }}>
                  <CircularProgress
                    size={40}
                    color="primary"
                    style={{ color: "#008080" }}
                  />
                  <h4>fertching notes.....</h4>{" "}
                </div>
              ) : (
                MapUserNotes()
              )}
            </Listing>
          </NoteBody>
        </NoteSection>
      ) : null}
      <NoteEditSection NotesectionsVisoble={NotesectionsVisoble}>
        {CurrentNoteDetails.Component}
      </NoteEditSection>
    </MainContainer>
  );
};

export default Dashboard;
