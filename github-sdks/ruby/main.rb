require 'octokit'

# Authenticate with a GitHub Personal Access Token
client = Octokit::Client.new(access_token: ENV['GITHUB_TOKEN'])

repo = "btrejos/Github-Examples"
base_branch = "main"
new_branch = "sdks"

#Create a branch
# Get the SHA of the latest commit from the base branch
base_ref = client.ref(repo, "heads/#{base_branch}")
sha = base_ref.object.sha

# Create the new branch
client.create_ref(repo, "heads/#{new_branch}", sha)

puts "Branch '#{new_branch}' created successfully!"

#Delete a branch
=begin
client.delete_ref(repo, "heads/#{new_branch}")

puts "Branch '#{new_branch}' deleted successfully!"
=end