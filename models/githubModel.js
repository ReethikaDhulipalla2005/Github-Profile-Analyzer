import db from "../config/database.js";

export const insertGitHubProfile = async (data) => {
    const query = `
        INSERT INTO github_profiles (
            github_username,
            name,
            public_repository_count,
            followers,
            following,
            public_gists,
            account_creation_date,
            account_age,
            profile_url,
            total_stars,
            total_forks,
            most_starred_repository,
            last_updated_time

        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        data.github_username,
        data.name,
        data.public_repository_count,
        data.followers,
        data.following,
        data.public_gists,
        data.account_creation_date,
        data.account_age,
        data.profile_url,
        data.total_stars,
        data.total_forks,
        data.most_starred_repository,
        data.last_updated_time,
    ];

    const [result] = await db.execute(query, values);
    return result;
};
export const getAllProfiles = async () => {
    const [rows] = await db.execute("SELECT * FROM github_profiles ORDER BY id DESC");
    return rows;
};
export const getProfileByUsername = async (username) => {
    const [rows] = await db.execute("SELECT * FROM github_profiles WHERE github_username = ?",[username]);
    return rows[0];
};