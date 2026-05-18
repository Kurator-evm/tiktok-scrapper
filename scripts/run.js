// This runs in the Agent's sandbox
export async function run(args) {
  const username = args.username;
  
  if (!username) {
    return "Error: No username provided.";
  }

  // Tell the Gallery to load your index.html into the hidden view
  const result = await agent.executeInWebView('index.html', { username });
  
  return result;
}
