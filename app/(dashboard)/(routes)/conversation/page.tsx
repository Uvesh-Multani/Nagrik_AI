"use client";

import { useState } from "react";
import axios from "axios";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Heading } from "@/components/heading";
import { MessagesSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fromSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";
import { Empty } from "@/components/empty";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";
import ReactMarkdown from 'react-markdown';

// Define your ChatCompletionContentPart type if it's not already defined
type ChatCompletionContentPart = {
  type: string; // Define the type properly based on the structure of your data
  text?: string; // Assuming parts may have text
};

const renderContent = (content: string | ChatCompletionContentPart[] | null | undefined): string => {
  if (!content) {
    return ""; // Return an empty string if content is null or undefined
  }

  if (Array.isArray(content)) {
    return content.map((part) => {
      if (typeof part === "string") {
        return part;
      } else if (part.type === "text" && part.text) {
        return part.text;
      }
      // Handle other part types if necessary
      return "";
    }).join(""); // Join parts into a single string
  }

  return content;
};

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof fromSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessagesSquare}
        iconColor="text-[#8B4513]"
        bgColor="text-[#8B4513]"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Ask anything you want..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-4 rounded-lg",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div className="text-sm">
                  {message.role === "user" ? (
                    <p className="text-base mt-1 ml-2 leading-relaxed">{renderContent(message.content)}</p>
                  ) : (
                    <ReactMarkdown className="prose prose-sm p-2 ">
                      {renderContent(message.content) as string}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
