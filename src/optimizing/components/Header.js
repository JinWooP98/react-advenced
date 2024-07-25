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
// memo는 스냅샷을 비교하여 변경된 사항이 없으면 리렌더링을 방지함
// 다만 모든 곳에 memo를 걸어주면 스냅샷을 비교를 하나하나 다 해야해서 성능에 문제가 될 수 있음
// export default memo(Header);
export default (Header);
