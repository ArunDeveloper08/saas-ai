import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
      <p>Dashboard Page (protected) </p>
      {/* <UserButton afterSignOutUrl="/"/> */}
    </>
  );
};
export default DashboardPage;