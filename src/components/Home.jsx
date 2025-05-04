import NewCounter from "./NewCounter";
import OldCounter from "./OldCounter";
import CounterClick from "./CounterClick";
import OldCounterHover from "./OldCounterHover";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Welcome Home Page</h1>
      {/* <NewCounter name="New Counter" />
      <hr /> */}
      {/* <OldCounter name="Old Counter" /> */}
      <CounterClick name="Click Counter" />
      <hr />
      <OldCounterHover name="Hover Counter" />
    </div>
  );
}
