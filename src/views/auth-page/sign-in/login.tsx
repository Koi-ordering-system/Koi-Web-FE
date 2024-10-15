import { SignIn } from "@clerk/clerk-react";

const Login = () => {
  return (
    <div className="grid h-screen place-content-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
};

export default Login;
