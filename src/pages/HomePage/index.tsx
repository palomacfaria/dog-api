import { Header } from "../../components/Header";
import  {Dashboard}  from "../../components/Dashboard";
import { AboutUsInfo } from "../../components/aboutUsInfo";
import { OursAnimalsCards } from "../../components/OursAnimalsCards";
import { OurStoreCards } from "../../components/OurStoreCards";
import { Contact } from "../../components/Contact";
import Footer from "../../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <AboutUsInfo />
      <OursAnimalsCards />
      <OurStoreCards />
      <Contact/>
      <Footer />
    </>
  );
};
