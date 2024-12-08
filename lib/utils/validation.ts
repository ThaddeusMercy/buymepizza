export const validateUsername = (username: string, currentUsername?: string): { isValid: boolean; error?: string } => {
  // If username hasn't changed, it's valid
  if (username === currentUsername) {
    return { isValid: true };
  }

  // Convert to lowercase
  username = username.toLowerCase();

  // Check length
  if (username.length < 4) {
    return { isValid: false, error: 'Username must be at least 4 characters long' };
  }
  if (username.length > 10) {
    return { isValid: false, error: 'Username must be no more than 10 characters long' };
  }

  // Check for alphanumeric characters only
  if (!/^[a-z0-9]+$/.test(username)) {
    return { isValid: false, error: 'Username can only contain letters and numbers' };
  }

  return { isValid: true };
};