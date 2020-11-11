import { FC } from "react";
import { LinkButton } from "../components/link-button";

const NotFoundPage: FC = () => (
  <div className="flex flex-col flex-grow items-center justify-center">
    <h3>404 &#124; Nothing found</h3>
    <div className="pt-8">
      <LinkButton label="Go to start" to="/" />
    </div>
  </div>
);

export default NotFoundPage;
