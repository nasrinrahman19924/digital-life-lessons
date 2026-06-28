"use client";

import { useState } from "react";

import {
  Card,
  Button,
  Link,
  TextField,
  Label,
  InputGroup,
  Input,
} from "@heroui/react";

import { At, ShieldKeyhole, Eye, EyeSlash } from "@gravity-ui/icons";

import { authClient, signIn } from "@/lib/auth-client";

import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

export default function SigninPage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const { error } = await signIn.email({
        email,

        password,

        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message);

        return;
      }

      toast.success("Login Success");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
const handleGoogleSignin = async () => {
  await authClient.signIn.social({
    provider: "google",
      callbackURL: "/",
  });
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <Card className="w-full max-w-md p-6 shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p>Sign in to continue</p>
        </div>

        <form onSubmit={handleSignin} className="space-y-5">
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Email Address
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <At className="text-zinc-400 pointer-events-none" size={16} />
              <Input
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
            </InputGroup>
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            name="password"
            className="flex flex-col gap-1.5"
          >
            <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Password
            </Label>
            <InputGroup className="flex items-center gap-2 border border-zinc-200 dark:border-zinc-800 rounded-xl px-3 bg-zinc-50 dark:bg-zinc-900 focus-within:border-primary transition-colors">
              <ShieldKeyhole
                className="text-zinc-400 pointer-events-none"
                size={16}
              />
              <Input
                type={isVisible ? "text" : "password"}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent py-2 text-sm outline-none border-none text-zinc-900 dark:text-zinc-100"
              />
              <button
                className="focus:outline-none text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? <EyeSlash size={18} /> : <Eye size={18} />}
              </button>
            </InputGroup>
          </TextField>

          <Button
            type="submit"
            isLoading={isLoading}
            color="primary"
            className="w-full bg-purple-800 font-bold text-white"
          >
            Sign In
          </Button>

          <Button
            type="button"
            variant="bordered"
            className="w-full bg-purple-800 text-white items-center font-bold"
            onClick={handleGoogleSignin}>
          Continue With Google</Button>

          <div className="text-center">
            Don't have an account?
            <Link className={'text-blue-700'} href="/auth/signup">Signup</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
