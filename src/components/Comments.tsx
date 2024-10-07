"use client";

import { useState } from "react";

interface Comment {
  id: number;
  username: string;
  content: string;
  timestamp: string;
}

const initialComments: Comment[] = [
  {
    id: 1,
    username: "Alice",
    content: "Great post! Really enjoyed reading it.",
    timestamp: "2023-06-15 10:30 AM",
  },
  {
    id: 2,
    username: "Bob",
    content: "I have a question about the third point. Can you elaborate?",
    timestamp: "2023-06-15 11:45 AM",
  },
  {
    id: 3,
    username: "Charlie",
    content: "This is exactly what I was looking for. Thanks for sharing!",
    timestamp: "2023-06-15 02:15 PM",
  },
];

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState({ username: "", content: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.username.trim() && newComment.content.trim()) {
      const timestamp = new Date().toLocaleString();
      setComments([{ ...newComment, id: Date.now(), timestamp }, ...comments]);
      setNewComment({ username: "", content: "" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
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
                value={newComment.username}
                onChange={(e) =>
                  setNewComment({ ...newComment, username: e.target.value })
                }
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <textarea
                id="comment"
                value={newComment.content}
                onChange={(e) =>
                  setNewComment({ ...newComment, content: e.target.value })
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
                <span className="font-semibold">{comment.username}</span>
                <span className="text-sm text-gray-500">
                  {comment.timestamp}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Comments;
