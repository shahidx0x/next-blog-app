"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { MessageCircle, Minus, Send } from "lucide-react";
import React, { useState } from "react";
import { Uploader } from "rsuite";
import "react-chat-elements/dist/main.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageList, Input as ChatInput } from "react-chat-elements";
import { useForm, SubmitHandler } from "react-hook-form";
import { runChat } from "@/lib/gemini";

const WritePost = () => {
  const [chatDataSource, setChatDataSource] = useState<any>([
    {
      position: "left",
      type: "text",
      title: "Gemini AI",
      text: "Hello Shahid i can help you with your blogs",
    },
  ]);
  const [inputCatcher, setInputCatcher] = useState();
  const [showChat, setShowChat] = useState<boolean>(false);
  const [components, setComponents] = useState<any>([]);
  const [responseLoading, setResponseLoading] = useState<boolean>(true);
  const [errors, setErrors] = useState<any>();
  const {
    register,
    handleSubmit,
    unregister,
    formState: {},
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const chatHandler = async () => {
    setChatDataSource((prev: any) => [
      ...prev,
      {
        position: "right",
        type: "text",
        title: "Shahid",
        text: `${inputCatcher}`,
      },
    ]);
    setResponseLoading(false);
    try {
      const giminiResponse = await runChat(inputCatcher as any);
      if (giminiResponse) {
        setResponseLoading(true);
        setChatDataSource((prev: any) => [
          ...prev,
          {
            position: "left",
            type: "text",
            title: "Gimini AI",
            text: `${giminiResponse}`,
          },
        ]);
      }
    } catch (error) {
      setResponseLoading(true);
      console.log(error);
    }
  };
  const addSectionComponent = () => {
    setComponents([
      ...components,
      <div key={components.length}>
        <Input
          placeholder="Write Section Headings"
          className={cn("p-5 h-20 font-medium text-xl")}
          {...register(`${components.length}_section_title`)}
        ></Input>
        <Textarea
          maxLength={800}
          placeholder="section paragraph"
          className={cn("mt-5 border-none h-80 focus:ring-0")}
          {...register(`${components.length}_section_paragraph`)}
        ></Textarea>
      </div>,
    ]);
  };

  const removeSection = (indexToRemove: any) => {
    setComponents(
      components.filter(
        (component: any, index: number) => index !== indexToRemove
      )
    );
    const removedFieldName = `${indexToRemove}_section_title`;
    const removedParagraphName = `${indexToRemove}_section_paragraph`;
    unregister(removedFieldName);
    unregister(removedParagraphName);
  };
  return (
    <div className="max-w-[1600px] mx-auto mt-24 border h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        <ScrollArea className="w-full  h-[80vh] rounded-md">
          <div className=" w-full p-10">
            <Uploader
              multiple={false}
              action="//jsonplaceholder.typicode.com/posts/"
              draggable
            >
              <div
                style={{
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span>Click or Drag the header image</span>
              </div>
            </Uploader>
            <div>
              <Input
                placeholder="Title"
                className={cn("p-5 h-20 font-medium text-xl mt-3")}
                {...register("post_title")}
              ></Input>

              <Textarea
                maxLength={800}
                placeholder="paragraph"
                className={cn("mt-5 border-none h-80 focus:ring-0 text-xl")}
                {...register("post_paragraph")}
              ></Textarea>
            </div>

            {components.map((component: any, index: number) => (
              <div key={index}>
                {component}
                <Button
                  variant={"destructive"}
                  className="mt-3 mb-3"
                  onClick={() => removeSection(index)}
                >
                  remove section
                </Button>
              </div>
            ))}
            <div className="flex gap-2 pt-5">
              <Button type="button" onClick={addSectionComponent}>
                Section
              </Button>
              <Button>Code(coming soon)</Button>
              <Button>Image(coming soon)</Button>
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </ScrollArea>
      </form>
      <Button
        onClick={() => {
          setShowChat((prev) => !prev);
        }}
        className="fixed right-6 bottom-16"
      >
        <MessageCircle /> AI CHAT
      </Button>
      {showChat && (
        <>
          <div className="fixed bottom-28 right-7 border-2 h-[75vh]  lg:h-[80vh] w-[55vh]  lg:w-[60vh] rounded-xl bg-gray-200/30 backdrop-blur-md ">
            <h2
              className={
                responseLoading ? "hidden" : "text-center font-medium pt-3 "
              }
            >
              Gemini thinking. Please wait ...
            </h2>
            <ScrollArea className="h-[60vh] lg:h-[70vh] p-5">
              <MessageList
                className="your-class"
                lockable={true}
                toBottomHeight="100px"
                referance={null}
                dataSource={chatDataSource}
              />
            </ScrollArea>
            <div className="pl-2 pr-2 rounded-lg">
              <ChatInput
                className="rounded-lg"
                maxHeight={100}
                placeholder="Type here..."
                multiline={true}
                rightButtons={
                  <Button onClick={() => chatHandler()}>
                    <Send />
                  </Button>
                }
                onChange={(e: any) => setInputCatcher(e.target.value)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WritePost;
