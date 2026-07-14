import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import { learningHub } from "../assets/assets";
import { FiExternalLink } from "react-icons/fi";
import { MdAdd, MdDelete } from "react-icons/md";

// ─── Course Card ───────────────────────────────────────────
const statusStyle = {
  Completed: "text-green-400 bg-green-400/10 border-green-400/30",
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
};

const CourseCard = ({ item }) => (
  <div className="bg-surface border border-surface2 rounded-md p-5 flex flex-col gap-3 hover:border-accent transition-all duration-300">
    {/* Category & Status */}
    <div className="flex items-center justify-between">
      <span className="text-xs font-firaCode text-accent bg-surface2 border border-border px-2 py-1 rounded">
        {item.category}
      </span>
      <span className={`text-xs font-inter px-2 py-1 rounded border ${statusStyle[item.status]}`}>
        {item.status}
      </span>
    </div>

    {/* Title */}
    <h4 className="font-inter font-bold text-base text-text">{item.title}</h4>

    {/* Platform */}
    <p className="text-sm text-text/50 font-inter">{item.platform}</p>

    {/* Certificate Link */}
    {item.certificate && (
      <>
        <a
          href={item.certificate}
          target ="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-accent hover:underline mt-auto"
        >
          <FiExternalLink />
          View Certificate
        </a>
      </>
    )}
  </div>
);

// ─── Notes Section ─────────────────────────────────────────
const Notes = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("learningNotes");
    return saved ? JSON.parse(saved) : [];
  });
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    localStorage.setItem("learningNotes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (!title.trim() && !body.trim()) return;
    const newNote = {
      id: Date.now(),
      title: title.trim() || "Untitled",
      body: body.trim(),
      date: new Date().toLocaleDateString("en-GB"),
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setBody("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="mt-6">
      {/* Add Note */}
      <div className="bg-surface border border-surface2 rounded-md p-5 flex flex-col gap-3 mb-8">
        <input
          type="text"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-surface2 border border-border rounded px-4 py-2 text-text font-inter text-sm outline-none focus:border-accent transition-colors"
        />
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          className="bg-surface2 border border-border rounded px-4 py-2 text-text font-inter text-sm outline-none focus:border-accent transition-colors resize-none"
        />
        <button
          onClick={addNote}
          className="self-end flex items-center gap-2 px-4 py-2 border border-accent text-accent text-sm font-inter rounded hover:bg-accent/10 transition-all duration-200"
        >
          <MdAdd className="text-base" />
          Add Note
        </button>
      </div>

      {/* Notes Grid */}
      {notes.length === 0 ? (
        <p className="text-center text-text/40 font-firaCode text-sm">
          // no notes yet
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-surface border border-surface2 rounded-md p-5 flex flex-col gap-2 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-inter font-bold text-base text-text">
                  {note.title}
                </h4>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-text/30 hover:text-red-400 transition-colors duration-200 shrink-0"
                >
                  <MdDelete className="text-lg" />
                </button>
              </div>
              <p className="text-sm text-text/60 font-inter whitespace-pre-wrap flex-1">
                {note.body}
              </p>
              <span className="text-xs font-firaCode text-text/30 mt-2">
                {note.date}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Page ─────────────────────────────────────────────
const LearningHub = () => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="py-6 lg:py-12 bg-bg">
      <div className="max-w-7xl mx-auto lg:py-12 px-4 pb-12">
        <Title
          subtitle={"what I'm learning"}
          title1={"Learning"}
          title2={"Hub"}
          para={"Courses I've taken, things I've learned, notes I've kept."}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border border-surface2">
        {/* Tabs */}
        <div className="flex gap-4 border-b border-surface2 mb-10">
          {["courses", "notes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-inter font-medium text-sm capitalize transition-all duration-200 border-b-2 -mb-0.5 ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-text/50 hover:text-text"
              }`}
            >
              {tab === "courses" ? "📚 Courses" : "📝 My Notes"}
            </button>
          ))}
        </div>

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningHub.map((item, index) => (
              <CourseCard key={index} item={item} />
            ))}
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && <Notes />}
      </div>
    </div>
  );
};

export default LearningHub;