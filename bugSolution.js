```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello World!</div>
  );
}
```

**Possible Solutions (investigate and apply the most appropriate one):**

1. **Verify Next.js Version:** Ensure you're using the latest stable version of Next.js 15.  Run `npx next version` to check. Update if necessary.
2. **Clear Cache:** Clear your browser cache and try again.
3. **Restart Development Server:**  Restart the development server after making any changes to your project.
4. **Check Routing Configuration:**  Thoroughly examine your application's routing configuration for any potential conflicts or errors. This might involve looking at the `app` directory structure. 
5. **Check for Conflicting Middleware:**  Middleware might be inadvertently interfering with routing. Verify no middleware is causing redirect problems.
6. **Create a Minimal Reproducible Example:** If the problem persists, create a minimal Next.js project and try to reproduce the issue. This will help isolate the problem and provide a concise report to the Next.js team.