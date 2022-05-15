import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const modalState = atom({
  key: "modalState",
  default: false,
});
