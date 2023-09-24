"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const LoadingIndicator = () => (
  <div className="loader">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
);

const PromptCardList = ({ data, handleTagClick }) => {
  const shadowColors = [
    "#3b82f6",
    "#b91c1c",
    "#15803d",
    "#be123c",
    "#1d4ed8",
    "#eab308",
    "#7c3aed",
  ];
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post, index) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          shadowColor={shadowColors[index % shadowColors.length]}
        />
      ))}
    </div>
  );
};

export default function Feed() {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value.toLowerCase();
    setSearchText(searchTerm);
    const filtered = posts.filter((post) => {
      return (
        post.creator.username.toLowerCase().includes(searchTerm) ||
        post.tag.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
      setFilteredPosts(data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <PromptCardList data={filteredPosts} handleTagClick={() => {}} />
      )}
    </section>
  );
}
