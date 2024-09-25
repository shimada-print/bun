const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const environmentInfo = `
Bun version: ${Bun.version}
Platform: ${Bun.env.BUN_PLATFORM}
Architecture: ${Bun.env.BUN_ARCH}
Node version compatibility: ${Bun.env.NODE_VERSION}
    `;

    return new Response(environmentInfo);
  },
});

console.log(`Listening on localhost:${server.port}`);
