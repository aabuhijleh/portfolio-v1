export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t py-6 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center font-mono text-sm text-muted-foreground">
          <span>
            Created by{" "}
            <a
              href="https://github.com/aabuhijleh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline text-emerald-400"
            >
              Abed Abu-Hijleh
            </a>{" "}
            © {currentYear} •{" "}
            <a
              href="https://github.com/aabuhijleh/portfolio-v1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-underline text-emerald-400"
            >
              Source
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
