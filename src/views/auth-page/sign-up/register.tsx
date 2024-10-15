import { SignUp } from "@clerk/clerk-react";

const Register = () => {
  return (
    <div className="grid h-screen place-content-center">
      <SignUp signInUrl="/sign-in" />
    </div>
  );
};

export default Register;
