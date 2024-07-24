import { Footer, FooterDivider } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsDribbble,
  BsTwitterX,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
      <Footer container className="border border-t-8 border-teal-800">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            <div className="mt-5">
              <Link to="/" className="text-4xl font-bold dark:text-white">
                <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-700 rounded-lg text-white">
                  Rishabh Blogs
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-7 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.100jsprojects.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    100 JS Projects
                  </Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rishabh's Blog
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Follow US" />
                <Footer.LinkGroup col>
                  <Footer.Link
                    href="https://www.github.com/rushabhmalwade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>

              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link
                    href="/about"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms and Conditons
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Rishabh's Blog"
              year={new Date().getFullYear()}
            />
            <div className="flex flex-row gap-6 mt-4 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />

              <Footer.Icon href="#" icon={BsGithub} />

              <Footer.Icon href="#" icon={BsDribbble} />

              <Footer.Icon href="#" icon={BsTwitterX} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default FooterComponent;
