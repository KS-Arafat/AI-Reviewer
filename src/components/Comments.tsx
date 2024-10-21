"use client";

import type { InsertFeedbacks } from "@/drizzle/schema";
import type { CommentType } from "@/lib/types";
import { useState } from "react";

const CommentSection = ({
  PID,
  storedComments,
}: {
  PID: number;
  storedComments: CommentType[];
}) => {
  const [comments, setComments] = useState<CommentType[]>(storedComments);
  const [newComment, setNewComment] = useState({ name: "", feedback: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.name.trim() && newComment.feedback.trim()) {
      const timestamp = new Date().toLocaleString();
      const Comment = { ...newComment, id: Date.now(), Date: timestamp };
      const res = await fetch("/api/feedbacks", {
        method: "post",
        body: JSON.stringify({
          feedback: Comment.feedback,
          name: Comment.name,
          Date: Comment.Date,
          ProductID: PID,
        } as InsertFeedbacks),
      });
      if (res.status === 200) setComments([Comment, ...comments]);
      setNewComment({ name: "", feedback: "" });
    }
  };

  return (
    <div className="container z-10 flex min-h-screen flex-col">
      <div className="flex-grow overflow-y-auto p-4 md:p-6">
        <h2 className="mb-4 w-full border-b border-cyan-400 text-2xl font-bold text-sky-600">
          Comments
        </h2>
        <div className="bottom-0 mb-5 rounded-lg border-t bg-white p-4 drop-shadow-lg md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                id="username"
                name="username"
                value={newComment.name}
                onChange={(e) =>
                  setNewComment({ ...newComment, name: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <textarea
                id="comment"
                name="comment"
                value={newComment.feedback}
                onChange={(e) =>
                  setNewComment({ ...newComment, feedback: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Write your comment here"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-sky-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Post Comment
            </button>
          </form>
        </div>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg bg-gray-100 p-4 drop-shadow-md"
            >
              <div className="mb-2 flex items-start justify-between">
                <span className="font-semibold">{comment.name}</span>
                <span className="text-sm text-gray-500">{comment.Date}</span>
              </div>
              <p className="text-gray-700">{comment.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CommentSection;
