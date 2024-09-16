import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Programming Languages
  "c",
  "cplusplus",
  "java",
  "javascript",
  "typescript",
  "python",

  // Web Development
  "react",
  "angular",
  "springboot",
  "tailwindcss",
  "jakarta",

  // Databases & Tools
  "mysql",
  "postgresql",
  "oracle",
  "git",
  "github",
  "visualstudiocode",
  "intellijidea",

  // Software Engineering
  "opencv",
  "opengl",

  // Libraries & Frameworks
  "opencv",
  "opengl",
  "reactjs",
  "angularjs",
  "spring",

  // Other Skills (represented by related icons)
  "stackoverflow", // Problem Solving
  "udemy", // Self-learning

  // Additional relevant icons
  "html5",
  "css3",
  "npm",
  "tailwindcss",
  "redux",
  "aws",
  "adobexd",
];

export function IconCloudDemo() {
  return (
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
        <IconCloud iconSlugs={slugs} />
      </div>
  );
}