"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import {
  contactFormSchema,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/schemas";
import { Button } from "@/components/ui/Button";
import {
  Input,
  Textarea,
  Select,
  Label,
  FieldError,
} from "@/components/ui/Input";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const params = useSearchParams();
  const initialService = (() => {
    const v = params.get("service");
    if (
      v === "agents" ||
      v === "consulting" ||
      v === "custom" ||
      v === "training"
    ) {
      return v;
    }
    return "unsure" as const;
  })();

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: initialService,
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(data.error ?? "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-white p-10 text-center">
        <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={28} aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-semibold text-text-primary">
          Thanks — message received
        </h2>
        <p className="mt-3 text-text-secondary">
          We&apos;ve got your message and will be in touch within 1 business
          day.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-white p-8 sm:p-10"
      noValidate
    >
      <h2 className="text-2xl font-semibold text-text-primary">
        Tell us about your project
      </h2>
      <p className="mt-2 text-sm text-text-secondary">
        Fill out the form below and we&apos;ll get back to you within 1
        business day.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>
            Name
          </Label>
          <Input
            id="name"
            autoComplete="name"
            invalid={!!errors.name}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            invalid={!!errors.email}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            invalid={!!errors.phone}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>

        <div>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            autoComplete="organization"
            invalid={!!errors.company}
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="service" required>
            Service interested in
          </Label>
          <Select
            id="service"
            invalid={!!errors.service}
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          <FieldError message={errors.service?.message} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="message" required>
            Message
          </Label>
          <Textarea
            id="message"
            invalid={!!errors.message}
            aria-invalid={!!errors.message}
            placeholder="Tell us a bit about what you're trying to solve…"
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </div>

        {/* Honeypot — hidden from humans */}
        <div
          className="hidden"
          aria-hidden="true"
          style={{ position: "absolute", left: "-10000px" }}
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
      </div>

      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-error/30 bg-error/5 px-4 py-3 text-sm text-error"
        >
          {errorMsg}
        </div>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
