import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

const LayoutV1 = ({ children }: any) => {
  return (
    <main
      id="main-content"
      className="relative flex flex-col w-full min-h-screen overflow-x-clip"
    >
      <TopBar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default LayoutV1;
