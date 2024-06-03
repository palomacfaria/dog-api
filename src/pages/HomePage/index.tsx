import { AboutUsInfo } from "../../components/aboutUsInfo";
import { OursAnimalsCards } from "../../components/OursAnimalsCards";
import { OurStoreCards } from "../../components/OurStoreCards";
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";
import { Contact } from "../../components/Contact";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <AboutUsInfo />
      <OursAnimalsCards />
      <OurStoreCards />
      <Contact/>
    </>
  );
};
