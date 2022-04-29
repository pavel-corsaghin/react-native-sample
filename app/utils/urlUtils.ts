export const getHostnameFromRegex = (url: string) => {
  // run against regex
  const matches = url.match(/^https?:\/\/([^/?#]+)(?:[/?#]|$)/i);
  // extract hostname (will be null if no match is found)
  return matches?.[1];
};

export const getDomainWithoutSubdomain = (url: string) => {
  const urlParts = getHostnameFromRegex(url)?.split('.') ?? [];

  return urlParts
    .slice(0)
    .slice(-(urlParts.length === 4 ? 3 : 2))
    .join('.');
};
