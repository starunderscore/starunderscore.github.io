import React from "react";
import { graphql } from "gatsby";
import Header from "../components/FrontSite/Header";
import Footer from "../components/FrontSite/Footer";
import "../pages/styles.css";
import StudyDeskLayout from "../components/StudyDeskLayout/StudyDeskLayout";

const MarkdownTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <StudyDeskLayout>
      <main
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        {post?.frontmatter?.title && (
          <Header
            title={post.frontmatter.title}
          />
        )}
        <article
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Footer />
      </main>
    </StudyDeskLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default MarkdownTemplate;
