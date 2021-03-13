import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HomeIcon from "@material-ui/icons/Home";
import styled from "styled-components";
import NoteIcon from "@material-ui/icons/Note";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import PeopleIcon from "@material-ui/icons/People";
import LoyaltyIcon from "@material-ui/icons/Loyalty";

// import Accordion from "@material-ui/core/Accordion";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const SideBarContainer = styled.div`
  height: 900px;
  max-width: 250px;
  flex: 1;
  background-color: #1a1919;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// {
//   /* <Button
// variant="contained"
// color="primary"
// style={{ backgroundColor: "green", width: "200px", height: "50px" }}
// >
// Sign Up Now
// </Button> */
// }

const Input = styled.input`
  height: 30px;
  border-radius: 60px;
  background-color: grey;
  width: 220px;
  margin: 0.3px;
  margin-bottom: 5px;
  border: none;
  &:focus {
    outline: none;
  }
`;

const Listing = styled.ul`
  width: 220px;
`;
const Buttons = styled.button`
  height: 30px;
  border-radius: 60px;
  background-color: green;
  width: 220px;
  margin: 0.3px;
  border: none;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MidText = styled.p`
  color: grey;
  font-size: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const thumbnail = {
  height: "30px",
  width: "30px",
  borderRadius: "30px",
  marginRight: "5px",
};

const Div = styled.div`\


`;
const SideBar = () => {
  return (
    <SideBarContainer>
      <MidText>
        {" "}
        <img src="./wizkid.jpg" style={thumbnail} alt="pic" />
        Microsoft29@yahoo.com <ArrowDropDownIcon size={14} />
      </MidText>
      <Input />
      <Buttons variant="contained" color="primary">
        <AddIcon size={16} color="white" />
        New Note
      </Buttons>
      <Div>
        <Listing>
          <li>
            <MidText>
              <HomeIcon size={16} color="white" style={{ color: "grey" }} />
              Home
            </MidText>
          </li>
          <li>
            <MidText>
              <StarIcon size={16} color="white" style={{ color: "grey" }} />
              Shotcut
            </MidText>

            {/* <Accordion style={{ backgroundColor: "inherit", border: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <MidText>
                  <StarIcon size={16} color="white" style={{ color: "grey" }} />
                  Shotcut
                </MidText>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion> */}
          </li>

          <li>
            <MidText>
              <NoteIcon size={16} color="white" style={{ color: "grey" }} />
              Notes(0)
            </MidText>
          </li>
          <li>
            <MidText>
              <SaveIcon size={16} color="white" style={{ color: "grey" }} />
              Notebooks
            </MidText>
          </li>
          <li>
            <MidText>
              <LoyaltyIcon size={16} color="white" style={{ color: "grey" }} />
              Tags
            </MidText>
          </li>
          <li>
            <MidText>
              <PeopleIcon size={16} color="white" style={{ color: "grey" }} />
              shared with me
            </MidText>
          </li>
          <br />
          <br />
          <li>
            <MidText>
              <DeleteIcon size={16} color="white" style={{ color: "grey" }} />
              Trash
            </MidText>
          </li>
        </Listing>
      </Div>
    </SideBarContainer>
  );
};

export default SideBar;
