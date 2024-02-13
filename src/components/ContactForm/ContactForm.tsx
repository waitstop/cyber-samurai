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
import { PatternFormat } from "react-number-format";
import { isValidPhoneNumber } from "libphonenumber-js";
import emailjs from "@emailjs/browser";
import { useToast } from "@components/ui/use-toast.ts";
import { useState } from "react";
import { RefreshCcw } from "lucide-react";

const ContactForm = () => {
  const schema = z.object({
    name: z.string({ required_error: "Имя не может быть пустым" }),
    phone: z
      .string({ required_error: "Телефон не может быть пустым" })
      .refine((val) => {
        return isValidPhoneNumber(val, "RU");
      }, "Неверный формат телефона"),
    message: z
      .string({ required_error: "Сообщение не может быть пустым" })
      .min(10, "Сообщение должно содержать не менее 10 символов")
      .max(200, "Сообщение должно содержать не более 200 символов"),
    companyName: z.string().optional(),
  });

  const { toast } = useToast();
  const [isLoadingSend, setIsLoadingSend] = useState<boolean>(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: z.infer<typeof schema>) {
    setIsLoadingSend(true);
    emailjs
      .send(
        "service_76k4cb9",
        "template_d8tffy6",
        { ...data },
        { publicKey: "LE5a8UXysFoBM3BkN" },
      )
      .then(() => {
        toast({
          title: "Сообщение отправлено",
        });
        form.reset();
      })
      .catch(() => {
        toast({
          title: "Произошла ошибка",
        });
      })
      .finally(() => {
        setIsLoadingSend(false);
      });
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
                  <PatternFormat
                    className={
                      "w-full rounded-md px-3 py-4 text-black placeholder:text-black/30 focus:outline-none"
                    }
                    placeholder={"Телефон*"}
                    {...field}
                    mask={"_"}
                    format="+7 (###) ###-##-##"
                  />
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
          <Button
            disabled={isLoadingSend}
            className={"mt-3"}
            onClick={form.handleSubmit(onSubmit)}
          >
            {isLoadingSend ? (
              <RefreshCcw className={"animate-spin"} />
            ) : (
              "Отправить"
            )}
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
