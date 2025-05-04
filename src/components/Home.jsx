import NewCounter from "./NewCounter";
import OldCounter from "./OldCounter";

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h1>Welcome Home Page</h1>
      {/* <NewCounter name="New Counter" />
      <hr /> */}
      <OldCounter name="Old Counter" />
    </div>
  );
}
