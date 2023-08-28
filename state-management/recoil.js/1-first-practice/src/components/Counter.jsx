import { atom, useRecoilState } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <div>
      Count: {count} <br />
    </div>
  );
};

export default Counter;
