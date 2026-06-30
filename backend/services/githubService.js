import axios from "axios";

const githubApi = axios.create({
    baseURL: "https://api.github.com/users",
    headers: {
        "User-Agent": "github-profile-analyzer",
        "Accept": "application/vnd.github+json"
    },
    timeout: 10000
});

export const fetchGitHubUser = async (username) => {
    const response = await githubApi.get(`/${username}`);
    return response.data;
};

export const fetchGitHubRepos = async (username) => {
    const response = await githubApi.get(`/${username}/repos`, {params: {per_page: 100}});
    return response.data;
};