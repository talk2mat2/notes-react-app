import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PostAddIcon from "@material-ui/icons/PostAdd";
import RateReviewIcon from "@material-ui/icons/RateReview";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import StarIcon from "@material-ui/icons/Star";
import NoteIcon from "@material-ui/icons/Note";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import styled from "styled-components";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import InfoIcon from "@material-ui/icons/Info";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch, useSelector } from "react-redux";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Button from "@material-ui/core/Button";
import { LOGINOUTUSER, GETUSERNOTESSUCCESS } from "../../redux/action";
import SettingsIcon from "@material-ui/icons/Settings";
import DraftPage from "./DraftPage";

const Container = styled.div``;
const SideMenu = styled.div`
  height: 100vh;
  background-color: #f1f0f0;
  width: 70px;
  position: fixed;
  left: 0;
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
  }
`;
const NoteEditSection = styled.div`
  min-height: 100vh;
  width: calc(100% - 370px);
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
`;

const NotecardCaontainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;

  box-sizing: border-box;
  transition: all 0.3s ease;
  &:hover {
    background-color: #008080;

    * {
      color: white;
    }
  }
`;
const NoteCard = (props) => {
  const { notes } = props;
  const TextPreview = JSON.parse(notes.rawContent);
  const textprev = TextPreview.blocks[0].text.slice(0, 10);
  return (
    <NotecardCaontainer>
      <div>
        <BigTextnav>{notes.title}</BigTextnav>
        <BigTextnav STYLE={{ fontSize: "14px" }}>{textprev}</BigTextnav>
      </div>
      <IconDivsHeader>
        <AccessAlarmIcon
          fontSize="small"
          size={10}
          style={{ color: "white" }}
        />

        <StarBorderIcon fontSize="small" size={14} style={{ color: "white" }} />

        <InfoIcon fontSize="small" size={14} style={{ color: "white" }} />
        <DeleteIcon fontSize="small" size={14} style={{ color: "white" }} />
      </IconDivsHeader>
      <div></div>
    </NotecardCaontainer>
  );
};

const Dashboard = () => {
  const [UserMenuVisible, setUserMenuVisible] = useState(false);
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

  const GetUserNotes = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/notes/getUserNotes`,

        { headers: { authorization: token } }
      )
      .then((res) => {
        console.log(res.data.notesData);
        dispatch(GETUSERNOTESSUCCESS(res.data.notesData));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data.message);
        }
        console.log(err);
      });
  };

  useEffect(() => {
    GetUserNotes();
  }, []);

  const MapUserNotes = () => {
    return (
      UserNotes &&
      UserNotes.length > 0 &&
      UserNotes.map((note) => {
        return <NoteCard notes={note} key={note._id} />;
      })
    );
  };

  return (
    <MainContainer>
      <SideMenu>
        <Listing>
          <li>
            <Logo src="logo.jpg" />
          </li>
          <li>
            {/* <AddCircleOutlineIcon */}
            <AddCircleOutlineIcon
              color="#008080"
              fontSize="medium"
              // style={{ color: "#008080" }}
            />
          </li>
          <li>
            <PostAddIcon fontSize="medium" />
          </li>
          <li>
            <SearchIcon fontSize="medium" />
          </li>
          <li>
            <RateReviewIcon fontSize="medium" />
          </li>
          <br />
          <br />
          <br />
          <br />
          <li>
            <StarIcon fontSize="medium" />
          </li>
          <li>
            <NoteIcon fontSize="medium" />
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
            <Logo src="logo.jpg" />
          </li>
        </Listing>
        {UserMenuVisible ? (
          <UserMenu>
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
              <p> Explore upgrade options</p>
            </Button>
            <Logo src="logo.jpg" />
            <MidTextnav>{userdata.Email}</MidTextnav>
            <UserListing>
              <li>
                <SettingsIcon fontSize="small" size={12} />
                settings
              </li>
              <li>
                <PowerSettingsNewIcon fontSize="small" size={12} /> lorem
              </li>
              <li>lorem</li>
              <li onClick={handleLogout}>
                <PowerSettingsNewIcon fontSize="small" size={12} />
                logout
              </li>
            </UserListing>
          </UserMenu>
        ) : null}
      </SideMenu>
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

            {MapUserNotes()}
          </Listing>
        </NoteBody>
      </NoteSection>
      <NoteEditSection>
        <EditNoteHeader>
          <IconDivsHeader>
            <AccessAlarmIcon size={20} style={{ color: "grey" }} />

            <StarBorderIcon size={20} style={{ color: "grey" }} />

            <InfoIcon size={20} style={{ color: "grey" }} />
            <DeleteIcon size={20} style={{ color: "grey" }} />
          </IconDivsHeader>
          <IconDivsHeader>
            <AccessAlarmIcon size={20} />
          </IconDivsHeader>
        </EditNoteHeader>
        <DraftPage />
      </NoteEditSection>
    </MainContainer>
  );
};

export default Dashboard;
