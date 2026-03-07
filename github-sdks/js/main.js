const { Octokit } = require("octokit");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

async function createBranch() {
  const owner = "btrejos";
  const repo = "Github-Examples";
  const baseBranch = "main";
  const newBranch = "sdksjs";

  // Get the current SHA of main from GitHub
  const baseRef = await octokit.request(
    "GET /repos/{owner}/{repo}/git/ref/{ref}",
    {
      owner,
      repo,
      ref: `heads/${baseBranch}`,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  );

  const sha = baseRef.data.object.sha;

  // Create the new branch from that SHA
  await octokit.request(
    "POST /repos/{owner}/{repo}/git/refs",
    {
      owner,
      repo,
      ref: `refs/heads/${newBranch}`,
      sha,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28"
      }
    }
  );

  console.log(`Branch ${newBranch} created from ${baseBranch}`);
}

createBranch().catch(console.error);