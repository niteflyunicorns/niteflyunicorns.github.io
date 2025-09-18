// researchProjects.js -- list of research projects and corresponding information for the website.
// coder: niteflyunicorns
// last update: 9.18.2025

/*
  id: url-safe id for the project
  name: project title
  bkgd: file path to image used as porfolio card background
  tags: tags for filtering
  skills: skills/knowledge/etc used in the development of the project
  desc: paragraph description of project and process
  pdf: file path to the main pdf document for the research
  repo: link to the repository housing the research (if applicable)
  imgs: list of images for the research project
  ** Note: I may want more flexibility and since there is not that much research, I may build each page out individually for that flexibility.
*/

window.researchProjects = [
    {
        "id": "adapt",
        "name": "Anomaly Detection in Asteroid Patterns and Trends (ADAPT) Pipeline",
        "bkgd": "assets/portfolio/DraugrSystem/eeyo1.webp",
	"tags": [ "all", "computing" ],
        "skills": [ "Python", "Data Processing", "Statistical Analysis", "Unsupervised Machine Learning", "High Performance Computing", "Bash Scripting", "Git & GitHub" ],
        "desc": "",
        "pdf": "",
        "repo": "https://github.com/niteflyunicorns/ADAPT",
        "imgs": []
    },
    {
        "id": "cgt-yamma",
        "name": "Combinatorial Game Theory Analysis of Yamma",
        "bkgd": "assets/portfolio/DraugrSystem/eeyo1.webp",
	"tags": [ "all", "mathematics" ], 
        "skills": [ "Python", "Combinatorial Game Theory", "High Performance Computing", "Bash Scripting", "Git & GitHub" ],
        "desc": "",
        "pdf": "",
        "repo": "",
        "imgs": [
	    "",
        ]
    },
];
