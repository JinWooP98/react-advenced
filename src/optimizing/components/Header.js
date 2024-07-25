import React, {memo} from "react";
import { log } from '../log';

const Header = () => {
  log('<Header /> rendered!!', 1);

  return (
    <header id="main-header">
      <h1>React Optimizing</h1>
    </header>
  );
};
// memo를 import하거나 React.memo를 사용하면 됨
export default memo(Header);
