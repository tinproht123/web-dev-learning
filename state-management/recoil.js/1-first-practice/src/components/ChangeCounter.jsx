import { selector, useRecoilState, useRecoilValue } from "recoil";
import { countState } from "./Counter";

const countTimesTwoState = selector({
  key: "countTimesTwoState",
  get: ({ get }) => {
    const count = get(countState);
    return count * 2;
  },
});

const ChangeCounter = () => {
  const [count, setCount] = useRecoilState(countState);
  const countTimesTwo = useRecoilValue(countTimesTwoState);

  return (
    <div>
      <br />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div>
        <br />
        Count Times Two: {countTimesTwo}
      </div>
    </div>
  );
};

export default ChangeCounter;
