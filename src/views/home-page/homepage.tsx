import { ModeToggle } from "@/components/common";
import { useUsers } from "@/hooks";
import { useUserStore } from "@/stores/user-store";
import { useEffect } from "react";

const HomePage = () => {
  const { users, setUsers } = useUserStore();
  const { data, error, isLoading } = useUsers();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  console.log(users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl">Home Page</h1>
      <p>Welcome </p>
      <ModeToggle />
    </div>
  );
};

export default HomePage;
