import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../lib/contextLib";
import { onError } from "../lib/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { BsPencilSquare } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";
import image from "./img/OIP.jpg"; 
import "./LandingPage.css";
import styles from "./mystyles.module.css";

export default function PressRelease() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadNotes() {
    return API.get("notes", "/notes");
  }

  function renderNotesList(notes) {
    return (
      <>
        {notes.map(({ noteId, content, createdAt }) => (
          <LinkContainer key={noteId} to={`/notes/${noteId}`}>
            <ListGroup.Item action>
              <span className="font-weight-bold">
                {content.trim().split("\n")[0]}
              </span>
              <br />
              <span className="text-muted">
                Created: {new Date(createdAt).toLocaleString()}
              </span>
            </ListGroup.Item>
          </LinkContainer>
        ))}
      </>
    );
  }
  

  function renderLander() {
    return (
      <div className="Lander" >
          <div style={{fontSize: 28, textAlign: 'center'}} id="welcome">
            Welcome to CHARGEnorth Press Releases!
            <h3>Here is where you will find announcements regarding all of the amazing
                accomplishments of our students!
            </h3>
          </div>
          
             
          <div className={styles.cardmain}> 
          </div>
        </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Notes</h2>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
      </div>
    );
  }



  return (
    <div className="Press Release">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}