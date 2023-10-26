import Nav from "./components/sections/nav";
import Hero from "./components/sections/hero";
import Footer from "./components/sections/footer";
import { Container } from "@mui/material";
import Blog from "./components/sections/blog";

export default function Home() {
  return (
    <>
      <Container maxWidth="lg">
        <Nav />
        <Hero />
      </Container>
      <Blog />
      <Footer />
    </>
  );
}
