import Button from "./Button";

/** Task Header Component
 * @returns Task Header
 */
const Header = ({ title }: any) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="flex flex-row w-full h-20">
      <h1 className="w-4/5 text-4xl font-medium align-middle">{title}</h1>
      <Button color="bg-green-500" text="Add Task" onClick={onClick} />
    </header>
  );
};

export default Header;
