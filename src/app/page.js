import { Navbar, Footer } from "@/components";

import Hero from "./hero";
import CoursesCategories from "./courses-categories";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import ImageGalery from "./image-galery";

export default function Campaign() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoursesCategories />
      <Events />
      <Testimonial />
      <StudentsFeedback />
      <TrustedCompany />
      <ImageGalery />
      <Footer />
    </div>
  );
}
