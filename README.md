<img src="https://github.com/blackcat-007/Kritanj2025/blob/main/public/kritanj_logo.jpeg" width="480">

  <h1>🎉 College Fest Portal - Narula Institute of Technology</h1>

  <p>This is a <strong>Next.js frontend project</strong> built to showcase and manage the college fest events of <strong>Narula Institute of Technology</strong>. Students can explore ongoing events, check rules, get live updates, and enroll via Google Forms directly.</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>📅 Browse all active events in the college fest</li>
    <li>📝 Enroll in events via redirection to official Google Forms</li>
    <li>📜 View event descriptions, rules, and instructions</li>
    <li>🏆 Check the list of winners once events are over</li>
     <li>💞 Well responsiveness to use website in small devices as well  </li>
    <li>🛎️ Receive real-time updates and notices on specific events</li>
  </ul>

  <h2>⚙️ Tech Stack</h2>
  <ul>
    <li><code>Next.js</code> — React framework for SSR and routing</li>
    <li><code>Tailwind CSS</code> — For styling and responsiveness</li>
    <li><code>Vercel Hosting</code> — For deployment</li>
    <li><code>Google Forms</code> — For user event registration</li>
  </ul>

  <h2>🧭 Project Structure</h2>
  <pre>
  ├── app/
  │   ├── page.tsx             ← Homepage with event list
  │   ├── events/[id]/page.tsx ← Event details page
  │   └── layout.tsx           ← Common layout component
  ├── public/                  ← Static assets (logos, icons, etc.)
  ├── styles/                  ← Global styles and tailwind config
  ├── utils/                   ← Helper functions (optional)
  └── README.html              ← This file
  </pre>

  <h2>💡 How It Works</h2>
  <div class="highlight">
    Students visit the site → Explore events → Click on "Enroll" → Redirected to a Google Form → Form submission done!
  </div>

  <h2>🛠️ Setup Instructions</h2>
  <ol>
    <li>Clone the repository: <code>git clone https://github.com/your-repo/college-fest</code></li>
    <li>Navigate into the project folder: <code>cd college-fest</code></li>
    <li>Install dependencies: <code>npm install</code></li>
    <li>Run the dev server: <code>npm run dev</code></li>
    <li>Open <code>http://localhost:3000</code> to view it in the browser</li>
  </ol>

  <h2>🎯 Future Enhancements</h2>
  <ul>
    <li>Add admin dashboard to update events dynamically</li>
    <li>Integrate Firebase/Notion backend for real-time updates</li>
    <li>Add a countdown timer and calendar-based event view</li>
    <li>Push notifications for new updates</li>
  </ul>

  <h2>🧑‍💻 Developed By</h2>
  <p><strong>Team Narula Web Ninjas</strong><br>
  For inquiries, contact: <code>your.email@example.com</code></p>

</body>
</html>

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
