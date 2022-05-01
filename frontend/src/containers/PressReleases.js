import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../lib/contextLib";
import { onError } from "../lib/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";
import "./LandingPage.css";
import styles from "./mystyles.module.css";
import lightBulb from "./img/LBElectric.jpg"
import daab from "./img/Daab.jpg"


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
            <div>
              <h3>Here is where you will find announcements regarding all of the amazing
                accomplishments of our students!
              </h3>
            </div>
            <main class="mt-4 mb-5" >
            <div class="container" >
              <div class="row" >
                <div class="col-md-8 mb-4" className={styles.bigBlogContainer}>
                  <section class="border-bottom mb-4">
                    <img src={lightBulb}
                      class="img-fluid shadow-2-strong rounded-5 mb-4" alt="lightbulb" />

                    <div class="row align-items-center mb-4">
                      <div class="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                        <img src={daab} class="rounded-5 shadow-1-strong me-2"
                          height="35" alt="" loading="lazy" />
                        <span className={styles.blogHeadingText}> Published <u>04.24.2022</u> by</span>
                        <a className={styles.blogHeadingText} href="/" class="text-light"> Mr Daab</a>
                      </div>

                      <div class="col-lg-6 text-center text-lg-end">
                        <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundcolor: "#3b5998"}}>
                          <i class="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundcolor: "#55acee"}}>
                          <i class="fab fa-twitter"></i>
                        </button>
                        <button type="button" class="btn btn-primary px-3 me-1" style={{backgroundcolor: "#0082ca"}}>
                          <i class="fab fa-linkedin"></i>
                        </button>
                        
                      </div>
                    </div>
                  </section>
                  <section>
                    <p className={styles.blogText}>
                      This is the first post to the CHARGEnorth press release page! We are excited about
                      our new website and we hope to share lots of awesome accomplishments on this page. Our
                      students are constantly achieving new heights both in and outside of school. Our goal
                      is to share all of their amazing accomplishments here on our press release page. If you 
                      have a piece of news to share, please email one of the CHARGE teachers so we can post it 
                      here and brag on our amazing students!
                    </p>

                  </section>
                  <section class="text-center border-top border-bottom py-4 mb-4">
                      <p><strong style={{color: "white"}}>Share with your friends (coming soon):</strong></p>

                      <button type="button" class="btn btn-primary me-1" style={{backgroundcolor: "#3b5998"}}>
                        <i class="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" class="btn btn-primary me-1" style={{backgroundcolor: "#55acee"}}>
                        <i class="fab fa-twitter"></i>
                      </button>
                      <button type="button" class="btn btn-primary me-1" style={{backgroundcolor: "#0082ca"}}>
                        <i class="fab fa-linkedin"></i>
                      </button>
                      
                  </section>
                  </div>
                  </div>
                  </div>
                  </main>
           
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