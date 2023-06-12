import React from 'react';
import "./Docs.css" ;
import {Link } from 'react-router-dom'; 

const Docs = () => {
    return (
      <div>
        <nav id="main-nav">
          <h3>
            <a href="https://www.freecodecamp.org/" target="_blank">
              <Link to="/">
                {" "}
                <button> FCC-DOCS </button>{" "}
              </Link>
            </a>
          </h3>
          <section>
            <a href="#" className="nav-anchor active">
              Docs
            </a>
            <a
              href="https://www.freecodecamp.org/forum/"
              target="_blank"
              className="nav-anchor"
            >
              Forum
            </a>
            <a
              href="https://github.com/spaceofmiah"
              target="_blank"
              className="nav-anchor"
            >
              Git
            </a>
          </section>
        </nav>
        <main id="main-doc">
          {/*
           *
           *  Documentation sidebar
           *
           */}
          <aside id="doc-sidebar">
            <nav id="navbar">
              <header>Official Docs</header>
              <a href="#Basic_HTML_&_HTML5" className="h5 nav-link">
                Basic HTML &amp; HTML5
              </a>
              <a href="#basic-html5" className="link">
                Introduction to basic HTML &amp; HTML5
              </a>
              <a href="#hello-element" className="link">
                Show hello to HTML element
              </a>
              <a href="#inform-with-paragraph" className="link">
                Inform with the paragraph element
              </a>
              <a href="#Basic_CSS" className="h5 nav-link">
                Basic CSS
              </a>
              <a href="#introduction-to-css" className="link">
                Introduction to CSS
              </a>
              <a href="#css-selector" className="link">
                Style element with CSS selector
              </a>
              <a href="#font-family">Set the font family of element</a>
              <a href="#Applied_Visual_Design" className="h5 nav-link">
                Applied Visual Design
              </a>
              <a href="#bold-with-strong" className="link">
                use strong tag to bold text
              </a>
              <a href="#em-italicize" className="link">
                Italicize with em tag
              </a>
              <a href="#u-underline" className="link">
                Use u tag to underline text
              </a>
              <a href="#Applied_Accessibility" className="h5 nav-link">
                Applied Accessibility
              </a>
              <a href="#alt-left-blank" className="link">
                When ALT prop should be left blank
              </a>
              <a href="#link-navigable" className="link">
                Navigable link with Access keys
              </a>
              <a href="#data-picker" className="link">
                Accessible date picker
              </a>
              <a href="#Responsive_Web_Design" className="h5 nav-link">
                Responsive Web Design
              </a>
              <a href="#responsive-img" className="link">
                Make an image responsive
              </a>
              <a href="#media-queries" className="link">
                using media queries
              </a>
              <a href="#typography" className="link">
                typography
              </a>
            </nav>
          </aside>
          <div id="filler" />
          {/*
           *
           *  Documentation section
           *
           */}
          <aside id="doc-section">
            <header id="disclaimer">
             
                {" "}
                You can learn Programming on{" "}
                
            </header>
            {/*      */}
            {/*      
    Basic HTML & HTML 5 SECTION CONTENT
*/}
            {/*      */}
            <section className="main-section" id="Basic_HTML_&_HTML5">
              <header>Basic HTML &amp; HTML5</header>
              <article>
                <header id="basic-html5">
                  <h5>Introduction to basic HTML &amp; HTML5</h5>
                </header>
                <p>
                  Visual Design in web development is a broad topic. It combines
                  typography, color theory, graphics, animation, and page layout
                  to help deliver a site's message.
                </p>
              </article>
              <article>
                <header id="hello-element">
                  <h5>Show hello to HTML element</h5>
                </header>
                <p>
                  The definition of good design is a well-discussed subject,
                  with many books on the theme. At a basic level, most web
                  content provides a user with information.
                </p>
              </article>
              <article>
                <header id="inform-with-paragraph">
                  <h5>Inform with the paragraph element</h5>
                </header>
                <p>
                  The visual design of the page can influence its presentation
                  and a user's experience. In web development, HTML
                </p>
                <code></code>
                <code></code>
                <code></code>
                <code></code>
                <code></code>
                <code></code>
              </article>
            </section>
            {/*      */}
            {/*      
    Basic CSS CONTENT
*/}
            {/*      */}
            <section className="main-section" id="Basic_CSS">
              <header>Basic CSS</header>
              <article>
                <header id="introduction-to-css">
                  <h5>Introduction to CSS</h5>
                </header>
                <p>
                  Cascading Style Sheets (CSS) tell the browser how to display
                  the text and other content that you write in HTML.Note
                </p>
              </article>
              <article>
                <header id="css-selector">
                  <h5>Style element with CSS selector</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
              <article>
                <header id="font-family">
                  <h5>Set the font family of element</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
            </section>
            {/*      */}
            {/*      
    Applied Visual Design Content
*/}
            {/*      */}
            <section className="main-section" id="Applied_Visual_Design">
              <header>Applied Visual Design</header>
              <article>
                <header id="bold-with-strong">
                  <h5>Use strong tag to bold text</h5>
                </header>
                <p>
                  Cascading Style Sheets (CSS) tell the browser how to display
                  the text and other content that you write in HTML.Note
                </p>
              </article>
              <article>
                <header id="em-italicize">
                  <h5>Italicize with em tag</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
              <article>
                <header id="u-underline">
                  <h5>
                    Underline with{" "}
                    <strong>
                      <em>u</em>
                    </strong>{" "}
                    tag
                  </h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
            </section>
            {/*      */}
            {/*      
    APPLIED ACCESSIBILITY
*/}
            {/*      */}
            <section className="main-section" id="Applied_Accessibility">
              <header>Applied Accessibility</header>
              <article>
                <header id="alt-left-blank">
                  <h5>
                    Where{" "}
                    <strong>
                      <em>ALT</em>
                    </strong>{" "}
                    prop should be left blank
                  </h5>
                </header>
                <p>
                  Cascading Style Sheets (CSS) tell the browser how to display
                  the text and other content that you write in HTML.Note
                </p>
              </article>
              <article>
                <header id="link-navigable">
                  <h5>Navigable link with Access keys</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
              <article>
                <header id="data-picker">
                  <h5>
                    Accessible date picker
                    <strong>
                      <em>u</em>
                    </strong>{" "}
                    tag
                  </h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
            </section>
            {/*      */}
            {/*      
    RESPONSIVE WEB DESIGN CONTENT
*/}
            {/*      */}
            <section className="main-section" id="Responsive_Web_Design">
              <header>Responsive Web Design</header>
              <article>
                <header id="responsive-img">
                  <h5>Make image responsive</h5>
                </header>
                <p>
                  Cascading Style Sheets (CSS) tell the browser how to display
                  the text and other content that you write in HTML.Note
                </p>
              </article>
              <article>
                <header id="media-queries">
                  <h5>Using media queries</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
              <article>
                <header id="typography">
                  <h5>Typography</h5>
                </header>
                <p>
                  There are three main ways to apply CSS styling. You can apply
                  inline styles directly to HTML elements with the style
                  attribute.
                </p>
              </article>
              <li />
              <li />
              <li />
              <li />
              <li />
            </section>
          </aside>
        </main>
        {/* partial */}
      </div>
    );
}

export default Docs;
