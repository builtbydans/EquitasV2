import styles from "./blog.module.css";
import { Container } from "@mui/material";

const Blog = () => {
  return (
    <>
      <div className={styles.blogContainer}>
        <Container maxWidth="lg">Blog</Container>
      </div>
    </>
  );
};

export default Blog;
