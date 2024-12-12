"use client";

import { sendData, TsendData } from "@/lib/types";
import styles from "./ContactForm.module.css";
import PixelBtn from "./utils/PixelBtn";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TsendData>({ resolver: zodResolver(sendData) });
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(data: TsendData) {
    const URL = process.env.NEXT_PUBLIC_URL as string;
    try {
      const res = await fetch(`${URL}/api/send`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        setError("message", { message: "ups! coś poszło nie tak" });
        throw new Error(res.statusText);
      } else {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 2000);
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.input_container}>
          <div className={styles.input_wrapper}>
            <input {...register("name")} type="text" placeholder="Imię" />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className={styles.input_wrapper}>
            <input {...register("email")} type="text" placeholder="Email" />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}
          </div>
        </div>
        <textarea
          {...register("message")}
          placeholder="Treść wiadomości"
        ></textarea>
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        <PixelBtn
          disabled={isSubmitting}
          onClick={() => {
            window.dataLayer?.push({ event: "submitted" });
          }}
        >
          Wyślij
        </PixelBtn>
      </form>
      <AnimatePresence>
        {isSuccess && (
          <motion.p
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "130%" }}
            className={styles.success}
          >
            wysłano!
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
