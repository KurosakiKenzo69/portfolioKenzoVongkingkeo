import React, { useEffect, useState } from "react";
import axios from "axios";
const dotenv = require("dotenv");

function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/KurosakiKenzo69/repos",
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        console.log(response.data);
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-200">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-100">
        My projects
      </h2>
      {repos.length === 0 ? (
        <p className="text-center text-gray-400">Loading...</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-green-600 hover:underline"
              >
                {repo.name}
              </a>
              <p className="text-gray-400 mt-2 text-sm">
                {repo.description || "No description available"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  
}

export default GitHubRepos;
