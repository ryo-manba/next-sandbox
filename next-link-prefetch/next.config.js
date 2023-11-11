/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/example",
      has: [
        {
          type: "query",
          key: "page",
          value: "/a",
        },
      ],
      destination: "/a",
    },
    {
      source: "/example",
      has: [
        {
          type: "query",
          key: "page",
          value: "/b",
        },
      ],
      destination: "/b",
    },
    {
      source: "/example",
      has: [
        {
          type: "query",
          key: "page",
          value: "/c",
        },
      ],
      destination: "/c",
    },
  ],
};

module.exports = nextConfig;
