import axios from "axios";
import React, { useState } from "react";
import { AiFillCloseSquare } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useNavigate } from "react-router-dom";

const QuestionButton = ({ setLoading }) => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [questionState, setQuestionState] = useState("");
  const close = <AiFillCloseSquare className="text-2xl text-[#00286b]" />;
  const navigate = useNavigate();
  // console.log(data)

  const postQuestion = async (e) => {
    e.preventDefault();

    if (
      !localStorage.getItem("authToken") ||
      !localStorage.getItem("userName")
    ) {
      window.alert("Please Login or Register to post a question !");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      await axios
        .post(
          "http://localhost:5000/api/forum/postQuestion",
          {
            user: localStorage.getItem("userName"),
            question: questionState,
          },
          config
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          window.alert("Your session has been expired, Please login !");
          navigate("/login");
          localStorage.clear();
        });
      setIsModelOpen(false);
      setLoading(true);
    }
  };
  return (
    <>
      <button
        className="bg-[#00286b] flex items-center  justify-center gap-2 py-3 p-1 rounded-full text-white  h-fit w-[10rem] fixed right-8 bottom-8 sm:bottom-8"
        onClick={() => setIsModelOpen(true)}
      >
        <span className="text-xl text-extrabold">+</span> <span>Question</span>
      </button>
      <Modal
        open={isModelOpen}
        closeIcon={close}
        onClose={() => setIsModelOpen(false)}
        closeOnEsccenter
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
          },
        }}
      >
        <form onSubmit={postQuestion}>
          <div className="h-[500px] w-[700px] flex flex-col justify-around sm:h-[300px] sm:w-[280px] ">
            <h5 className="text-2xl border-b border-1 border-[#6d6d6d]">
              Add Question
            </h5>
            <div className="flex flex-col gap-4 items-center justify-center">
              <RxAvatar className="text-9xl text-[#00286b] sm:text-5xl " />
              <textarea
                onChange={(e) => {
                  setQuestionState(e.target.value);
                }}
                className="mt-2 bg-white w-[100%] p-2 sm:mt-0"
                type="text"
                placeholder="Type your Answer here..."
                maxLength="100"
              />
            </div>
            <div className="flex flex-col gap-5 items-center sm:flex-row sm:gap-3 sm:text-sm">
              <button
                className="w-[50%] bg-[#00286b] rounded-xl  py-2 text-white"
                onClick={() => {
                  setIsModelOpen(false);
                }}
              >
                Add Question
              </button>
              <button
                className="w-[50%] bg-[#00286b] rounded-xl py-2 text-white"
                onClick={() => {
                  setIsModelOpen(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default QuestionButton;
