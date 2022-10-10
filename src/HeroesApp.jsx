import { Navbar } from "./heroes/components/Navbar";
import { AppRouter } from "./router/AppRouter";

export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};
