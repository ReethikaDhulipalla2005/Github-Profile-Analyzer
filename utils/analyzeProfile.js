const calculateAccountAge = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - createdDate.getFullYear();
    let months = currentDate.getMonth() - createdDate.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    return `${years} Years ${months} Months`;
};

const analyzeGitHubProfile = (user, repos) => {

    let totalStars = 0;
    let totalForks = 0;
    let mostStarredRepo = {name: "", stars: 0};
    const languageCount = {};
    repos.forEach(repo => {
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;
        if (repo.stargazers_count > mostStarredRepo.stars) {
            mostStarredRepo = {name: repo.name, stars: repo.stargazers_count};
        }
        if (repo.language) {
            languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
    });
    return {
        github_username: user.login,
        name: user.name,
        public_repository_count: user.public_repos,
        followers: user.followers,
        following: user.following,
        public_gists: user.public_gists,
        account_creation_date: new Date(user.created_at),
        last_updated_time: new Date(),
        account_age: calculateAccountAge(user.created_at),
        profile_url: user.html_url,
        total_stars: totalStars,
        total_forks: totalForks,
        most_starred_repository: mostStarredRepo.name,
    };
};
export default analyzeGitHubProfile;