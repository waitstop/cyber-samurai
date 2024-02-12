type Props = {
  title: string;
  description: string;
  subtitle: string;
  subTasks?: string[];
  tasks: string[];
  image: string;
};
const WhatWeCan = ({
  title,
  description,
  subtitle,
  subTasks,
  tasks,
  image,
}: Props) => {
  return (
    <div className={"flex w-full flex-col gap-x-5 md:flex-row"}>
      <div
        className={
          "h-64 w-full overflow-hidden rounded-t-xl md:h-auto md:w-1/2 md:rounded-xl"
        }
      >
        <img
          className={"h-full w-full object-cover"}
          src={image}
          alt="cover_img"
        />
      </div>
      <div
        className={
          "w-full rounded-b-xl bg-zinc-800 p-4 prose-headings:uppercase prose-h1:text-2xl prose-h2:text-lg prose-p:text-blue-200 md:w-1/2 md:rounded-xl md:p-10 md:prose-h1:text-4xl"
        }
      >
        <h1 className={"mb-5 text-purple-500"}>{title}</h1>
        <p>{description}</p>
        {subTasks && (
          <ul>
            {subTasks.map((task, item) => (
              <li
                className={
                  "flex before:mr-2 before:mt-2.5 before:inline before:aspect-square before:h-1.5 before:w-1.5 before:rounded-full before:bg-purple-500"
                }
                key={item}
              >
                <p>{task}</p>
              </li>
            ))}
          </ul>
        )}
        <h2 className={"my-2.5"}>{subtitle}</h2>
        <ul>
          {tasks.map((task, item) => (
            <li
              className={
                "flex before:mr-2 before:mt-2.5 before:inline before:aspect-square before:h-1.5 before:w-1.5 before:rounded-full before:bg-purple-500"
              }
              key={item}
            >
              <p>{task}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatWeCan;
