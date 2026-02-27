import ResourceCard from "./components/ResourceCard"

function App() {
  return (
    <>
      <h1 className="title">Software Development Resources</h1>
      <div className="card-container">
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          title="React Docs"
          description="The official documentation for the React library."
          link="https://react.dev"
          alt="React Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/d/d2/MDN_Web_Docs_logo.svg"
          title="MDN Web Docs"
          description="The definitive resource for HTML, CSS, and JavaScript."
          link="https://developer.mozilla.org"
          alt="MDN Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          title="Tailwind CSS"
          description="A utility-first CSS framework for rapid UI development."
          link="https://tailwindcss.com"
          alt="Tailwind Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          title="TypeScript"
          description="JavaScript with syntax for types for better tooling."
          link="https://www.typescriptlang.org"
          alt="TypeScript Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          title="GitHub"
          description="The world's leading AI-powered developer platform."
          link="https://github.com"
          alt="GitHub Logo"
        />
        <ResourceCard
          image="https://pbs.twimg.com/media/EtZYf1FWYAMmtHj.jpg"
          title="Vite"
          description="The next generation of frontend build tooling."
          link="https://vitejs.dev"
          alt="Vite Logo"
        />
        <ResourceCard
          image="https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png"
          title="Framer Motion"
          description="A production-ready motion library for React."
          link="https://www.framer.com/motion/"
          alt="Framer Motion Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
          title="Stack Overflow"
          description="The largest community for developers to learn and share."
          link="https://stackoverflow.com"
          alt="Stack Overflow Logo"
        />
        <ResourceCard
          image="https://www.netlify.com/assets/logos/full/large/lightmode/logo-netlify-large-fullcolor-lightmode.svg"
          title="Netlify"
          description="The platform for modern web development and hosting."
          link="https://www.netlify.com"
          alt="Netlify Logo"
        />
        <ResourceCard
          image="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
          title="VS Code"
          description="Code editing. Redefined. Free and open source."
          link="https://code.visualstudio.com"
          alt="VS Code Logo"
        />
      </div>
    </>
  )
}

export default App