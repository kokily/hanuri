import { Contact } from "./contact";
import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="bg-purple-25">
      <Contact />
      <NavBar />
    </header>
  );
}
