import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@components/ui/form.tsx";
import { Input } from "@components/ui/input.tsx";
import { Textarea } from "@components/ui/textarea.tsx";
import { Button } from "@components/ui/button.tsx";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const schema = z.object({
    name: z.string({ required_error: "Имя не может быть пустым" }),
    phone: z.string({ required_error: "Телефон не может быть пустым" }),
    message: z
      .string({ required_error: "Сообщение не может быть пустым" })
      .min(10, "Сообщение должно содержать не менее 10 символов")
      .max(200, "Сообщение должно содержать не более 200 символов"),
    companyName: z.string().optional(),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <h2 className={"mb-6 text-xl uppercase"}>Форма связи</h2>
      <form
        className={"relative overflow-hidden"}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className={"md:w-2/3 [&>*]:mb-3"}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Имя*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Телефон*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Кратко опишите задачу*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Компания" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className={"mt-3"} onClick={form.handleSubmit(onSubmit)}>
            Отправить
          </Button>
          <p className={"mt-3 w-56 pb-10 text-xs leading-none opacity-50"}>
            Нажимая кнопку вы соглашаетесь на&nbsp;
            <Link
              className={"underline underline-offset-[5px]"}
              to={"/documents/privacy"}
            >
              обработку персональных данных
            </Link>
          </p>
        </div>
        <img
          className={
            "absolute -bottom-20 -right-0 block w-28 md:right-0 md:top-0 md:w-64"
          }
          src="images/maskot_1.png"
          alt="maskot"
        />
      </form>
    </Form>
  );
};

export default ContactForm;
