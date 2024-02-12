import {CogIcon} from "lucide-react";


const ErrorPage = ({error}: {error: Error}) => {
  return (
    <div className={"bg-zinc-800 h-screen w-screen flex flex-col gap-y-5 justify-center items-center"}>
      <h1 className={"text-white text-3xl font-bold"}>Ошибка</h1>
      <CogIcon className={"h-12 w-12 text-white animate-rotate"}/>
      <span className={"text-white/50"}>{error.message}</span>
    </div>
  );
};

export default ErrorPage;