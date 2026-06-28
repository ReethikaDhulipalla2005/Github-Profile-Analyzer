import {fetchGitHubUser, fetchGitHubRepos} from "../services/githubService.js";
import {insertGitHubProfile, getAllProfiles, getProfileByUsername} from "../models/githubModel.js";
import analyzeGitHubProfile from "../utils/analyzeProfile.js";

export const analyzeProfile = async (req, res, next) => {
    try {
        const username = req.params.username;
        const user = await fetchGitHubUser(username);
        const repos = await fetchGitHubRepos(username);
        const analysis = analyzeGitHubProfile(user, repos);
        await insertGitHubProfile(analysis);
        res.json({success: true, analysis});
    } catch (error) {
        res.json({success: false, message: error.message});   
    }
};

export const fetchAllProfiles = async (req, res, next) => {
    try {
        const data = await getAllProfiles();
        res.json({success: true, data});
    } catch (error) {
        res.json({success: false, message: error.message});   
    }
};

export const fetchProfile = async (req, res, next) => {

    try {
        const username = req.params.username;
        const data = await getProfileByUsername(username);
        if (!data) {
            return res.json({success: false, message: "Profile not found"});
        }
        res.json({success: true,data});
    } catch (error) {
        res.json({success: false, message: error.message});   
    }
};
