import { CogIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <div
      className={
        "flex h-screen w-screen flex-col items-center justify-center gap-y-5 bg-zinc-800"
      }
    >
      <h1 className={"text-3xl font-bold text-white"}>Ошибка</h1>
      <CogIcon className={"h-12 w-12 animate-rotate text-white"} />
      <span className={"text-white/50"}>{error.message}</span>
      <Link className={"text-white underline"} to={"/"}>
        На главную
      </Link>
    </div>
  );
};

export default ErrorPage;
